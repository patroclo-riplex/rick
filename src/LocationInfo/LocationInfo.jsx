import React,{useEffect, useState} from 'react'

//estilos
import "./LocationInfo.css"

// Componentes
import ResidentsList from '../ResidentsList/ResidentsList'
import SearchBox from '../SearchBox/SearchBox'

//imagenes
import fondo from '../../src/Imagenes/fondo2.jpg'

const idAleatorio = Math.floor(Math.random() *126) +1;
console.log('soy el '+ idAleatorio);

const LocationInfo = () => {
    //State
    const [terra, setTerra] = useState ({})
    
    
    // useEffect
    useEffect(() => {
        const consultaApi = async()=>{
            const Api = `https://rickandmortyapi.com/api/location/${idAleatorio}`
            const response = await fetch (Api)
            const responseJson = await response.json()
            console.log(responseJson);
            setTerra(responseJson)
        }
        consultaApi ()
    },[])

    return (
        <div className='tierra'>
            <header className='encabezado'>
                <div className='imagen'>
                    <img src={fondo} alt="rickymorty" />
                </div>
                <div className='Formulario'>
                    <h1>Rick and Morty Pedia</h1>
                    <SearchBox className='form' setTerra ={setTerra}/>
                </div>
                <div className='informacion'>
                    <h2>Nombre: <span>{terra.dimension}</span> </h2>
                    <h2>Id: <span>{terra.id}</span> </h2>
                    <h2>Tipo: <span>{terra.type}</span> </h2>
                    <h2>Residentes: <span>{terra.residents?.length}</span> </h2>
                </div>
            </header>
            
            <div className='Personajes'>
                {
                    terra.residents?.map(actual=> {
                        return (
                            <ResidentsList key={actual} infopersonaje = {actual}/>
                        ) 
                    })
                }
            </div>
        </div>
    )
}

export default LocationInfo