export const AboutMe = () => {
    const currentLang = localStorage.getItem('LangContextKey')

    return (
        <div className="m-2 p-2 w-[56vw] flex flex-col justify-center items-center border-4 border-purple-400 text-sky-800 rounded-md shadow-xl">

            <h1 className="text-3xl my-2">
                {currentLang === 'us-en' ? 'About me!' : 'Um pouco sobre mim!'}
            </h1>

            <hr className="my-2 border w-full border-purple-400" />

            <div className="mx-2 text-lg">
                <p className="whitespace-pre-line">
                    {currentLang === 'us-en' ?
                    `I'm the most beautiful woman that anyone would be lucky to know :)
                    Gorgeous, with the most wonderful smile in the world, I'm the owner of Mira's Star 🌟`
                    :
                    `Sou a mulher mais maravilhosa que qualquer pessoa tem a sorte de conhecer :)
                    Linda, do sorriso mais lindo do mundo, sou a dona da Estrela Mira 🌟`}
                </p>
            </div>
        </div>
    )
}