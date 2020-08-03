import React from 'react';
import dadosEstaticos from '../../../data/dados_iniciais.json';
import Carousel from '../../Carousel';
import PageDefault from '../../PageDefault';

function Home() {
  return (
    <PageDefault paddingAll={0}>

      <h1 style={{ textAlign: 'center' }}>
        Ohh ouuu!!!
        <br />
        {' '}
        O servidor está tirando um cochilo no momento😅
        <br />
        {' '}
        Mas não se preocupe, aproveite esse consteúdo 😉
      </h1>

      <p style={{ textAlign: 'center' }}>
        Estamos tentando acordar o servidor. Quando conseguirmos, te levaremos para a Home
      </p>

      <Carousel
        category={dadosEstaticos.categorias[0]}
      />

      <Carousel
        category={dadosEstaticos.categorias[1]}
      />

      <Carousel
        category={dadosEstaticos.categorias[2]}
      />

      <Carousel
        category={dadosEstaticos.categorias[3]}
      />

      <Carousel
        category={dadosEstaticos.categorias[4]}
      />

      <Carousel
        category={dadosEstaticos.categorias[5]}
      />

    </PageDefault>
  );
}

export default Home;
