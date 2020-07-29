import React from 'react';
import Menu from './components/Menu'  // Como o arquivo tem o nome de "index", não precisa colocar o nome
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Menu />

    <BannerMain 
      videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
      url = {dadosIniciais.categorias[0].videos[0].url}
      videoDescription = {"O que é Front-end? Descubra muita coisa com a Vanessa!!!"}
    />

    <Carousel 
      ignoreFirstVideo
      category = {dadosIniciais.categorias[0]}
    />

    <Carousel 
      ignoreFirstVideo
      category = {dadosIniciais.categorias[1]}
    />

    <Carousel 
      ignoreFirstVideo
      category = {dadosIniciais.categorias[2]}
    />

    <Carousel 
      ignoreFirstVideo
      category = {dadosIniciais.categorias[3]}
    />

    <Carousel 
      ignoreFirstVideo
      category = {dadosIniciais.categorias[4]}
    />

    <Carousel 
      ignoreFirstVideo
      category = {dadosIniciais.categorias[5]}
    />

    </div>
  );
}

export default App;
