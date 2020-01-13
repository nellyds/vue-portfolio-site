<template>
  <div id="app">
<v-app>
<v-toolbar dense flat prominent
color=#c72e5c>   
<v-toolbar-items v-ripple="{ class: white }">

      <router-link class="clickable" style="color:white;" to="/">Home</router-link> 

      <router-link class="clickable" style="color:white;" to="/about">About</router-link>

      <router-link class="clickable" style="color:white;" to="/art">Art</router-link>

      <router-link class="clickable" style="color:white;" to="/blog">Blog</router-link>

      <router-link class="clickable" style="color:white;" to="/work">Work</router-link>

</v-toolbar-items>
</v-toolbar>    
  <v-responsive :aspect-ratio="16/9">
 <v-content>

    <transition name="page" mode="out-in">
        <router-view></router-view>
    </transition>

    
  </v-content>
  </v-responsive>
        <v-footer app
        color=#c72e5c
        >
          <v-card-text>
      <span class="footerText">Nelson D'Silva &copy; 2019</span>
          </v-card-text>
      <v-divider></v-divider>
      <div class="icons">
           <i class="nes-icon twitter is-small icon"></i>
      <i class="nes-icon instagram is-small icon"></i>
      <i class="nes-icon github is-small icon"></i>
      <i class="nes-icon gmail is-small icon"></i>
      <i class="nes-icon linkedin is-small icon"></i>
    </div>

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

  text-align: center;
  font-family: 'Turret Road';
  background-image: url('assets/space5.gif');

}
.footerText{
  color:white;
  font-size: 1.5em;
}

.icons{
  margin: auto;
  padding: 5px;
}
.icon{
  padding-left: 10px;
  padding-right: 10px;
}

 a{
   text-decoration-color: white;
  font-family: 'hyper';
  color: white;
  text-decoration: none;
  max-height:25vh;


}
.nav{
  color:white;
  background-color: black;
     text-decoration-color: white;
  font-family: 'hyper';
  color: white;
  text-decoration: none;
}
a:visited {
  color:white;
  text-decoration-color: white;
  font-weight: bold;
}
a:hover{
  text-decoration: none;
  color:white;
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

.clickable:hover {
  text-shadow: 2px 2px white;
}
 
.clickable{

}


body {
  position: relative;
  overflow: hidden;

}


</style>