
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { HoldMenuProvider } from 'react-native-hold-menu';
import { Swipeable } from 'react-native-gesture-handler';
import Task from './components/Task';
import colors from './assets/Colors';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  {/* Handle state*/ }
  const handleAddTask = () => {
    Keyboard.dismiss();

    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  {/*delete task*/ }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const Pop = (index) =>{
    return (
      <Text>BAR</Text>
      )
  }


  return (
    <HoldMenuProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}
                    keyboardShouldPersistTaps='handled'
                    style={styles.scrollView}>
          {/* todays tasks */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Baby Steps</Text>
            
            {/*
            <Swipeable renderLeftActions={Pop}>

            <View>
              <Text>FOO</Text>
            </View>
            </Swipeable>
            */}

            <View style={styles.items}>
              {/*this is where the items go*/}
              {
                taskItems.map((item, index) => {
                  return (
                    
                    <TouchableOpacity key={index} onLongPress={() => completeTask(index)}>
                      <Task text={[item]} />
                    </TouchableOpacity>

                  )
                })
              }
              {/* task 1 */}
              <Task text={'Buy Diapers'} color={'red'} />
            </View>
 
          </View>
        </ScrollView>


        {/* create a task */}
        <KeyboardAvoidingView

          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >

          <TextInput
            style={styles.input}
            placeholder={'Add Step'} value={task} onChangeText={text => setTask(text)}
            placeholderTextColor={colors.text}
            selectionColor={colors.text}
          >
          </TextInput>


          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>


        </KeyboardAvoidingView>
      </View>
      </HoldMenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollView:{
    backgroundColor: colors.bg,
    marginBottom: 80
  },
  tasksWrapper: {
    paddingHorizontal: 40,
    paddingTop: 120,
    //borderWidth: 10,
    //borderColor: 'pink'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,

  },
  items: {
    marginTop: 15,

    //borderWidth: 2,
    //orderColor: 'pink'
  },
  writeTaskWrapper: {
    paddingLeft: 80,
    paddingRight: 40,
    bottom: 60,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  input: {
    height: 60,
    width: '70%',
    backgroundColor: colors.bg,
    fontSize: 20,
    paddingLeft: 10,
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
