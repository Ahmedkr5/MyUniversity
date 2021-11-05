import React, { Component } from 'react';
import Home from "./Home"
import Navbar from './Navbar';
import UniversityDetail from './UniversityDetail';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import  {connect} from 'react-redux';
import { postUniversity,getUniversities, putUniversity } from '../Redux/actions/universityActions';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const mapStatetoProps =state => {
return{
    universities :state.universities
}
}
const mapDispatchToProps = (dispatch) => ({
    resetAddUnivForm: () => { dispatch(actions.reset('AddUniv'))},
    postUniversity: (Universityname,Program,Location,Length,price,Description) => dispatch(postUniversity(Universityname,Program,Location,Length,price,Description)),
    getUniversities: () => dispatch(getUniversities()),
    putUniversity: (id,Universityname,Program,Location,Length,price,Description) => dispatch(putUniversity(id,Universityname,Program,Location,Length,price,Description))});
class Main extends Component {

    constructor(props) {
        super(props);
     console.log(props)
    }
        
    componentDidMount() {
        this.props.getUniversities();
     }
    

  
    render() {

        const HomePage = () => {
         

            return (
          
                <Home univ={this.props.universities.universities} 
              loading={this.props.universities.loading}
              err={this.props.universities.error}
              postUniversity={this.props.postUniversity}
              resetAddUnivForm={this.props.resetAddUnivForm}
                ></Home>
            );
        };

        const UniversityDetailPage = ({match}) => {
            return (
                <UniversityDetail 
                univ={this.props.universities.universities.filter((univ) => univ._id === match.params.id)[0]}
                loading={this.props.universities.loading}
                err={this.props.universities.error}
              putUniversity={this.props.putUniversity}
                ></UniversityDetail>
              

            );
        };




        return (<div>
            <Navbar></Navbar>
            <TransitionGroup>
                 
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
           
                <Route path="/home" component={HomePage} />
                <Route path="/university/:id" component={UniversityDetailPage} />
                <Redirect to="/home" />
            </Switch> 
            </CSSTransition>
          </TransitionGroup></div>
        );

    }

}
export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));