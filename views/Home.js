// import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, Button } from "react-native-paper";
// import Menu from "./Menu.js"
export default function App({ data,changeView }) {
  console.log("data", data);
  var e
  return (
    <View style={styles.container}>
      <Text>Note</Text>
      {data.map((element,i) => (
        <Card key={i}>
           
            <Image
            style={styles.tinyLogo}
              source={{
                uri: element.image,
              }}
            ></Image>
          <Text>{element.note}</Text>
          <Card.Actions>
            <Button onPress={() => changeView('update',element)
        
        }>Update</Button>
            <Button>Delete</Button>
          </Card.Actions>
          <Text onPress={() =>changeView("create",element)}>Click to Create note</Text>
        </Card>
      ))}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
  tinyLogo: {
    width: 400,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
