<template>
  <span tabindex="0" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" :data-bs-placement="placement" :data-bs-title="title">
    <slot></slot>
  </span>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Текст подсказки'
  },
  placement: {
    type: String,
    default: 'top'
  }
});

onMounted(() => {
  const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]');
  new bootstrap.Tooltip(tooltipTriggerEl); // eslint-disable-line
});
</script>

<style lang="scss">
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-white);
  --bs-tooltip-color: #424242;
  padding: 10px 14px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  background: #fff;
  border-radius: 8px;
}
</style>
