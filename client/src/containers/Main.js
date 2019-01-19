import React,{Component} from "react";
import {Route,withRouter,Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Homepage} from "../components/Homepage";
import AuthForm from "../components/AuthForm";

class Main extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" render={(props)=><Homepage/>}/>
                <Route exact path="/signup" render={(props)=><AuthForm />}/>
            </Switch>
        )
    }
}

const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser,
        error: state.error,
    }
}

export default withRouter(connect(mapStateToProps,null)(Main));