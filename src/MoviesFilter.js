import React from "react";
import { InputGroup, InputGroupAddon, Input  } from "reactstrap";
import Stars from "./Stars";
import "./App.css";

class MoviesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key_words: "",
      
      listeStar: [
        { index: 0, selected: false },
        { index: 1, selected: false },
        { index: 2, selected: false },
        { index: 3, selected: false },
        { index: 4, selected: false }
      ],
      nbStar: 0
    };
  }
  handleSearch = e => {
    this.setState({ key_words: e.target.value },()=> this.props.searchMovie(this.state.key_words) );
  };

  handleFilterStar = i => {
    this.setState({ nbStar: i }, () =>
      this.props.nbFilterStar(this.state.nbStar)
    );
  };

  render() {
    return (
      <InputGroup>
        <Input
          onChange={e => {
            this.handleSearch(e);
          }}
        />
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <div className="right-part">
          <span>Minimun Rating</span>
          <br />
          <Stars starFilter={this.handleFilterStar} />
        </div>
      </InputGroup>
    );
  }
}

export default MoviesFilter;