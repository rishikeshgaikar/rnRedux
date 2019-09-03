import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }

  // countPlus() {
  //   this.setState({count: this.state.count + 1});
  // }
  // countMinus() {
  //   this.setState({count: this.state.count - 1});
  // }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Plus" onPress={() => this.props.countPlus()}></Button>
        <Text style={{fontSize: 50, padding: 20}}> {this.props.count} </Text>
        <Button title="Minus" onPress={() => this.props.countMinus()}></Button>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countPlus: () => {
      dispatch({type: 'PLUS_COUNT'});
    },
    countMinus: () => {
      dispatch({type: 'MINUS_COUNT'});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
