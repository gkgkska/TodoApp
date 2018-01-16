import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

class Row extends Component{
  render() {
    const { complete } = this.props;
    return (
      <View style={styles.container}>
        <Switch
            value={complete}
            onValueChange={this.props.onComplete}
        />
        <View style={styles.textWrap}>
            <Text style={[styles.text, complete && styles.complete]}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    textWrap: {
        flex: 1,
        marginHorizontal: 10,
    },
    complete: {
        textDecorationLine: "line-through"
    },
    text: {
        fontSize: 22,
    }
})
export default Row;