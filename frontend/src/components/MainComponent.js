import React, { Component } from 'react';
import Home from "./Home"
import Navbar from './Navbar';
import UniversityDetail from './UniversityDetail';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import  {connect} from 'react-redux';
import { getUniversities } from '../Redux/actions/universityActions';



const mapStatetoProps =state => {
return{
    universities :state.universities
}
}

class Main extends Component {

    constructor(props) {
        super(props);
        console.log()
    }
        
       
    

  
    render() {

        const HomePage = () => {
         

            return (
          
                <Home universities={this.props?.universities} ></Home>
            );
        };

        const UniversityDetailPage = () => {
            return (
                <UniversityDetail></UniversityDetail>


            );
        };




        return (<div>
            <Navbar></Navbar>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/university/:id" component={UniversityDetailPage} />
                <Redirect to="/home" />
            </Switch></div>
        );

    }

}
export default withRouter(connect(mapStatetoProps)(Main));