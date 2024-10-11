<script setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: 'Введите текст',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  modelValue: [String, Number]
});
const emit = defineEmits(['update:modelValue']);
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="base-input">
    <input autocomplete="off" :readonly="readonly" class="input" :type="type" :placeholder="label" :value="modelValue" @input="updateValue" />
    <label class="label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>

.base-input {
  position: relative;
}

.input {
  width: 100%;
  color: #23262A;
  border: none;
  border-bottom: 1px solid transparent;
  transition: border-color 250ms;
  background-color: #fff;
  border-radius: 8px;
  outline: none;
  padding: 18px 24px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:focus {

    //border-bottom-color: #777;
  }

  &::placeholder {
    color: transparent;
  }

  // Hide Safari's autofill button
  &::-webkit-contacts-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
  }
}

.label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;
  pointer-events: none;
  transform-origin: left center;
  //transition: transform 250ms;
  transition: .3s ease all;
  color: #B2BAC6;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.input:focus + .label,
.input:not(:placeholder-shown) + .label {
  //transform: translateY(-100%) scale(0.95);
  transition: .3s ease all;
  font-size: 12px;
  top: 10px;
}

.clear {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 50%;
  right: -9px; // To visually align with inputs right edge
  transform: translateY(-50%);
  background: none;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: #777;
  transition: color 250ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: #333;
  }
}

.input:placeholder-shown + .label + .clear {
  display: none;
}

</style>
