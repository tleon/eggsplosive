import React, { Component } from 'react';
import milkimg from './assets/milk.png';
import eggsimg from './assets/egg.png';
import chocolatesimg from './assets/chocolate.png';
import './Infos.css';
//import coeur from './assets/coeur.png';

class Infos extends Component {

  render() {
    const { milk, eggs, chocolates } = this.props;
    return (
      <div className="Infos">
          <div className='textInfo'><img className='infoImage' src={milkimg} alt='milk'/>{milk}</div>
          <div className='textInfo'><img className='infoImage' src={eggsimg} alt='eggs'/>{eggs}</div>
          <div className='textInfo'><img className='infoImage' src={chocolatesimg} alt='chocolate'/>{chocolates}</div>
          {/*<div className='textInfo'><img className='infoImage' src={coeur} alt='chocolate'/>{chocolates}</div>*/}          
      </div>      
    );
  }
}

export default Infos;
