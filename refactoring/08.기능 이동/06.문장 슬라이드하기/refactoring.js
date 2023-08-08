// case 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;

// case 2
function something() {
  let result
  if(availableResources.length === 0) {
    result = createResource()
  } else {
    result = availableResources.pop()
  }
  allocatedResources.push(result)
  return result
}