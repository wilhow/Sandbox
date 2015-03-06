var isOpen = false
//vertical menu
var vMenuEl = document.querySelector('.vpull-down-menu'); //The menu object
var vHandleEls = document.querySelectorAll('.vert-header, .vclose-handle'); //The collection of menu object. This also triggers the menu to slide down.
var vBoundry = new Impulse.Boundary({ top: 0, bottom: window.innerHeight, left: 0, right: 0 }) //CSS boundary of the menu. Thus it's the actual div that's being slid.
var vMenu = new Impulse(vMenuEl)
  .style('translateY', function(x, y) { return y + 'px' }); //The object representation of the menu

var vDrag = vMenu.drag({ handle: vHandleEls, boundary: vBoundry, direction: 'vertical' }); //The physics of the menu object

  function vend() {
	  console.log("vert:end:")
    if(this.moved()) {
      isOpen = vMenu.direction('down')
  } else {
    isOpen = !isOpen
    if(isOpen) {
      vMenu.velocity(0, 2000)
    }
  }

  if(isOpen) {
    vMenuEl.classList.add('open')
	vMenu.accelerate({ acceleration: 1500, bounceAcceleration: 4000, bounce: false })
      .to(0, vBoundry.bottom).start()
      .then(function() {
      })
  } else {
    vMenuEl.classList.remove('open')
    vMenu.spring({ tension: 100, damping: 15 })
      .to(0, vBoundry.top).start()
  }
}

vDrag.on('end', vend)

//Horizontal menu
var hMenuEl = document.querySelector('.pull-down-menu'); //The menu object
var hHandleEls = document.querySelectorAll('.horz-header, .hclose-handle'); //The collection of menu object. This also triggers the menu to slide down.
var hBoundry = new Impulse.Boundary({ top: 0, bottom: window.innerHeight, left: 0, right: 0 }) //CSS boundary of the menu. Thus it's the actual div that's being slid.
var hMenu = new Impulse(hMenuEl)
  .style('translateY', function(x, y) { return y + 'px' }); //The object representation of the menu

var hDrag = hMenu.drag({ handle: hHandleEls, boundary: hBoundry, direction: 'vertical' }); //The physics of the menu object

  function hend() {
	  console.log("horz:end:")
    if(this.moved()) {
      isOpen = hMenu.direction('down')
  } else {
    isOpen = !isOpen
    if(isOpen) {
      hMenu.velocity(0, 2000)
    }
  }

  if(isOpen) {
    hMenuEl.classList.add('open')
	hMenu.accelerate({ acceleration: 1500, bounceAcceleration: 4000, bounce: true })
      .to(0, hBoundry.bottom).start()
      .then(function() {
      })
  } else {
    hMenuEl.classList.remove('open')
    hMenu.spring({ tension: 100, damping: 15 })
      .to(0, hBoundry.top).start()
  }
}

hDrag.on('end', hend)