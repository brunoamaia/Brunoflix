import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../FormField';
import Button from '../../../Button';
// import metodoCadastaVideo from '../../../../Repositories/videos';
import categoriasRepositorio from '../../../../Repositories/categorias';

function CadastroVideo() {
  // const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { values, handleChange } = useForm({
    titulo: 'Informe o título',
    url: 'https://www.youtube.com/watch?v=TWy2rxyZLrE',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepositorio
      .getAll()
      .then((categoriasDoServidor) => {
        setCategorias(categoriasDoServidor);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Função temporariamente desabilitada!');
        /*
        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === values.categoria,
        );

        metodoCadastaVideo.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
          */
      }}
      >
        <FormField
          label="Título do Vídeo:"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL:"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
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
