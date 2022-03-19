import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

class Charts extends Component{
  constructor(props){
    super(props);
    console.log(props.chartData)
    this.state = {
      chartData:props.chartData
    }  
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
           
            legend:{
              display:true,
              position: 'right'
            },
          }}
        />

        <Bar
          data={this.state.chartData}
          options={{
            legend:{
              display:true,
              position: 'right'
            },
          }}
        />

      </div>
    )
  }
}

export default Charts;