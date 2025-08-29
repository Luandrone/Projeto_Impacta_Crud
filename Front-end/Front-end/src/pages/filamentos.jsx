import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

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

      const handleDelete = async (id) => {
            try{
                  await axios.delete(`http://localhost:8800/filamentos/${id}`);

                  window.location.reload()
            } catch(err){
                  console.log(err)
            }
      }


      return (<div>
            <h1>Loja de Filamentos</h1>
            <div className='filamentos'>
                  {filamentos.map(filamento=>(
                        <div className="filamento" key={filamento.id}>
                              {filamento.cor && <img src={filamento.cor} alt=''/>}
                              <h2>{filamento.titulo_filamento}</h2>
                              <p>{filamento.descricao}</p>
                              <span>{filamento.preco}</span>
                              <button className="deletar" onClick={() => handleDelete(filamento.idfilamentos)}>Deletar</button>
                              <button className="atualizar">Atualizar</button>
                        </div>
                  ))}
            </div>
            <button><Link to="/adicionar">Adicionar novo filamento</Link></button>
      </div>
            
      )
}

export default Filamentos