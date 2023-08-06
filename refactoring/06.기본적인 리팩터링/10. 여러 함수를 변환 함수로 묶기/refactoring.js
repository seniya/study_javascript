// 클라이언트 1
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const baseCharge = aReading.baseCharge

// 클라이언트 2
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const taxableCharge = aReading.taxableCharge

// 클라이언트 3
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const basicChargeAmount = aReading.baseCharge


// 본질은 같고 부가 정보만 덧붙이는 변환 함수의 이름. enrich..
function enrichReading(original) {
  const result = _.cloneDeep(original)
  result.baseCharge = calculateBaseCharge(result)
  result.taxableCharge = Math.max(0, result.baseCharge - taxThershold(aReading.year))
  return result
}

function calculateBaseCharge(aReading) {
  baseRate(aReading.month, aReading.year) * aReading.quantity
}

function taxThershold() {
  return 10
}
