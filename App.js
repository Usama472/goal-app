import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItemView from "./components/GoalItemView";
import GoalInputItem from "./components/GoalInputItem";

export default function App() {
  // goals data
  const [goalsData, setGoalsData] = useState([]);
  // modal
  const [goalInputModal, setGoalInputModal] = useState(false);

  const onAddGoal = (goal) => {
    setGoalsData((goals) => [
      ...goals,
      { name: goal, id: Math.random().toString() },
    ]);
    setGoalInputModal(false);
  };

  const onDeleteHandler = (goalId) => {
    setGoalsData((goals) => goals.filter((goal) => goal.id !== goalId));
  };
  return (
    <>
      <View style={styles.container}>
        <GoalInputItem
          showModal={goalInputModal}
          onAddGoal={onAddGoal}
          onClose={() => {
            setGoalInputModal(false);
          }}
        />
        <Button
          color="#2196f8"
          title="Add New Goal"
          onPress={() => {
            setGoalInputModal(true);
          }}
        />
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
