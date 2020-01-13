<template>
  <transition name="fade" mode="out-in">
    <div class="home">
      <v-responsive :aspect-ratio="16/9">
      <div id="cf">
        <img class="background" src="@/assets/canvas.jpg" />
        <img id="target" src="@/assets/intro.gif" />
      </div>
      </v-responsive>
</div>
  </transition>
</template>
<script>
export default {
  name: 'home',
    data: () => ({
  }),
    mounted() {
    var fade= function(){
    document.getElementById('target').style.opacity="0";
    };
    window.setTimeout(fade, 5000);
  }
};
</script>
<style scoped>
img{
  height: 80vh;
  width: 100vw;
  margin: auto;
}
#cf {
  position: relative;
  margin:0 auto;
}
#cf img{
  position:absolute;
  left:0;
}
</style>
