import React , {Component} from 'react'

 class Like extends Component{
   
    constructor(props){
        super(props)       
    }
   
    methodClasName (){
        return this.props.liked?"fa fa-heart" : "fa fa-heart-o"
    }
    render(){        
        return <i onClick={this.props.click} className={this.methodClasName()} aria-hidden="true"></i>
   }
}

export default Like