// 측정값
reading = {customer:"ivan", quantity: 10, month: 5, year: 2017}

// 클라이언트 1
const aReading = acquireReading()
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity

// 클라이언트 2
const aReading = acquireReading()
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity)
const taxableCharge = Math.max(0, base - taxThershold(aReading.year))

// 클라이언트 3
const aReading = acquireReading()
const basicChargeAmount = calculateBaseCharge(aReading)

function calculateBaseCharge(aReading) {
  baseRate(aReading.month, aReading.year) * aReading.quantity
}


