<template>
  <transition name="fade" mode="out-in">
    <div class="home">

        <img src="@/assets/introMovie.gif" />


</div>

  </transition>
</template>

<script>
export default {
  name: 'home',
    data: () => ({
    overlay: true,
  }),
};
</script>
<style scoped>
img{
  height: 80vh;
  width: 80vw;
}
</style>
