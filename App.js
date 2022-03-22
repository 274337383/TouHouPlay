import React,{Component} from 'react';
import {View, StatusBar, ImageBackground, StyleSheet, ActivityIndicator} from 'react-native';
import {pxToDp, screenHeight, screenWidth} from "./util/styleKits"
import colors from "react-native/Libraries/NewAppScreen/components/Colors";

class App extends Component {
    render() {
        return (
            <View style={loadStyles.wrapper}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <ImageBackground style={{height:pxToDp(800),width:"100%"}} source={require('./images/ziyuan.jpeg')} resizeMode='cover'>
                    <View style={loadStyles.box}>
                        <ActivityIndicator
                            animating={true}
                            color={colors.white}
                            size='small'/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const loadStyles=StyleSheet.create({
    wrapper:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        height:screenHeight,
        width:screenWidth,
        zIndex:10,

    },
    box:{

        paddingVertical:12,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        borderRadius:6
    },
    txt:{
        marginLeft:20,
        fontSize:14,
        color:colors.white
    }
})

export default App;