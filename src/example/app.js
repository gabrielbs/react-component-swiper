import React, { Component } from 'react'
import ComponentSwiper from '../swiper'
import ExampleComponent from './example-component'

class App extends Component {
	render() {
		return(
			<div className='app'>
				<ComponentSwiper
					data={[
						<ExampleComponent number={1} />,
						<ExampleComponent number={2} />,
						<ExampleComponent number={3} />
					]}
				/>
			</div>
		)
	}
}

export default App
