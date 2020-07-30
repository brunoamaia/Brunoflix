import React, { useState } from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [valores, setValores] = useState(valoresIniciais)

  function setValor(chave, valor) {
    // Chave é a variável passada (nome, descrição, cor)
    setValores({
      ...valores,
      [chave]: valor  // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    const {getAttribute, value} = infosDoEvento.target
    setValor(
      getAttribute('name'),
      value
    )
  }
  
  return(
    <PageDefault>
    <h1>Cadastro de Categoria: {valores.nome}</h1>
    
    <form onSubmit={function handleSubmit(infosDoEvento) {
      infosDoEvento.preventDefault()
      setCategorias([
        ...categorias,    // Os 3 pontos servem para mostrar todos os dados que estão no array
        valores
      ])

      setValores({})
    }}>

      <div>
        <label>
          Nome da Categoria:  
          <input 
            type="text"
            value={valores.nome}
            name="nome"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Descrição:  
          <textarea  
            type="text"
            value={valores.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Cor:  
          <input  
            type="color"
            value={valores.cor}
            name="cor"
            onChange={handleChange}
          />
        </label>
      </div>      
    
      <button>
        Cadastrar
      </button>
    </form>

    <ul>
      {categorias.map((categoria, indice) => {
        return (
          <li key={`${categoria}${indice}`}> 
            {categoria.nome}
          </li>
        )
      })}
    </ul>
    
    <Link to="/">
    Ir para Home
    </Link>
    </PageDefault>
    )
  }
  
  export default CadastroCategoria