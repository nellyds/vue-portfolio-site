<template>
  <div id="app">
<v-app>
            <v-navigation-drawer
        absolute
        permanent
        right 
        class="nav"
      >
      <v-list-item>
      <router-link to="/">Home</router-link> 
      </v-list-item>
       <v-list-item>
      <router-link to="/about">About</router-link>
       </v-list-item>
       <v-list-item>
      <router-link to="/art">Art</router-link>
       </v-list-item>
      <router-link to="/blog">Blog</router-link>
      <v-list-item>
      <router-link to="/work">Work</router-link>
      </v-list-item>
            </v-navigation-drawer>
 <v-content>
    <v-container fluid>
    <transition name="page" mode="out-in">
        <router-view></router-view>
    </transition>
    </v-container>
  </v-content>
        <v-footer app>
      <span>Nelson D'Silva &copy; 2019</span>
    </v-footer>
    </v-app>
  </div>
  
</template>

<script>
export default {
    name: 'App',
        methods: {
      },

          created () {

    },
};
</script>
<style>

@import url('https://fonts.googleapis.com/css?family=Turret+Road&display=swap');
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}

.nav a{
  font-family: 'hyper';

  color: black;
  min-height: 25vh;
  text-decoration: none;

}
.container{
  width: 100vw;
  height: 100vh;
}
.nav a:visited {
  color:black;
  text-decoration: none;
  font-weight: bold;
}


.section_title{
  font-family: 'hyper';
  text-align:left;
}
.bottom_title{
  font-family: 'hyper';
  transform: rotate(180deg);
  text-align: right;
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

body {

  color: #000;
  position: relative;
  overflow: hidden;
}


</style>