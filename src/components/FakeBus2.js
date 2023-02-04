import React, { Component } from "react";
import Mapview, { AnimatedRegion, MarkerAnimated } from "react-native-maps";

class FakeBus2 extends Component {
  constructor(props) {
    super(props);
    this.state = new AnimatedRegion({
      latitude: 23.058955,
      longitude: -109.694999,
    })
  }

  

  render() {
    return (
      <MarkerAnimated
        ref={(marker) => {
          this.marker = marker;
        }}
        coordinate={this.state.coordinate}
      />
    );
  }
}

export default FakeBus2;
