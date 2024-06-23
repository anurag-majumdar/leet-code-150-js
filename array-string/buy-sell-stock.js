/**
 * O(n^2) solution
 * 
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitNested = function (prices) {
    let maxSellProfit = 0;
    const n = prices.length;
    for (let i = 0; i < n; i++) {
        const currentBuyPrice = prices[i];
        for (let j = i + 1; j < n; j++) {
            maxSellProfit = Math.max(maxSellProfit, prices[j] - currentBuyPrice);
        }
    }
    return maxSellProfit;
};

/**
 * O(n) solution.
 * 
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitOptimal = function (prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let maxSellProfit = 0;
    let left = 0, right = 1;
    const n = prices.length;
    while (right < n) {
        if (prices[left] <= prices[right]) {
            maxSellProfit = Math.max(maxSellProfit, prices[right] - prices[left]);
        } else if (prices[left] > prices[right]) {
            left = right;
        }
        right++;
    }
    return maxSellProfit;
};