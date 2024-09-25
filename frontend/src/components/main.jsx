import React, { useState } from 'react';
import Info from './stock-info'
import Chart from './chart'

const options = [
    { value: "AAPL", label: "Apple" },
    { value: "MSFT", label: "Microsoft" },
    { value: "AMZN", label: "Amazon" },
    { value: "GOOG", label: "Google" },
    { value: "NVDA", label: "Nvidia" },
    { value: "INFY.NS", label: "Infosys" },
];

export default function Main() {
    const [company, setCompany] = useState(options[0].value);
    const [displaySentiment, setDisplaySentiment] = useState(null);
    const [displayInfo, setDisplayInfo] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        if (company) {
            try {
                setDisplayInfo(`Loading info...`)
                const info_response = await fetch(`https://stock-analyser-nine.vercel.app/getInfo?companyName=${company}`);
                const info_data = await info_response.json();
                if (Object.keys(info_data.info).length === 1)
                    throw new Error()
                setDisplayInfo(Info(info_data.info));
            } catch (error) {
                setDisplayInfo('Failed to get info!')
            }
            try {
                setDisplaySentiment(`Loading sentiment...`)
                const sentiment_response = await fetch(`https://stock-analyser-nine.vercel.app/getSentiment?companyName=${company}`);
                const sentiment_data = await sentiment_response.json();
                setDisplaySentiment(`${company}'s sentiment is: ${sentiment_data.sentiment}`);
            
            } catch (error) {
                setDisplaySentiment('Failed to get sentiment!')
            }
        } else {
            setDisplaySentiment("Please select a company.");
        }
    }
    function handleChange(event) {
        setCompany(event.target.value);
    }
    return (
    <div id='main'>
        <h1>Tanish's stock analysis</h1>
        <p>Select Company:</p>
        <form onSubmit={handleSubmit}>
            <select name="companyName" value={company} onChange={handleChange}> {
                options.map(
                    option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    )
                )
            }
            </select>
            <br/>
            <button type="submit">Generate Sentiment!!!</button>
            <br/><br/>
            {displaySentiment && <div><hr/><h1>Sentiment</h1><p>{displaySentiment}</p></div>}
            {displayInfo && <div>{displayInfo}</div>}
        </form>
        <Chart companyName={company} sector={"Technology"}/>
    </div>
    );
}