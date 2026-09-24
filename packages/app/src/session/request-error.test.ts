import { describe, expect, test } from "bun:test"
import { describeRequestError } from "./request-error"

describe("describeRequestError", () => {
  test("uses the message of an Error instance", () => {
    expect(describeRequestError(new Error("boom"))).toBe("boom")
  })

  test("reads the message off a plain error payload", () => {
    expect(describeRequestError({ message: "Session is busy: ses_123", sessionID: "ses_123" })).toBe(
      "Session is busy: ses_123",
    )
  })

  test("falls back to String for objects without a message", () => {
    expect(describeRequestError({ sessionID: "ses_123" })).toBe("[object Object]")
    expect(describeRequestError("plain")).toBe("plain")
  })
})