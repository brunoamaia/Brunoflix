/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valuesIniciais = {
    nome: '',
    descricao: '',
    cor: '#0CA96C',
  };

  const { values, handleChange, clearForm } = useForm(valuesIniciais);

  const [categorias, setCategorias] = useState([]);
  /*
  const [valores, setValores] = useState(valuesIniciais);

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
  }*/

  useEffect(() => {
    // eslint-disable-next-line camelcase
    const URL_TEMP = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://brunomaiaflix.herokuapp.com/categorias';
    fetch(URL_TEMP)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não possível carregar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, // Os 3 pontos servem para mostrar todos os dados que estão no array
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/*
      <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>
      </div> */}

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
