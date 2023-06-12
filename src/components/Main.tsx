import { useEffect, useState, useRef, useContext } from 'react';
import ThemeContext from '../helper/ThemeContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HCStock from 'highcharts/modules/stock'; // Import the stock module
import '../assets/styles/Chart.css';
import Loading from '../helper/Loading';

HCStock(Highcharts); // Initialize the stock module
Highcharts.setOptions({});

const Main = () => {
  const theme = useContext(ThemeContext);
  const chartRef = useRef<HighchartsReact.Props>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchSeries, setFetchSeries] = useState<number[][]>([[]]);
  const [isFetchSeries, setIsFetchSeries] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    ],
    accessibility: { enabled: false }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://demo-live-data.highcharts.com/aapl-ohlc.json'
        );
        const jsonData = await response.json();
        setFetchSeries(jsonData);
        setIsLoading(false);
        setIsFetchSeries(true);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      function getRandomValue(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://demo-live-data.highcharts.com/aapl-ohlc.json'
          );
          //const jsonData = await response.json();

          const minValue = 180;
          const maxValue = 200;

          const open = getRandomValue(minValue, maxValue);
          const high = getRandomValue(open, maxValue);
          const low = getRandomValue(minValue, open);
          const close = getRandomValue(low, high);

          setFetchSeries((prevData) => {
            const newData = [
              prevData[prevData.length - 1][0] + 277938000,
              open,
              high,
              low,
              close
            ];
            return [...prevData, newData];
          });
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
      fetchData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isFetchSeries]);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chart) {
      const chart = chartRef.current.chart;

      chart.update({
        chart: {
          backgroundColor: theme === 'light' ? '#FAFAFA' : '#161A1E'
        },
        title: {
          style: {
            color: theme === 'light' ? '#161A1E' : '#FAFAFA'
          }
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
  }, [theme]);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chart) {
      const chart = chartRef.current.chart;

      chart.update({
        series: [{ data: fetchSeries }]
      });
    }
  }, [fetchSeries]);

  return (
    <main className="my-auto px-12">
      {isLoading ? (
        <Loading />
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          ref={chartRef}
        />
      )}
    </main>
  );
};

export default Main;
