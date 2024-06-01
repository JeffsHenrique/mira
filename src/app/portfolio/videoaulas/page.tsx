"use client"

import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { VideoBox } from '@/app/components/VideoBox'
import { LanguageProvider } from '@/app/contexts/LanguageContext'

const Videoaulas = () => {
    return (
        <>
            <LanguageProvider>
                <div className="w-[100vw] h-[calc(100vh-3.5rem)] overflow-auto bg-pink-200">
                <Header />

                <VideoBox videoType='videoclasses'/>

                <Footer />
                </div>
            </LanguageProvider>
        </>
    )
}

export default Videoaulas