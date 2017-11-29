import React, {Component} from 'react';
import '../css/layout.css';


class About extends Component {
    render() {
        return (
            <div>
                
                <div className='aboutp'>
               
                <div>
                    <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Former networking professional is advancing his career in web development.
                        Obtaining an Associate's degree in Software Development, 5/6 Certificates on
                        Beta FreeCodeCamp and various course completions on TreeHouse, Udemy and MongoDB
                        University has prepared me for this exciting career change.  Some of these skills include:
                    </p>
                    </div>
                    <div className='skills'>
                        <div>
                        <p>
                            *React<br/>
                            *React-Router<br/>
                            *Javascript
                       </p>
                        </div>
                        <div>
                        <p>
                            *Bootstrap<br/>
                            *CSS<br/>
                            *HTML
                            </p>
                        </div>
                        <div>
                        <p>
                            *NodeJS<br/>
                            *ExpressJS<br/>
                            *MongoDB<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;