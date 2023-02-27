<template>
   <model-viewer
      src="/projects/guideme/models/buttons.glb"
      camera-controls
      shadow-intensity="2"
      shadow-softness="1"
      exposure="1"
      camera-orbit="333.9deg 77.97deg 0.1382m"
      field-of-view="30deg"
      @load="onLoad"
   >
   </model-viewer>
</template>

<script setup lang="ts">
const onLoad = (e: any) => {
   // Buttons caps
   e.target.model.materials[0].pbrMetallicRoughness.setMetallicFactor(1);
   e.target.model.materials[0].pbrMetallicRoughness.setRoughnessFactor(0.55);
   // Buttons back
   e.target.model.materials[2].pbrMetallicRoughness.setMetallicFactor(1);
   e.target.model.materials[2].pbrMetallicRoughness.setRoughnessFactor(0.26);
   // PCB
   e.target.model.materials[8].pbrMetallicRoughness.setMetallicFactor(1);
   e.target.model.materials[8].pbrMetallicRoughness.setRoughnessFactor(0.38);
};
</script>

<style lang="scss"></style>
