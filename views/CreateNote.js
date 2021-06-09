import React, { useState } from "react";
import { Text, View } from "react-native";
import NavigationBar from "react-native-navbar";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import Textarea from 'react-native-textarea';
import axios from 'react-native-axios'
const styles = {
  container: {
    flex: 1,
    //   alignItems: 'center',
    justifyContent: "center",
  },
  Create:{
      flex:1,
      
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
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
    const addPtoduct = () => {
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
     
       <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={setnote}
    maxLength={120}
    placeholder={'Write your note here .......'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
      <Button mode="contained" onPress={()=>addPtoduct()}>
        Create
      </Button>
 
      <Text onPress={()=>{changeView("home")}}>You changed your mind go back ....</Text>
    </View>
  );
}
export default Create;