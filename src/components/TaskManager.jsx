import styles from "./TaskManager.module.css"


import { EmptyContent } from "./EmptyContent"
import { TaskList } from "./TaskList"
import { useState } from "react"


const initialTasks = [
    {id: crypto.randomUUID(), content: "passear com o cachorro", isChecked: false },
    {id: crypto.randomUUID(), content: "tomar banho", isChecked: false }
]

export function TaskManager(){

    const [tasks, setTasks] = useState(initialTasks)




    const handleCheckTask = (id) => 
        setTasks(prev => prev.map((task) => task.id === id? {...task, isChecked: !task.isChecked} : task))
    
    
    const checkedTasks = tasks.filter(task => task.isChecked)

    const onRemove = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {newTask} = e.target.elements 

        setTasks(prev => [...prev, {
            id: crypto.randomUUID(), 
            content: newTask.value,
            isChecked: false 
        }])
    }




    return (
        <>
        <form onSubmit={handleSubmit} className={styles.container}>
        <input name="newTask" placeholder="Adicione uma nova tarefa" className={styles.input}></input>
        <button className={styles.button}>Criar</button>
        </form>
        <div className={styles.container2}>
            <div className={styles.tasksmade}>Tarefas criadas <span>{tasks.length}</span></div>
            <div className={styles.tasksdone}>Concluidas <span>{checkedTasks.length}</span></div>
        </div>
        <ul  className={styles.card}>
            {tasks.length > 0 ? <TaskList handleCheckTask={handleCheckTask} onRemove={onRemove} tasks={tasks}/> :  <EmptyContent/>}
            
           
        </ul > 
        </>
    )
}