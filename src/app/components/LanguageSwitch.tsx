import brazilFlag from '@/app/assets/Flag_of_Brazil.png'
import unitedStatesFlag from '@/app/assets/Flag_of_USA.png'

import { Button } from "@mui/material"
import { useLang } from '../contexts/LanguageContext'

export const LanguageSwitch = () => {
    const langCtx = useLang()

    const handleBRLang = () => {
        if (langCtx) {
            langCtx.setLang('pt-br')
            location.reload()
        }
    }

    const handleENLang = () => {
        if (langCtx) {
            langCtx.setLang('us-en')
            location.reload()
        }
    }

    return (
        <div className="px-2 flex flex-row gap-2">
            <Button onClick={handleBRLang}>
                <img className='w-8 border rounded-md border-sky-500' src={brazilFlag.src} />
            </Button>

            <hr className="h-10 border opacity-35 border-purple-600" />

            <Button onClick={handleENLang}>
                <img className='w-8 border rounded-md border-sky-500' src={unitedStatesFlag.src} />
            </Button>
        </div>
    )
}