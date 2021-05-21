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
  Create:{
      flex:1,
      
  }
};

const rightButtonConfig = {
  title: "submit",
  handler: () => alert("hello!"),
};

const titleConfig = {
  title: "Write you note",
};
const alert = () => {
  alert("cliked");
};
function Create({changeView, user ,url }) {
  const [image, setimage] = useState("");
  const [note, setnote] = useState("");
  const [error, setError] = useState(null);
  var userId = user.id
    const getUser = () => {
        axios.post(`http://${url}:3000/note`,{image, note , userId}).then(({data})=>{
            console.log('hello',data)
                
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
        label="Image url"
        style={{ height: 70, width: 400 }}
        onChangeText={setimage}
      />
      <TextInput
        label="Write your note here ......."
        style={{ height: 150, width: 400 }}
        onChangeText={setnote}
      />

      <Button mode="contained" onPress={()=>getUser(username)}>
        Submit
      </Button>
 
      
    </View>
  );
}

export default Create;