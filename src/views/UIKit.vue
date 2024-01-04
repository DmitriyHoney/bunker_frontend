<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { ref } from 'vue';

const testInput = ref();
</script>

<template>
  <section class="uikit">
    <div class="container">
      <div class="uikit-card">
        <h2 class="uikit-card__title">Primary buttons</h2>
        <div class="uikit-card__content">
          <base-button variant="primary">Primary</base-button>
          <base-button variant="primary_outlined">Primary outlined</base-button>
          <base-button variant="primary_flat">Primary flat</base-button>
          <base-button variant="primary_outlined_dark">Primary outlined dark</base-button>
        </div>
      </div>
      <div class="uikit-card">
        <h2 class="uikit-card__title">Secondary buttons</h2>
        <div class="uikit-card__content">
          <base-button variant="secondary" isLoading>Secondary</base-button>
          <base-button variant="secondary_outlined">Secondary outlined</base-button>
          <base-button variant="secondary_flat">Secondary flat</base-button>
          <base-button variant="secondary_outlined_dark">Secondary outlined dark</base-button>
        </div>
      </div>
      <div class="uikit-card">
        <h2 class="uikit-card__title">Base input</h2>
        <div class="uikit-card__content">
          <base-input type="text" label="Введите имя" v-model="testInput"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.uikit {
  background-color: #e7e7e7;
  height: 100vh;
  &-card {
    margin-bottom: 12px;
    &__title {
      margin-bottom: 8px;
    }
    &__content {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
}
</style>
