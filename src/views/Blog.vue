<template>

  <div class="blog">
   
    <paginate name="entries" :list="entries">
       <v-responsive :aspect-ratio="16/9">
      <div class="entry_title" v-for="entry in paginated('entries')" :key="entry.id">
      
     
     <router-link style="color:white" v-bind:to="'entry/' + entry.id">{{entry.title}}</router-link>
      </div>
       </v-responsive>
    </paginate>


  <paginate-links for="entries" :limit="5" :show-step-links="true"></paginate-links>
    
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
    
    this.$http.get("https://nelsondsilva.pythonanywhere.com/getBlog").then(function(data)
    {
      this.entries = data.body.result;
    })
    
  } 
}
</script>
<style>
.entry_title{
  font-family: 'hyper'
}
li{
  list-style: none;
}

</style>
