import junimo from '@/app/assets/junimo.png'

export const Hello = () => {
    const currentLang = localStorage.getItem('LangContextKey')

    return (
        <div className="w-2/5 h-1/2 flex flex-col items-center text-sky-800">
            <h1 className='font-bold text-5xl'>
                {currentLang === 'us-en' ? 'Hello, people! 💕' : 'Olá, pessoas! 💕'}
            </h1>
            <img className='mt-2 border-2 size-60 rounded-full flex justify-center items-center border-purple-300 shadow-lg' src={junimo.src} />
        </div>
    )
}