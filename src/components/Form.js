import React from 'react';
import firebase from "./firebase";
import '../css/layout.css'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            comments: []
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

   onSubmit = (e) => {
       e.preventDefault();
       const commentsRef = firebase.database().ref('comments');
       const form = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
       }
       commentsRef.push(form);
       this.setState({
            name: '',
            email: '',
            message: ''
        
       })
       console.log(form)
    }

    render() {
        return (
            <div>
            <form className='form'>
                <label>
                    Name:&nbsp;&nbsp;
                    <input
                        className='inputbox'
                        name='name'
                        value={this.state.name}
                        onChange={e => this.handleChange(e)}/>
                </label><br/><br/>
                <label>
                    Email:&nbsp;&nbsp;
                    <input 
                        className='inputbox'
                        name='email'
                        value={this.state.email} 
                        onChange={e => this.handleChange(e)}/>
                </label><br/>
                <label>
                    <p>Message:</p>
                    <textarea 
                        className='areabox'
                        name='message' 
                        rows='6'
                        cols='32'
                        value={this.state.message} 
                        onChange={e => this.handleChange(e)}/>
                        
                </label><br/><br/>
                <button onClick={(e) => this.onSubmit(e)}>Send</button>
                
            </form>
            </div>
        );
    }
}

export default Form;
