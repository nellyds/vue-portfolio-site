<template>

  <div class="entry">
    <h1>This is will be a component that contains entries.</h1>
    <h2>{{$route.params.id}}  </h2>
    <h2>{{blogItem[0].title}}</h2>
    <h2>{{blogItem[0].content}}</h2>
  </div>

</template>

<script>
export default {
  name: 'entry',
data(){
    return{
        blogItem: []
    }
},
methods: {},
beforeMount(){
    var entryId = this.$route.params.id;
    this.$http.get("http://127.0.0.1:5000/get?id="+entryId).then(function(data)
    {
        
        this.blogItem = data.body.entry;
    })    
}
}
</script>

        
   