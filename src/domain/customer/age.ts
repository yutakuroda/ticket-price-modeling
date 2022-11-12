export class Age {
  private readonly _value: number;

  constructor(value: number) {
    if (value < 0 || value > 200) {
      throw new RangeError();
    }

    this._value = value;
  }
}
