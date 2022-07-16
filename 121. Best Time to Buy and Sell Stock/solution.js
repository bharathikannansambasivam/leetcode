var maxProfit = function (prices) {
    let Buy = 0;

    let max_profit = 0;
    for (let sell = 1; sell < prices.length; sell++) {
        if (prices[Buy] < prices[sell]) {
            let profit = prices[sell] - prices[Buy];

            max_profit = Math.max(max_profit, profit);
        }
        else {
            Buy = sell;
        }


    }
    return max_profit;
};



 //time complexity O(n)
 //space complexity O(1)