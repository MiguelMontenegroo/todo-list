import { useState } from 'react'
import { Header } from './components/Header'
import styles from "./App.module.css"
import "./Global.css"
import { TaskBar } from './components/TaskBar'
import { TaskManager } from './components/TaskManager'

function App() {


  return (
    <>
     <Header/>
     <div>
     <main className={styles.main}>
      <TaskBar/>
      <TaskManager/>
    
     </main>
     </div>
    </>
  )
}

export default App
