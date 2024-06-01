import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = 'LangContextKey'

type LanguageContext = {
    lang: string
    setLang: (newLang: string) => void
}

export const LanguageContext = createContext<LanguageContext | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false)
    const [lang, setLang] = useState(
        typeof window !== 'undefined'
        ? localStorage.getItem(STORAGE_KEY) || 'pt-br'
        : '[]'
    )

    useEffect(() => {
        setIsMounted(true)

        localStorage.setItem(STORAGE_KEY, lang)
    }, [lang])

    if (!isMounted) {
        return null
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
    )
}

export const useLang = () => useContext(LanguageContext)