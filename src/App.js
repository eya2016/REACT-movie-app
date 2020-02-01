import React from "react";
import "./App.css";
import MoviesList from "./MoviesList";
import NewMovie from "./NewMovie";
import MoviesFilter from "./MoviesFilter";

const movieListe = [
  { name: "Joker", date: "2019", image:'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/095/joker-affiche-us-1095965.jpg', nbStar: 5 },
  { name: "Dora et la cité perdue", date: "2019", image:'https://i0.wp.com/mojok.co/terminal/wp-content/uploads/2019/08/2019-08-23_113909.png?resize=800%2C540&ssl=1', nbStar: 4 },
  { name: "Blade Runner", date: "2017", image:'https://media.gettyimages.com/photos/bearded-tattooed-viking-warrior-king-and-prince-in-front-of-warrior-picture-id1006692370?s=2048x2048', nbStar: 2 },
  { name: "Doctor ?", date: "2019", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWosr2AdW-9toiiNaIvyY0acpqqBllscWErX9AKjC_t1z0MdvQeA&s', nbStar: 1 },
  { name: "Seigneur des Anneaux", date: "2019", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdS8Cc2-Bx_x6hYXAWZz_KV5XdglMNUAMXLKI6dkfnyRVqy8TU3Q&s', nbStar: 5 }
  
  


];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieListe,
      keyWord: "", //Filtrer la liste selon le texte de recherche
      nbStar: 0
    };
  }

  addMovie = obj => {
    this.setState({
      movieListe: this.state.movieListe.concat(obj)
    });
  };
  makeSearchListe = (text) => {
    console.log("text de recherche ==> " + text);
    this.setState({
      keyWord: text //Changer le state du txt de serch 'KEYWORD'
    });
  };

  nbSelectedStar = i => {
    this.setState(
      {
        nbStar: i
      },
      () => console.log("star index in app", i)
    );
  };
  
  render() {

    const list = this.state.movieListe.filter(
      el =>
        el.name.toUpperCase().includes(this.state.keyWord.toUpperCase()) &&
        el.nbStar >= this.state.nbStar
    );

    return (
      <div className="moviesContainer">
       
        <div className="moviesSubContainer">
          <MoviesFilter
            searchMovie={this.makeSearchListe}
            nbFilterStar={this.nbSelectedStar}
          />

          <MoviesList movieListe={list} />
          <NewMovie add={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default App;
