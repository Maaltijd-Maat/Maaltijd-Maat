class Ingredient {
  private _quantity: number;

  constructor(quantity: number) {
    this._quantity = quantity;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}
