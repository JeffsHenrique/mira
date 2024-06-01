import { Dialog, DialogContent, DialogTitle, styled } from "@mui/material";
import { Loading } from "./Loading";
import { useState } from "react";

export interface VideoDialogProps {
    open: boolean;
    onClose: () => void
    video: string
    title: string
    desc: string
}

const StyledDialog = styled(Dialog)(() => ({
    '& .MuiDialogTitle-root': {
        backgroundColor: '#cc9cfe',
        fontSize: '32px',
        color: '#0c4a6e',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    '& .MuiDialogContent-root': {
        backgroundColor: '#cc9cfe',
        color: '#0c4a6e',
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

export const VideoDialog = (props: VideoDialogProps) => {
    const { onClose, open, video, title, desc } = props
    const [loading, setLoading] = useState(true)

    const handleLoad = () => {
        setLoading(false)
    }

    return (
        <StyledDialog onClose={onClose} open={open} maxWidth='lg'>
            <DialogTitle>
                {title}
            </DialogTitle>

            <DialogContent dividers>
                <div className="flex flex-col items-center">
                    {loading && <Loading loading={loading} />}
                    <iframe
                        className={`my-2 border-2 border-purple-300 rounded-lg shadow-lg ${loading ? 'hidden' : ''}`}
                        width="640"
                        height="480"
                        src={video}
                        title={title}
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        onLoad={handleLoad}
                    ></iframe>

                    {desc !== '' &&
                        <h1 className="max-w-3xl border-4 border-purple-400 rounded shadow-md text-center px-2 my-2 font-bold text-lg">{desc}</h1>
                    }

                </div>
            </DialogContent>
        </StyledDialog>
    )
}