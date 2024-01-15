<template>
    <div>
        <img 
        :class="className" 
        :src="src" 
        :alt="alt"
        :width="width"
        :height="height"
        :style="style" 
        :srcset="srcset"
    />
    </div>
</template>

<script setup>
const props = defineProps({
    className: {
        type: String,
    },
    src: {
        type: String,
    },
    alt: {
        type: String,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    style: {
        type: String,
    },
    srcset: {
        type: String,
    },
})
</script>
