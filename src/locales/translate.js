import { createI18n } from 'vue-i18n'
import { ref , watch} from 'vue';
import en from "./en.json"
import tr from "./tr.json"
import { useI18n } from 'vue-i18n';


const i18n = createI18n({
  locale: "" , // Reactive olarak set etmedigi icin dili degistirdigimde local storage de degisiyo ama sayfayi anlik reload etmeden dilini degistirmiyo bende reload etmek istemedigim icin boyle biraktim 
  messages: {
    en,
    tr
  } // set locale messages
});
const { locale, availableLocales } = useI18n({ useScope: 'global' })

const setLanguage = (lang) => {
  locale.value = lang
  locale.setItem(localItems.lang, locale.value)
}
export default i18n 