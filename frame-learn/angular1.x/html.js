angular.module('drag', [])
  .directive('draggable', function($document) {
    return function(scope, element, attr) {
      let startX = 0,startY = 0, x = 0,y = 0
      element.css({
        position: 'relative',
        border: '1px solid red',
        backgroundColor: 'lightgray',
        cursor: 'pointer'
      })
      element.on('mousedown', function(e) {
        e.preventDefault()
        startX = e.screenX - x
        startY = e.screenY - y
        $document.on('mousemove', mousemove)
        $document.on('mouseup', mouseup)
      })

      function mousemove(e) {
        x = e.screenX - startX
        y = e.screenY - startY
        element.css({
          top: y + 'px',
          left: x + 'px'
        })
      }

      function mouseup() {
        $document.unbind('mousemove', mousemove)
        $document.unbind('mouseup', mouseup)
      }
    }
  })