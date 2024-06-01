export const Footer = () => {
    const currentLang = localStorage.getItem('LangContextKey')

    return (
        <footer className="absolute bottom-0 p-2 w-full h-14 bg-purple-300 text-sky-900 shadow-xl">
            <div className="flex justify-center mt-2">
                <p>
                    {currentLang === 'us-en' ? '©️ All rights reserved. Developed by ' : '©️ Todos os direitos reservados. Desenvolvido por '}<strong>Jeffs</strong>.</p>
            </div>
        </footer>
    )
}