"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';

//icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';

const navItems = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Pages",
        pathname: "/pages"
    },
    {
        route: "Category",
        pathname: "/category"
    },
    {
        route: "News",
        pathname: "/news"
    },
    {
        route: "About",
        pathname: "/about"
    },
    {
        route: "Contact",
        pathname: "/contact"
    },
];

function ResponsiveAppBar() {

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} alt={'logo'} width={100} height={100} />
                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={item.pathname}>
                                <Button className="text-white">
                                    {item.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction="row">
                            <IconButton>
                                <FacebookRoundedIcon className='text-blue-500' />
                            </IconButton>
                            <IconButton>
                                <RedditIcon className='text-orange-500' />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon className='text-red-400' />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;