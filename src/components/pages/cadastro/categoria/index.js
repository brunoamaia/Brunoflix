import React, { useState } from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../FormField'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: "0CA96C",
  }

  const [categorias, setCategorias] = useState([])
  const [valores, setValores] = useState(valoresIniciais)


  function setValor(chave, valor) {
    // Chave é a variável passada (nome, descrição, cor)
    setValores({
      ...valores,
      [chave]: valor,  // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    const {name, value} = infosDoEvento.target;
    setValor(
      name,
      value
    );
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

      setValores(valoresIniciais)
    }}>

      <FormField 
        label="Nome da Categoria:"
        type="text"
        name="nome"
        value={valores.nome}
        onChange={handleChange}
      />

      <FormField 
        label="Descrição:"
        type="textarea"
        name="descricao"
        value={valores.descricao}
        onChange={handleChange}
      />

      {/*
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
      </div> */}

      <FormField 
        label="Cor:"
        type="color"
        name="nome"
        value={valores.cor}
        onChange={handleChange}
      />
    
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