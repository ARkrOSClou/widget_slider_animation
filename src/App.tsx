import './App.scss'
import { useEffect } from 'react'
import { behavior } from './slider'

function App() {
  useEffect(() => {
    behavior()
  })

  const positionList = [
    'top-left',
    'top-right',
    'bottom-left',
    // 'bottom-right',
  ]

  const sliderSchema = ['collapsed', 'main', 'expanded']
  sliderSchema.unshift('')

  return (
    <>
      {positionList.map((position) => (
        <div key={position} className={`widget widget-${position}`}>
          <div className="slider" style={{ width: 175, height: 130 }}>
            <div className="slide" data-slide={sliderSchema[1]}>
              <div className="slide-wrapper">
                <h4>slide: collapsed</h4>
                <button className="trigger" data-trigger={sliderSchema[2]}>
                  to main
                </button>
              </div>
            </div>
            <div className="slide" data-slide={sliderSchema[2]}>
              <div className="slide-wrapper">
                <h4>slide: main</h4>
                <button className="trigger" data-trigger={sliderSchema[1]}>
                  collapse x
                </button>
                <button className="trigger" data-trigger={sliderSchema[3]}>
                  expand {'>'}
                </button>
              </div>
            </div>
            <div className="slide" data-slide={sliderSchema[3]}>
              <div className="slide-wrapper">
                <h4>slide: expanded</h4>
                <button className="trigger" data-trigger={sliderSchema[2]}>
                  to main
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={`widget widget-bottom-right`}>
        <div className="slider slider-direction-horizontal" style={{ width: 175, height: 130 }}>
          <div className="slide" data-slide={sliderSchema[1]}>
            <div className="slide-wrapper">
              <h4>slide: collapsed</h4>
              <button className="trigger" data-trigger={sliderSchema[2]}>
                to main
              </button>
            </div>
          </div>
          <div className="slide" data-slide={sliderSchema[2]}>
            <div className="slide-wrapper">
              <h4>slide: main</h4>
              <button className="trigger" data-trigger={sliderSchema[1]}>
                collapse x
              </button>
              <button className="trigger" data-trigger={sliderSchema[3]}>
                expand {'>'}
              </button>
            </div>
          </div>
          <div className="slide" data-slide={sliderSchema[3]}>
            <div className="slide-wrapper">
              <h4>slide: expanded</h4>
              <button className="trigger" data-trigger={sliderSchema[2]}>
                to main
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
