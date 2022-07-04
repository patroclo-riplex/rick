import React,{useEffect, useState} from 'react'

//Estilos
import "./ResidentList.css"

const ResidentsList = ({infopersonaje}) => {

    // Estado
    const [infomacion, setInformacion] = useState ({})
    
    // effect
    useEffect(() => {
        const consultaInfo = async()=>{
        const response = await fetch(infopersonaje)
        const responseJson = await response.json()
        setInformacion(responseJson)
        }
        consultaInfo()
    }, [infopersonaje])

    return (
        <div className='personaje'>
            <div className='imagen'>
                <img src={infomacion?.image} alt="" />
            </div>
            <div className='infoPersonaje'>
                <h3>Nombre: {infomacion?.name}</h3>
                <h3>Estatus: <i className={infomacion?.status === "Alive" ? "far fa-circle vivo" : (infomacion?.status === "Dead" ? "far fa-circle muerto": "far fa-circle desconocido")}></i></h3> 
                <h3>Origen: {infomacion?.origin?.name}</h3>
                <h3>Episode appearances: {infomacion?.episode?.length }</h3>
            </div>
            
        </div>
    )
}

export default ResidentsList