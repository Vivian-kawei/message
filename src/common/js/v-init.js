import Vue from 'vue'

Vue.directive('touch', {
  bind: function (el, binding, vnode) {
    let touchType = binding.arg // 传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap
    let timeOutEvent = 0
    let direction = ''
    let startX, startY // 滑动处理
    function GetSlideAngle (dx, dy) { // 返回角度
      return Math.atan2(dy, dx) * 180 / Math.PI
    }
    // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    function GetSlideDirection (startX, startY, endX, endY) {
      let dy = startY - endY
      let dx = endX - startX
      let result = 0

      // 如果滑动距离太短
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result
      }

      let angle = GetSlideAngle(dx, dy)
      if (angle >= -45 && angle < 45) {
        result = 'swiperight'
      } else if (angle >= 45 && angle < 135) {
        result = 'swipeup'
      } else if (angle >= -135 && angle < -45) {
        result = 'swipedown'
      } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 'swipeleft'
      }
      return result
    }

    el.addEventListener('touchstart', function (ev) {
      startX = ev.touches[0].pageX
      startY = ev.touches[0].pageY
      timeOutEvent = setTimeout(() => { // 判断长按
        timeOutEvent = 0
        if (touchType === 'press') {
          binding.value()
        }
      }, 500)
    }, false)

    el.addEventListener('touchmove', function (ev) {
      clearTimeout(timeOutEvent)
      timeOutEvent = 0
    })

    el.addEventListener('touchend', function (ev) {
      let endX, endY
      endX = ev.changedTouches[0].pageX
      endY = ev.changedTouches[0].pageY
      direction = GetSlideDirection(startX, startY, endX, endY)

      clearTimeout(timeOutEvent)

      if (touchType) {
        switch (direction) {
          case 0:
            break
          case 'swipeup':
            if (touchType === 'swipeup') {
              binding.value()
            }
            break
          case 'swipedown':
            if (touchType === 'swipedown') {
              binding.value()
            }
            break
          case 'swipeleft':
            if (touchType === 'swipeleft') {
              binding.value()
            }
            break
          case 'swiperight':
            if (touchType === 'swiperight') {
              binding.value()
            }
            break
          default:
            binding.value(direction)
        }
      } else {
        binding.value(direction)
      }
    }, false)
  }
})
