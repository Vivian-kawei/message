<template>
  <div id="app">
    <transition :name="transitionName">
		  <router-view class="container"></router-view>
		</transition>
  </div>
</template>

<script>
import './common/libs/flexible';
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  watch: {
    $route(to, from) {
      let toDepth = to.path.split('/').length;
      let fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
};
</script>

<style lang="scss">
@import './common/scss/reset';

html,
body,
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
}

#app {
  position: relative;
  overflow-x: hidden; 
  overflow-y: auto;
  background: #f8f8f8;
  .container {
    position: absolute;
    width: 100%;
    transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);

  }
	.slide-left-enter,
	.slide-right-leave-active {
	  opacity: 0;
	  -webkit-transform: translate(30px, 0);
	  transform: translate(30px, 0);
	}
	.slide-left-leave-active,
	.slide-right-enter {
	  opacity: 0;
	  -webkit-transform: translate(-30px, 0);
	  transform: translate(-30px, 0);
	}
}
</style>
