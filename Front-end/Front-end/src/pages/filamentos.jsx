import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Filamentos = () => {

      const [filamentos, setFilamentos] = useState([])
      const [originalFilamentos, setOriginalFilamentos] = useState([])

      useEffect(()=>{
            const fecthAllFilamentos = async () =>{
                  try{
                        const res = await axios.get("http://localhost:8800/filamentos")
                        console.log(res.data);
                        setFilamentos(res.data)
                        setOriginalFilamentos(res.data)
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

      const ordenarCrescente = () => {
            const ordenado = [...filamentos].sort((a, b) => a.preco - b.preco);
            setFilamentos(ordenado)
      }

      const ordenarDecrescente = () => {
            const ordenado = [...filamentos].sort((a, b) => b.preco - a.preco);
            setFilamentos(ordenado)
      }

      const restaurarOrdem = () => {
            setFilamentos(originalFilamentos)
      }


      return (<div>
            <h1>Loja de Filamentos</h1>

            <div className="botoes-ordenacao">
                  <button onClick={ordenarCrescente}>Ordenar por menor </button>
                  <button onClick={ordenarDecrescente}>Ordenar por maior </button>
                  <button onClick={restaurarOrdem}>Mostrar todos</button>
            </div>

            <div className='filamentos'>
                  {filamentos.map(filamento=>(
                        <div className="filamento" key={filamento.id}>
                              {filamento.cor && <img src={filamento.cor} alt=''/>}
                              <h2>{filamento.titulo_filamento}</h2>
                              <p>{filamento.descricao}</p>
                              <span>{filamento.preco}</span>
                              <button className="deletar" onClick={() => handleDelete(filamento.idfilamentos)}>Deletar</button>
                              <button className="atualizar"><Link to={`/atualizar/${filamento.idfilamentos}`}>Atualizar</Link></button>
                        </div>
                  ))}
            </div>
            <button><Link to="/adicionar">Adicionar novo filamento</Link></button>
      </div>
            
      )
}

export default Filamentos