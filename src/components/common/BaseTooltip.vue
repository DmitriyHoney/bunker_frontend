<template>
  <slot v-if="!title"></slot>
  <span
    v-else
    tabindex="0"
    data-bs-toggle="tooltip"
    data-bs-custom-class="custom-tooltip"
    :data-bs-placement="placement"
    :data-bs-title="title"
    style="cursor: pointer"
    ref="tooltip"
    >
    <slot></slot>
  </span>
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  title: {
    type: [String, Object],
    default: null
  },
  placement: {
    type: String,
    default: 'top'
  }
});

const tooltip = ref(null);
onMounted(() => {
  tooltip.value ? new bootstrap.Tooltip(tooltip.value) : null; // eslint-disable-line
});
</script>

<style lang="scss">
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-white);
  --bs-tooltip-color: #424242;
  min-width: 270px;
  background: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  & .tooltip-inner {
    text-align: left;
    text-align: left !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
}
</style>
