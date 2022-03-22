import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
// 测试换行
export default class App extends React.Component{
    render(){
        return (
            <View style={{flex:0,justifyContent:'center'}}>
                <View style={styles.companyTitleBox}>
                    <Text style={styles.companyTitle}>登录</Text>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    companyTitleBox:{
        width:"100%",height:48.5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        shadowColor: 'red',//#1a505050
        shadowOffset:{width: 0,height: 1},
        shadowOpacity: 1,
        shadowRadius: 2,//模糊半径
        elevation: 0.5, //这个决定阴影的大小
    },
    companyTitle:{
        fontSize: 19, //20-1
        letterSpacing: 4,
        color: '#3b3b3b'
    },
})