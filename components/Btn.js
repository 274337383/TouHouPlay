import React, {Component} from "react";
import {View, Text} from "react-native"
import {inject} from "mobx-react";

@inject("RootStore")
class Index extends Component {
    render() {
        return (
            <View><Text>Btn:{this.props.RootStore.name}</Text></View>
        );
    }
}

export default Index