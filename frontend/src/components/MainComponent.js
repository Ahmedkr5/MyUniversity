import React, { Component } from 'react';
import Home from "./Home"
import Navbar from './Navbar';
import UniversityDetail from './UniversityDetail';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import  {connect} from 'react-redux';
import { postUniversity,getUniversities } from '../Redux/actions/universityActions';



const mapStatetoProps =state => {
return{
    universities :state.universities
}
}
const mapDispatchToProps = (dispatch) => ({
    postUniversity: (Universityname,Program,Location,Length,price,Description) => dispatch(postUniversity(Universityname,Program,Location,Length,price,Description)),
    getUniversities: () => dispatch(getUniversities())});
  
class Main extends Component {

    constructor(props) {
        super(props);
     
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
                ></Home>
            );
        };

        const UniversityDetailPage = ({match}) => {
            return (
                <UniversityDetail 
                univ={this.props.universities.universities.filter((univ) => univ._id === match.params.id)[0]}
               mat={match}
               univv={this.props.universities.universities}
                ></UniversityDetail>


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
export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));