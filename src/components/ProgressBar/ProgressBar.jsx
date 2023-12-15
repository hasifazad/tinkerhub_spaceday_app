import React, { useEffect, useState } from 'react'
import './ProgressBar.css'
import { Box } from '@mui/system'


function ProgressBar({ total }) {
  const [filled, setFilled] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {


    setFilled(total / 1000)


  }, [total])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <div className="tooltip-container">
          <div className="tooltip">100k</div>
        </div>
      </Box>

      <div>
        <div className='progressbar'>
          <div
            style={{
              height: "100%",
              width: `${filled}%`,
              transition: 'width 4s ease',

            }}
            className='completedBar'
          >
            <div className='progressPercent'>
              <div>₹{filled * 1000}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBar