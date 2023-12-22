function checkCashRegister(price, cash, cid) {
  const CURRENCY_UNIT_VALUE = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let status;
  let change = [];

  let totalChange = cash - price;
  console.log("totalChange : " + totalChange);
  for (let i = cid.length - 1; i >= 0; i--) {
    const cidCurrencyUnitQuantity = cid[i];
    const cidCurrencyUnitAmount = cidCurrencyUnitQuantity[1];

    const currencyUnit = cidCurrencyUnitQuantity[0];
    const currencyUnitValue = CURRENCY_UNIT_VALUE[currencyUnit];
    if (cidCurrencyUnitAmount > 0 && totalChange >= currencyUnitValue) {
      const cidCurrencyUnitAmountCount = Math.floor(
        cidCurrencyUnitAmount / currencyUnitValue
      );
      let currencyUnitAmountCount = Math.floor(totalChange / currencyUnitValue);

      if (currencyUnitAmountCount > cidCurrencyUnitAmountCount) {
        currencyUnitAmountCount = cidCurrencyUnitAmountCount;
      }

      totalChange = (
        totalChange -
        currencyUnitAmountCount * currencyUnitValue
      ).toFixed(2);
      change.push([currencyUnit, currencyUnitAmountCount * currencyUnitValue]);

      if (totalChange <= 0) {
        if (
          currencyUnit === "PENNY" &&
          currencyUnitAmountCount === cidCurrencyUnitAmountCount
        ) {
          status = "CLOSED";
          change = cid;
        } else status = "OPEN";

        return { status, change };
      }
    }
  }
  console.log({ status, change });
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
