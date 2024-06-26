class Customer {
  constructor(
    companyId = 1,
    companyName,
    companyStreetName1,
    companyCity,
    companyZip,
    companyStreetName2 = null,
    companyState
  ) {
    this.companyId = companyId;
    this.companyName = companyName;
    this.companyStreetName1 = companyStreetName1;
    this.companyCity = companyCity;
    this.companyZip = companyZip;
    this.companyStreetName2 = companyStreetName2;
    this.companyState = companyState;
  }
}

export default Customer;
