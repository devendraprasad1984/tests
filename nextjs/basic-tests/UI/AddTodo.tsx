import React from 'react'
import {Grid, Input, Button} from "@chakra-ui/react";
import todoStore from "../mobx-store/todoStore";

function AddTodo() {
    return <>
        <Grid pt={2} templateColumns="5fr 1fr" columnGap={3}>
            <Input
                placeholder={'new todo'}
                onChange={(e) => (todoStore.todo.text = e.target.value)}
                value={todoStore.todo.text}
            />
            <Button>Add todo</Button>
        </Grid>
    </>
}

export default AddTodo
