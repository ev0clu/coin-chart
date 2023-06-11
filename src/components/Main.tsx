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
  }, [theme]);

  const [options, setOptions] = useState({
    chart: {
      type: 'candlestick',
      height: '500',
      backgroundColor: theme === 'light' ? '#FAFAFA' : '#161A1E'
    },
    title: {
      text: 'BTC/USDT',
      align: 'left',
      style: { color: theme === 'light' ? '#161A1E' : '#FAFAFA' }
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
            fill: 'rgb(252, 213, 53)',
            style: {
              color: '#039'
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
        data: [
          [1623245400000, 127.21, 127.75, 126.52, 127.13],
          [1623331800000, 127.02, 128.19, 125.94, 126.11],
          [1623418200000, 126.53, 127.44, 126.1, 127.35],
          [1623677400000, 127.82, 130.54, 127.07, 130.48],
          [1623763800000, 129.94, 130.6, 129.39, 129.64],
          [1623850200000, 130.37, 130.89, 128.46, 130.15],
          [1623936600000, 129.8, 132.55, 129.65, 131.79],
          [1624023000000, 130.71, 131.51, 130.24, 130.46],
          [1624282200000, 130.3, 132.41, 129.21, 132.3],
          [1624368600000, 132.13, 134.08, 131.62, 133.98],
          [1624455000000, 133.77, 134.32, 133.23, 133.7],
          [1624541400000, 134.45, 134.64, 132.93, 133.41],
          [1624627800000, 133.46, 133.89, 132.81, 133.11],
          [1624887000000, 133.41, 135.25, 133.35, 134.78],
          [1624973400000, 134.8, 136.49, 134.35, 136.33],
          [1625059800000, 136.17, 137.41, 135.87, 136.96],
          [1625146200000, 136.6, 137.33, 135.76, 137.27],
          [1625232600000, 137.9, 140, 137.75, 139.96],
          [1625578200000, 140.07, 143.15, 140.07, 142.02],
          [1625664600000, 143.54, 144.89, 142.66, 144.57],
          [1625751000000, 141.58, 144.06, 140.67, 143.24],
          [1625837400000, 142.75, 145.65, 142.65, 145.11],
          [1626096600000, 146.21, 146.32, 144, 144.5],
          [1626183000000, 144.03, 147.46, 143.63, 145.64],
          [1626269400000, 148.1, 149.57, 147.68, 149.15],
          [1626355800000, 149.24, 150, 147.09, 148.48],
          [1626442200000, 148.46, 149.76, 145.88, 146.39],
          [1626701400000, 143.75, 144.07, 141.67, 142.45],
          [1626787800000, 143.46, 147.1, 142.96, 146.15],
          [1626874200000, 145.53, 146.13, 144.63, 145.4],
          [1626960600000, 145.94, 148.2, 145.81, 146.8],
          [1627047000000, 147.55, 148.72, 146.92, 148.56],
          [1627306200000, 148.27, 149.83, 147.7, 148.99],
          [1627392600000, 149.12, 149.21, 145.55, 146.77],
          [1627479000000, 144.81, 146.97, 142.54, 144.98],
          [1627565400000, 144.69, 146.55, 144.58, 145.64],
          [1627651800000, 144.38, 146.33, 144.11, 145.86],
          [1627911000000, 146.36, 146.95, 145.25, 145.52],
          [1627997400000, 145.81, 148.04, 145.18, 147.36],
          [1628083800000, 147.27, 147.79, 146.28, 146.95],
          [1628170200000, 146.98, 147.84, 146.17, 147.06],
          [1628256600000, 146.35, 147.11, 145.63, 146.14],
          [1628515800000, 146.2, 146.7, 145.52, 146.09],
          [1628602200000, 146.44, 147.71, 145.3, 145.6],
          [1628688600000, 146.05, 146.72, 145.53, 145.86],
          [1628775000000, 146.19, 149.05, 145.84, 148.89],
          [1628861400000, 148.97, 149.44, 148.27, 149.1],
          [1629120600000, 148.54, 151.19, 146.47, 151.12],
          [1629207000000, 150.23, 151.68, 149.09, 150.19],
          [1629293400000, 149.8, 150.72, 146.15, 146.36],
          [1629379800000, 145.03, 148, 144.5, 146.7],
          [1629466200000, 147.44, 148.5, 146.78, 148.19],
          [1629725400000, 148.31, 150.19, 147.89, 149.71],
          [1629811800000, 149.45, 150.86, 149.15, 149.62],
          [1629898200000, 149.81, 150.32, 147.8, 148.36],
          [1629984600000, 148.35, 149.12, 147.51, 147.54],
          [1630071000000, 147.48, 148.75, 146.83, 148.6],
          [1630330200000, 149, 153.49, 148.61, 153.12],
          [1630416600000, 152.66, 152.8, 151.29, 151.83],
          [1630503000000, 152.83, 154.98, 152.34, 152.51],
          [1630589400000, 153.87, 154.72, 152.4, 153.65],
          [1630675800000, 153.76, 154.63, 153.09, 154.3],
          [1631021400000, 154.97, 157.26, 154.39, 156.69],
          [1631107800000, 156.98, 157.04, 153.98, 155.11],
          [1631194200000, 155.49, 156.11, 153.95, 154.07],
          [1631280600000, 155, 155.48, 148.7, 148.97],
          [1631539800000, 150.63, 151.42, 148.75, 149.55],
          [1631626200000, 150.35, 151.07, 146.91, 148.12],
          [1631712600000, 148.56, 149.44, 146.37, 149.03],
          [1631799000000, 148.44, 148.97, 147.22, 148.79],
          [1631885400000, 148.82, 148.82, 145.76, 146.06],
          [1632144600000, 143.8, 144.84, 141.27, 142.94],
          [1632231000000, 143.93, 144.6, 142.78, 143.43],
          [1632317400000, 144.45, 146.43, 143.7, 145.85],
          [1632403800000, 146.65, 147.08, 145.64, 146.83],
          [1632490200000, 145.66, 147.47, 145.56, 146.92],
          [1632749400000, 145.47, 145.96, 143.82, 145.37],
          [1632835800000, 143.25, 144.75, 141.69, 141.91],
          [1632922200000, 142.47, 144.45, 142.03, 142.83],
          [1633008600000, 143.66, 144.38, 141.28, 141.5],
          [1633095000000, 141.9, 142.92, 139.11, 142.65],
          [1633354200000, 141.76, 142.21, 138.27, 139.14],
          [1633440600000, 139.49, 142.24, 139.36, 141.11],
          [1633527000000, 139.47, 142.15, 138.37, 142],
          [1633613400000, 143.06, 144.22, 142.72, 143.29],
          [1633699800000, 144.03, 144.18, 142.56, 142.9],
          [1633959000000, 142.27, 144.81, 141.81, 142.81],
          [1634045400000, 143.23, 143.25, 141.04, 141.51],
          [1634131800000, 141.24, 141.4, 139.2, 140.91],
          [1634218200000, 142.11, 143.88, 141.51, 143.76],
          [1634304600000, 143.77, 144.9, 143.51, 144.84],
          [1634563800000, 143.45, 146.84, 143.16, 146.55],
          [1634650200000, 147.01, 149.17, 146.55, 148.76],
          [1634736600000, 148.7, 149.75, 148.12, 149.26],
          [1634823000000, 148.81, 149.64, 147.87, 149.48],
          [1634909400000, 149.69, 150.18, 148.64, 148.69],
          [1635168600000, 148.68, 149.37, 147.62, 148.64],
          [1635255000000, 149.33, 150.84, 149.01, 149.32],
          [1635341400000, 149.36, 149.73, 148.49, 148.85],
          [1635427800000, 149.82, 153.17, 149.72, 152.57],
          [1635514200000, 147.22, 149.94, 146.41, 149.8],
          [1635773400000, 148.99, 149.7, 147.8, 148.96],
          [1635859800000, 148.66, 151.57, 148.65, 150.02],
          [1635946200000, 150.39, 151.97, 149.82, 151.49],
          [1636032600000, 151.58, 152.43, 150.64, 150.96],
          [1636119000000, 151.89, 152.2, 150.06, 151.28],
          [1636381800000, 151.41, 151.57, 150.16, 150.44],
          [1636468200000, 150.2, 151.43, 150.06, 150.81],
          [1636554600000, 150.02, 150.13, 147.85, 147.92],
          [1636641000000, 148.96, 149.43, 147.68, 147.87],
          [1636727400000, 148.43, 150.4, 147.48, 149.99],
          [1636986600000, 150.37, 151.88, 149.43, 150],
          [1637073000000, 149.94, 151.49, 149.34, 151],
          [1637159400000, 151, 155, 150.99, 153.49],
          [1637245800000, 153.71, 158.67, 153.05, 157.87],
          [1637332200000, 157.65, 161.02, 156.53, 160.55],
          [1637591400000, 161.68, 165.7, 161, 161.02],
          [1637677800000, 161.12, 161.8, 159.06, 161.41],
          [1637764200000, 160.75, 162.14, 159.64, 161.94],
          [1637937000000, 159.57, 160.45, 156.36, 156.81],
          [1638196200000, 159.37, 161.19, 158.79, 160.24],
          [1638282600000, 159.99, 165.52, 159.92, 165.3],
          [1638369000000, 167.48, 170.3, 164.53, 164.77],
          [1638455400000, 158.74, 164.2, 157.8, 163.76],
          [1638541800000, 164.02, 164.96, 159.72, 161.84],
          [1638801000000, 164.29, 167.88, 164.28, 165.32],
          [1638887400000, 169.08, 171.58, 168.34, 171.18],
          [1638973800000, 172.13, 175.96, 170.7, 175.08],
          [1639060200000, 174.91, 176.75, 173.92, 174.56],
          [1639146600000, 175.21, 179.63, 174.69, 179.45],
          [1639405800000, 181.12, 182.13, 175.53, 175.74],
          [1639492200000, 175.25, 177.74, 172.21, 174.33],
          [1639578600000, 175.11, 179.5, 172.31, 179.3],
          [1639665000000, 179.28, 181.14, 170.75, 172.26],
          [1639751400000, 169.93, 173.47, 169.69, 171.14],
          [1640010600000, 168.28, 170.58, 167.46, 169.75],
          [1640097000000, 171.56, 173.2, 169.12, 172.99],
          [1640183400000, 173.04, 175.86, 172.15, 175.64],
          [1640269800000, 175.85, 176.85, 175.27, 176.28],
          [1640615400000, 177.09, 180.42, 177.07, 180.33],
          [1640701800000, 180.16, 181.33, 178.53, 179.29],
          [1640788200000, 179.33, 180.63, 178.14, 179.38],
          [1640874600000, 179.47, 180.57, 178.09, 178.2],
          [1640961000000, 178.09, 179.23, 177.26, 177.57],
          [1641220200000, 177.83, 182.88, 177.71, 182.01],
          [1641306600000, 182.63, 182.94, 179.12, 179.7],
          [1641393000000, 179.61, 180.17, 174.64, 174.92],
          [1641479400000, 172.7, 175.3, 171.64, 172],
          [1641565800000, 172.89, 174.14, 171.03, 172.17],
          [1641825000000, 169.08, 172.5, 168.17, 172.19],
          [1641911400000, 172.32, 175.18, 170.82, 175.08],
          [1641997800000, 176.12, 177.18, 174.82, 175.53],
          [1642084200000, 175.78, 176.62, 171.79, 172.19],
          [1642170600000, 171.34, 173.78, 171.09, 173.07],
          [1642516200000, 171.51, 172.54, 169.41, 169.8],
          [1642602600000, 170, 171.08, 165.94, 166.23],
          [1642689000000, 166.98, 169.68, 164.18, 164.51],
          [1642775400000, 164.42, 166.33, 162.3, 162.41],
          [1643034600000, 160.02, 162.3, 154.7, 161.62],
          [1643121000000, 158.98, 162.76, 157.02, 159.78],
          [1643207400000, 163.5, 164.39, 157.82, 159.69],
          [1643293800000, 162.45, 163.84, 158.28, 159.22],
          [1643380200000, 165.71, 170.35, 162.8, 170.33],
          [1643639400000, 170.16, 175, 169.51, 174.78],
          [1643725800000, 174.01, 174.84, 172.31, 174.61],
          [1643812200000, 174.75, 175.88, 173.33, 175.84],
          [1643898600000, 174.48, 176.24, 172.12, 172.9],
          [1643985000000, 171.68, 174.1, 170.68, 172.39],
          [1644244200000, 172.86, 173.95, 170.95, 171.66],
          [1644330600000, 171.73, 175.35, 171.43, 174.83],
          [1644417000000, 176.05, 176.65, 174.9, 176.28],
          [1644503400000, 174.14, 175.48, 171.55, 172.12],
          [1644589800000, 172.33, 173.08, 168.04, 168.64],
          [1644849000000, 167.37, 169.58, 166.56, 168.88],
          [1644935400000, 170.97, 172.95, 170.25, 172.79],
          [1645021800000, 171.85, 173.34, 170.05, 172.55],
          [1645108200000, 171.03, 171.91, 168.47, 168.88],
          [1645194600000, 169.82, 170.54, 166.19, 167.3],
          [1645540200000, 164.98, 166.69, 162.15, 164.32],
          [1645626600000, 165.54, 166.15, 159.75, 160.07],
          [1645713000000, 152.58, 162.85, 152, 162.74],
          [1645799400000, 163.84, 165.12, 160.87, 164.85],
          [1646058600000, 163.06, 165.42, 162.43, 165.12],
          [1646145000000, 164.7, 166.6, 161.97, 163.2],
          [1646231400000, 164.39, 167.36, 162.95, 166.56],
          [1646317800000, 168.47, 168.91, 165.55, 166.23],
          [1646404200000, 164.49, 165.55, 162.1, 163.17],
          [1646663400000, 163.36, 165.02, 159.04, 159.3],
          [1646749800000, 158.82, 162.88, 155.8, 157.44],
          [1646836200000, 161.48, 163.41, 159.41, 162.95],
          [1646922600000, 160.2, 160.39, 155.98, 158.52],
          [1647009000000, 158.93, 159.28, 154.5, 154.73],
          [1647264600000, 151.45, 154.12, 150.1, 150.62],
          [1647351000000, 150.9, 155.57, 150.38, 155.09],
          [1647437400000, 157.05, 160, 154.46, 159.59],
          [1647523800000, 158.61, 161, 157.63, 160.62],
          [1647610200000, 160.51, 164.48, 159.76, 163.98],
          [1647869400000, 163.51, 166.35, 163.01, 165.38],
          [1647955800000, 165.51, 169.42, 164.91, 168.82],
          [1648042200000, 167.99, 172.64, 167.65, 170.21],
          [1648128600000, 171.06, 174.14, 170.21, 174.07],
          [1648215000000, 173.88, 175.28, 172.75, 174.72],
          [1648474200000, 172.17, 175.73, 172, 175.6],
          [1648560600000, 176.69, 179.01, 176.34, 178.96],
          [1648647000000, 178.55, 179.61, 176.7, 177.77],
          [1648733400000, 177.84, 178.03, 174.4, 174.61],
          [1648819800000, 174.03, 174.88, 171.94, 174.31],
          [1649079000000, 174.57, 178.49, 174.44, 178.44],
          [1649165400000, 177.5, 178.3, 174.42, 175.06],
          [1649251800000, 172.36, 173.63, 170.13, 171.83],
          [1649338200000, 171.16, 173.36, 169.85, 172.14],
          [1649424600000, 171.78, 171.78, 169.2, 170.09],
          [1649683800000, 168.71, 169.03, 165.5, 165.75],
          [1649770200000, 168.02, 169.87, 166.64, 167.66],
          [1649856600000, 167.39, 171.04, 166.77, 170.4],
          [1649943000000, 170.62, 171.27, 165.04, 165.29],
          [1650288600000, 163.92, 166.6, 163.57, 165.07],
          [1650375000000, 165.02, 167.82, 163.91, 167.4],
          [1650461400000, 168.76, 168.88, 166.1, 167.23],
          [1650547800000, 168.91, 171.53, 165.91, 166.42],
          [1650634200000, 166.46, 167.87, 161.5, 161.79],
          [1650893400000, 161.12, 163.17, 158.46, 162.88],
          [1650979800000, 162.25, 162.34, 156.72, 156.8],
          [1651066200000, 155.91, 159.79, 155.38, 156.57],
          [1651152600000, 159.25, 164.52, 158.93, 163.64],
          [1651239000000, 161.84, 166.2, 157.25, 157.65],
          [1651498200000, 156.71, 158.23, 153.27, 157.96],
          [1651584600000, 158.15, 160.71, 156.32, 159.48],
          [1651671000000, 159.67, 166.48, 159.26, 166.02],
          [1651757400000, 163.85, 164.08, 154.95, 156.77],
          [1651843800000, 156.01, 159.44, 154.18, 157.28],
          [1652103000000, 154.93, 155.83, 151.49, 152.06],
          [1652189400000, 155.52, 156.74, 152.93, 154.51],
          [1652275800000, 153.5, 155.45, 145.81, 146.5],
          [1652362200000, 142.77, 146.2, 138.8, 142.56],
          [1652448600000, 144.59, 148.1, 143.11, 147.11],
          [1652707800000, 145.55, 147.52, 144.18, 145.54],
          [1652794200000, 148.86, 149.77, 146.68, 149.24],
          [1652880600000, 146.85, 147.36, 139.9, 140.82],
          [1652967000000, 139.88, 141.66, 136.6, 137.35],
          [1653053400000, 139.09, 140.7, 132.61, 137.59],
          [1653312600000, 137.79, 143.26, 137.65, 143.11],
          [1653399000000, 140.81, 141.97, 137.33, 140.36],
          [1653485400000, 138.43, 141.79, 138.34, 140.52],
          [1653571800000, 137.39, 144.34, 137.14, 143.78],
          [1653658200000, 145.39, 149.68, 145.26, 149.64],
          [1654003800000, 149.07, 150.66, 146.84, 148.84],
          [1654090200000, 149.9, 151.74, 147.68, 148.71],
          [1654176600000, 147.83, 151.27, 146.86, 151.21],
          [1654263000000, 146.9, 147.97, 144.46, 145.38],
          [1654522200000, 147.03, 148.57, 144.9, 146.14],
          [1654608600000, 144.35, 149, 144.1, 148.71],
          [1654695000000, 148.58, 149.87, 147.46, 147.96],
          [1654781400000, 147.08, 147.95, 142.53, 142.64],
          [1654867800000, 140.28, 140.76, 137.06, 137.13],
          [1655127000000, 132.87, 135.2, 131.44, 131.88],
          [1655213400000, 133.13, 133.89, 131.48, 132.76],
          [1655299800000, 134.29, 137.34, 132.16, 135.43],
          [1655386200000, 132.08, 132.39, 129.04, 130.06],
          [1655472600000, 130.07, 133.08, 129.81, 131.56],
          [1655818200000, 133.42, 137.06, 133.32, 135.87],
          [1655904600000, 134.79, 137.76, 133.91, 135.35],
          [1655991000000, 136.82, 138.59, 135.63, 138.27],
          [1656077400000, 139.9, 141.91, 139.77, 141.66],
          [1656336600000, 142.7, 143.49, 140.97, 141.66],
          [1656423000000, 142.13, 143.42, 137.32, 137.44],
          [1656509400000, 137.46, 140.67, 136.67, 139.23],
          [1656595800000, 137.25, 138.37, 133.77, 136.72],
          [1656682200000, 136.04, 139.04, 135.66, 138.93],
          [1657027800000, 137.77, 141.61, 136.93, 141.56],
          [1657114200000, 141.35, 144.12, 141.08, 142.92],
          [1657200600000, 143.29, 146.55, 143.28, 146.35],
          [1657287000000, 145.26, 147.55, 145, 147.04],
          [1657546200000, 145.67, 146.64, 143.78, 144.87],
          [1657632600000, 145.76, 148.45, 145.05, 145.86],
          [1657719000000, 142.99, 146.45, 142.12, 145.49],
          [1657805400000, 144.08, 148.95, 143.25, 148.47],
          [1657891800000, 149.78, 150.86, 148.2, 150.17],
          [1658151000000, 150.74, 151.57, 146.7, 147.07],
          [1658237400000, 147.92, 151.23, 146.91, 151],
          [1658323800000, 151.12, 153.72, 150.37, 153.04],
          [1658410200000, 154.5, 155.57, 151.94, 155.35],
          [1658496600000, 155.39, 156.28, 153.41, 154.09],
          [1658755800000, 154.01, 155.04, 152.28, 152.95],
          [1658842200000, 152.26, 153.09, 150.8, 151.6],
          [1658928600000, 152.58, 157.33, 152.16, 156.79],
          [1659015000000, 156.98, 157.64, 154.41, 157.35],
          [1659101400000, 161.24, 163.63, 159.5, 162.51],
          [1659360600000, 161.01, 163.59, 160.89, 161.51],
          [1659447000000, 160.1, 162.41, 159.63, 160.01],
          [1659533400000, 160.84, 166.59, 160.75, 166.13],
          [1659619800000, 166.01, 167.19, 164.43, 165.81],
          [1659706200000, 163.21, 165.85, 163, 165.35],
          [1659965400000, 166.37, 167.81, 164.2, 164.87],
          [1660051800000, 164.02, 165.82, 163.25, 164.92],
          [1660138200000, 167.68, 169.34, 166.9, 169.24],
          [1660224600000, 170.06, 170.99, 168.19, 168.49],
          [1660311000000, 169.82, 172.17, 169.4, 172.1],
          [1660570200000, 171.52, 173.39, 171.35, 173.19],
          [1660656600000, 172.78, 173.71, 171.66, 173.03],
          [1660743000000, 172.77, 176.15, 172.57, 174.55],
          [1660829400000, 173.75, 174.9, 173.12, 174.15],
          [1660915800000, 173.03, 173.74, 171.31, 171.52],
          [1661175000000, 169.69, 169.86, 167.14, 167.57],
          [1661261400000, 167.08, 168.71, 166.65, 167.23],
          [1661347800000, 167.32, 168.11, 166.25, 167.53],
          [1661434200000, 168.78, 170.14, 168.35, 170.03],
          [1661520600000, 170.57, 171.05, 163.56, 163.62],
          [1661779800000, 161.15, 162.9, 159.82, 161.38],
          [1661866200000, 162.13, 162.56, 157.72, 158.91],
          [1661952600000, 160.31, 160.58, 157.14, 157.22],
          [1662039000000, 156.64, 158.42, 154.67, 157.96],
          [1662125400000, 159.75, 160.36, 154.97, 155.81],
          [1662471000000, 156.47, 157.09, 153.69, 154.53],
          [1662557400000, 154.82, 156.67, 153.61, 155.96],
          [1662643800000, 154.64, 156.36, 152.68, 154.46],
          [1662730200000, 155.47, 157.82, 154.75, 157.37],
          [1662989400000, 159.59, 164.26, 159.3, 163.43],
          [1663075800000, 159.9, 160.54, 153.37, 153.84],
          [1663162200000, 154.79, 157.1, 153.61, 155.31],
          [1663248600000, 154.65, 155.24, 151.38, 152.37],
          [1663335000000, 151.21, 151.35, 148.37, 150.7],
          [1663594200000, 149.31, 154.56, 149.1, 154.48],
          [1663680600000, 153.4, 158.08, 153.08, 156.9],
          [1663767000000, 157.34, 158.74, 153.6, 153.72],
          [1663853400000, 152.38, 154.47, 150.91, 152.74],
          [1663939800000, 151.19, 151.47, 148.56, 150.43],
          [1664199000000, 149.66, 153.77, 149.64, 150.77],
          [1664285400000, 152.74, 154.72, 149.95, 151.76],
          [1664371800000, 147.64, 150.64, 144.84, 149.84],
          [1664458200000, 146.1, 146.72, 140.68, 142.48],
          [1664544600000, 141.28, 143.1, 138, 138.2],
          [1664803800000, 138.21, 143.07, 137.69, 142.45],
          [1664890200000, 145.03, 146.22, 144.26, 146.1],
          [1664976600000, 144.07, 147.38, 143.01, 146.4],
          [1665063000000, 145.81, 147.54, 145.22, 145.43],
          [1665149400000, 142.54, 143.1, 139.45, 140.09],
          [1665408600000, 140.42, 141.89, 138.57, 140.42],
          [1665495000000, 139.9, 141.35, 138.22, 138.98],
          [1665581400000, 139.13, 140.36, 138.16, 138.34],
          [1665667800000, 134.99, 143.59, 134.37, 142.99],
          [1665754200000, 144.31, 144.52, 138.19, 138.38],
          [1666013400000, 141.07, 142.9, 140.27, 142.41],
          [1666099800000, 145.49, 146.7, 140.61, 143.75],
          [1666186200000, 141.69, 144.95, 141.5, 143.86],
          [1666272600000, 143.02, 145.89, 142.65, 143.39],
          [1666359000000, 142.87, 147.85, 142.65, 147.27],
          [1666618200000, 147.19, 150.23, 146, 149.45],
          [1666704600000, 150.09, 152.49, 149.36, 152.34],
          [1666791000000, 150.96, 151.99, 148.04, 149.35],
          [1666877400000, 148.07, 149.05, 144.13, 144.8],
          [1666963800000, 148.2, 157.5, 147.82, 155.74],
          [1667223000000, 153.16, 154.24, 151.92, 153.34],
          [1667309400000, 155.08, 155.45, 149.13, 150.65],
          [1667395800000, 148.95, 152.17, 145, 145.03],
          [1667482200000, 142.06, 142.8, 138.75, 138.88],
          [1667568600000, 142.09, 142.67, 134.38, 138.38],
          [1667831400000, 137.11, 139.15, 135.67, 138.92],
          [1667917800000, 140.41, 141.43, 137.49, 139.5],
          [1668004200000, 138.5, 138.55, 134.59, 134.87],
          [1668090600000, 141.24, 146.87, 139.5, 146.87],
          [1668177000000, 145.82, 150.01, 144.37, 149.7],
          [1668436200000, 148.97, 150.28, 147.43, 148.28],
          [1668522600000, 152.22, 153.59, 148.56, 150.04],
          [1668609000000, 149.13, 149.87, 147.29, 148.79],
          [1668695400000, 146.43, 151.48, 146.15, 150.72],
          [1668781800000, 152.31, 152.7, 149.97, 151.29],
          [1669041000000, 150.16, 150.37, 147.72, 148.01],
          [1669127400000, 148.13, 150.42, 146.93, 150.18],
          [1669213800000, 149.45, 151.83, 149.34, 151.07],
          [1669386600000, 148.31, 148.88, 147.12, 148.11],
          [1669645800000, 145.14, 146.64, 143.38, 144.22],
          [1669732200000, 144.29, 144.81, 140.35, 141.17],
          [1669818600000, 141.4, 148.72, 140.55, 148.03],
          [1669905000000, 148.21, 149.13, 146.61, 148.31],
          [1669991400000, 145.96, 148, 145.65, 147.81],
          [1670250600000, 147.77, 150.92, 145.77, 146.63],
          [1670337000000, 147.07, 147.3, 141.92, 142.91],
          [1670423400000, 142.19, 143.37, 140, 140.94],
          [1670509800000, 142.36, 143.52, 141.1, 142.65],
          [1670596200000, 142.34, 145.57, 140.9, 142.16],
          [1670855400000, 142.7, 144.5, 141.06, 144.49],
          [1670941800000, 149.5, 149.97, 144.24, 145.47],
          [1671028200000, 145.35, 146.66, 141.16, 143.21],
          [1671114600000, 141.11, 141.8, 136.03, 136.5],
          [1671201000000, 136.69, 137.65, 133.73, 134.51],
          [1671460200000, 135.11, 135.2, 131.32, 132.37],
          [1671546600000, 131.39, 133.25, 129.89, 132.3],
          [1671633000000, 132.98, 136.81, 132.75, 135.45],
          [1671719400000, 134.35, 134.56, 130.3, 132.23],
          [1671805800000, 130.92, 132.42, 129.64, 131.86],
          [1672151400000, 131.38, 131.41, 128.72, 130.03],
          [1672237800000, 129.67, 131.03, 125.87, 126.04],
          [1672324200000, 127.99, 130.48, 127.73, 129.61],
          [1672410600000, 128.41, 129.95, 127.43, 129.93],
          [1672756200000, 130.28, 130.9, 124.17, 125.07],
          [1672842600000, 126.89, 128.66, 125.08, 126.36],
          [1672929000000, 127.13, 127.77, 124.76, 125.02],
          [1673015400000, 126.01, 130.29, 124.89, 129.62],
          [1673274600000, 130.47, 133.41, 129.89, 130.15],
          [1673361000000, 130.26, 131.26, 128.12, 130.73],
          [1673447400000, 131.25, 133.51, 130.46, 133.49],
          [1673533800000, 133.88, 134.26, 131.44, 133.41],
          [1673620200000, 132.03, 134.92, 131.66, 134.76],
          [1673965800000, 134.83, 137.29, 134.13, 135.94],
          [1674052200000, 136.82, 138.61, 135.03, 135.21],
          [1674138600000, 134.08, 136.25, 133.77, 135.27],
          [1674225000000, 135.28, 138.02, 134.22, 137.87],
          [1674484200000, 138.12, 143.32, 137.9, 141.11],
          [1674570600000, 140.31, 143.16, 140.3, 142.53],
          [1674657000000, 140.89, 142.43, 138.81, 141.86],
          [1674743400000, 143.17, 144.25, 141.9, 143.96],
          [1674829800000, 143.16, 147.23, 143.08, 145.93],
          [1675089000000, 144.96, 145.55, 142.85, 143],
          [1675175400000, 142.7, 144.34, 142.28, 144.29],
          [1675261800000, 143.97, 146.61, 141.32, 145.43],
          [1675348200000, 148.9, 151.18, 148.17, 150.82],
          [1675434600000, 148.03, 157.38, 147.83, 154.5],
          [1675693800000, 152.57, 153.1, 150.78, 151.73],
          [1675780200000, 150.64, 155.23, 150.64, 154.65],
          [1675866600000, 153.88, 154.58, 151.17, 151.92],
          [1675953000000, 153.78, 154.33, 150.42, 150.87],
          [1676039400000, 149.46, 151.34, 149.22, 151.01],
          [1676298600000, 150.95, 154.26, 150.92, 153.85],
          [1676385000000, 152.12, 153.77, 150.86, 153.2],
          [1676471400000, 153.11, 155.5, 152.88, 155.33],
          [1676557800000, 153.51, 156.33, 153.35, 153.71],
          [1676644200000, 152.35, 153, 150.85, 152.55],
          [1676989800000, 150.2, 151.3, 148.41, 148.48],
          [1677076200000, 148.87, 149.95, 147.16, 148.91],
          [1677162600000, 150.09, 150.34, 147.24, 149.4],
          [1677249000000, 147.11, 147.19, 145.72, 146.71],
          [1677508200000, 147.71, 149.17, 147.45, 147.92],
          [1677594600000, 147.05, 149.08, 146.83, 147.41],
          [1677681000000, 146.83, 147.23, 145.01, 145.31],
          [1677767400000, 144.38, 146.71, 143.9, 145.91],
          [1677853800000, 148.04, 151.11, 147.33, 151.03],
          [1678113000000, 153.79, 156.3, 153.46, 153.83],
          [1678199400000, 153.7, 154.03, 151.13, 151.6],
          [1678285800000, 152.81, 153.47, 151.83, 152.87],
          [1678372200000, 153.56, 154.54, 150.23, 150.59],
          [1678458600000, 150.21, 150.94, 147.61, 148.5],
          [1678714200000, 147.81, 153.14, 147.7, 150.47],
          [1678800600000, 151.28, 153.4, 150.1, 152.59],
          [1678887000000, 151.19, 153.25, 149.92, 152.99],
          [1678973400000, 152.16, 156.46, 151.64, 155.85],
          [1679059800000, 156.08, 156.74, 154.28, 155],
          [1679319000000, 155.07, 157.82, 154.15, 157.4],
          [1679405400000, 157.32, 159.4, 156.54, 159.28],
          [1679491800000, 159.3, 162.14, 157.81, 157.83],
          [1679578200000, 158.83, 161.55, 157.68, 158.93],
          [1679664600000, 158.86, 160.34, 157.85, 160.25],
          [1679923800000, 159.94, 160.77, 157.87, 158.28],
          [1680010200000, 157.97, 158.49, 155.98, 157.65],
          [1680096600000, 159.37, 161.05, 159.35, 160.77],
          [1680183000000, 161.53, 162.47, 161.27, 162.36],
          [1680269400000, 162.44, 165, 161.91, 164.9],
          [1680528600000, 164.27, 166.29, 164.22, 166.17],
          [1680615000000, 166.6, 166.84, 165.11, 165.63],
          [1680701400000, 164.74, 165.05, 161.8, 163.76],
          [1680787800000, 162.43, 164.96, 162, 164.66],
          [1681133400000, 161.42, 162.03, 160.08, 162.03],
          [1681219800000, 162.35, 162.36, 160.51, 160.8],
          [1681306200000, 161.22, 162.06, 159.78, 160.1],
          [1681392600000, 161.63, 165.8, 161.42, 165.56],
          [1681479000000, 164.59, 166.32, 163.82, 165.21],
          [1681738200000, 165.09, 165.39, 164.03, 165.23],
          [1681824600000, 166.1, 167.41, 165.65, 166.47],
          [1681911000000, 165.8, 168.16, 165.54, 167.63],
          [1681997400000, 166.09, 167.87, 165.56, 166.65],
          [1682083800000, 165.05, 166.45, 164.49, 165.02],
          [1682343000000, 165, 165.6, 163.89, 165.33],
          [1682429400000, 165.19, 166.31, 163.73, 163.77],
          [1682515800000, 163.06, 165.28, 162.8, 163.76],
          [1682602200000, 165.19, 168.56, 165.19, 168.41],
          [1682688600000, 168.49, 169.85, 167.88, 169.68],
          [1682947800000, 169.28, 170.45, 168.64, 169.59],
          [1683034200000, 170.09, 170.35, 167.54, 168.54],
          [1683120600000, 169.5, 170.92, 167.16, 167.45],
          [1683207000000, 164.89, 167.04, 164.31, 165.79],
          [1683293400000, 170.98, 174.3, 170.76, 173.57],
          [1683552600000, 172.48, 173.85, 172.11, 173.5],
          [1683639000000, 173.05, 173.54, 171.6, 171.77],
          [1683725400000, 173.02, 174.03, 171.9, 173.56],
          [1683811800000, 173.85, 174.59, 172.17, 173.75],
          [1683898200000, 173.62, 174.06, 171, 172.57],
          [1684157400000, 173.16, 173.21, 171.47, 172.07],
          [1684243800000, 171.99, 173.14, 171.8, 172.07],
          [1684330200000, 171.71, 172.93, 170.42, 172.69],
          [1684416600000, 173, 175.24, 172.58, 175.05],
          [1684503000000, 176.39, 176.39, 174.94, 175.16],
          [1684762200000, 173.98, 174.71, 173.45, 174.2],
          [1684848600000, 173.13, 173.38, 171.28, 171.56],
          [1684935000000, 171.09, 172.42, 170.52, 171.84],
          [1685021400000, 172.41, 173.9, 171.69, 172.99],
          [1685107800000, 173.32, 175.77, 173.11, 175.43],
          [1685453400000, 176.96, 178.99, 176.57, 177.3],
          [1685539800000, 177.33, 179.35, 176.76, 177.25],
          [1685626200000, 177.7, 180.12, 176.93, 180.09],
          [1685712600000, 181.03, 181.78, 179.26, 180.95],
          [1685971800000, 182.63, 184.95, 178.04, 179.58],
          [1686058200000, 179.97, 180.12, 177.43, 179.21],
          [1686144600000, 178.44, 181.21, 177.32, 177.82],
          [1686231000000, 177.9, 180.84, 177.46, 180.57],
          [1686318656000, 177.9, 182.14, 181.24, 182]
        ]
      }
    ]
  });

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
