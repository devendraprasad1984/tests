import React from "react";
import todoStore, {ITodoModel} from "../mobx-store/todoStore";
import {Button, Checkbox, Flex, Heading, Input} from "@chakra-ui/react";


function TodoListItems(){
    return (
        <>
            {todoStore.todoList.map((todo: ITodoModel)=>{
                return <Flex pt={2} key={todo.id}>
                    <Checkbox />
                    <Input mx={2} value={todo.text}/>
                    <Button>Delete</Button>
                </Flex>
            })}
        </>
    )
}


const TodoList=()=>{
    return <>
        <Heading>Todo List</Heading>
        <TodoListItems></TodoListItems>
    </>
}
export default TodoList