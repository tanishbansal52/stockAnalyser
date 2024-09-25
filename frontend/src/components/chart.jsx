import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';


export default function Chart({companyName, sector}) {
    const [data, setData] = useState(null);
    console.log("Company is", companyName)
    useEffect(() => {
            async function fetchData() {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/chart?companyName=${companyName}&sector=${sector}`)
                    const result = await response.json()
                    setData(result);
                    console.log("Data recieved:", result)
                } catch (error) {
                    console.error('Error fetching chart data:', error);
                }
            }
            fetchData();
        }, [companyName, sector]
    );
    if (!data) {
        return <div>Loading chart...</div>;
    }
    const x_axis = data.past.main.dates;
    const y_axis = data.past.main.prices;
    const xlk_x_axis = data.past.XLK.dates;
    const xlk_y_axis = data.past.XLK.prices;
    const vgt_x_axis = data.past.VGT.dates;
    const vgt_y_axis = data.past.VGT.prices;
    const chart_data = [{
        name: companyName,
        x: x_axis,
        y: y_axis,
        type:'scatter',
        mode:'lines',
        marker: {color:'blue'},
        }, {
            name: 'XLK',
            x: xlk_x_axis,
            y: xlk_y_axis,
            type:'scatter', 
            mode:'lines',
            line: {
              dash: 'dot',
              width: 4
            },
            marker: {color:'red'},
        }, {
            name: 'VGT',
            x: vgt_x_axis,
            y: vgt_y_axis,
            type:'scatter', 
            mode:'lines',
            line: {
              dash: 'dot',
              width: 4
            },
            marker: {color:'yellow'},
        },
    ];
    return (
        <Plot
            data={chart_data}
            layout={{
                width: 1200, 
                height: 400,
                xaxis: {
                    title: 'Date',
                    showgrid: false,
                },
                yaxis: {
                    title: 'Price',
                    showline: false,
                },
                title: `${companyName} Prices`,
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)',
                font_color:'rgba(245,245,245,0)',
                }
            } 
        />
    );
}