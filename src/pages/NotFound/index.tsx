import { Link } from 'react-router-dom'
import * as X from './styles'

export const NotFound = () =>{
    return(
        <X.NotContainer>
            <div>
                <h1>Página não encontrada</h1>
                <Link to='/'><button>Ir para Home</button></Link>
            </div>
        </X.NotContainer>
    )
}