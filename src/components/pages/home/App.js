import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import PageDefault from '../../PageDefault';
import categoriasRepository from '../../../Repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const history = useHistory();

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => { // Tratar o Erro
        // eslint-disable-next-line no-console
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
        history.push('/homestatic')
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

    </PageDefault>
  );
}

export default Home;
