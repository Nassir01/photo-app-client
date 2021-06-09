import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View, Image,StatusBar  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Login from "./views/Login.js";
import Signup from "./views/signUp.js";
import Home from "./views/Home.js";
import Create from "./views/CreateNote.js";
import Update from "./views/Update.js"
import axios from "react-native-axios";
// import NavigationBar from 'react-native-navbar';
export default function App() {
  const [view, setView] = useState("Login");
  const [note, setNote] = useState(null);
  const [data, setData] = useState([]);


  const [user, setUser] = useState(null);
  var component;
var url="192.168.22.137"
// require module
// var NetworkInfo = require('react-native-network-info');

// // Get Local IP
// NetworkInfo.getIPAddress(ip => {
//   console.log(ip);
// });
  useEffect(() => {
    console.log('user',user)
    axios
    .get(`http://${url}:3000/note`)
    .then(({ data }) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const changeView = (view,note) => {
    setView(view);
    setNote(note);
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
        setNote={setNote}
        changeView={(view,note) => {
          changeView(view,note);
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
  if (view === "update") {
    component = (
      <Update
      setData={setData}
      allNotes={data}
      note={note}
      url={url}
        user={user}
        changeView={(view) => {
          changeView(view);
        }}
      />
    );
  }
  if(data===[]){
    component=(<View style={styles.container}><Text onPress={()=>changeView("create")}>You Don't have notes please create</Text></View>)
  }
  return (
    <SafeAreaView style={styles.cont}>
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cont: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
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