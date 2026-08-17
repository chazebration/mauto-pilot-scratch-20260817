import { describe, expect, it } from "vitest";
import { greet } from "../src/greet.js";

describe("greet", () => {
  it("greets a name", () => {
    expect(greet("Mauto")).toBe("Hello, Mauto!");
  });
});
