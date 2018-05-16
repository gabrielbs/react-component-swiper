import React, { Component } from 'react'
import ComponentSwiper from './swiper'

class App extends Component {
	render() {
		return(
			<div className='app'>
				<ComponentSwiper data={[
					<h1>teste um</h1>,
					<h2>teste dois</h2>
				]} />
			</div>
		)
	}
}

export default App
