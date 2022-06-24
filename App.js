import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItemView from "./components/GoalItemView";
import GoalInputItem from "./components/GoalInputItem";

export default function App() {
  // goals data
  const [goalsData, setGoalsData] = useState([]);

  const onAddGoal = (goal) => {
    setGoalsData((goals) => [
      ...goals,
      { name: goal, id: Math.random().toString() },
    ]);
  };

  const onDeleteHandler = (goalId) => {
    setGoalsData((goals) => goals.filter((goal) => goal.id !== goalId));
  };
  return (
    <>
      <View style={styles.container}>
        <GoalInputItem onAddGoal={onAddGoal} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsData}
            renderItem={(itemData) => (
              <GoalItemView
                itemData={itemData}
                onDeleteItem={onDeleteHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 4,
    marginTop: 20,
  },
});
