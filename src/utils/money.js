export const formatMoneyWithoutSymbol = (money) => {
  return Math.abs(money).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}