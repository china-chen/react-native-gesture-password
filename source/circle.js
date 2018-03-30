import React from 'react'
import {StyleSheet, View, PixelRatio} from 'react-native'
import PropTypes from 'prop-types';

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {color, normalColor, fill, x, y, r, inner, outer} = this.props;
    return (
      <View style={[styles.outer,
        {
          left: x - r,
          top: y - r,
          width: 2 * r,
          height: 2 * r,
          borderRadius: r,
          backgroundColor: '#ffffff'
        }, {borderColor: normalColor, borderWidth: 1/PixelRatio.get()},
        fill && {borderColor: color, borderWidth: 1/PixelRatio.get()},
        !outer && {borderWidth: 0}]}>

        {inner && <View style={[
          !outer && styles.inner,
          {width: 2 * r / 2, height: 2 * r / 2, borderRadius: r / 2},
          fill && {backgroundColor: color}
        ]}/>}
      </View>
    )
  }
}

Circle.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
  r: PropTypes.number,
  inner: PropTypes.bool,
  outer: PropTypes.bool
}

Circle.defaultProps = {
  inner: true,
  outer: true
}

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    borderColor: '#8E91A8',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    backgroundColor: '#8E91A8'
  }
})

module.exports = Circle;    // for compatible with require only
