import * as React from 'react'

import { Video } from "../types/Video"
import { videosData } from "../utils/VideoData"
import { Box, Button, styled } from "@mui/material"

import junimo from '@/app/assets/junimo.png'
import { VideoDialog } from './VideoDialog'

interface VideoBoxProps {
    videoType: string
}

const StyledBox = styled(Box)(() => ({
    '& .MuiBox-root': {
        '::-webkit-scrollbar': {
            width: '8px'
        },
        '::-webkit-scrollbar-track': {
            borderRadius: '10px'
        },
        '::-webkit-scrollbar-thumb': {
            background: '#b275f5',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#a45df2',
        },
        '::-webkit-scrollbar-thumb:active': {
            background: '#8c44db',
        },
    }
}))

export const VideoBox = ({ videoType }: VideoBoxProps) => {
    const [videos, setVideos] = React.useState<Video[]>([])
    const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null)

    const currentLang = localStorage.getItem('LangContextKey')

    const getVideos = React.useCallback(async () => {
        try {
            const data = await videosData.getVideos()
            setVideos(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleVideoDialogOpen = (video: Video) => {
        setSelectedVideo(video)
    }

    const handleVideoDialogClose = () => {
        setSelectedVideo(null)
    }

    React.useEffect(() => {
        getVideos()
    }, [getVideos])

    return (
        <StyledBox className='m-2 p-2 flex justify-center'>
            <StyledBox className="p-2 mt-2 w-full flex flex-col overflow-auto items-center border-4 border-purple-400 text-sky-800 rounded-md shadow-xl">
                <h1 className='mt-2 font-bold text-5xl'> {currentLang === 'us-en' ? 'Take a peek at my edits' : 'Conheça meus trabalhos!'}</h1>

                <hr className="w-full my-2 border opacity-35 border-purple-600"/>

                <StyledBox className="w-[96%] h-[50vh] grid grid-cols-2 gap-24">
                    {videos.map((video, index) => {
                        if (video.type === videoType) {
                            return (
                                <StyledBox key={index} className="flex flex-col w-[40vw] items-center">
                                    <Button onClick={() => handleVideoDialogOpen(video)}>
                                        <img src={junimo.src} width="240" alt={video.title} />
                                    </Button>
    
                                    <hr className="w-full my-2 border opacity-35 border-purple-600"/>
                                    <h1 className="px-2 my-2 font-bold text-lg">{video.title}</h1>
                                    <p className="mb-2">{video.desc}</p>
                                </StyledBox>
                            )
                        }
                        return null
                    })}
                    {selectedVideo && (
                        <VideoDialog
                            open={Boolean(selectedVideo)}
                            onClose={handleVideoDialogClose}
                            video={selectedVideo.source}
                            title={selectedVideo.title}
                            desc={selectedVideo.desc}
                        />
                    )}
                </StyledBox>
            </StyledBox>
        </StyledBox>
    )
}