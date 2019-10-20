import React, { Component, Fragment } from 'react';
import Header from './components/Header';

class App extends Component {
  state = {
    noticias: []
  }
  componentDidMount() {
    this.consultarNoticias()
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=52111ad9d24a49868937addc697e6b11`
    const respuesta = await fetch(url)
    const noticias = await respuesta.json()
    this.setState({
      noticias: noticias.articles
    })
    console.log(noticias.articles);
  }
  render() {
    return ( 
      <Fragment>
        <Header titulo="Noticias React API"></Header>
        <div className="container white contenedor-noticias">
          
        </div>
      </Fragment>
     );
  }
}
export default App;