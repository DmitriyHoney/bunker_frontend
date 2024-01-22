import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', () => {
  const isActiveLoader = ref(false);
  const setActiveLoader = () => isActiveLoader.value = true;
  const setInactiveLoader = () => isActiveLoader.value = false;
  const toggleLoader = () => isActiveLoader.value = !isActiveLoader.value;

  return { isActiveLoader, setActiveLoader, setInactiveLoader, toggleLoader };
});
