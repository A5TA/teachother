import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, getSelectUtilityClasses} from '@mui/material'
import styles from '../styles/Nav.module.css'
import AccessibilityIcon from '@mui/icons-material/Accessibility'

const Nav = ({selected}) => {
    const [currentTab, setCurrentTab] = useState(selected)
  return (
    <AppBar position='static' className={styles.nav_bar}>
        <Toolbar style={{width: '100%'}}>
            <IconButton sx={{color: 'white', margin: 0, padding: 0}} >
                <AccessibilityIcon />
            </IconButton>
            <Typography variant='h6' component='div' className={styles.title} sx={{ flexGrow: 1, paddingTop: 0.5 }}>
                    <Link href='/'>eachOther</Link>
            </Typography>  
            <Stack direction='row' spaceing={3}>
                <Button color='inherit'>
                    <Link href='/' className={currentTab === 'Home' ? styles.active_link : styles.links} onClick={() => setCurrentTab('Home')}>Home</Link>
                </Button>
                <Button color='inherit'>
                    <Link href='/videos' className={currentTab === 'Videos' ? styles.active_link : styles.links} onClick={() => setCurrentTab('Videos')}>Videos</Link>
                </Button>
                <Button color='inherit'>
                    <Link href='/about' className={currentTab === 'About' ? styles.active_link : styles.links} onClick={() => setCurrentTab('About')}>About</Link>
                </Button>
            </Stack>
        </Toolbar>
    </AppBar>  
  )
}

export default Nav