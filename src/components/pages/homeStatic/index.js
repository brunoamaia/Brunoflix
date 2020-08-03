import React from 'react';
import dadosEstaticos from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import PageDefault from '../../PageDefault';

function Home() {
  return (
    <PageDefault paddingAll={0}>

      <h1 style={{ textAlign: 'center' }}>
        A plataforma etá em desenvolvimento
        {' '}
        <br />
      </h1>

      <h1>
        Ohh ouuu!!!
        <br />
        {' '}
        O servidor está tirando um cochilo no momento😅
      </h1>

      <BannerMain
        videoTitle={dadosEstaticos.categorias[0].videos[0].titulo}
        url={dadosEstaticos.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Descubra muita coisa com a Vanessa!!!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosEstaticos.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosEstaticos.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosEstaticos.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosEstaticos.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosEstaticos.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosEstaticos.categorias[5]}
      />

    </PageDefault>
  );
}

export default Home;
