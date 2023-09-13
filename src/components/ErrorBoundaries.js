import React,{Component} from "react";

class ErrorBoundry extends Component{
    constructor(props){
       super(props); 
       this.state={
        hasError:false
       }
    }
    /*Its like a try catch block*/
    componentDidCatch(){
        
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooops.This is not good!!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;

