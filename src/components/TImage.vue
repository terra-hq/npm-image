<template>
  <img v-if="isLazy" :class="className" :alt="getAltName(image)" v-lazy="image" :width="width" :height="height" :style="style" v-html="loopDataAttributes()" />
  <img v-if="!isLazy" :class="className" :src="image" :alt="getAltName(image)" :width="width" :height="height" :style="style" v-html="loopDataAttributes()" />
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  isLazy: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
  className: {
    type: String,
  },
  width: {
    type: String | Number,
  },
  height: {
    type: String | Number,
  },
  showAspectRatio: {
    type: Boolean | String,
    default: false,
  },
  dataAttributes: {
    type: Boolean || Array,
    default: false,
  },
});
const style = ref("");

onMounted(() => {
  if (props.showAspectRatio) {
    if (props.width && props.height) {
      style.value = `aspect-ratio: ${props.width} / ${props.height}`;
    }
  }
});

const getAltName = () => {
  if (props.alt) return props.alt;
  return props.image.split("/").pop();
};

const loopDataAttributes = () => {
  var htmlDataAttribute = "data-tos";
  if (props.dataAttributes) {
    if (props.dataAttributes.length > 0) {
      props.dataAttributes.forEach((obj) => {
        Object.entries(obj).forEach(([key, value]) => {
          htmlDataAttribute = `data-${key}="${value}"`;
        });
      });
      return htmlDataAttribute;
    }
  }
  return htmlDataAttribute;
};
</script>
