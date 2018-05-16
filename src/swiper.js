import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import { compose, withState, withHandlers, lifecycle, setPropTypes } from 'recompose'
import './swiper.css'

const ComponentSwiper = ({
	goNext,
	goPrev,
	index,
	anim,
	direction,
	updateAnim,
	...props
}) => {
	return (
		<div className='c-swiper'>
			<div className='c-swippernext' onClick={goNext}></div>
			<Transition in={anim} timeout={400}>
				{(status) => (
					<div className={`c-swippercontent ${direction} ${status}`}>
						{ props.data[index] }
					</div>
			  )}
			</Transition>
			<div className='c-swipperprev' onClick={goPrev}></div>
		</div>
	)
}

export default compose(
	setPropTypes({
		data: PropTypes.array.isRequired,
		goNext: PropTypes.func,
		goPrev: PropTypes.func,
		updateDirection: PropTypes.func,
		updateAnim: PropTypes.func,
		updateIndex: PropTypes.func,
		direction: PropTypes.string,
		index: PropTypes.number,
		anim: PropTypes.bool,
	}),
	withState('index', 'updateIndex', 0),
	withState('anim', 'updateAnim', false),
	withState('direction', 'updateDirection', ''),
	withHandlers({
		goNext: ({index, data, anim, ...props}) => event => {
			props.updateDirection('next')
			if (index < data.length - 1) {
				let updatedIndex = index + 1
				props.updateIndex(updatedIndex)
				props.updateAnim(true)
			}
		},
		goPrev: ({index, data, anim, ...props}) => event => {
			props.updateDirection('prev')
			if (index > 0) {
				let updatedIndex = index - 1
				props.updateIndex(updatedIndex)
				props.updateAnim(true)
			}

		}
	}),
	lifecycle({
		componentWillReceiveProps(nextProps) {
			if (nextProps.anim === true) nextProps.updateAnim(false)
		}
	})
)(ComponentSwiper)
