import { Currencies, Languages, Name } from "../types"

export const getPopulation = (population: number | undefined) => {
     if (!population) return "No info"
     return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(population)
}

export const getNativeName = (names: Name | undefined) => {
     const namesList: string[] = []
     const nativeName = names?.nativeName || false
     if (!nativeName) return "No info"
     for (const name of Object.keys(nativeName)) {
          namesList.push(nativeName[name].common)
     }
     return namesList.join(", ")
}

export const getCurrencies = (currencies: Currencies | undefined) => {
     const currencyList: string[] = []
     if (!currencies) return "No info"
     for (const currency of Object.keys(currencies)) {
          currencyList.push(currencies[currency].name)
     }
     return currencyList.join(", ")
}

export const getLanguages = (languages: Languages | undefined) => {
     const languagesList: string[] = []
     if (!languages) return "No info"
     for (const language of Object.keys(languages)) {
          languagesList.push(languages[language])
     }

     return languagesList.join(", ")
}
