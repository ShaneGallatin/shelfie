import React from "react";

class Product extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    
    render(){
        return(
            <div>
                <h1>Product Component</h1>
                <h3>{this.props.val.name}</h3>
                <h3>{this.props.val.price}</h3>
                <h3>{this.props.val.img_url}</h3>
            </div>
        )
    }
}

export default Product;