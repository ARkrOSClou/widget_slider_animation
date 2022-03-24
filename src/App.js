import './App.scss';
import {useEffect} from "react";

function behavior () {
	const widgets = document.querySelectorAll( '.widget' )
	;[...widgets].forEach( widget => slider(widget) )
}

function slider ( widget ) {
	const triggerList = widget.querySelectorAll('.trigger')
	;[...triggerList].forEach( triggerElem => {
		triggerElem.addEventListener('click', (e) => {
			e.preventDefault()
			widget.dataset.slide = triggerElem.dataset.trigger;
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
		'bottom-right',
	]

	return positionList.map( position => (
		<div key={position} className={`widget widget-${position}`}>
			<div className="slider">
				<div className="slide" data-slide='collapsed' >
					<div>
						<button className='trigger' data-trigger='main' >main</button>
					</div>
				</div>
				<div className="slide" data-slide="main">
					<div>
						<button className='trigger' data-trigger='expanded'>expand ></button>
						<button className='trigger' data-trigger='collapsed'>collapse x</button>
					</div>
				</div>
				<div className="slide" data-slide="expanded">
					<div>
						<button className='trigger' data-trigger='main' >main</button>
					</div>
				</div>
			</div>
		</div>
	) )
}

export default App;
