export function handleError(serviceName: string, error: any): never {
  console.error(
    `An error occurred while shortening the URL with ${serviceName}:`,
    error
  );
  throw error;
}
