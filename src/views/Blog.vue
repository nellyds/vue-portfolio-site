<template>

  <div class="blog">
    <paginate name="entries" :list="entries">
      <div class="entry_title" v-for="entry in paginated('entries')" :key="entry.id">
      
     
     <router-link v-bind:to="'entry/' + entry.id">{{entry.title}}</router-link>
      </div>
    </paginate>

      <paginate-links for="entries" :show-step-links="true"></paginate-links>
  <paginate-links for="entries" :limit="5" :show-step-links="true"></paginate-links>
  <paginate-links for="entries" :simple="{
        next: ' »',
        prev: '« '
      }"></paginate-links>
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
  beforeCreate() {
    this.$http.get("http://127.0.0.1:5000/getBlog").then(function(data)
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
