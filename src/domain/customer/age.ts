export class Age {
  readonly MINIMUM_AGE = 0;
  readonly MAXIMUM_AGE = 200;

  constructor(public readonly value: number) {
    if (value < this.MINIMUM_AGE) throw new Error("年齢が不正です");
    if (value > this.MAXIMUM_AGE) throw new Error("年齢が不正です");
  }
}
