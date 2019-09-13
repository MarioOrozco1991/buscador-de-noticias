import React, { Component, Fragment } from 'react';
import Header from './componenents/Header.js';
import ListaNoticias from './componenents/ListaNoticias.js';
import Formulario from './componenents/Formulario.js';

class App extends Component {
  state = { 
    noticias : []
  }
  componentDidMount() {
    this.consultarNoticias();
  }  

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=1f5c2ae450464cf88912b1e3f3d31fcd`
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }
  
  render() { 
    return (
      <Fragment>
      <Header
      titulo='Buscador de Noticias'   
      />
      
      <div className="container white contenedor-noticias ">

        <Formulario 
          consultarNoticias={this.consultarNoticias}
        />

        <ListaNoticias 
          noticias={this.state.noticias}
        />
      </div>

      
      </Fragment>  
    );
  }
}
 
export default App;
