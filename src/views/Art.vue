<template v-if="photos.length > 0">

  <div class="art">
    <h1>This is where there will be an instagram feed.</h1>
    <div v-for="photo in photos" :key="photo.id">
          <img :src="photo.images.standard_resolution.url"  />

      </div>
  </div>
</template>
<script>
export default {
  
  name: 'art',
  data() {
    return {
    photos: []
  }
  },
        methods: {

      },
  beforeCreate() {
            
            this.$http.get("http://127.0.0.1:5000/getArt").then(function(data)
    {
              this.photos = data.body.data;
      
    })
        
      }

    } 

</script>

<style>

</style>