<template>
    <div>
        <head-top></head-top>
        <div>发布留言</div>
    </div>
</template>

<script>
import headTop from '../components/headTop'

export default {
    data() {
        return {}
    },
    components: {
        headTop,
    },
    mounted() {
    },
    computed: {},
    methods: {}
}
</script>

<style lang="less">
@import '../style/mixin';


.wan {
    .sc(16px, #333)
}
</style>
