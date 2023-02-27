<template>
   <model-viewer
      src="/projects/guideme/models/handle.glb"
      camera-controls
      poster="poster.webp"
      shadow-intensity="2"
      shadow-softness="1"
      camera-orbit="35.5deg 40.25deg 0.4826m"
      field-of-view="30deg"
      environment-image="legacy"
      exposure="0.48"
      @load="onLoad"
   >
   </model-viewer>
</template>

<script setup lang="ts">
const onLoad = (e: any) => {
   // TOP
   e.target.model.materials[1].pbrMetallicRoughness.setMetallicFactor(1);
   e.target.model.materials[1].pbrMetallicRoughness.setRoughnessFactor(0);
   // BOTTOM
   e.target.model.materials[3].pbrMetallicRoughness.setMetallicFactor(1);
   e.target.model.materials[3].pbrMetallicRoughness.setRoughnessFactor(0);
};
</script>

<style lang="scss"></style>
