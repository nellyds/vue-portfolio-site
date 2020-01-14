<template>
  <div class="entry">
    <v-responsive :aspect-ratio="16/9">
  <h1 style="font-family: 'hyper';color:white"> {{ blogItem[0].title }} </h1>
    <v-responsive :aspect-ratio="8/8" class="entry_container">
    <div class="nes-container is-dark">

    <h2 v-html = blogItem[0].content> </h2>
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
      .get('http://127.0.0.1:5000/getEntry?id=' + entryId)
      .then(function(data) {
        this.blogItem = data.body.entry;
      });
  }
};
</script>
<style>
.entry_container{
  width: 70vw;
}

</style>
