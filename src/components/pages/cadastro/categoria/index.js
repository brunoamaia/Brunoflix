/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: "#0CA96C",
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    // Chave é a variável passada (nome, descrição, cor)
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValor(
      name,
      value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, // Os 3 pontos servem para mostrar todos os dados que estão no array
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >

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
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
