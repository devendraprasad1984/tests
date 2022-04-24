import {Box, Button} from '@chakra-ui/react'
import AddTodo from "../UI/AddTodo";
import TodoList from "../UI/TodoList";


export default function Home() {
    return (
        <Box maxWidth='8x1' margin='auto' p={5}>
            <span>Hello DP next project - todo - mobx</span>
            <Button>Click me</Button>

            <AddTodo/>
            <TodoList/>
        </Box>
    )
}
