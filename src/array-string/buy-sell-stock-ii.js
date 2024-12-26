/**
 * O(n) solution.
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitOptimal = (prices) => {
  if (prices.length <= 1) {
    return 0;
  }
  let totalProfit = 0,
    maxSellProfit = 0;
  let left = 0,
    right = 1;
  const n = prices.length;
  while (right < n) {
    if (prices[left] <= prices[right]) {
      maxSellProfit = Math.max(maxSellProfit, prices[right] - prices[left]);
    } else if (prices[left] > prices[right]) {
      left = right;
    }
    if (prices[right] > prices[right + 1]) {
      totalProfit += maxSellProfit;
      maxSellProfit = 0;
      left = right + 1;
    }
    right++;
  }
  return totalProfit + maxSellProfit;
};
