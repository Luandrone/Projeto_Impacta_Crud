import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Adicionar = () =>{
      const [filamento, setFilamento] = useState({
            titulo_filamento:"",
            descricao:"",
            preco:null,
            cor:"",
      })

      const navigate = useNavigate()

      const handleChange = (e) => {
            setFilamento(prev=>({...prev, [e.target.name]: e.target.value }))
      }

      console.log(filamento)

      const handleClick = async e =>{
            e.preventDefault()
            try{
                  await axios.post("http://localhost:8800/filamentos", filamento)
                  navigate("/")
            } catch(err){
                  console.log(err)
            }
      }

      return (
            <div className='form'>
                  <h1>Adicionar Novo filamento</h1>
                  <input type="text" placeholder='filamento' onChange={handleChange}  name="titulo_filamento"/>
                  <input type="text" placeholder='descrição' onChange={handleChange} name='descricao'/>
                  <input type="text" placeholder='preço' onChange={handleChange} name='preco'/>
                  <input type="text" placeholder='foto' onChange = {handleChange} name='cor'/>

                  <button onClick={handleClick}>Adicionar</button>
            </div>

            
      )
}

export default Adicionar