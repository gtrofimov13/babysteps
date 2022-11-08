
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Baby Steps</Text>
        <View style={styles.items}>
          {/*this is wher ethe items go*/}
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

      {/* create a task */}
      <KeyboardAvoidingView

        behavior={Platform.OS === "ios"  ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
      
        <TextInput 
          style={styles.input}
          placeholder={'Add Step'} value={task} onChangeText={text => setTask(text)}
          placeholderTextColor={colors.item
          } 
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
    color: colors.text
  },
  items: {
    marginTop: 15
  },
  writeTaskWrapper: {
    position: 'absolute',
    paddingLeft: 30,
    paddingRight: 30,
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    height: 60,
    backgroundColor: '#BBFACD',
    width: '80%',
    fontSize: 20,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FAE0BB',
    alignItems: 'center',
  },
  addText: {
    fontSize: 47, //wtf?
    textAlignVertical: 'center'
  },
});
