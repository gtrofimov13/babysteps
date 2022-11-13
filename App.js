
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import colors from './assets/Colors';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  {/* Handle state*/}
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  {/*delete task*/}
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{
        flexGrow:1
      }}
      keyboardShouldPersistTaps='handled'>
      {/* todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Baby Steps</Text>
        <View style={styles.items}>
          {/*this is where the items go*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                  <Task text ={item}/>
                </TouchableOpacity>
              )
            })
          }
          {/* task 1 */}
          <Task text={'task 1'} color={'red'}/>
        </View>
      </View> 
      </ScrollView>
      
      {/* create a task */}
      <KeyboardAvoidingView

        behavior={Platform.OS === "ios"  ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
      
        <TextInput 
          style={styles.input}
          placeholder={'Add Step'} value={task} onChangeText={text => setTask(text)}
          placeholderTextColor={colors.text} 
          selectionColor={colors.text}
          >
        </TextInput>
      
      
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        
      
      </KeyboardAvoidingView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  tasksWrapper: {
    paddingHorizontal: 40,
    paddingTop: 120,
    },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,

  },
  items: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    paddingLeft: 80,
    paddingRight:40,
    bottom: 60,
    alignItems: 'center', 
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },
  input: {
    height: 60,
    width: '70%',
    backgroundColor: colors.bg,
    fontSize: 20,
    paddingLeft: 20,
    color: colors.text,
    borderWidth: 2,
    borderColor: colors.bg,
    borderBottomColor: colors.text

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.bg,
    alignItems: 'center',
  },
  addText: {
    fontSize: 47, //wtf?
    textAlignVertical: 'center',
    color: '#BBFACD',
  },
});
