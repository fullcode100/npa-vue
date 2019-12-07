<template>
  <div class="teaser" v-editable="blok">
    <richtext :text="blok.headline"></richtext>
  </div>
</template>

<script>
export default {
	props: ["blok"]
}
</script>
