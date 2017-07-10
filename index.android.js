import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class starbucks extends Component {
  state = {
    animation: new Animated.Value(0)
  }
  toggleOpen = () => {
    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      }).start();
    } else {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start();
    }
    this._open = !this._open;
  }
  render() {

    const scaleInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30]
    });

    const bgStyle = {
      transform: [
        {
          scale: scaleInterpolate,
        }
      ]
    };
    

    const reloadInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -70]
    });

    const orderInterpolate = this.state.animation.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [0, -70, -140]
    });

    const reloadStyle = {
      transform: [
        {
          translateY: reloadInterpolate
        }
      ]
    };

    const orderStyle = {
      transform: [
        {
          translateY: orderInterpolate
        }
      ]
    }
    const labelPositionInterpolate = this.state.animation.interpolate({
      inputRange: [0, .8, 1],
      outputRange: [-30, -60, -90]
    });
    const opacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, .8, 1],
      outputRange: [0, 0, 1],
    });

    const labelStyle = {
      opacity: opacityInterpolate,
      transform: [
        { 
          translateX: labelPositionInterpolate
        }
      ]
    }


    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background, bgStyle]} />
        <TouchableOpacity style={[styles.button, styles.other, orderStyle]}>
          <Animated.Text style={[styles.label, labelStyle]}>Order</Animated.Text>
          <Text style={styles.otherText}>ICON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.other, reloadStyle]}>
          <Animated.Text style={[styles.label, labelStyle]}>Reload</Animated.Text>
          <Text style={styles.otherText}>ICON</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleOpen} style={[styles.button, styles.pay]}>
          <Animated.Text style={[styles.label, labelStyle]}>Pay</Animated.Text>
          <Text style={styles.payText}>$5.00</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: "rgba(0,0,0,.2)",
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#333",
    shadowOpacity: .1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  other: {
    backgroundColor: "#FFF",
  },
  otherText: {
    color: "#555"
  },
  payText: { 
    color: "#FFF"
  },
  pay: {
    backgroundColor: "#00B15E",
  },
  label: {
    color: "#FFF",
    position: "absolute",
    fontSize: 18,
    backgroundColor: "transparent",
  }
});

AppRegistry.registerComponent('starbucks', () => starbucks);
