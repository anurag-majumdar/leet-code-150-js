/**
 * O(n^2) solution
 * 
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitNested = (prices) => {
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
const maxProfitOptimal = (prices) => {
    if (prices.length <= 1) {
        return 0;
    }
    let maxSellProfit = 0;
    let left = 0;
    let right = 1;
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

/**
 * O(n) solution, different approach.
 * 
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitOptimal2 = (prices) => {
    let minPrice = Infinity;
    let maxSellProfit = 0;
    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        }

        const profit = price - minPrice;
        if (profit > maxSellProfit) {
            maxSellProfit = profit;
        }
    }
    return maxSellProfit;
};