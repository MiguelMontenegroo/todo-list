
import Clipboard from "../assets/Clipboard.svg"

export function EmptyContent(){
    return (
        <div>
             <img src={Clipboard}/>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}