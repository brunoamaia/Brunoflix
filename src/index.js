import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/pages/home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CadastroVideo from './components/pages/cadastro/video'
const Pagina404 = ()=>( <div> Página 404 </div> )

ReactDOM.render(
  <BrowserRouter>
    <Switch >
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={ Pagina404 } />
    </Switch>
  </BrowserRouter>,
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  document.getElementById('root')
);