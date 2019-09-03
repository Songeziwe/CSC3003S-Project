import React        from 'react';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';
import {mitDetails}    from '../../Store/action/addUserData';

class MIT extends React.Component {
    state = {
        mit: {
            title      : "", 
            name       : "", 
            surname    : "",
            citizenship: "",
            city       : "",
            isMIT      : false,
            isComplete : false
        }, 
        selectedOption: ""
   }
   handleRadio = (event) => {
        if ( event.target.name === "yes" ){
            this.setState({
                mit: {
                    ...this.state.mit,
                    isMIT: true
                },
                selectedOption: event.target.value   
           });
        }else {
            this.setState({
                mit: {
                    ...this.state.mit,
                    isMIT: false
                },
                selectedOption: event.target.value   
           }); 
        }
       
   }
   handleChange = (event) => {
       if( this.allFieldsComplete() ){
           this.setState({
               ...this.state,
               mit: { 
                   ...this.state.mit, 
                   [event.target.name]: event.target.value,
                   isComplete: true
                }   
           });
       }else{
           this.setState({
               ...this.state,
                mit:{ 
                   ...this.state.mit,
                   [event.target.name]: event.target.value,
                   isComplete: false
               }
           });
       }
       

   }
   // If all fields are not empty it's complete
   // setState() will call render() method to update the DOM
   allFieldsComplete = () => {
       const { title, name, surname, citizenship, city, isMIT } = this.state.mit; // destructuring
       return title && name && surname && citizenship && city && isMIT;
   }
   handleSubmit = (event) => {
       event.preventDefault();
       if( this.allFieldsComplete() ){
           this.setState({
               mit: {
                title      : "", 
                name       : "", 
                surname    : "",
                citizenship: "",
                city       : "",
                isMIT      : true,
                isComplete : false
            },
            selectedOption: ""  
           });
           this.props.createMIT(this.state.mit);
       }
       else
           console.log("Fields not complete");
   }
    render () {
        if ( this.props.auth.isEmpty )
        return <Redirect to = "/" />
        return (
            <div className="mit-details container">
                { this.state.mit.isMIT ? (
                    <React.Fragment>
                        <h5 className="align-center">MIT Details</h5>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col">
                                    <input 
                                        type="text"
                                        name="title"
                                        value={this.state.mit.title}
                                        onChange={this.handleChange} 
                                        className="validate"/>
                                    <label>Title</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col">
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={this.state.mit.name}
                                        onChange={this.handleChange}
                                        className="validate"/>
                                    <label>Name</label>
                                </div>
                                <div className="input-field col">
                                    <input 
                                        type="text" 
                                        name="surname"
                                        value={this.state.mit.surname}
                                        onChange={this.handleChange}
                                        className="validate"/>
                                    <label>Surname</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col">
                                    <input 
                                        type="text" 
                                        name="citizenship"
                                        value={this.state.mit.citizenship}
                                        onChange={this.handleChange}
                                        className="validate"/>
                                    <label>Citizenship</label>
                                </div>
                                <div className="input-field col">
                                    <input 
                                        type="text"
                                        name="city"
                                        value={this.state.mit.city}
                                        onChange={this.handleChange} 
                                        className="validate"/>
                                    <label>Current city</label>
                                </div>
                            </div>
                            <a href="/document" className="btn-large">Previous</a>
                            <button className="btn-large">Submit<i className="material-icons right">send</i></button>
                        </form>
                    </React.Fragment>
                ):(
                    
                    <React.Fragment>
                        <h5 className="align-center">Are you applying for MIT?</h5>
                        <div>
                            <label>
                                <input 
                                    name="yes"
                                    value="yes"
                                    checked={this.state.selectedOption === "yes"}
                                    onChange={this.handleRadio}
                                    type="radio"/>
                                <span>Yes</span>
                            </label>
                            <label>
                                <input 
                                    name="no"
                                    value="no"
                                    checked={this.state.selectedOption === "no"} 
                                    onChange={this.handleRadio}
                                    type="radio"/>
                                <span>No</span>
                            </label>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createMIT: (details) => dispatch(mitDetails(details))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MIT);