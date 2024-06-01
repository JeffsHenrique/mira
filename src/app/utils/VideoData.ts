import { Video } from "../types/Video";

class VideoData {
    getVideos(): Promise<Video[]> {
        const currentLang = localStorage.getItem('LangContextKey')
        const video: Video[] = [
            {
                type: "all",
                title: 'Taylor Swift - You Belong With Me',
                desc: 'Et dolor nisi elit do ipsum nulla laboris ipsum amet ullamco occaecat excepteur sit nulla. Deserunt id voluptate dolore ipsum nostrud et eu nostrud exercitation anim fugiat consequat. Proident qui nulla elit ut nisi amet. Tempor sint commodo duis ullamco fugiat duis nostrud. Qui laboris amet ut est pariatur consequat labore dolor.',
                source: 'https://www.youtube.com/embed/VuNIsY6JdUw',
            },
            {
                type: "all",
                title: 'Taylor Swift - Wildest Dreams',
                desc: 'Et dolor nisi elit do ipsum nulla laboris ipsum amet ullamco occaecat excepteur sit nulla. Deserunt id voluptate dolore ipsum nostrud et eu nostrud exercitation anim fugiat consequat. Proident qui nulla elit ut nisi amet. Tempor sint commodo duis ullamco fugiat duis nostrud. Qui laboris amet ut est pariatur consequat labore dolor.',
                source: 'https://www.youtube.com/embed/IdneKLhsWOQ',
            },
            {
                type: "all",
                title: 'Something About Zelda Ocarina of Time: The WATER TEMPLE 💧🧝🏻💧',
                desc: 'Et dolor nisi elit do ipsum nulla laboris ipsum amet ullamco occaecat excepteur sit nulla. Deserunt id voluptate dolore ipsum nostrud et eu nostrud exercitation anim fugiat consequat. Proident qui nulla elit ut nisi amet. Tempor sint commodo duis ullamco fugiat duis nostrud. Qui laboris amet ut est pariatur consequat labore dolor.',
                source: 'https://www.youtube.com/embed/SkK7ve8Isq8',
            },
            {
                type: "all",
                title: 'Something About Zelda Ocarina of Time: The WATER TEMPLE 💧🧝🏻💧',
                desc: 'Et dolor nisi elit do ipsum nulla laboris ipsum amet ullamco occaecat excepteur sit nulla. Deserunt id voluptate dolore ipsum nostrud et eu nostrud exercitation anim fugiat consequat. Proident qui nulla elit ut nisi amet. Tempor sint commodo duis ullamco fugiat duis nostrud. Qui laboris amet ut est pariatur consequat labore dolor.',
                source: 'https://www.youtube.com/embed/SkK7ve8Isq8',
            },
            {
                type: "videoclasses",
                title: 'DEMETRIUS EU TE ODEIO !!!!!!!!!!!!! 🤬🤬🤬🤬#61',
                desc: 'Et dolor nisi elit do ipsum nulla laboris ipsum amet ullamco occaecat excepteur sit nulla. Deserunt id voluptate dolore ipsum nostrud et eu nostrud exercitation anim fugiat consequat. Proident qui nulla elit ut nisi amet. Tempor sint commodo duis ullamco fugiat duis nostrud. Qui laboris amet ut est pariatur consequat labore dolor.',
                source: 'https://www.youtube.com/embed/ji8wBF-CnhE',
            },
            {
                type: "videoclasses",
                title: 'DEMETRIUS EU TE ODEIO !!!!!!!!!!!!! 🤬🤬🤬🤬#61',
                desc: 'Et dolor nisi elit do ipsum nulla laboris ipsum amet ullamco occaecat excepteur sit nulla. Deserunt id voluptate dolore ipsum nostrud et eu nostrud exercitation anim fugiat consequat. Proident qui nulla elit ut nisi amet. Tempor sint commodo duis ullamco fugiat duis nostrud. Qui laboris amet ut est pariatur consequat labore dolor.',
                source: 'https://www.youtube.com/embed/ji8wBF-CnhE',
            },
            {
                type: "videoclasses",
                title: 'DEMETRIUS EU TE ODEIO !!!!!!!!!!!!! 🤬🤬🤬🤬#61',
                source: 'https://www.youtube.com/embed/ji8wBF-CnhE',
                desc: "",
            },
        ]

        return Promise.resolve(video)
    }
}

export const videosData = new VideoData()