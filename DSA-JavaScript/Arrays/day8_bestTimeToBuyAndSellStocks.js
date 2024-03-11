/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0; // Not enough days for a transaction
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Update the minimum price if a lower price is encountered
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // Update the maximum profit if selling at the current price is more profitable
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
};
