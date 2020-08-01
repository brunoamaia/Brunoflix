import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../FormField';
import Button from '../../../Button';
import metodoCadastaVideo from '../../../../Repositories/videos';
import categoriasRepositorio from '../../../../Repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { values, handleChange } = useForm({
    titulo: 'Informe o título',
    url: 'https://www.youtube.com/watch?v=TWy2rxyZLrE',
    categoria: 'Selecione uma categoria',
  });

  useEffect(() => {
    categoriasRepositorio
      .getAll()
      .then((categoriasDoServidor) => {
        setCategorias(categoriasDoServidor);
      });
  }, []);
  console.log(categorias);
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={() => {
        metodoCadastaVideo.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
