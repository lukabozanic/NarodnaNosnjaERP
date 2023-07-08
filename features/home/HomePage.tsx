import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="/images/narodne-nosnje-sumadijska-641390831-2017694126.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight:770 }} />
                </div>
                
            </Slider>
            <Box display='flex' justifyContent='center' sx={{ p: 4 }} >
                <Typography variant='h1'>
                    
                </Typography>
            </Box>
        </>
    )
}