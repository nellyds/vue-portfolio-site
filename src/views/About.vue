<template>
  <div class="about">
  <v-responsive :aspect-ratio="16/9">
    <h1>{{aboutEntry[0].content}}</h1>

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