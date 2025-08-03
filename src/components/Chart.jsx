import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from 'recharts';


const Chart = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY =
    "02f17de038572693b831fee31c60edf111bc3d4b86021c731824afaa0efa6aa3"; // Replace with your CryptoCompare API key
  const URL = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=7&api_key=${API_KEY}`;

  const [displayPrice, setDisplayPrice] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        if (result.Data && result.Data.Data) {
          const formattedData = result.Data.Data.map((point) => ({
            date: new Date(point.time * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
            price: point.close,
          }));
          setData(formattedData);
          setDisplayPrice(formattedData[formattedData.length - 1].price);
        } else {
          setError("Error loading chart data");
        }
      } catch (err) {
        setError("Network error");
        console.error(err);
      }
    };
    fetchChartData();
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const price = payload[0].value;
      setDisplayPrice(price); // update your displayPrice state
    }
    return null; // No visible tooltip
  };

  return (
    <div className="w-full h-[80vh] bg-black p-[20px] lg:pr-[50px]">
  <div className="text-[1.5rem] font-bold mb-[0.5rem] text-white">
    {displayPrice !== null ? `$${displayPrice}` : "Loading..."}
  </div>
  <h2 className="text-white">BTC Price (Last 7 Days)</h2>
  {error && <p style={{ color: "red" }}>{error}</p>}
  {data.length > 0 && (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={data}>
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F29C37" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#F29C37" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Minimal Axes */}
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#F29C37", fontSize: 12 }}
        />
        <YAxis
          domain={["auto", "auto"]}
          axisLine={false}
          tickLine={false}
          tick={false}
          hide={true}
        />

        {/* Tooltip */}
        <Tooltip content={CustomTooltip} />

        <Area
          type="monotone"
          dataKey="price"
          stroke={false}
          fill="red"
          fillOpacity={1}
        />

        <Line
          type="monotone"
          dataKey="price"
          stroke="#F29C37"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )}
</div>

  );
};

export default Chart;



