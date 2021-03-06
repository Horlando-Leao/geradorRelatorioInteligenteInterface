import React,{Component, useState, useEffect } from 'react';
import { getBase } from "../Util/operation";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const GraphicPage = (params=[]) => {

      const [data, setData] = useState(getBase());

      function handleSetData(params) {
        setData(params);
      }
      useEffect(() => {
        handleSetData(getBase())
      }, [])

      //handleSetData(getBase())
      const width_ = window.innerWidth;
      const height_ = window.innerHeight;
      const dataa = [
        {ano: '2021-01-01', valor: 2400},
        {ano: '2020-01-01', valor: 1398},
        {ano: '2019-01-01', valor: 9800},
        {ano: '2018-01-01', valor: 3908},
        {ano: '2017-01-01', valor: 4800},
        {ano: '2016-01-01', valor: 3800},
        {ano: '2015-01-01', valor: 4300},
        ]; 

      if(data.length === 0){
        return (
          <div>
            <h1>-----------------------</h1>
          </div>
        );

      }else{
      return (
        <LineChart
          width={width_ * 0.90}
          height={height_ * 0.60}
          data={data}
          margin={{top: 5, right: 10, left: 10, bottom: 5}}
          >
          <Line
            type='monotone'
            dataKey='valor'
            stroke='#8884d8'
            activeDot={{r: 12}}
            />
          <CartesianGrid strokeDasharray='3 3'/>
          <Tooltip/>
          <YAxis/>
          <XAxis dataKey='ano'/>
          <Legend />
        </LineChart>
        
      );
    }
}

  
export default GraphicPage