import { createI18n } from 'vue-i18n'
import { ref , watch} from 'vue';
import en from "./en.json"
import tr from "./tr.json"

const currentLocale = ref(localStorage.getItem("lang") || 'en');
const i18n = createI18n({
  locale: currentLocale.value , // Reactive olarak set etmedigi icin dili degistirdigimde local storage de degisiyo ama sayfayi anlik reload etmeden dilini degistirmiyo bende reload etmek istemedigim icin boyle biraktim 
  messages: {
    en,
    tr
  } // set locale messages
});
watch(currentLocale, (newLocale) => {
  i18n.global.locale = newLocale;
  localStorage.setItem('lang', newLocale);
});
export default i18n 