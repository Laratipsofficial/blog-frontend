import { ref } from "@vue/reactivity";
import api from "../apis/api";

export function useContact() {
  let form = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let loading = ref(false);
  let successMessage = ref("");
  let errors = ref({});

  function sendFeedback() {
    loading.value = true;
    api.post("contact-us", form.value)
      .then(res => {
        successMessage.value = res.data.message;
        errors.value = {};
        form.value = {};
      })
      .catch(err => {
        if (err.response.status === 422) {
          errors.value = err.response.data.errors;
        }
      })
      .finally(() => loading.value = false)
  }

  function getError(key) {
    return errors.value[key] ? errors.value[key][0] : null;
  }

  return {
    form,
    loading,
    successMessage,
    sendFeedback,
    getError,
  }
}