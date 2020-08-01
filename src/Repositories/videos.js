/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoFormularioDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'aplication/json',
    },
    body: JSON.stringify(objetoDoFormularioDoVideo),
  })
    .then(async (respostaDoServidor) => {
      console.log('Chamou o Then');
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        console.log('Foi');
        return resposta;
      }
      // eslint-disable-next-line no-unreachable
      console.log('Não cadastrou');
      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};
