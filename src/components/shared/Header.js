import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import headingImage from '@/assets/The Dragon News.png'
const Header = () => {
    return (
        <Box>
            <Container>
                <Image src={headingImage} alt='heading' width={500} height={500} />
                <Typography variant='body2' color="gray" textAlign='center'>Journalism Without Fear or Favour</Typography>
            </Container>
        </Box>
    );
};

export default Header;