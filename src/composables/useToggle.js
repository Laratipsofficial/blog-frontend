import { ref } from "vue";

export function useToggle() {
  let isVisible = ref(false);

  function show() {
    isVisible.value = true;
  }

  function hide() {
    isVisible.value = false;
  }

  function toggle() {
    isVisible.value === true ? hide() : show()
  }

  return {
    isVisible,
    show,
    hide,
    toggle,
  }
}