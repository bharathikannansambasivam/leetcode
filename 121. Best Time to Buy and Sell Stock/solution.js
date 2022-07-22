var maxProfit = function (prices) {
    let buy = 0;

    let max_profit = 0;
    for (let sell = 1; sell < prices.length; sell++) {
        if (prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy];

            max_profit = Math.max(max_profit, profit);
        }
        else {
            buy = sell;
        }


    }
    return max_profit;
};



 //time complexity O(n)
 //space complexity O(1)
