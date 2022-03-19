import React, {Component} from 'react';
import axios from 'axios';
import Charts from './charts.component';

class DataChart extends Component{

    constructor() {
        super();
        this.state={
            chartData:null
        }
    }

   
    componentDidMount() {
        this.interval = setInterval(() => this.getChartData(), 10000);

    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    getChartData() {
     axios.get(`https://api.coingecko.com/api/v3/exchange_rates`)
            .then(res => {
                const jsonarray = Object.values(res.data.rates);
                var labels = jsonarray.map(function (e) {
                    return e.name;
                });
                var data = jsonarray.map(function (e) {
                    return e.value;
                });
                var Color = jsonarray.map(function (e) {
                    var letters = '0123456789ABCDEF'.split('');
                    var color = '#';
                    for (var i = 0; i < 6; i++ ) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                });

                this.setState({
                    chartData: {
                        labels: labels,
                      
                        datasets: [
                            {
                                label: 'exchange_rates',
                                data: data,
                                backgroundColor: Color

                            }
                        ]
                    }
                });
                console.log(this.state.chartData)
            })
    
      }

    render(){
     const data= this.state.chartData
        return(
            <div >
          { data &&

                <Charts chartData={this.state.chartData}></Charts>
            }
                        </div>

        );
    }
}

export default DataChart;