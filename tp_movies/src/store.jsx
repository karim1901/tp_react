
const init  = {paniers:[]}

const Reducer =  (state=init ,action)=>{
    if(action.type == 'ajouter'){
        return { paniers: [...state.paniers , action.payload ] }
    } else if(action.type == 'delete'){
        return {paniers: state.paniers.filter(panier => panier != action.payload)}
    }
    else{
        return state
    }

}

export default Reducer