
const init  = {paniers:[]}

const Reducer =  (state=init ,action)=>{
    if(action.type == 'ajouter'){

        const movie_index = state.paniers.findIndex(movie => movie.imdbID == action.payload.imdbID)

        if(movie_index >=0){

            state.paniers[movie_index].quantity +=1 
            return { paniers: [...state.paniers ] }

        }else{

            return { paniers: [...state.paniers , action.payload ] }

        }
    } else if(action.type == 'delete'){

        return {paniers: state.paniers.filter(panier => panier.imdbID != action.payload.imdbID)}

    }else if(action.type == "inc"){

        const movie_index = state.paniers.findIndex(movie => movie.imdbID == action.payload.id)
        state.paniers[movie_index].quantity += 1
        return { paniers: [...state.paniers ] }

    }else if(action.type == "dec"){
        
        const movie_index = state.paniers.findIndex(movie => movie.imdbID == action.payload.id)
        if(state.paniers[movie_index].quantity > 1)
            state.paniers[movie_index].quantity -= 1
            return { paniers: [...state.paniers ] }
    }
    else{
        return state
    }
}

export default Reducer