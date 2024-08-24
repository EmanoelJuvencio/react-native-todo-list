import { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { NewTask } from '../../molecules/NewTask'
import { HeaderToDoList } from '../../molecules/HeaderToDoList'
import { Task } from '../../molecules/Task'
import uuid from 'react-native-uuid'
import { Text } from 'react-native-svg'

interface ITasks {
  id: string
  description: string
  completed: boolean
}

export function Content() {
  const [tasks, setTasks] = useState<ITasks[]>([])

  function handleRemoveTask(taskRemove: ITasks) {
    setTasks(tasks.filter((task) => task.id !== taskRemove.id))
  }

  function handleStatusTask(taskUpdate: ITasks) {
    const updatedTasks: ITasks[] = []

    tasks.map((task) => {
      if (task.id === taskUpdate.id) {
        return updatedTasks.push({
          id: task.id,
          description: task.description,
          completed: !task.completed,
        })
      }

      updatedTasks.push(task)
    })

    setTasks(updatedTasks)
  }

  function handleNewTask(description: string) {
    setTasks((newTasks) => [
      ...newTasks,
      { id: String(uuid.v4()), completed: false, description: description },
    ])
  }

  return (
    <View style={styles.container}>
      <NewTask submitTask={(description) => handleNewTask(description)} />
      <HeaderToDoList
        countCompleted={tasks.filter((task) => task.completed === true).length}
        countCreated={tasks.length}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            text={item.description}
            completed={item.completed}
            onChange={() => handleStatusTask(item)}
            removeTask={() => handleRemoveTask(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>Nenhuma Tarefa Cadastrada</Text>
          </View>
        )}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
