# Vue Form

`tiamge` is a collection of Vue.js components designed to simplify form creation and management in your Vue projects. This component provide a consistent and customizable set of an image with its class, height, width and style.

## Installation

```sh
npm install @terrahq/timage
```

## Globally import

#### Astro Project with Vue

For projects using Astro with embedded Vue, create a file named `\_app.ts` and include the following code:

```sh
import type { App } from "vue";
import TImage from "@terrahq/timage";

export default (app: App) => {
    app.use(TImage);
};
```

Then, integrate the file in your astro.config.mjs specifying the path to your file:

```sh
export default defineConfig({
    integrations: [
        vue({ appEntrypoint: "/src/pages/_app" }),
    ],
});

```

Now, you can use the components in any .vue file.

#### Nuxt Project

For Nuxt projects, create a 'Plugins' folder at the root, and within it, create a file (e.g., "form.js"). Inside the file, add the following code:

```sh
import TImage from "@terrahq/vue-form"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(
        TImage,
    )
})
```

Now, you can use the components in any .vue file.

#### Wordpress

## Usage

```sh
<template>
    <TImage 
        className="class"
        image="image.png" 
        width="30"
        height="30"
        showAspectRatio="true"
        isLazy="false"
        dataAttributes=false
      />
    <TImage 
        className="class"
        image="image.png" 
        width="30"
        height="30"
        showAspectRatio="true"
        isLazy="true"
        dataAttributes=false
        placholderImage=getPlaceholderImage()
      />
</template>  

<script setup>
// This function should go on a composable Vue file
const getPlaceholderImage = ( ) =>{
    return  props.placeholder ? props.placeholder.value : "./placeholder.png"
}
</script>

```

## Components

-   **TImage**
    The TImage component is used load an image with or without lazy, with height, with width , with aspect ratio style and with data attributes if needed.

    -   Props:
        -   **className**: CSS class for styling the form group - (String).
        -   **image**: (Required) URL of the image - (String).
        -   **width**: Width of the iamge (String)
        -   **height**: Height of the iamge (String)
        -   **showAspectRatio**: Set the style='aspect-ratio: width / height' if true. No style if false. (Boolean)
        -   **isLazy**: Set the data-src='imageURL' if true. src='imageURL' if false. (Boolean)
        -   **placeholderImage**: Set the src='placeholderImage' if true.(Boolean)
        -   **dataAttributes**: Sets an array of attributes related to the image. (Array)

## Example of data Attributes 
```sh js
 var dataAttributes = [
    {tos : "200"},
    {tos-bg: 'true'},
    {tos-start: '100%'}
 ];
```