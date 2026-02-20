const prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
  //? I wanted to return both the index and minimum to use it to split the remaining of the array to perform the profit calculations after that. Found out reduce makes this complicated if i just want it a variable rather than an object (would need to use destructuring), so used forEach loop with the optional index parameter.
  // const minimumPrice = prices.reduce((min, price, currentIndex) => {
  //   if (price < min) {
  //     return `${price} ${currentIndex}`;
  //   }
  //   return min;
  // });
  let minPrice = prices[0];
  let maxProfit = 0;
  prices.forEach((price) => {
    let currentProfit = price - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (price < minPrice) {
      minPrice = price;
    }
  });
  return maxProfit;
  //// Returning the remaining numbers after the day of the minimum price:
  // const remainingPrices = prices.slice(minIndex + 1);

  //// Calculating max profit from the profit array:
  // const profitArray = [];
  // remainingPrices.forEach((price) => {
  //   profitArray.push(price - minPrice);
  // });
  // if (profitArray.length === 0) {
  //   return 0;
  // }
  // return Math.max(...profitArray);
  //? Found out [2,4,1] wouldn't work with this code as it assumes you only buy on the minimum price.
};
console.log(maxProfit(prices));

//* Conclusion: I needed to calculate both the profit and minimum price in parallel as the mindest for this problem should be :
//! Track the minimum so far => For each day, check if selling today is better than previous best.
