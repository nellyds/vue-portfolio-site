<template>
  <div class="about">
  <v-responsive :aspect-ratio="16/9">
   <div class="about_container">
        <img src="@/assets/profile.gif">
        <div class="nes-container is-dark">
    <p class="about_content"><span style="font-family: hyper;">Hello!</span> name is Nelson D'Silva and I am a full stack developer and occasional illustrator.  I like building web applications in Vue, React, Flask, and Mongo, including this very site! </p>
    <p class="about_content">Got a project idea?  Email me @ ndsilva822@gmail.com.</p>
    <p class="about_content">Want to see more of my work?  Head over to my <span><a  href="http://github.com/nellyds"> Github</a></span> and <span ><a href="http://www.instagram.com/nellzymandias"> Instagram</a></span>.</p>

</div>
   </div>    

 

  </v-responsive>
  </div>
  
</template>

<script>

export default {
  name: 'about',
  components:{
    },
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
a:visited {
  color:white;
  text-decoration-color: white;
  font-weight: bold;
}
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