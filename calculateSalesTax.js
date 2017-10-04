/* 20171004 DM - LHL w1d3 calculating sales and taxes.

This function  calculates the total sales and total
tax, grouped by company.

*/
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var objResult = {};

  // Implement your code here
  for (var company in salesData){
    var salesResult = {};
    var companyName = salesData[company].name;
    var companyProv = salesData[company].province;
    var companySales = salesData[company].sales;
    companySales = calculateSales(companySales);
    var companyTaxes = calculateTax(companySales, companyProv);

    // Check if the company already exists (i.e. 2+ provinces).
    if (companyName in objResult){
      objResult[companyName]["totalSales"] += companySales;
      objResult[companyName]["totalTaxes"] += companyTaxes;
    } else {
      salesResult["totalSales"] = companySales;
      salesResult["totalTaxes"] = companyTaxes;
      objResult[companyName] = salesResult;
    }
  }
  console.log(objResult);
}

//This functions calculates the tax for a company + province.
function calculateTax(totalSales, companyProv){
  // Multiple totalSales by province tax rate.
  return totalSales * salesTaxRates[companyProv];
}

//This functions calculates the sales for a company + province.
function calculateSales(salesData){
  var totalSales = 0;

  for (var sale in salesData){
    totalSales = totalSales + salesData[sale];
  }

  return totalSales;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/