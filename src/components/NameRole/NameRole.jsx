import { Grid, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import extractLettersBeforeAt from '../../helper'

const trans = {
    overflow: 'hidden',
    position: 'relative',
    height: '15rem',
};

const arrayOfNames = ['John snow', 'Arya Stark', 'Ned Stark', 'fgyhyfghg'];

function NameRole({ people }) {
    const scrollRef = useRef();
    // const [state, setState] = useState([...arrayOfNames]);

    // Duplicate the array to create a seamless loop
    // const duplicatedArray = [...state, ...state];

    // Function to animate the scrolling
    useEffect(() => {
        const scrollAnimation = scrollRef.current.animate(
            [
                { transform: `translateY(${-(scrollRef.current.scrollHeight / 2)}px)` },
                { transform: `translateY(${scrollRef.current.scrollHeight}px)` },
            ],
            {
                duration: scrollRef.current.scrollHeight * 20, // Adjust the duration based on the total height
                iterations: Infinity,
            }
        );

        return () => {
            scrollAnimation.cancel();
        };
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <>
            <Grid container sx={trans} justifyContent='center'>
                <div ref={scrollRef} style={{}}>
                    {people.map((data, i) => (
                        <Grid key={i} item sx={{ backgroundColor: '#4669BD', boxShadow: 3, height: '2.5rem', borderRadius: '15px', marginBottom: '1rem', width: '15rem' }}>
                            <Typography textAlign='center' color='white' variant='h5'>
                                {extractLettersBeforeAt(data.subscriberEmail)}
                            </Typography>
                        </Grid>
                    ))}
                </div>
            </Grid>
        </>
    );
}

export default NameRole;

