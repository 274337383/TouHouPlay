import React,{Component} from 'react';
import {pxToDp} from "./util/styleKits";
import validator from "./util/validator";
import {Input} from "react-native-elements";
import {View, StatusBar, Image, Text} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const icon = <FontAwesome5 name={'comments'} />;

class App extends Component {

    state={
        phoneNumber: "",
        phoneValid: true
    }

    phoneNumberChangeText=(phoneNumber)=> {
        this.setState({phoneNumber})
    }

    phoneNumberSubmitEditing=()=> {
        const {phoneNumber}=this.state
        const phoneValid=validator.validatorPhone(phoneNumber)
        if (!phoneValid) {
            this.setState({phoneValid})
            return
        }
    }


    render() {
        const {phoneNumber, phoneValid}=this.state
        return (
            <View>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image style={{height:pxToDp(250),width:"100%",borderRadius: pxToDp(25)}} source={require('./images/ziyuan.jpeg')} resizeMode='cover' />
                <View style={{padding: pxToDp(20)}}>
                    <View><Text style={{fontSize: pxToDp(25), fontWeight: "bold"}}>登录</Text>
                        <View style={{marginTop: pxToDp(30)}}>
                            <Input
                                placeholder="请输入手机号"
                                maxLength={11}
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                inputStyle={{color: "#333"}}
                                onChangeText={this.phoneNumberChangeText}
                                errorMessage={phoneValid ? "":"非法格式,请重新输入"}
                                onSubmitEditing={this.phoneNumberSubmitEditing}
                                leftIcon={{
                                    type: "font-awesome",
                                    name: "phone",
                                    color: "#4174b7",
                                    size: pxToDp(20)}} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default App;