export function getErrorMessage(error: unknown) {
  // @ts-ignore
  return error?.message || String(error);
}