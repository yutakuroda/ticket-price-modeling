export class Age {
  constructor(public readonly value: number) {
    if (value < 0 || value > 200) throw new Error("年齢が不正です");
  }
}
