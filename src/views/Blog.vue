<template>

  <div class="blog">
    <h1>This is where the blog will be</h1>
    <paginate name="entries" :list="entries">
      <li v-for="entry in paginated('entries')" :key="entry.id">
              <h2 class="accordion">{{entry.title}}</h2>
      
     
     <router-link v-bind:to="'entry/' + entry.id">{{entry.title}}</router-link>}
        </li>
    </paginate>

      <paginate-links for="entries" :show-step-links="true"></paginate-links>
  <paginate-links for="entries" :limit="2" :show-step-links="true"></paginate-links>
  <paginate-links for="entries" :simple="{
        next: 'Next »',
        prev: '« Back'
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
</style>
