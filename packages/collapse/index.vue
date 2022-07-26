<template>
    <div class="lii-collapse">
        <slot>

        </slot>
    </div>
</template>

<script>
    import {
        provide
    } from '@vue/runtime-core';
    import {
        ref
    } from 'vue';
    export default {
        name: 'liiCollapse',
    }
</script>
<script setup>
    const props = defineProps({
        value: {
            type: Array,
            default: []
        }
    })
    const PARENT_PROVIDE = 'parentProvide';
    provide(PARENT_PROVIDE, props);
</script>

<style lang='less'>
    .lii-collapse {
        padding: 0;
        margin: 0;
    }
</style>