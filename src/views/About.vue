<template>
  <div class="about">
  <v-responsive :aspect-ratio="16/9">
   <div class="about_container">
        <img src="@/assets/profile.gif">
        <div class="nes-container is-dark">
    <h1>{{aboutEntry[0].content}}</h1>
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
.about_container{
  width:35%;
  margin: auto;
  font-size: .7em;
}
</style>