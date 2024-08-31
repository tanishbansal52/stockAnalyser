import React from 'react';

export default function Info(stock_info) {
    return (
        <div>pych
            <h2>Current Price</h2>
            <p>{stock_info.currency} {stock_info.currentPrice}</p>
            <h2>High/Low</h2>
            
            <p>
                52-week high: {stock_info.fiftyTwoWeekHigh}<br></br>
                52-week low: {stock_info.fiftyTwoWeekLow}
            </p>
        </div>
    );
}