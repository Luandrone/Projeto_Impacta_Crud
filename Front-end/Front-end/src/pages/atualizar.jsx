import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

const Atualizar = () =>{
      const [filamento, setFilamento] = useState({
            titulo_filamento:"",
            descricao:"",
            preco:null,
            cor:"",
      })

      const navigate = useNavigate()
      const location = useLocation()

      const filamentoId = location.pathname.split("/")[2]
      const handleChange = (e) => {
            setFilamento(prev=>({...prev, [e.target.name]: e.target.value }))
      }

      console.log(filamento)

      const handleClick = async e =>{
            e.preventDefault()
            try{
                  await axios.put(`http://localhost:8800/filamentos/${filamentoId}`, filamento)
                  navigate("/")
            } catch(err){
                  console.log(err)
            }
      }

      return (
            <div className='form'>
                  <h1>Atualizar filamento</h1>
                  <input type="text" placeholder='filamento' onChange={handleChange}  name="titulo_filamento"/>
                  <input type="text" placeholder='descrição' onChange={handleChange} name='descricao'/>
                  <input type="text" placeholder='preço' onChange={handleChange} name='preco'/>
                  <input type="text" placeholder='foto' onChange = {handleChange} name='cor'/>

                  <button className='form-button' onClick={handleClick}>Atualizar</button>
            </div>

            
      )
}

export default Atualizar