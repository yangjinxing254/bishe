<template>
    <div>
        <head-top></head-top>
    </div>
</template>

<script>
import headTop from '../components/headTop'
import {list} from "../api/getData";

export default {
    data() {
        return {}
    },
    components: {
        headTop,
    },
    async mounted() {
        const data = await list()
        console.log(data);
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
