"use client"

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hello } from './components/Hello'
import { AboutMe } from './components/AboutMe'
import { LanguageProvider } from './contexts/LanguageContext'

const Home = () => {
  return (
    <>
      <LanguageProvider>
        <div className="w-[100vw] h-[calc(100vh-3.5rem)] overflow-auto bg-pink-200">
          <Header />

          <div className='m-2 mt-8 p-2 flex justify-center'>
            <Hello />
          </div>

          <div className='m-2 mt-8 p-2 flex justify-center'>
            <AboutMe />
          </div>

          <Footer />
        </div>
      </LanguageProvider>
    </>
  )
}

export default Home