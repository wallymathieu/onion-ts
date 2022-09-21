import { describe, expect, it } from "vitest";
import * as Domain from "../1_domain";

describe("domain", () => {
  describe("given two positive integers", () => {
    const first = 1;
    const second = 2;

    describe("when called", () => {
      it("returns the sum of them", () => {
        expect(Domain.add(first, second)).toEqual(3);
      });
    });
  });
});
