import React, {
  useEffect,
  useState,
  useRef,
  useContext
} from 'react';
import ThemeContext from '../helper/ThemeContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCStock from 'highcharts/modules/stock'; // Import the stock module
import '../assets/styles/Chart.css';

const Main = () => {
  HCStock(Highcharts); // Initialize the stock module
  Highcharts.setOptions({});
  const chartRef = useRef<HighchartsReact.Props>(null);
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  const [options, setOptions] = useState({
    chart: {
      type: 'candlestick',
      height: '500',
      backgroundColor: theme === 'light' ? '#FAFAFA' : '#161A1E'
    },
    title: {
      text: 'BTC/USDT',
      align: 'left',
      style: {
        color: theme === 'light' ? '#161A1E' : '#FAFAFA',
        fontSize: '20px'
      }
    },
    rangeSelector: {
      selected: 0,
      inputStyle: {
        color: '#0ea5e9'
      },
      labelStyle: {
        color: '#a8a29e'
      },
      buttonTheme: {
        // styles for the buttons
        fill: 'none',
        stroke: 'none',
        'stroke-width': 0,
        r: 8,
        style: {
          color: '#0ea5e9',
          fontWeight: 'bold'
        },
        states: {
          hover: {
            fill: '#039',
            style: {
              color: 'white'
            }
          },
          select: {
            fill: '#039',
            style: {
              color: 'white'
            }
          }
        }
      }
    },
    xAxis: [
      {
        lineColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
        tickColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
        labels: {
          style: { color: theme === 'light' ? '#161A1E' : '#FAFAFA' }
        }
      }
    ],
    yAxis: [
      {
        lineColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
        tickColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
        labels: {
          style: { color: theme === 'light' ? '#161A1E' : '#FAFAFA' }
        },
        gridLineColor: theme === 'light' ? '#e6e6e6' : '#78716c'
      }
    ],
    plotOptions: {
      candlestick: {
        color: '#F6465D',
        upColor: '#0ECB81',
        lineColor: '#F6465D',
        upLineColor: '#0ECB81',
        borderColor: 'black',
        fillOpacity: 1
      }
    },
    navigator: {
      series: {
        color: 'green',
        lineColor: '#0ea5e9',
        lineWidth: 1.2,
        fillColor: 'rgb(14, 165, 233, 0.1)'
      }
    },
    series: [
      {
        type: 'candlestick',
        name: 'Stock Price',
        data: [[]]
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://demo-live-data.highcharts.com/aapl-ohlc.json'
        );
        const jsonData = await response.json();
        setOptions((prevOptions) => ({
          ...prevOptions,
          series: [
            {
              ...prevOptions.series[0],
              data: jsonData
            }
          ]
        }));
        console.log(jsonData[1]);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chart) {
      const chart = chartRef.current.chart;

      chart.update({
        chart: {
          backgroundColor: theme === 'light' ? '#FAFAFA' : '#161A1E'
        },
        title: {
          style: { color: theme === 'light' ? '#161A1E' : '#FAFAFA' }
        },
        xAxis: [
          {
            lineColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
            tickColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
            labels: {
              style: {
                color: theme === 'light' ? '#161A1E' : '#FAFAFA'
              }
            }
          }
        ],
        yAxis: [
          {
            lineColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
            tickColor: theme === 'light' ? '#161A1E' : '#FAFAFA',
            labels: {
              style: {
                color: theme === 'light' ? '#161A1E' : '#FAFAFA'
              }
            },
            gridLineColor: theme === 'light' ? '#e6e6e6' : '#78716c'
          }
        ]
      });
    }
  }, [theme, options]);

  return (
    <main className="my-auto px-12">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        ref={chartRef}
      />
    </main>
  );
};

export default Main;
