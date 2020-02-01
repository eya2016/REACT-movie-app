import React, { Component } from "react";
import {
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Form,
  FormGroup,
  Label
} from "reactstrap";

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nom: "",
      date: "",
      nbStar: 0
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  closeBtn = (
    <button className="close" onClick={this.toggle}>
      &times;
    </button>
  );

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addMovie = e => {
    e.preventDefault();
    this.toggle();
    this.props.add({
      name: this.state.nom,
      date: this.state.date,
      nbStar: this.state.nbStar
    });
  };

  render() {
    return (
      <>
        <div className="row btn-add-movie">
          <Button onClick={this.toggle}>+</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle} close={this.closeBtn}>
              Ajouter Un nouveau Film
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.addMovie}>
                <FormGroup row>
                  <Label for="nomFilm" sm={4}>
                    Nom du Film
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="nom"
                      onChange={this.handleChange}
                      id="nomFilm"
                      placeholder="Veuillez introduire le nom du Film"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="dateEdition" sm={4}>
                    Date édition du Film
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="date"
                      onChange={this.handleChange}
                      id="dateEdition"
                      placeholder="Ajouter la date d'édition du Film"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="starRate" sm={4}>
                    star Rate
                  </Label>
                  <Col sm={{ size: 8 }}>
                    <Input
                      type="number"
                      name="nbStar"
                      onChange={this.handleChange}
                      id="rate"
                      placeholder="Ajouter la note du Film"
                    />
                  </Col>
                </FormGroup>
                <hr />
                <Button color="primary" onClick={this.addMovie}>
                  Ajouter
                </Button>
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}

export default NewMovie;