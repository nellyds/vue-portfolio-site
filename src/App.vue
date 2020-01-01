<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/art">Art</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/work">Work</router-link>
    </div>
    <transition name="page" mode="out-in">
        <router-view id="box"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'App',
 

        methods: {

      },


};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P|Turret+Road&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(16, 16, 19);
  color:white;;
}

#nav {
  padding: 30px;
}

#nav a {
  font-family: 'Turret Road';
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}

#box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  color: white;
  font-family: 'Raleway';
  font-size: 2.5rem;
}
.gradient-border {
  --borderWidth: 3px;
  background: #1D1F20;
  position: relative;
  border-radius: var(--borderWidth);
}
.gradient-border:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(30deg, #3f8c8e, #136e7f, #f37055, #7f133e);
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}


@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
