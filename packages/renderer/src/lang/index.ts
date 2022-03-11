import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from './en'
import zhLocale from './zh-cn'
import { getLanguage } from '../utils/cookies'

const messages = {
    'en': {
        ...enLocale,
        ...elementEnLocale
    },
    'zh-cn': {
        ...zhLocale,
        ...elementZhLocale
    }
}

export const getLocale = () => {
    const cookieLanguage = getLanguage()
    if (cookieLanguage) {
        return cookieLanguage
    }
    const language = navigator.language.toLowerCase()
    const locales = Object.keys(messages),
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }

    return 'zh-cn'
}

// https://blog.csdn.net/android_app_2012/article/details/115343455