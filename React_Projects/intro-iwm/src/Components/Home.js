import React, { Component } from 'react';
import adampic from '../images/adam1.JPG';
 


class Home extends Component {

    state = {buttonText: ''}
 
    greenClick = () => {
      this.setState({
        buttonText: 'Go!'
      });
    }
    
    redClick = () => {
      this.setState({
        buttonText: 'Stop!'
      });
    }

    render () {
        return (
            <div>
                <p className="coolText">Here is some text</p>
                <img className="adamPicture" src={adampic} alt="profile picture" />

                <br />
                <br />

                <button onClick={this.greenClick} className='greenButton'>Green</button>
                <button onClick={this.redClick} className='redButton'>Red</button>

                <br />
                <p>{this.state.buttonText}</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Home;