import styles from "./Header.module.css"
import rocket from "../assets/rocket.svg"

export function Header() {

return (
    <>
    <header className={styles.header}>
     
        <img src={rocket}/>
        <h1 className={styles.h11}>to</h1>
        <h1 className={styles.h12}>do</h1>
        
        </header>
        </>
)
}