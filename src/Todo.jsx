import axios from "axios";

import React, { useState, useEffect } from "react";

const Todo = ({ text }) => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                console.log("useEffect");
                const res = await axios.get("http://localhost:7777/");
                console.log(res.data);
                // setTodos(res.data); // Uncomment if you want to store todos
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        }
        fetchTodos();
    }, []);

    return (
        <div>
            <Demo text={text} />
        </div>
    );
};

export default Todo;