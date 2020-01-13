<template>
  <div class="entry">
    <v-responsive :aspect-ratio="16/9">
    <h1>{{ blogItem[0].title }}</h1>
    <h2 v-html = blogItem[0].content> </h2>
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
.entry{
  font-family: 'Turret Road'
}
</style>
