import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, IconButton, Checkbox, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box maxWidth="500px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>
      <Flex mb={4}>
        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task" mr={2} />
        <Button leftIcon={<FaPlus />} onClick={addTask}>
          Add
        </Button>
      </Flex>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} p={3} borderRadius="md" backgroundColor={bgColor}>
            <Flex align="center">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)} mr={3} />
              <Box textDecoration={task.completed ? "line-through" : "none"} opacity={task.completed ? 0.6 : 1}>
                {task.text}
              </Box>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => removeTask(index)} size="sm" variant="ghost" colorScheme="red" />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
