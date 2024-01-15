<template>
    <div>
        <img 
            v-if="isLazy"
            :class="className" 
            :data-src="src" 
            :src="getPlaceholderImage()"
            :alt="getAltName(src)"
            :width="width"
            :height="height"
            :style="style" 
            :srcset="srcset"
            :sizes="getSizes()"
        />
        <img 
            v-if="!isLazy"
            :class="className" 
            :src="src" 
            :alt="getAltName(src)"
            :width="width"
            :height="height"
            :style="style" 
            :srcset="srcset"
            :sizes="getSizes()"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    image: {
        type: String,
    },
    isLazy : {
        type : Boolean,
        default : false
    },
    className: {
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
    srcset: {
        type: String,
    },
    showAspectRatio: {
        type : Boolean,
        default : false
    },
})
const style = ref("16 / 9")

onMounted(() => {
  if(props.isLazy){

  }
  if(props.width && props.height){
    style.value = `${props.width} / ${props.height}`;
  }
  if(props.showAspectRatio){

  }
  if(props.sizes){
    this.getSizes();
  }
})

const getAltName = () =>{
    if(props.alt)
        return props.alt;
    return props.image.split('/').pop();
}

const getPlaceholderImage = ( ) =>{
    return ""
}

const getSizes = () =>{
    var sizeResult = '';
    switch (props.sizes) {
        case 'large':
            sizeResult = '100vw';
            break;
        case 'medium':
            sizeResult = '(max-width: 810px) 50vw, 100vw';
            break;

        case 'small':
            sizeResult = '(max-width: 810px) 33vw, 95vw';
            break;

        case '':
            sizeResult = '95vw';
            break;
        
        default:
            sizeResult = props.sizes;
            break;
    }
    return sizeResult;
}

</script>
