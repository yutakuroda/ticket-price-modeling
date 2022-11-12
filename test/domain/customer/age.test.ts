import { Age } from "domain/customer";

describe("Age", () => {
  describe("new", () => {
    test("0未満の数字が与えられた場合、エラーになる", () => {
      expect(() => new Age(-1)).toThrowError("年齢が不正です");
    });

    test("201以上の数字が与えられた場合、エラーになる", () => {
      expect(() => new Age(201)).toThrowError("年齢が不正です");
    });

    test("0以上200以下の数字が与えられた場合、エラーにならない", () => {
      expect(new Age(0)).toBeInstanceOf(Age);
      expect(new Age(200)).toBeInstanceOf(Age);
    });
  });
});
