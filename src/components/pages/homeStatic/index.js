import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import dadosEstaticos from '../../../data/dados_iniciais.json';
import Carousel from '../../Carousel';
import PageDefault from '../../PageDefault';
import categoriasRepository from '../../../Repositories/categorias';

/*
const [dadosIniciais, setDadosIniciais] = useState([]);
function WakeUp() {
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
    // eslint-disable-next-line no-console
    console.log('dadosIniciais')
    //setTimeout(() => { WakeUp(), 1000 }),
  ),
}

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const getCountTimeout = () => {
    setTimeout(() => {
      setTimeoutCount(countRef.current);
      WakeUp()
    }, 2000);
  };

  return (
    console.log('object')
  );
} */

function HomeStatic() {
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
  // WakeUp();

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length !== 0 && ( // Página para quando nao tem servidor!!
        history.push('/')
      )}

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
        Tente acessar a Home após um tempo.
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

export default HomeStatic;
