<template v-if="photos.length > 0">
  <div class="art">

<v-responsive :aspect-ratio="16/9">
      <v-window v-model="onboarding" vertical>
      <div class="img_container" v-for="photo in photos" :key="photo.id">
      <v-card flat
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img 
          :aspect-ratio="16/16"
          :src="photo.images.standard_resolution.url" 
        /> 
        
      <v-card flat>
        <p class="caption">{{ photo.caption.text }}</p>
      </v-card>
      </v-card>
      </div>
      </v-window>
</v-responsive>

  </div>
  
</template>
<script>
export default {
  name: 'art',

  data() {
    return {
      photos: []
    };
  },
  methods: {},
  mounted() {
    this.$http.get('https://nelsondsilva.pythonanywhere.com/getArt').then(function(data) {
      this.photos = data.body.data;
    });
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Turret+Road&display=swap');
.caption{
    padding: 5px 10px 5px 5px;
  background-color: #fff;
  border-right: 1px solid #fff;
  text-align: right;
  font-family: 'Turret Road';
}
.box {
 cursor: pointer;
 height: 300px;
  position: relative;
  overflow: hidden;
  width: 400px;
}
.image{
  position: absolute;
  left: 0;
 -webkit-transition: all 300ms ease-out;
 -moz-transition: all 300ms ease-out;
 -o-transition: all 300ms ease-out;
 -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}

.box .overbox {
  background-color: #304562;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 100;
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  opacity: 0;
  width: 360px;
  height: 240px;
  padding: 130px 20px;
}

.box:hover .overbox { opacity: 1; }
.box .overtext {
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  transform: translateY(40px);
  -webkit-transform: translateY(40px);
}
.box .title {
  font-size: 2.5em;
  text-transform: uppercase;
  opacity: 0;
  transition-delay: 0.1s;
  transition-duration: 0.2s;
}
.box:hover .title,
.box:focus .title {
  opacity: 1;
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
}

.box .tagline {
  font-size: 0.8em;
  opacity: 0;
  transition-delay: 0.2s;
  transition-duration: 0.2s;
}
.box:hover .tagline,
.box:focus .tagline {
  opacity: 1;
  transform: translateX(0px);
  -webkit-transform: translateX(0px);
}

</style>