class Reading {
  constructor(data) {
    this._customer = data._customer
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
  }
  get customer() {
    return this._customer
  }
  get quantity() {
    return this._quantity
  }
  get month() {
    return this._month
  }
  get year() {
    return this._year
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity
  }
  get taxableCharge() {
    return Math.max(0, base - taxThershold(this.year))
  }
}


// 클라이언트 3
const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const baseCharge = aReading.baseCharge

// 클라이언트 2
const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const taxableCharge = aReading.taxableCharge