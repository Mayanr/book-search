import React, { Component } from "react";
import { searchPages } from "../actions/searchAction"
import { connect } from "react-redux"
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

    //when 'search' is clicked, call the searchPages from searchActions and reset the search bar to be empty
    handleSearch = e => {
        e.preventDefault();
        this.props.searchPages(this.state.title)
        this.setState({
            title: ""
        })
    }

    render(){
        return(
            <div id="search" >
                <h1>Welcome to the Book Search App!</h1>
                <Form onSubmit={this.handleSearch}>
                    <Label for="title">Enter a book title:</Label>
                    <Input 
                        type="text" 
                        id="title"
                        name="title"
                        placeholder="e.g., 'To Kill a Mockingbird'"
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

// need to reference when 'search' is clicked
const mapDispatchToProps = dispatch => {
    return {
        searchPages: (title, page) => dispatch(searchPages(title, 1))
    }
}


export default connect(null, mapDispatchToProps)(Search);