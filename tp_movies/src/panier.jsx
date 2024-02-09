import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Btn from "./btn"

function Panier(){

    const paniers = useSelector((state)=>state.paniers)

    const Dispatch = useDispatch()

    
    const Remove = (panier)=>{
        Dispatch({type:"delete", payload:panier})
    }

    return (
        <div className="panier" >
            {
                paniers.map((panier,index)=>{
                    return <div className="card" key={index}>
                        <img src={panier.Poster} alt="" />
                        <div className="info">
                            <p>{panier.Title}</p>
                            <p>{panier.Type}</p>
                            <p>{panier.Year}</p>
                            <div className="counter">
                                <Btn type='dec' id={panier.imdbID} >-</Btn>
                                <label>{panier.quantity}</label>
                                <Btn type='inc' id={panier.imdbID} >+</Btn>
                            </div>

                            <button onClick={()=>{Remove(panier)}}>delete</button>
                        </div>

                    </div>

                })
            }
        </div>
    )
}


export default Panier