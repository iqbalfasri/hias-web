export const formatMoneyWithoutSymbol = money => {
  return Math.abs(money)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const getDiscount = (price, discount) => {
  let disc = price * (discount / 100);
  let net = price - disc;

  return parseInt(net);
};
