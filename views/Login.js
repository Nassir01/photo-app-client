import React, { useState } from "react";
import { Text, View } from "react-native";
import NavigationBar from "react-native-navbar";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import axios from 'react-native-axios'
const styles = {
  container: {
    flex: 1,
    //   alignItems: 'center',
    justifyContent: "center",
  },
  Login:{
      flex:1,
      
  }
};

const rightButtonConfig = {
  title: "submit",
  handler: () => alert("hello!"),
};

const titleConfig = {
  title: "Sign In",
};
const alert = () => {
  alert("cliked");
};
function Login({changeView, setUser,url}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
    const getUser = (username) => {
        axios.post(`http://${url}:3000/user/login`,{username, password}).then(({data})=>{
            console.log('hello')
                setUser(data);
                changeView('home')
        }).catch((err)=>{
            console.log('err', err)
            setError(err.message)
        })
       };
  return (
    <View style={styles.container}>
      <NavigationBar title={titleConfig} />

     
      <TextInput
        label="Username"
        style={{ height: 70, width: 400 }}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        style={{ height: 70, width: 400 }}
        onChangeText={setPassword}
      />

      <Button mode="contained" onPress={()=>getUser(username)}>
        Submit
      </Button>
      <Text onPress={()=>changeView("Signup")}>You don't have an account Sign up .</Text>
      {
          error ? <Text >{error}</Text> : null
      }
    </View>
  );
}

export default Login;