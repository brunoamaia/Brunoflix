import React, { useEffect, useState } from 'react';
import dadosEstaticos from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import categoriasRepository from '../../../Repositories/categorias';
import PageDefault from '../../PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => { // Tratar o Erro
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      <h1 style={{ textAlign: 'center' }}>
        A plataforma etá em desenvolvimento
        {' '}
        <br />
      </h1>

      {dadosIniciais.length === 0 && ( // Página para quando nao tem servidor!!

        <h1>
          Ohh ouuu!!!
          <br />
          {' '}
          O servidor está tirando um cochilo no momento😅
          <BannerMain
            videoTitle={dadosEstaticos.categorias[0].videos[0].titulo}
            url={dadosEstaticos.categorias[0].videos[0].url}
            videoDescription="O que é Front-end? Descubra muita coisa com a Vanessa!!!"
          />
          <Carousel
            ignoreFirstVideo
            category={dadosEstaticos.categorias[0]}
          />

        </h1>

      )}

      {dadosIniciais.map((categoria, indice) => { // Página oega do Servidor!!
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Descubra muita coisa com a Vanessa!!!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />
      */}

    </PageDefault>
  );
}

export default Home;
