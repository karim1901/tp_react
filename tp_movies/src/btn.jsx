import { useDispatch } from "react-redux"


function Btn({type,id,children}){

    const Dispatch = useDispatch()

    const handleClick = ()=>{
        Dispatch({type:type , payload:{id:id}})
    }

    return <button onClick={handleClick}>{children}</button>
}

export default Btn