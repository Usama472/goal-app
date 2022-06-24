import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

function GoalInputItem(props) {
  // test input
  const [inputGoal, setInputGoal] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputGoal}
        onChangeText={(text) => {
          setInputGoal(text);
        }}
        placeholder="Your course goal!"
      />
      <Button
        title="new goal"
        onPress={() => {
          props.onAddGoal(inputGoal);
          setInputGoal("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    fontSize: 16,
    width: "75%",
  },
});

export default GoalInputItem;
