import React, { useState } from "react";
import { Text, View } from "react-native";
import NavigationBar from "react-native-navbar";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import Textarea from "react-native-textarea";

import axios from "react-native-axios";
const styles = {
  container: {
    flex: 1,
    //   alignItems: 'center',
    justifyContent: "center",
  },
  Create: {
    flex: 1,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: "#F5FCFF",
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333",
  },
};

const rightButtonConfig = {
  title: "Update",
  handler: () => alert("hello!"),
};

const titleConfig = {
  title: "Update",
};
const alert = () => {
  alert("cliked");
};
function Update({ changeView, user, url, note , setData, allNotes}) {
  const [image, setimage] = useState("");
  const [notes, setnote] = useState("");
  const [error, setError] = useState(null);
  var userId = user._id;
  const updateNote = (id) => {

    axios
      .patch(`http://${url}:3000/note/${id}`, { image, note: notes })
      .then(({ data }) => {
        var newData = allNotes.filter(element => element._id !== data._id)
        setData([data, ...newData])
        changeView("home");
      })
      .catch((err) => {
        console.log("err", err);
        setError(err.message);
      });
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
        placeholder={"Write your note here ......."}
        placeholderTextColor={"#c7c7c7"}
        underlineColorAndroid={"transparent"}
      />
      <Button
        mode="contained"
        onPress={() => {
            updateNote(note._id);
        }}
      >
        Update
      </Button>
    </View>
  );
}

export default Update;
