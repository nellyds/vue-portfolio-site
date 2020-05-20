
  
<template>

  <div class="blog">
   <div v-if="loading">
     <p >Loading </p>
   </div>
   <div v-else>
    <paginate class="entries_container" name="entries" :list="entries">
      <div class="entry_title" v-for="entry in paginated('entries')" :key="entry.id"> 
     <router-link style="color:white" v-bind:to="'entry/' + entry.id">{{entry.title}}</router-link>
      </div>
    </paginate>
  <paginate-links style="color:white" for="entries" :limit="5" :show-step-links="true"></paginate-links>
   </div>
  </div>
</template>
<script>


export default {
  name: 'blog',

data(){
  return{
    entries: [],
    paginate: ['entries']  
  }
},
methods: {
},
  beforeMount() {
    // this.$http.get('http://127.0.0.1:5000/getBlog').then(function(data)
    this.$http.get("https://nelsondsilva.pythonanywhere.com/getBlog").then(function(data)
    {
      this.entries = data.body.result;
    })
    
  } 
}
</script>
<style>
.entry_title{
  font-family: 'hyper';
  font-size: 1.5em;
}
.entries_container{
padding-top: .2em;
padding-bottom: .2em;
}
li{
  list-style: none;
}
</style>

