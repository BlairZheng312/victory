import React, { Component } from 'react';
import { VictoryLine } from 'victory';
import { ave } from './ave'

const data = [
  { x: 1, y: 25 },
  { x: 2, y: 33 },
  { x: 3, y: 56 },
  { x: 4, y: 42 },
  { x: 5, y: 79 }
]

export default class SparkGraph extends Component {
  render() {
    return (

      <div class="VictoryContainer" style={{ position: "relative", marginBottom: 60}}>
        <p
          style={{ color: "#444", fontSize: 36, fontFamily: "Monaco", fontWeight: "bold", position: "absolute", marginLeft: 20, marginTop: 50, }}>
          {ave(data)}
        </p>
        <br />
        <p
          style={{ color: "#444", fontSize: 24, fontFamily: "Monaco", fontWeight: "bold", position: "absolute", marginLeft: 20, marginTop: 80, }}>
          Animals
        </p>
        <VictoryLine
          style={{
            data: { stroke: "#444", strokeWidth: 8 },
            parent: { maxWidth: "10%", left: 60 },
            marginLeft: 60,
          }
          }
          data={data}
        />

      </div>

    )
  }
}