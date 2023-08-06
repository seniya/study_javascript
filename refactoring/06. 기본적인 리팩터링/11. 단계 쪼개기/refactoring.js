// step 01 함수로 추출
function priveOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) 
  * product.basePrice * product.discount
  const price = applyShipping(basePrice, shippingMethod, quantity, discount)
  return price
}

function applyShipping(basePrice, shippingMethod, quantity, discount) {
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold) 
  ? shippingMethod.discountFee : shippingMethod.feePerCase
  const shippingCost = quantity * shippingPerCase
  const price = basePrice - discount + shippingCost
  return price
}


// step 02 중간 데이터 구조 만들기
function priveOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) 
  * product.basePrice * product.discount
  const priceData = {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount
  }
  const price = applyShipping(priceData, shippingMethod)
  return price
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) 
  ? shippingMethod.discountFee : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  const price = priceData.basePrice - priceData.discount + shippingCost
  return price
}

// step 03 함수 추출 및 상수 정리
function priveOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(priceData, shippingMethod)
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) 
  * product.basePrice * product.discount
  return priceData = {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount
  }
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) 
  ? shippingMethod.discountFee : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  return priceData.basePrice - priceData.discount + shippingCost
}