<template>
  <div class="about">
    <h1>{{aboutEntry[0].content}}</h1>
   
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
    
    this.$http.get("http://127.0.0.1:5000/getAbout").then(function(data)
    {     
        this.aboutEntry = data.body.about;
    })    
}
}
</script>