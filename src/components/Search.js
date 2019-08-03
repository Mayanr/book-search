import React, { Component } from "react";
import { searchTitle } from "../actions/searchAction"
import  { connect } from "react-redux"

import { Input, Button, Form, Label } from "reactstrap";

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
      };
    }

    handleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchTitle(this.state.title)
        //reset the search bar to be empty again
        this.setState({
            title: ""
        })
    }

    render(){
        return(
            <div id="searchComp">
                <h1>The Book Search!</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Label for="title">Enter a book title:</Label>
                    <Input 
                        type="text" 
                        id="title"
                        name="title"
                        placeholder="ex 'Stranger Things'"
                        value={this.state.title} 
                        onChange={this.handleChange}
                        required
                    />
                    <Button color="success">
                        Search
                    </Button>
                </Form>
            </div>   
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      searchTitle: (title) => dispatch(searchTitle(title))
    }
  }

export default connect(null, mapDispatchToProps)(Search);