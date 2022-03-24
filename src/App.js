import './App.scss';
import {useEffect} from "react";

function behavior () {
	const widgets = document.querySelectorAll( '.widget' )
	;[...widgets].forEach( widget => slider(widget) )
}

function slider ( widget ) {
	const slider = widget.querySelector('.slider')
	const triggerList = widget.querySelectorAll('.trigger')
	;[...triggerList].forEach( triggerElem => {
		triggerElem.addEventListener('click', (e) => {
			e.preventDefault()
			slider.dataset.slide = triggerElem.dataset.trigger;
		})
	} )

}

function App() {

	useEffect( () => {
		behavior()
	} )

	const positionList = [
		'top-left',
		'top-right',
		'bottom-left',
		// 'bottom-right',
	]

	const slides = [
		'collapsed',
		'main',
		'expanded',
	]
	slides.unshift('')

	return <>
		{positionList.map( position => (
			<div key={position} className={`widget widget-${position}`}>
				<div className="slider" style={{width:175, height:130}}>
					<div className="slide" data-slide={slides[1]}>
						<button className='trigger' data-trigger={slides[2]}>main</button>
					</div>
					<div className="slide" data-slide={slides[2]}>
						<button className='trigger' data-trigger={slides[1]}>collapse x</button>
						<button className='trigger' data-trigger={slides[3]}>expand ></button>
					</div>
					<div className="slide" data-slide={slides[3]}>
						<button className='trigger' data-trigger={slides[2]}>main</button>
					</div>
				</div>
			</div>
		) )}


		<div className={`widget widget-bottom-right`}>
			<div className="slider slider-direction-horizontal" style={{width:175, height:130}}>
				<div className="slide" data-slide={slides[1]}>
					<button className='trigger' data-trigger={slides[2]}>main</button>
				</div>
				<div className="slide" data-slide={slides[2]}>
					<button className='trigger' data-trigger={slides[1]}>collapse x</button>
					<button className='trigger' data-trigger={slides[3]}>expand ></button>
				</div>
				<div className="slide" data-slide={slides[3]}>
					<button className='trigger' data-trigger={slides[2]}>main</button>
				</div>
			</div>
		</div>
	</>
}

export default App;
