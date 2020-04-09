// Main.js
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import CheckBox from 'react-native-check-box';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: '50%',
    textAlign: 'center',
  },
});

const ToDoItem = ({todoItem: {todoItem: name, done}, id}) => {
  const [doneState, setDone] = useState(done);
  const onCheck = () => {
    setDone(!doneState);
    database()
      .ref('users/' + auth().currentUser.uid + '/notes')
      .update({
        [id]: {
          todoItem: name,
          done: !doneState,
        },
      });
  };
  return (
    <View style={styles.todoItem}>
      <CheckBox
        checkBoxColor="skyblue"
        onClick={onCheck}
        isChecked={doneState}
        disabled={doneState}
      />
      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
        {name}
      </Text>
    </View>
  );
};

export default () => {
  const [todos, setTodos] = useState({});
  const [presentToDo, setPresentToDo] = useState('');
  let todosKeys = Object.keys(todos);
  useEffect(() => {
    database()
      .ref('users/' + auth().currentUser.uid + '/notes')
      .on('value', (snapshot) => {
        let data = snapshot.val() ? snapshot.val() : {};
        setTodos(data);
      });
  }, []);

  const addNewTodo = () => {
    if (presentToDo !== '') {
      database()
        .ref('users/' + auth().currentUser.uid + '/notes')
        .push()
        .set({
          done: false,
          todoItem: presentToDo,
        });
      Alert.alert('Action!', 'A new To-do item was created');
      setPresentToDo('');
    } else {
      Alert.alert('You have to write something!');
    }
  };

  const clearTodos = () => {
    database()
      .ref('users/' + auth().currentUser.uid + '/notes')
      .remove();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={{marginTop: 50}}>
        {todosKeys.length > 0 ? (
          todosKeys.map((key) => (
            <ToDoItem key={key} id={key} todoItem={todos[key]} />
          ))
        ) : (
          <Text>Nothing to see yet</Text>
        )}
      </View>
      <TextInput
        placeholder="Add new Todo"
        value={presentToDo}
        style={styles.textInput}
        onChangeText={(e) => {
          setPresentToDo(e);
        }}
        onSubmitEditing={addNewTodo}
      />
      <Button
        title="Add new To do item"
        onPress={addNewTodo}
        color="lightgreen"
      />
      <View style={{marginTop: 20}}>
        <Button title="Clear todos" onPress={clearTodos} color="red" />
      </View>
      <View style={{marginTop: 20}}>
        <Button title="Sign out" onPress={() => auth().signOut()} color="red" />
      </View>
    </ScrollView>
  );
};
