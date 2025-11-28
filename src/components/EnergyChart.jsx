import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const EnergyChart = ({ title, data, dataKey, color = "#8884d8", unit }) => {
  return (
    <div className="glass-panel chart-panel" style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
      <div className="panel-header">
        <span className="panel-title">{title}</span>
        <span className="panel-unit" style={{ fontSize: '0.9rem' }}>Last 24 Hours</span>
      </div>
      
      <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={true} horizontal={true} />
            <XAxis 
              dataKey="time" 
              stroke="#a0a0a0" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#a0a0a0" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              unit={unit}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#fff'
              }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ color: '#ccc' }}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              fillOpacity={1} 
              fill={`url(#color${dataKey})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnergyChart;
