// imports
import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

// functional component
// Root component that is rendered in your app
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...courseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}]);
    console.log(courseGoals);
    setModalIsVisible(false);
  };

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button 
        title="Add New Goal" 
        color="#5e0acc"
        onPress={startAddGoalHandler} 
      />
      <GoalInput onAddGoal={addGoalHandler} showModal={modalIsVisible} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} 
            />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
      </View>
    </View>
    </>
  );
}

// Style sheet object
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },
  goalsContainer: {
    flex: 5,
  },
});
