import React, { Component } from 'react'
import './App.css'

import Card from 'components/card'
import CardImage from 'components/card-image'
// import ComponentSwiper from 'components/component-swiper'
import Popx from 'react-popx-component'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-4">
            <Popx />
          </div>
          <div className="col-4">
            <Card className='my-example-card' color='purple'>
              <div className='card-body text-center'>
          			<CardImage
          				type='rounded'
          				image='http://via.placeholder.com/100x100'
          				alt='Alt for imagecard'
          			/>
                <h4 className='card-title'>Lorem ipsum dolor sit amet</h4>
                <p className='card-text'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                <a href='/' className='btn btn-primary w-100'>Entrar</a>
          		</div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default App
