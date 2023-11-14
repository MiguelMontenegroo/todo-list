import { Trash2 } from "lucide-react"
import styles from "./TaskList.module.css"
import checked from "../assets/checked.svg"
import unchecked from "../assets/unchecked.svg"

export function TaskList({tasks, onRemove, handleCheckTask}){

    
 
    return (
        <div>
            {tasks.map(task => {
                return (
                    <li key={task.id} className={styles.li}>
                    <label className={styles.label}>
                        <img src={task.isChecked ? checked : unchecked} />
                       
                        <input type="checkbox" className={styles.liInput} onChange={() => handleCheckTask(task.id)} checked={task.isChecked}/>
                      
                        <p className={task.isChecked? styles.accordionActive : styles.accordion  }>{task.content}</p>

                        <Trash2 onClick={() => onRemove(task.id)} size={16} className={styles.trash} />
                    </label>
                </li>
                )
            })}
          
        </div>
    )
}