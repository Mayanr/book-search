import React, { Component } from "react";
import axios from "axios";

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
        const { title } = this.state
        console.log(title);
        this.props.search(title)
    }

    render(){
        return(
            <div id="searchComp">
            <h1>This is the Search componenet</h1>
            <Form onSubmit={this.handleSubmit}>
            <Label for="title">Enter a book title:</Label>
            <Input 
                type="text" 
                id="title"
                name="title"
                placeholder="ex 'Stranger Things'" 
                onChange={this.handleChange}
                required
                />
            <Button color="success">
                Search
            </Button>
            </Form>
            <ul className="list-group list-group-flush">
            </ul>
            </div>   
        )
    }

}
export default Search;