import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Facebook Conversion API Proxy
  app.post("/api/fb-event", async (req, res) => {
    const accessToken = process.env.FB_ACCESS_TOKEN;
    const pixelId = process.env.FB_PIXEL_ID;

    if (!accessToken || !pixelId) {
      console.error("FB_ACCESS_TOKEN or FB_PIXEL_ID not set");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const { eventName, eventId, userData, customData } = req.body;

    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                event_id: eventId,
                user_data: {
                  client_ip_address: req.ip,
                  client_user_agent: req.headers["user-agent"],
                  ...userData,
                },
                custom_data: customData,
              },
            ],
          }),
        }
      );

      const result = await response.json();
      res.json(result);
    } catch (error) {
      console.error("Error sending FB CAPI event:", error);
      res.status(500).json({ error: "Failed to send event" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
