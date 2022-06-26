import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInputItem(props) {
  // test input
  const [inputGoal, setInputGoal] = useState("");

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-2.jpg")}
        />
        <TextInput
          style={styles.textInput}
          value={inputGoal}
          onChangeText={(text) => {
            setInputGoal(text);
          }}
          placeholder="Your course goal!"
        />
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Button
              title="new goal"
              onPress={() => {
                props.onAddGoal(inputGoal);
                setInputGoal("");
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button title="close" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  logo: {
    height: 150,
    width: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    fontSize: 16,
    width: "80%",
  },
  btnGroup: {
    marginTop: 5,
    flexDirection: "row",
  },
  btn: {
    padding: 2,
    width: "30%",
    marginHorizontal: 5,
  },
});

export default GoalInputItem;
