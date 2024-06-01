import * as React from 'react'
import emailjs from '@emailjs/browser'

import Button from '@mui/material/Button'
import { Dialog, DialogContent, DialogTitle, styled } from '@mui/material'
import { SocialMedia } from '../types/SocialMedia'
import { socialMediasData } from '../utils/SocialMediasData'

export interface ContactDialogProps {
    open: boolean;
    onClose: () => void;
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

export const Contact = (props: ContactDialogProps) => {
    const [socialMedias, setSocialMedias] = React.useState<SocialMedia[]>([])
    const [emailValue, setEmailValue] = React.useState<string>('')
    const [contentEmailFormValue, setContentEmailFormValue] = React.useState<string>('')
    const { onClose, open } = props
    const currentLang = localStorage.getItem('LangContextKey')

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value)
    }

    const handleEmailContentFormValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentEmailFormValue(event.target.value)
    }

    const getSocialMedias = React.useCallback(async () => {
        try {
            const data = await socialMediasData.getSocialMedias()
            setSocialMedias(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const sendEmail = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        const form = event.target as HTMLFormElement

        if (emailValue && contentEmailFormValue !== '') {
            emailjs.sendForm('service_b6gnvrh', 'template_8ambyle', form, 'Z392gu5X_eVPJeWqW')
            .then(() => {
                setEmailValue('')
                setContentEmailFormValue('')
                const emailSent = () => {
                    alert(`${currentLang === 'us-en' ? 'Your e-mail has been sent successfully!' : 'E-mail enviado com sucesso!'}`)
                }
                emailSent()
            },
            (error): void => {
                console.log('Failed...', error)
            })
        } else {
            alert(`${currentLang === 'us-en' ? 'Fill in both fields, please!' : 'Preencha os dois campos, por favor!'}`)
        }
    }

    const handleClose = () => {
        onClose()
    }

    React.useEffect(() => {
        getSocialMedias()
    }, [getSocialMedias])

    return (
        <StyledDialog onClose={handleClose} open={open} fullWidth>
            <DialogTitle>
                {currentLang === 'us-en' ? 'Contact Me!' : 'Entre em contato comigo!'}
            </DialogTitle>

            <DialogContent dividers>
                <div className='flex justify-center items-center gap-12'>
                    {socialMedias.map((socialMedia) => {
                        return (
                            <a className='flex flex-col justify-center items-center' href={`${socialMedia.href}`} target='_blank'>
                                <p className='text-lg font-bold mb-2 underline'>{socialMedia.name}</p>
                                <img className='w-24' src={`${socialMedia.image}`} />
                            </a>
                        )
                    })}
                </div>

                <hr className="my-8 mx-2 border border-purple-700 opacity-30" />

                <div className='my-2 flex justify-center'>
                    <p className='text-2xl font-bold'>
                        {currentLang === 'us-en' ? 'Or you can send me an e-mail:' : 'Ou você pode me mandar um e-mail:'}
                    </p>
                </div>

                <div className='flex justify-center h-5/6'>
                    <div className='m-2 p-2 w-10/12 gap-12'>
                        <form className='flex flex-col gap-3' onSubmit={sendEmail}>
                            <div className='flex flex-row gap-4 justify-start items-center'>
                                <label className='text-lg font-bold' htmlFor="emailFrom">
                                    {currentLang === 'us-en' ? 'Enter your e-mail:' : 'Digite o seu e-mail:'}
                                </label>
                                <input
                                    className='my-2 p-2 h-8 rounded-md bg-pink-200 border border-purple-400'
                                    type='text'
                                    name='email_from'
                                    value={emailValue}
                                    onChange={handleEmailInput}
                                />
                            </div>

                            <label className='mt-8 text-lg font-bold' htmlFor="message">
                                {currentLang === 'us-en' ? 'Type your message:' : 'Escreva a sua mensagem:'}
                            </label>
                            <textarea
                                name="message"
                                className='p-2 h-[32vh] resize-none rounded-md bg-pink-200 border border-purple-400'
                                value={contentEmailFormValue}
                                onChange={handleEmailContentFormValue}
                            />
                            <div className='flex justify-center'>
                                <Button
                                    variant='outlined'
                                    className='shadow-lg'
                                    sx={{
                                        fontSize: '18px',
                                        lineHeight: '28px',
                                        color: '#fbcfe8',
                                        padding: '8px',
                                        borderWidth: '1px',
                                        borderRadius: '6px',
                                        backgroundColor: '#0c4a6e',
                                        '&:hover': {
                                            backgroundColor: '#082f49'
                                        }
                                    }}
                                    type='submit'
                                >
                                    {currentLang === 'us-en' ? 'Send' : 'Enviar'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </StyledDialog>
    )

}