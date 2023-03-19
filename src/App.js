import React, { Component } from 'react';
import BarGraph from './component/Victory_bar';
import LineGraph from './component/Victory_line';
import SparkGraph from './component/Victory_sparkline';
import PieGraph from './component/Victory_pie';

export default class App extends Component {
  render() {
    return (
      <div>       
        <LineGraph/>
        <PieGraph/>
        <SparkGraph/>
        <BarGraph/>
      </div>
    )
  }
}
