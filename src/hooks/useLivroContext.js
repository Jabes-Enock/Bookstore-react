import { useContext  } from "react"
import { LivroContext } from "../contexts/livroContext"


const useLivroContext = () => {
    const context = useContext(LivroContext)

    if( !context ){
        console.log('context not found');
    }
    
    return context
}

export default useLivroContext