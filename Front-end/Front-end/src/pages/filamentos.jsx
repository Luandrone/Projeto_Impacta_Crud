import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const Filamentos = () => {

      const [filamentos, setFilamentos] = useState([])

      useEffect(()=>{
            const fecthAllFilamentos = async () =>{
                  try{
                        const res = await axios.get("http://localhost:8800/filamentos")
                        console.log(res.data);
                        setFilamentos(res.data)
                  } catch(err){
                    console.log(err)   
                  }
            }

            fecthAllFilamentos()
      }, [])


      return (<div>
            <h1>Loja de Filamentos</h1>
            <div className='filamentos'>
                  {filamentos.map(filamento=>(
                        <div className="filamento" key={filamento.id}>
                              {filamento.cover && <img src={filamento.cover} alt=''/>}
                              <h2>{filamento.titulo_filamento}</h2>
                              <p>{filamento.descricao}</p>
                              <span>{filamento.price}</span>
                        </div>
                  ))}
            </div>
      </div>
            
      )
}

export default Filamentos