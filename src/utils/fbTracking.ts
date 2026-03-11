/**
 * Utility to send events to both Meta Pixel (browser) and Conversion API (server)
 */
export const trackEvent = async (eventName: string, userData = {}, customData = {}) => {
  // 1. Track via Browser Pixel (if available)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData);
  }

  // 2. Track via Conversion API (Server-side)
  try {
    const response = await fetch('/api/fb-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData,
        customData,
      }),
    });
    
    if (!response.ok) {
      console.warn('CAPI event tracking failed');
    }
  } catch (error) {
    console.error('Error tracking CAPI event:', error);
  }
};
