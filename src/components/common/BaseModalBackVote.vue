<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
defineProps({
  active: Boolean,
  modalVotes: Boolean,
});

const toogleModals = function () {};
</script>

<template>
  <div :class="active ? 'back-vote-modal back-vote-modal_active' : 'back-vote-modal">
    <p class="back-vote-modal__text">Нажмите чтобы вернуться к голосованию</p>
    <base-button @click="toogleModals">Проголосовать</base-button>
  </div>
</template>

<style scoped lang="scss">
.back-vote-modal {
  display: flex;
  padding: 42px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 42px;
  background: #fff;
  box-shadow: 0px 11px 250px 0px #2c394b;
  &__text {
    color: var(--d, #2c394b);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
