<template>
<div>

      <p style="color:white" >{{address}} </p>
<img :src="address" />
      </div>
</template>
<script>
export default {
    name: 'Thing',
    
    props: {

        address: {
            type: String
        }
    }

}
</script>
