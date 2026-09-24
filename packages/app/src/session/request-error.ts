/**
 * Renders a failed request for a toast. The generated client throws the parsed
 * response body as a plain object for declared error statuses, so the useful
 * server message (for example "Session is busy: ses_...") must be read off the
 * payload instead of stringifying the whole object.
 */
export function describeRequestError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === "object" && error !== null && "message" in error) {
    return String((error as { readonly message: unknown }).message)
  }
  return String(error)
}