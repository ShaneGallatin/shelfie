import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            price: 0,
            image_url: ""
        }
        
        this.handleCancelClick = this.handleCancelClick.bind(this);

    }
    
    handleNameChange = e => {
        this.setState({name: e.target.value})
    }
    
    handlePriceChange = e => {
        this.setState({price: e.target.value})
    }
    
    handleImageChange = e => {
        this.setState({image_url: e.target.value})
    }
    
    handleCancelClick = e => {
        this.setState({
            name: "",
            price: 0,
            image_url: ""
        })
    }
    
    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <p>Image URL</p>
                <input placeholder="Image URL" onChange={this.handleImageChange}></input>
                <p>Product Name</p>
                <input placeholder="Product Name" onChange={this.handleNameChange}></input>
                <p>Price</p>
                <input placeholder="Price" onChange={this.handlePriceChange}></input>
                <br />
                <button onClick={this.handleCancelClick}>Cancel</button>
                <button>Add to Inventory</button>
                
            </div>
        )
    }
}

export default Form;