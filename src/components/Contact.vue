<template>
    <div>

<a :href=url><i class=nes-icon linkedin is-small icon></i></a>

</div>
       

</template>
<script>
export default {
    name:'Contact',
    props: {
        url:{
            type: String,
        },
        icon:{
            type: String,
        },
        platform:{
            type: String
        }
    }
}

</script>