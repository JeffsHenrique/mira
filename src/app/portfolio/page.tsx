"use client"

import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { LanguageProvider } from '@/app/contexts/LanguageContext'
import { VideoBox } from '../components/VideoBox'

const Portfolio = () => {
    return (
        <>
            <LanguageProvider>
                <div className="w-[100vw] h-[calc(100vh-3.5rem)] overflow-auto bg-pink-200">
                <Header />

                <VideoBox videoType="all"/>

                <Footer />
                </div>
            </LanguageProvider>
        </>
    )
}

export default Portfolio