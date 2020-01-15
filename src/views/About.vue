<template>
  <div class="about">
  <v-responsive :aspect-ratio="16/9">
   <div class="about_container">
        <img src="@/assets/profile.gif">
        <div class="nes-container is-dark">
    <p class="about_content">{{aboutEntry[0].content}}</p>
</div>
   </div>    

 

  </v-responsive>
  </div>
  
</template>

<script>
export default {
  name: 'about',
data(){
    return{
        aboutEntry: []
    }
},
methods: {},
beforeMount(){
    
    this.$http.get("https://nelsondsilva.pythonanywhere.com/getAbout").then(function(data)
    {     
        this.aboutEntry = data.body.about;
    })    
}
}
</script>
<style scoped>
img{

  
  height: 40vh;
  width: auto;
  margin: auto;
}
.about_content{
  font-size:1.2em;
}
.about_container{
  width: 80vw;
  margin: auto;
}
</style>