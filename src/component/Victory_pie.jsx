import React, { Component } from 'react';
import {VictoryPie} from 'victory';


export default class PieGraph extends Component {
  render() {
    return (      
        <VictoryPie style={{ parent: { maxWidth: "20%" }, labels: { fontSize: 12, fill: "black"}}}
          colorScale={["tomato", "#0A6D7E", "pink", "skyblue", "black"]}
          data={[
            { x: "Cats", y: 15 },
            { x: "Dogs", y: 25 },
            { x: "Birds", y: 35 },
            { x: "Elephants", y: 15 },
            { x: "Dolphins", y: 10 },
          ]}
        />
    )
  }
}