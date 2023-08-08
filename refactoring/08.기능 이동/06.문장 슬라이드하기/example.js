// case 1
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;

// case 2
function something() {
  let result
  if(availableResources.length === 0) {
    result = createResource()
    allocatedResources.push(result)
  } else {
    result = availableResources.pop()
    allocatedResources.push(result)
  }
  return result
}