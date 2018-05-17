import React from 'react'
import './example.css'

const ExampleComponent = ({number = 0}) => (
	<div className='example'>
		<h1>{`Example Component ${number}`}</h1>
		<div className='example__content'></div>
		<p className='example__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque elit eget ex placerat, ac rutrum nisi finibus. Aliquam vulputate auctor aliquet</p>
	</div>
)

export default ExampleComponent
