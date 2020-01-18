<template>
  <div class="entry">
    <v-responsive :aspect-ratio="16/9">
  <p class="entry_title" style="font-family: 'hyper';color:white"> {{ blogItem[0].title }} </p>
    <v-responsive :aspect-ratio="8/8" class="entry_container">
    <div class="nes-container is-dark">

    <p class="entry_content" v-html = blogItem[0].content> </p>
</div>
    </v-responsive>

    </v-responsive>
  </div>
</template>

<script>
export default {
  name: 'entry',
  data() {
    return {
      blogItem: []
    };
  },
  methods: {},
  beforeMount() {
    var entryId = this.$route.params.id;
    this.$http
      .get('https://nelsondsilva.pythonanywhere.com/getEntry?id=' + entryId)
      .then(function(data) {
        this.blogItem = data.body.entry;
      });
  }
};
</script>
<style>
.entry_container{
  width: 70vw;
  margin: auto;
}
.entry_title{
  font-size:1.3em;
}
.entry_content{
  font-size:.8em;
}
.img{
    height:auto;
  width: 25vw;
  margin: auto;
}


</style>
