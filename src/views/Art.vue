<template v-if="photos.length > 0">
  <div class="art">
<div class="section">

    <div class="grid">
      <div class="img_container" v-for="photo in photos" :key="photo.id">
        <figure class="effect">
          <img :src="photo.images.standard_resolution.url" />
          <figcaption>
            <p class="caption">{{ photo.caption.text }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
</div> 
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
    this.$http.get('http://nelsondsilva.pythonanywhere.com/getArt').then(function(data) {
      this.photos = data.body.data;
    });
  }
};
</script>

<style>

.caption{
  font-family: 'Turret Road';
}

.grid {
  position: relative;
  margin: 0 auto;
  padding: 1em 0 4em;
  min-width: 700px;
  max-width: 1000px;
  list-style: none;
  text-align: center;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
  color: black;
}

figure.effect img {
  max-width: 60%;
  opacity: 1;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-30px, 0, 0) scale(1.12);
  transform: translate3d(-30px, 0, 0) scale(1.12);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

figure.effect:hover img {
  opacity: .3;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

figure.effect h2 {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em 1.2em;
}

figure.effect p {
  padding: 5px 10px 5px 5px;
  width: 50%;
  background-color: #fff;
  border-right: 1px solid rgb(0, 0, 0);
  text-align: right;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

figure.effect:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
