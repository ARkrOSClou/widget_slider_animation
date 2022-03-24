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

  const slidesSchema = ['collapsed', 'main', 'expanded']
  slidesSchema.unshift('')

  return (
    <>
      {positionList.map((position) => (
        <div key={position} className={`widget widget-${position}`}>
          <div className="slider" style={{ width: 175, height: 130 }}>
            <div className="slide" data-slide={slidesSchema[1]}>
              <div className="slide-wrapper">
                <h4>slide: collapsed</h4>
                <button className="trigger" data-trigger={slidesSchema[2]}>
                  to main
                </button>
              </div>
            </div>
            <div className="slide" data-slide={slidesSchema[2]}>
              <div className="slide-wrapper">
                <h4>slide: main</h4>
                <button className="trigger" data-trigger={slidesSchema[1]}>
                  collapse x
                </button>
                <button className="trigger" data-trigger={slidesSchema[3]}>
                  expand {'>'}
                </button>
              </div>
            </div>
            <div className="slide" data-slide={slidesSchema[3]}>
              <div className="slide-wrapper">
                <h4>slide: expanded</h4>
                <button className="trigger" data-trigger={slidesSchema[2]}>
                  to main
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={`widget widget-bottom-right`}>
        <div className="slider slider-direction-horizontal" style={{ width: 175, height: 130 }}>
          <div className="slide" data-slide={slidesSchema[1]}>
            <div className="slide-wrapper">
              <h4>slide: collapsed</h4>
              <button className="trigger" data-trigger={slidesSchema[2]}>
                to main
              </button>
            </div>
          </div>
          <div className="slide" data-slide={slidesSchema[2]}>
            <div className="slide-wrapper">
              <h4>slide: main</h4>
              <button className="trigger" data-trigger={slidesSchema[1]}>
                collapse x
              </button>
              <button className="trigger" data-trigger={slidesSchema[3]}>
                expand {'>'}
              </button>
            </div>
          </div>
          <div className="slide" data-slide={slidesSchema[3]}>
            <div className="slide-wrapper">
              <h4>slide: expanded</h4>
              <button className="trigger" data-trigger={slidesSchema[2]}>
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
