import React from 'react';
import "./styles/Home.css";
import Footer from '../components/Footer';
import PageLoading from '../pages/PageLoading';
import PageError from '../pages/PageError';
import CharacterCard from '../components/CharacterCard'
import ImageHeader from '../images/image.png';

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      info: {
      },
      results: []
    },
    page: 1,
    pageCounter: 1,
    modalActivo: false
};

componentDidMount() {
  this.fetchData();
}

componentDidUpdate(prevProps,prevState) {
  const {page} = this.state;
    if (page != prevState.page){
      if (page < 0) {
        this.setState({
          page: 0,
          pageCounter: 1
        })
        this.fetchData(prevProps.page)
      } 
        this.fetchData(page);
    }

    if(page === 34){
      this.setState({
        page: 33,
        pageCounter:34 
      })
    }
}

fetchData = async (page = 0) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`;
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      this.setState({ loading: false,
        data: {
          info: data.info,
          results: (this.state.data.results, data.results),
        }
      });
      } catch (error) {
        this.setState({ loading: false, error: error });
      }
}

increment = async ()=>{
  const { page, pageCounter } = this.state
    this.setState({
      page: page + 1,
      pageCounter: pageCounter + 1
    })
}

decrement=()=>{
  const { page, pageCounter } = this.state
    this.setState({
      page: page - 1,
      pageCounter: pageCounter - 1
    })
}

activarModal () {
  this.setState({
    modalActivo: true
  })
}

render() {
  const { pageCounter, modalActivo } = this.state
  
  if(this.state.loading === true && this.state.data === undefined){
    return <PageLoading/>;
  }

  if(this.state.error){
    return <PageError error={this.state.error}/>;
  }

return (
  <div className="background">
    <div className="image-logo-container">
      <a className=""imageHeader title="Los Tejos" href="https://rickandmortyapi.com/"><img src={ImageHeader} alt="Los Tejos" /></a>
    </div>
    <div className="container body">
      <div className="contStyle">
        <div className="App">
        <ul className="row">
          {this.state.data.results.map(character => (
            <li className="col-4" key={character.id}>
              <CharacterCard character={character}/>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
      <Footer increment = { this.increment } decrement = {this.decrement} numberPage = {pageCounter}/>
  </div>
    );
  }
}

export default Home;