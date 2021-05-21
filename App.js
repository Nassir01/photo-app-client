import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Login from "./views/Login.js";
import Signup from "./views/signUp.js";
import Home from "./views/Home.js";
import Create from "./views/CreateNote.js";
import axios from "react-native-axios";
// import NavigationBar from 'react-native-navbar';
export default function App() {
  const [view, setView] = useState("Login");
  const [data, setData] = useState([]);

  const [user, setUser] = useState(null);
  var component;
const url="192.168.1.197"
  useEffect(() => {
    axios
    .get(`http://${url}:3000/note/${user.id}`)
    .then(({ data }) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  const changeView = (view) => {
    setView(view);
  };
  if (view === "Login") {
    component = (
      <Login
      url={url}
        setUser={setUser}
        changeView={(view) => {
          changeView(view);
        }}
      />
    );
  }
  if (view === "Signup") {
    component = (
      <Signup
      url={url}
        changeView={(view) => {
          changeView(view);
        }}
      />
    );
  }
  if (view === "home") {
    component = (
      <Home
      url={url}
        data={data}
        changeView={(view) => {
          changeView(view);
        }}
      />
    );
  }
  if (view === "create") {
    component = (
      <Create
      url={url}
        user={user}
        changeView={(view) => {
          changeView(view);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
 
      {component}
      {/* <Home /> */}
      {/* <Menu /> */}
      {/* <View style={styles.container}>
      <TextInput
      label="Email"
      
     style={{height:100, width:200}} 
    /></View> */}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const style = {
  container: {
    flex: 1,
  },
};
 
const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};
 
const titleConfig = {
  title: 'Hello, world',
};