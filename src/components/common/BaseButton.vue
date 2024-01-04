<script>
const BUTTON_TYPES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINED: 'primary_outlined',
  PRIMARY_FLAT: 'primary_flat',
  PRIMARY_OUTLINED_DARK: 'primary_outlined_dark',

  SECONDARY: 'secondary',
  SECONDARY_OUTLINED: 'secondary_outlined',
  SECONDARY_FLAT: 'secondary_flat',
  SECONDARY_OUTLINED_DARK: 'secondary_outlined_dark',
};

const COLOR_LOADER = {
  primary: 'white',
  primary_outlined: '#FF4C29',
  primary_flat: '#FF4C29',
  primary_outlined_dark: '#23262A',

  secondary: 'white',
  secondary_outlined: '#A3D4FF',
  secondary_flat: '#A3D4FF',
  secondary_outlined_dark: '#A0A8B5',
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import IconCircleProgress from '@/components/icons/IconCircleProgress.vue';

const router = useRouter();
const props = defineProps({
  variant: {
    type: String,
    default: BUTTON_TYPES.PRIMARY,
    validator(value) {
      const isValid = Object.values(BUTTON_TYPES).includes(value);
      if (!isValid) console.warn(`Valid types for BaseButton:
        \n${Object.values(BUTTON_TYPES).join('\n')} \nBut get: ${value}
      `);
      return isValid;
    },
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // Router name
  to: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
});

const emit = defineEmits(['click']);
const handleClick = (e) => {
  if (!props.to) return emit('click', e);
  const isNameExistInRoutes = router.options.routes.find((r) => r.name === props.to);
  if (!props.blank) return isNameExistInRoutes ? router.push({ name: props.to }) :  router.push(props.to);
  const routerData = isNameExistInRoutes ? router.resolve({ name: props.to }) :  router.resolve(props.to);
  window.open(routerData.href, '_blank');
};
</script>

<template>
  <button class="base-btn" :class="{ 'loading': isLoading }" :data-variant="variant" :disabled="disabled" @click="handleClick" :type="type">
    <icon-circle-progress class="base-btn__loading" style="width: 20px; height: 20px" :color="COLOR_LOADER[variant]"/>
    <span class="base-btn__text"><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
$primary: #FF4C29;
$primary-flat: #FFDFD9;

$secondary: #A3D4FF;
$secondary-flat: #edf6ff;

$dark: #23262A;
$gray: #A0A8B5;

.base-btn {
  cursor: pointer;
  border: none;
  outlined: none;
  leading-trim: both;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding: 18px 33px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  min-width: 120px;
  position: relative;
  .base-btn__loading {
    display: none;
  }
  .base-btn__text {
    opacity: 1;
  }
  &.loading {
    .base-btn__loading {
      display: block;
    }
    .base-btn__text {
      opacity: 0;
    }
  }
  &__loading {
    position: absolute;
  }
  &[data-variant="primary"] {
    background: $primary;
    color: #fff;
    & svg circle {
      stroke: red;
    }
  }
  &[data-variant="primary_outlined"] {
    background: transparent;
    color: $primary;
    border-color: $primary;
  }
  &[data-variant="primary_flat"] {
    background: $primary-flat;
    color: $primary;
  }
  &[data-variant="primary_outlined_dark"] {
    background: transparent;
    border-color: #DDE1EB;
    color: $dark;
  }
  &[data-variant="secondary"] {
    background: $secondary;
    color: #fff;
  }
  &[data-variant="secondary_outlined"] {
    background: transparent;
    color: $secondary;
    border-color: $secondary;
  }
  &[data-variant="secondary_flat"] {
    background: $secondary-flat;
    color: $secondary;
  }
  &[data-variant="secondary_outlined_dark"] {
    background: transparent;
    border-color: #DDE1EB;
    color: $gray;
  }
}
</style>
