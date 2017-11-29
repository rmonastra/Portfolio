import React, {Component} from 'react';
import '../css/layout.css';
import Portfolio from './Portfolio'
import About from './About'
import Icon from './Icon'
import Typist from 'react-typist';
//import Form from './Form'
import Form from './Form'
import '../css/layout.css'

class Layout extends Component {
    render() {
        return (
            <div>
                <div className='grid'>
                    <div className='header'>Richard Monastra</div>
                    <div className='section-A'>   
                            <Typist className='typist'>
                                Building Tomorrow Today
                            </Typist>              
                    </div>
                    <div className='section-B'>
                    <h3 className='h3'>About</h3>
                        <About/>
                        
                    </div>
                    <div className='section-C'>
                        <h3 className='h3'>Portfolio</h3>
                        <div className='portfolio'>
                      
                            <Portfolio/>
                           
                        </div>
                    </div>
                    <div className='section-D'>
                        <h3 className='h3'>Contact</h3> 
                       
                            <Form/>
                         
                    </div>
                    <div className='footer'>
                        <Icon/>
                        </div>
                </div>
            </div>
        );
    }
}

export default Layout;