/**
 *  case 1
 */

const organization = new Organization({ name: '에크미 구스베리', country: 'GB' });

function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  set name(aString) {
    this._name = aString;
  }

  get name() {
    return this._name;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }

  get country() {
    return this._country;
  }
}

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = 'newName';


/**
 *  case 2
 */

const customerData = {
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
    // 생략
  },
};

function getCustomerData() {
  return customerData
}

function getRawDataOfCustomers() {
  return customerData._data
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg)
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount;
  }

  get rawData() {
    return this._data.cloneDeep(this._data);
  }

  usage(customerId, year, month) {
    return this._data[customerId].usages[year][month];
  }
}


function compareUsage(customerId, laterYear, month) {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];

  return {
    laterAmount: later,
    change: later - earlier,
  };
}