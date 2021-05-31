import { ref } from "@vue/reactivity";
import api from "@/apis/api.js";

let settings = ref({});

export function useSettings() {
  function fetchSettings() {
    api.get("settings")
      .then(response => {
        settings.value = response.data.data;
      });
  }

  return {
    settings,
    fetchSettings
  }
}