import React, { Component } from 'react';
import {VictoryChart, VictoryLine, VictoryTheme } from 'victory';


export default class LineGraph extends Component {
  render() {
    return (
      <VictoryChart style={{ parent: { maxWidth: "20%" } }}
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "black" },
            parent: { border: "1px solid #222" }
          }}
          interpolation="natural"
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "skyblue" },
            parent: { border: "1px solid #222" }
          }}
          interpolation="natural"
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 3 },
            { x: 4, y: 5 },
            { x: 5, y: 6 }
          ]}
        />
      </VictoryChart>
    )
  }
}