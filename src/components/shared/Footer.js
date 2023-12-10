"use client"
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
//icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const Footer = () => {
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
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="text-center">
                    <IconButton>
                        <FacebookRoundedIcon className='text-blue-500' />
                    </IconButton>
                    <IconButton>
                        <RedditIcon className='text-orange-500' />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon className='text-red-400' />
                    </IconButton>
                </Box>
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
                <Typography className="text-slate-500 text-center">© 2023 Dragon News. All Rights Reserved</Typography>
            </Container>
        </Box>
    );
};

export default Footer;