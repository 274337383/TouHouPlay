import React, {Component} from "react";
import {View} from "react-native"
import RootStore from "./mobx"
import {Provider} from "mobx-react"
import Btn from "./components/Btn"

class App extends Component {
    render() {
        return (
            <View>
                <Provider RootStore={RootStore}>
                    <Btn></Btn>
                </Provider>
            </View>
        );
    }
}


export default App