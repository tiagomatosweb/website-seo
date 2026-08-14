<script setup lang="ts">
const service = serviceBySlug('lawn-care-mowing')!
</script>

<template>
  <ServicePage :service="service" />
</template>
