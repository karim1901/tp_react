import { useDispatch, useSelector } from "react-redux"

function Panier(){

    const paniers = useSelector((state)=>state.paniers)

    const Dispatch = useDispatch()

    
    const Remove = (panier)=>{
        Dispatch({type:"delete", payload:panier})
    }




    return (
        <div className="panier" >
            {
                paniers.map(panier=>{

                    return <div className="card">
                        <img src={panier.Proster} alt="" />
                        <p>{panier.Title}</p>
                        <p>{panier.Type}</p>
                        <p>{panier.Year}</p>
                        <button onClick={()=>{Remove(panier)}}>delete</button>
                    </div>

                })
            }
        </div>
    )
}


export default Panier