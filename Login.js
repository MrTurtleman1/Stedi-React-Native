import {useState} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";

const sendText= async (phoneNumber)=>{
 console.log("PhoneNumber: ", phoneNumber);
 await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
  method: 'POST',
  headers:{
    'content-type':'application/text'
  }
  })

}

const getToken= async({phoneNumber, OTP, setUserLoggedIn, setUserName})=>{
 const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
 method: 'POST',
 body:JSON.stringify({oneTimePassword:OTP,phoneNumber}),
 headers: {
   'content-type':'application/json'
 }
});

const responseCode = tokenResponse.status;//200 means it works
console.log("Response Status Code", responseCode)
if(responseCode==200){
  setUserLoggedIn(true);
}
const tokenResponseString = await tokenResponse.text();
console.log("Token", tokenResponseString);

const emailResponse = await fetch('https://dev.stedi.me/validate/'+tokenResponseString,{
  headers:{
    'content-type':'application/text'
}
});
const userName = await emailResponse.text();
console.log("Email", userName);
setUserName(userName);
}

//const

const Login = (props) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [OTP, setOTP] = useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="801-555-1212"
          placeholderTextColor='#AAAAAA'
        />
        <TouchableOpacity
            style={styles.button}
            onPress=
            
            {()=>{sendText(phoneNumber);}}>
              
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={setOTP}
          value={OTP}
          placeholder="1234"
          placeholderTextColor='#AAAAAA'
          keyboardType="numeric"
          secureTextEntry={true}
        />
        <TouchableOpacity
            style={styles.button}
            onPress=
            
            {()=>{
              getToken({phoneNumber, OTP, setUserLoggedIn:props.setUserLoggedIn, setUserName:props.setUserName});}}>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  <Text>Login</Text>

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    margin:{
        marginTop:100
    },
    button: {
        alignItems: "center",
        backgroundColor: "#AAAAAA",
        padding: 10
      },
});

  export default Login;