export function wrapWithTryCatch<T extends any[]>(
    service: string,
    fn: (...args: T) => Promise<any>
  ) {
    return async (...args: T) => {
      try {
        return await fn(...args);
      } catch (error) {
        console.error(
          `An error occurred while shortening the URL with ${service}:`,
          error
        );
        throw error;
      }
    };
  }
