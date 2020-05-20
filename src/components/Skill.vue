<template>
    <div>
<p style="font-family:hyper" class="nes-badge is-splited">
  <span class="is-primary">{{name}}</span>
  <span class="is-success">{{level}} %</span>
</p>

</div>
       

</template>
<script>
export default {
    name:'Skill',
    props: {
        name:{
            type: String,
        },
        level:{
            type: Number,
        }
    }
}

</script>