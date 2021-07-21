import { format as DFformat } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'

const locales = {
  'pt-BR': ptBR,
  'en-US': enUS
}

type LocalLocales = keyof typeof  locales

interface FormatOptions {
  locale?: globalThis.Locale | undefined;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  firstWeekContainsDate?: number | undefined;
  useAdditionalWeekYearTokens?: boolean | undefined;
  useAdditionalDayOfYearTokens?: boolean | undefined; 
}

export function format (date: Date | number, format: string, options?: FormatOptions) {
  let _navigator = {} as Navigator

  if (typeof window !== 'undefined') {
    _navigator = window.navigator   
  }


  return DFformat(date, format, {
    locale: locales[_navigator?.language as LocalLocales|| 'pt-BR'],
    ...(options || {})
  })
}


