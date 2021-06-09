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
};

const rightButtonConfig = {
  title: "submit",
  handler: () => alert("hello!"),
};

const titleConfig = {
  title: "Sign Up",
};
const alert = () => {
  alert("cliked");
};
function Signup({changeView,url}) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const fetchData = () => {
      console.log({name,username,password})
   axios.post(`http://${url}:3000/user`,{name,username,password}).then((res)=>{
      console.log("hello");

       console.log(res.data);
       changeView("Login")
   }).catch((err)=>{console.log(err);})
    // const toggleSwitch = () => setState(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
      <NavigationBar title={titleConfig} />

      <TextInput
        label="Name"
        style={{ height: 70, width: 400 }}
        onChangeText={setName}
      />
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

      <Button mode="contained" onPress={()=>{fetchData()
    } }>
        Submit
      </Button>
      <Text  onPress={()=>{
    changeView("Login")} }>You have already an account just Login .</Text>
    
    </View>
  );
}

export default Signup;
