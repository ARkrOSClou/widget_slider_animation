export function behavior() {
  const widgets = document.querySelectorAll('.widget')
  // @ts-ignore
  ;[...widgets].forEach((widget) => slider(widget))
}

function slider(widget: HTMLElement) {
  const slider = widget.querySelector<HTMLElement>('.slider')!
  const triggerList = widget.querySelectorAll('.trigger')!
  // @ts-ignore
  ;[...triggerList].forEach((triggerElem: HTMLElement) => {
    triggerElem.addEventListener('click', (e) => {
      e.preventDefault()
      slider.dataset.slide = triggerElem.dataset.trigger
    })
  })
}
