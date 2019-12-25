<template>

  <div class="blog">
    <h1>This is where the blog will be</h1>
        <div v-for="entry in entries" :key="entry.id">
      <h2 class="accordion">{{entry.title}}</h2>
      <h4 class="panel">{{entry.content}}</h4>
     
     <router-link v-bind:to="'entry/' + entry.id">{{entry.id}}</router-link>}

    </div>
  </div>
</template>
<script>
export default {
  name: 'blog',
data(){
  return{
    entries: []    
  }
},
methods: {

},
  beforeCreate() {
    this.$http.get("http://127.0.0.1:5000/getBlog").then(function(data)
    {
      this.entries = data.body.result;
    })
    
  } 
}
</script>
<style>
</style>
