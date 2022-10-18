import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import AddTodo from '../components/AddTodo'

const Home = () => {
    const [todos, setTodos] = useState()

    const url = "https://634e52da4af5fdff3a589e25.mockapi.io/api/todos"
    //+ read işlemi için
    const getTodos = async () => {
        // const response = await axios.get(url)
        // const {data} = response
        // console.log(response.data)
        // console.log(data)

        const { data } = await axios.get(url)
        console.log(data)
        setTodos(data)
    }
    //& create işlemi için
    const postTodo = async (todo) => {
        await axios.post(url, todo)
        getTodos()
    }
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <Container>
            {
                todos?.map(item => <h1 key={item.id}>{item.todo}</h1>)
            }
            <AddTodo postTodo={postTodo} />
        </Container>
    )
}

export default Home