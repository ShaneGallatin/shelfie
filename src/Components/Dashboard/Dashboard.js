import React from "react";
import Product from "../Product/Product";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render(){

        let mappedProducts = this.props.inventory.map(val => {
            return(
                <Product val={val}/>
            )
        })
        return(
            <div>
                <h1>Dashboard Component</h1>
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard;