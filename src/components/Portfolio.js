import React, {Component} from 'react';
import '../css/portfolio.css'
import css from '../images/css.png'
import express from '../images/node.png'


class Portfolio extends Component {
    render() {
        return (
            <div className='portgrid'>
                <div className='card'>
                    <div className='cardHeader'>FrontEnd Projects</div>
                    <div>
                    <img src={css} className='pic' alt=''/>
                    
                    <p>This project uses HTML, CSS and Javascript to recreate the
                        classic memory game, Simon.</p>
                    </div>
                    <div>
                        <a href='https://codepen.io/RMonastra/full/ygzQwv/'><button>Code Pen</button></a>
                    </div>
                </div>
                <div className='card'>
                    <div className='cardHeader'>
                        BackEnd Projects
                    </div>
                    <img src={express} className='pic' alt=''/>
                        <div>
                            <p>This project deployed on Heroku is an API using NodeJS and Express to get UNIX and natural timestamps.</p> 
                        </div>
                        <div>
                            <a href='https://rmtimestamp.herokuapp.com/'><button>Heroku</button></a>
                        </div>
                </div>
                <div className='card'>
                    <div className='cardHeader'>
                        FrontEnd Projects
                    </div>
                    <img src={css} className='pic' alt=''/>
                    <div>
                    <p> This FreeCodeCamp project uses HTML, CSS and Javascript to recreate the
                        classic stragedy game, Tic Tac Toe.</p>
                        </div>
                    <div>
                    <a href='https://codepen.io/RMonastra/full/KamKNx/'><button>Code Pen</button></a>
                    </div>
                </div>
                <div className='card'>
                    <div className='cardHeader'>
                        BackEnd Projects
                    </div>
                    <img src={express} className='pic' alt=''/>
                    <div>
                    <p>This project deployed on Glitch uses NodeJS and MongoDB to store users collection with CRUD operations.</p>
                    </div>
                    <div>
                        <a href='https://free-timpani.glitch.me/'><button>Glitch</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;