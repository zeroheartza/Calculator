import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FixedDimensionsBasics extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num1: "", num2: "", sum: "",
      status: "", clear: "", check: 0,
    }
  }

  numPess(e) {
    if (this.state.check == 0) {
      var temp1 = this.state.num1 + e;
      this.setState({ num1: temp1 });
    }
    if (this.state.check == 1) {
      var temp2 = this.state.num2 + e;
      this.setState({ num2: temp2 });
    }
    var temp = this.state.sum + e;
    this.setState({ sum: temp });
  }
  btnPess(e) {
    var x = 1;
    this.setState({ status: e });
    this.setState({ check: x });
    var temp = this.state.sum + e;
    this.setState({ sum: temp });
  }
  clear() {
    var x = 0;
    this.setState({ check: x });
    this.setState({ status: this.state.clear });
    this.setState({ sum: this.state.clear });
    this.setState({ num1: this.state.clear });
    this.setState({ num2: this.state.clear });
  }
  sum() {
    var unit1 = Number(this.state.num1);
    var unit2 = Number(this.state.num2)
    var sumUnit = 0;
    if (this.state.status == '+') {
      sumUnit = unit1 + unit2
    }
    if (this.state.status == '-') {
      sumUnit = unit1 - unit2
    }
    if (this.state.status == 'x') {
      sumUnit = unit1 * unit2
    }
    if (this.state.status == '÷') {
      sumUnit = unit1 / unit2
    }
    this.setState({ num2: this.state.clear })
    this.setState({ num1: sumUnit });
    this.setState({ sum: sumUnit });
  }
  render() {
    return (
      <LinearGradient

        colors={['#1C1C1C', '#1C1C1C', '#1C1C1C']}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flex: 1, backgroundColor: '#1C1C1C' }} />
            <Text style={styles.txt4}>{this.state.sum} </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn3} onPress={() => this.clear()}><Text style={styles.txt1}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn3} ><Text style={styles.txt1}>+/-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn3}><Text style={styles.txt1}>%</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn4} onPress={() => this.btnPess('÷')}><Text style={styles.txt2}>÷</Text></TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('7')}><Text style={styles.txt2}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('8')}><Text style={styles.txt2}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('9')}><Text style={styles.txt2}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn4} onPress={() => this.btnPess('x')}><Text style={styles.txt2}>x</Text></TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('4')}><Text style={styles.txt2}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('5')}><Text style={styles.txt2}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('6')}><Text style={styles.txt2}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn4} onPress={() => this.btnPess('-')}><Text style={styles.txt2}>-</Text></TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('1')}><Text style={styles.txt2}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('2')}><Text style={styles.txt2}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('3')}><Text style={styles.txt2}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn4} onPress={() => this.btnPess('+')}><Text style={styles.txt2}>+</Text></TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn1} onPress={() => this.numPess('0')}><Text style={styles.txt2}> 0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => this.numPess('.')}><Text style={styles.txt2}>.</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn4} onPress={() => this.sum()}><Text style={styles.txt2}>=</Text></TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  btn4: {
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#FF9500',
    padding: 15,
    margin: 9,
    borderRadius: 50
  },
  btn3: {
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#D4D4D2',
    padding: 15,
    margin: 9,
    borderRadius: 50
  },
  btn2: {
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#505050',
    padding: 15,
    margin: 9,
    borderRadius: 50
  },
  btn1: {
    width: 160,
    height: 70,
    backgroundColor: '#505050',
    padding: 10,
    margin: 9,
    borderRadius: 50
  },
  txt4: {
    fontSize: 60,
    color: 'white'
  },
  txt2: {
    fontSize: 30,
    color: 'white'
  },
  txt1: {
    fontSize: 30,
    color: 'black'
  }
})