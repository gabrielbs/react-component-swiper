import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import { compose, withState, withHandlers, lifecycle, setPropTypes, defaultProps } from 'recompose'
import './swiper.css'

const ComponentSwiper = ({
	goNext,
	goPrev,
	index,
	anim,
	direction,
	updateAnim,
	arrowRight,
	arrowLeft,
	...props
}) => {
	return (
		<div className='c-swiper'>
			<div className='c-swippernext'>
				{ arrowRight({goNext, goPrev, index}) }
			</div>
			<Transition in={anim} timeout={400}>
				{(status) => (
					<div className={`c-swippercontent ${direction} ${status}`}>
						{ props.data[index] }
					</div>
			  )}
			</Transition>
			<div className='c-swipperprev'>
				{ arrowLeft({goNext, goPrev, index}) }
			</div>
		</div>
	)
}

ComponentSwiper.propTypes = {
	data: PropTypes.array.isRequired,
	goNext: PropTypes.func,
	goPrev: PropTypes.func,
	updateDirection: PropTypes.func,
	updateAnim: PropTypes.func,
	updateIndex: PropTypes.func,
	direction: PropTypes.string,
	index: PropTypes.number,
	anim: PropTypes.bool,
	conditionNext: PropTypes.bool,
	conditionPrev: PropTypes.bool
}

export default compose(
	setPropTypes(ComponentSwiper.propTypes),
	defaultProps({
		conditionNext: true,
		conditionPrev: true
	}),
	withState('index', 'updateIndex', 0),
	withState('anim', 'updateAnim', false),
	withState('direction', 'updateDirection', ''),
	withHandlers({
		goNext: ({index, data, anim, ...props}) => event => {
			if (index < data.length - 1 && props.conditionNext) {
				let updatedIndex = index + 1
				props.updateDirection('next')
				props.updateIndex(updatedIndex)
				props.updateAnim(true)
			}
		},
		goPrev: ({index, data, anim, ...props}) => event => {
			if (index > 0 && props.conditionPrev) {
				props.updateDirection('prev')
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
