<template>
  <transition name="fade" mode="out-in">
    <div class="home">

      <div id="cf">
        <img class="background" src="@/assets/canvas.jpg" />
        <img id="target" src="@/assets/intro.gif" />
      </div>

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
@media screen and (min-width: 416px){
img{
text-align: center;
width: 80%;
}
#cf {
  position: relative;
  margin:0 auto;
}
#cf img{
  position:absolute;
  left:0;
}
}
@media screen and (max-width: 415px){
  img{
    width: 100vw;
text-align: center;

}
#cf {
  position: relative;
  margin:0 auto;
}
#cf img{
  position:absolute;
  left:0;
}
}
</style>
