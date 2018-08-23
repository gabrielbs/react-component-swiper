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
					arrowRight={(state) => (
						<button onClick={() => state.goNext()}>goNext</button>
					)}
					arrowLeft={(state) => (
						<a href="#" onClick={() => state.goPrev()}>goPrev</a>
					)}
					conditionNext={true}
					conditionPrev={true}
				/>
			</div>
		)
	}
}

export default App
