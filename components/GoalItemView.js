import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItemView(props) {
  return (
    <View style={styles.goalsList}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.itemData.item.id)}
        style={({ pressed }) => pressed && styles.onItemPress}
      >
        <Text style={styles.goalsListText}>{`${props.itemData.index + 1}. ${
          props.itemData.item.name
        }`}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsList: {
    backgroundColor: "#156590",
    marginTop: 5,
    borderRadius: 5,
  },
  goalsListText: {
    fontSize: 18,
    color: "white",
    textTransform: "capitalize",
    padding: 15,
  },
  onItemPress: {
    color: "#ffffff",
    opacity: 0.5,
    backgroundColor: "#1565c0",
  },
});

export default GoalItemView;
