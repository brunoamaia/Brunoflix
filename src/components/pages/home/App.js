import React from 'react';
import Menu from '../../Menu'  // Como o arquivo tem o nome de "index", não precisa colocar o nome
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import Footer from '../../Footer'

function Home() {
  return (
    <div>
      <Menu />

  
      <h1 style={{textAlign: "center"}}> 
        A plataforma etá em desenvolvimento <br/>
      </h1>

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

      <Footer />
    </div>
  );
}

export default Home;
