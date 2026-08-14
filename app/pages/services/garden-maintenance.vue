<script setup lang="ts">
const service = serviceBySlug('garden-maintenance')!
</script>

<template>
  <ServicePage :service="service" />
</template>
