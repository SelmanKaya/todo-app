import { createI18n } from 'vue-i18n'
import en from "./en.json"
import tr from "./tr.json"


const i18n = createI18n({
  legacy: false,
  locale: "en" , // Reactive olarak set etmedigi icin dili degistirdigimde local storage de degisiyo ama sayfayi anlik reload etmeden dilini degistirmiyo bende reload etmek istemedigim icin boyle biraktim 
  messages: {
    en,
    tr
  } // set locale messages
});

export default i18n 