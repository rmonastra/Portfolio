import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/icon.css'




class Icon extends Component {
    render() {
        return (
            <div>
                     <p className='contactfooter'>Contact:</p>      
                    <a href='mailto:rmonastra2@gmail.com'><FontAwesome  className='icon' name='envelope' size='2x'/></a>
                    <a href='https://github.com/rmonastra'><FontAwesome  className='icon' name='github' size='2x'/></a>
                    <a href='https://www.freecodecamp.org/rmonastra'><FontAwesome  className='icon' name='free-code-camp' size='2x'/></a>
                    <a href='https://www.linkedin.com/in/richardmonastra'><FontAwesome  className='icon' name='linkedin' size='2x'/></a>
                
            </div>
        );
    }
}

export default Icon;