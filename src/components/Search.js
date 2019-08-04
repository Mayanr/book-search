import React, { Component } from "react";
import { searchPages } from "../actions/searchAction"
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
        this.props.searchPages(this.state.title)
        //reset the search bar to be empty again
        this.setState({
            title: ""
        })
    }

    render(){
        return(
            <div id="search" >
                <h1>Welcome to the Book Search App!</h1>
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
                        minLength="3"
                    />
                    <Button color="primary">
                        Search
                    </Button>
                </Form>
            </div>   
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPages: (title, page) => dispatch(searchPages(title, 1))
    }
}

export default connect(null, mapDispatchToProps)(Search);