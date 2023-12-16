import React, { useEffect, useState } from 'react'
import './Pro.css'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'


function Pro({ total, count }) {
    const [filled, setFilled] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {

        if (filled <= 100) {
            setFilled(total / 1000)
        }
    }, [total])

    return (
        <>

            {/* <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '5px' }}>
        <Box sx={{ border: '3px solid', borderRadius: '50px', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5' color='error'>
            {count}
          </Typography>
        </Box>

        <div className="tooltip-container">
          <div className="tooltip">
            <Typography variant='h5'>100k</Typography>
          </div>
        </div>
      </Box> */}


            <div className='probar'>
                <div
                    style={{
                        height: "75%",
                        width: `${filled}%`,
                        transition: 'width 4s ease',
                    }}
                    className='comBar'
                >

                </div>
            </div>
            <div className='pro1'>
                <div className='proPercent' style={{ width: `${filled}%`, transition: 'width 4s ease' }}>
                    <div className="triangle"></div>
                    <div>
                        <Typography variant='h3'>
                            ₹{filled * 1000}
                        </Typography>
                    </div>
                </div>
                <div className='proPercent'>
                    <div className="triangle"></div>
                    <div>
                        <Typography variant='h3'>
                            ₹100k
                        </Typography>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pro