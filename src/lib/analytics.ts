export const analytics = {
  track: (event: string, payload?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.info('[analytics]', event, payload ?? {});
    }
  }
};
