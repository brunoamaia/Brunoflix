import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CadastroVideo from './components/pages/cadastro/video'
import CadastroCategoria from './components/pages/cadastro/categoria';
import Error404 from './components/pages/Erro404';



ReactDOM.render(
  <BrowserRouter>
    <Switch >
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={ Error404} />
    </Switch>
  </BrowserRouter>,
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  document.getElementById('root')
);