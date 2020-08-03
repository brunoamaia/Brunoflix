import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import PageDefault from '../../PageDefault';
import categoriasRepository from '../../../Repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  // const history = useHistory();

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

      <p style={{ textAlign: 'center' }}>
        A plataforma etá em desenvolvimento . . .
        {' '}
        <br />
      </p>

      {dadosIniciais.length === 0 && ( // Página para quando nao tem servidor!!
        <h1> Os dados estão sendo carregados .....</h1>
        // history.push('/homestatic')
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

/*
function Redirect() {
  console.log(`Dados importados  = ${dadosImport}`);
  if (dadosImport === []) {
    redirecionar = true;
  }
}

function timeout(delay) {
  setTimeout(() => {
    Redirect();
  }, delay);
}
timeout(1000); // for 1 sec delay
*/
