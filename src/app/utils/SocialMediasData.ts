import type { SocialMedia } from "../types/SocialMedia";
import junimo from '@/app/assets/junimo.png'

class SocialMediasData {
    getSocialMedias(): Promise<SocialMedia[]> {
        const currentLang = localStorage.getItem('LangContextKey')
        const socialMedias: SocialMedia[] = [
            {
                name: `${currentLang === 'us-en' ? 'YouTube Channel' : 'Canal no YouTube'}`,
                image: junimo.src,
                href: 'https://www.youtube.com/@MiraCampos2000'
            },
            {
                name: 'Instagram',
                image: junimo.src,
                href: 'https://www.instagram.com/mira_agda/'
            }
        ]

        return Promise.resolve(socialMedias)
    }
}

export const socialMediasData = new SocialMediasData()