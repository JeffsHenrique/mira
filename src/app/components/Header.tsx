"use client"

import * as React from 'react'

import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import HomeIcon from '@mui/icons-material/Home';
import { ButtonProps, styled } from '@mui/material'
import { LanguageSwitch } from './LanguageSwitch'
import { Contact } from './Contact'

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        background: '#e2c8fe'
    },
    '& .MuiMenuItem-root': {
        color: '#9739f9',
        transitionDuration: '0.4s',
        '&:hover': {
            backgroundColor: '#cc9cfe'
        }
    },
}))

const StyledButton = styled(Button)<ButtonProps>(() => ({
    color: '#9739f9',
    fontWeight: 'bold'
}))

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [isContactOpen, setIsContactOpen] = React.useState(false)

    const open = Boolean(anchorEl)
    const currentLang = localStorage.getItem('LangContextKey')

    const handlePortfolioOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePortfolioClosed = () => {
        setAnchorEl(null)
    }

    const isContactShowing = () => {
        setIsContactOpen(!isContactOpen)
    }

    return (
        <>
            <header className="p-2 w-full h-14 flex flex-row justify-start items-center gap-16 bg-purple-300 shadow-xl">
                <h1 className="px-2 text-3xl font-bold">
                    <a href="/">
                        <HomeIcon sx={{
                            fontSize: 40,
                            color: '#ae69f6'
                        }} />
                    </a>
                </h1>

                <hr className="h-10 border opacity-35 border-purple-600" />

                <div className="w-full flex flex-row justify-between items-center">
                    <ul className="flex flex-row text-lg gap-8">
                        <li>
                            <StyledButton
                                id="portfolio-button"
                                aria-controls={open ? 'portfolio-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handlePortfolioOpen}
                            >
                                Portfolio
                            </StyledButton>
                            <StyledMenu
                                id='portfolio-menu'
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handlePortfolioClosed}
                                MenuListProps={{
                                    'aria-labelledby': 'portfolio-button'
                                }}
                            >
                                <a href='/portfolio/videoaulas'>
                                    <MenuItem onClick={handlePortfolioClosed}>
                                        {currentLang === 'us-en' ? 'Video Classes' : 'Videoaulas'}
                                    </MenuItem>
                                </a>

                                <MenuItem className='opacity-45' style={{cursor: 'not-allowed'}}>
                                    {currentLang === 'us-en' ? 'Documentaries' : 'Documentários'}
                                </MenuItem>

                                <MenuItem className='opacity-45' style={{cursor: 'not-allowed'}}>
                                    {currentLang === 'us-en' ? 'Movies' : 'Filmes'}
                                </MenuItem>

                                <MenuItem className='opacity-45' style={{cursor: 'not-allowed'}}>
                                    {currentLang === 'us-en' ? 'Animation' : 'Animações'}
                                </MenuItem>

                                <MenuItem className='opacity-45' style={{cursor: 'not-allowed'}}>
                                    {currentLang === 'us-en' ? 'Advertisements' : 'Promocionais'}
                                </MenuItem>

                                <a href='/portfolio'>
                                    <MenuItem onClick={handlePortfolioClosed}>
                                        {currentLang === 'us-en' ? 'All my productions' : 'Todas as minhas produções'}
                                    </MenuItem>
                                </a>

                            </StyledMenu>
                        </li>
                        <li>
                            <StyledButton variant='text' onClick={isContactShowing}>
                                {currentLang === 'us-en' ? 'Contact' : 'Contato'}
                            </StyledButton>
                            <Contact
                                open={isContactOpen}
                                onClose={isContactShowing}
                            />
                        </li>
                    </ul>

                    <LanguageSwitch />
                </div>
            </header>
        </>
    )
}