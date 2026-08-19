import { describe, expect, it } from "vitest";
import { slugify } from "../src/slugify.js";

describe("slugify", () => {
  it("converts strings into URL-safe slugs", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
    expect(slugify("  Multiple   Spaces  ")).toBe("multiple-spaces");
    expect(slugify("already-a-slug")).toBe("already-a-slug");
    expect(slugify("Trailing punctuation!!!")).toBe("trailing-punctuation");
    expect(slugify("MiXeD CaSe 123")).toBe("mixed-case-123");
    expect(slugify("!!!")).toBe("");
    expect(slugify("")).toBe("");
  });
});
