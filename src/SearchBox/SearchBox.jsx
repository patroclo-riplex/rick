import React, {useState} from 'react'

//estilos
import "./SearchBox.css"


const SearchBox = ({setTerra}) => {
    // State
    const [id, setId] = useState("")

    const buscar = async(e)=>{
        e.preventDefault()
        const api = `https://rickandmortyapi.com/api/location/${id}`
        const response = await fetch(api)
        const responseJson = await response.json()
        console.log(responseJson);
        setTerra (responseJson)
    }

    return (
        <div className='busqueda' >
            <form onSubmit={(e)=>buscar(e)}>
                <input value={id} onChange={(e)=>setId(e.target.value)} placeholder='Ingresa No De Dimension'/>
                <button type='submit' >Buscar</button>
            </form>
        </div>
    )
}

export default SearchBox