import { useEffect, useRef, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import Lottie from 'react-lottie'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Box, display, width } from '@mui/system'

import animationData from './assets/celeb.json'
import animationFund from './assets/fund.json'
import Timer from './components/Timer/Timer'
import tinkerqr from './assets/qrcode.png'
import { Howl } from 'howler'
import sound from './assets/sound.mp3'

import BasicModal from './components/Modal/Modal'
import axios from 'axios'
import Myprogress from './components/ProgressBar/ProgressBar'
import { Socket, io } from 'socket.io-client'

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import tinkerLogo from './assets/tinkerlogo.png'
import Pro from './components/Pro/Pro'
import Header from './components/Header/Header'

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'ClashDisplaySemiBold', // Replace with your preferred font family

    },
  });

  let [open, setOpen] = useState(!true)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)

  let socket = useRef()

  useEffect(() => {
    socket.current = io('http://165.232.179.170:5094/');

    socket.current.on('connect', () => {
      console.log('socket connected');
    })


    socket.current.on('updateData', (res) => {
      const {
        totalContribution,
        totalContributors
      } = res;
      
      console.log("🚀 ~ file: App.jsx:65 ~ socket.current.on ~ res:", {
        totalContribution: typeof totalContribution,
        totalContributors: typeof totalContributors
      })

      if (totalContribution && totalContributors) {
        
        setCount(Number(totalContributors));
        setTotal(Number(totalContribution));
        
      }

    })

    return () => {
      socket.current.on('disconnect', () => {
        console.log('disconnect');
      })
    }
  }, [])

  // ***lottifiles GIF default configuration**********
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container sx={{ paddingTop: '5rem', display: 'flex', alignItems: 'center' }}>
          <Grid container alignItems='center'>


            <Grid item xs={12} >
              <Grid container display='flex' justifyContent='center'>

                <Grid item justifyContent='center' alignItems='center'>
                  <Typography variant='h2' textAlign='center' sx={{ color: '#1B2720' }}>Your Contribution. Our Innovation</Typography>
                  <Typography textAlign='center' sx={{ color: '#1B2720', fontFamily: 'ClashDisplayRegular' }} >Track the growth of TinkerSpace Carnival — every step forward is a leap for innovation, powered by your support</Typography>
                </Grid>
                {/* <Grid item xs={4}>
                {time ? <Timer expiryTimestamp={t} /> : <Typography variant='h2'>00:00:00</Typography>}
              </Grid> */}

                {/* <Grid item xs={6}>
                  <Typography theme={theme} fontWeight={600} variant='h3' color='error'>BE A PATRON</Typography>
                  <Typography variant='h5' textAlign='end'>
                  We are <span style={{ fontWeight: 'bold', fontSize: '30px', color: 'green' }}>₹{100000 - total}</span> closer to reach our goal!🤩
                </Typography>
                </Grid>
                <Grid item xs={6} display='flex' justifyContent='end' alignItems='center'>
                  <img src={tinkerLogo} alt='tinkerhub_logo' height={100} width={200} />
                </Grid> */}
                {/* <Grid item display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography textAlign='center' variant='h4'>01/01/2023</Typography>
                <br />
                <Typography textAlign='center' variant='h4'>11:02:45</Typography>
              </Grid> */}
              </Grid>
            </Grid>

            <Grid item xs={12} paddingTop={6} paddingBottom={3}>
              {/* <Typography sx={{ fontWeight: 'bold' }} variant='h4' textAlign='end'> ₹ 100K</Typography> */}
              <Myprogress total={total} count={count} />
              <Pro total={total} count={count} />
            </Grid>

            <Grid item xs={12} >
              <Grid container justifyContent='center'>

                {/* <Grid item xs={4} display='flex' justifyContent='center' alignItems='center'>
                  <NameRole people={payeeArray} />
                  <BubbleContainer numberOfBubbles={10} />
                </Grid> */}

                {/* <Grid item xs={4} display='flex' flexDirection='column' justifyContent='center' alignItems='center' paddingTop={3}>
                  <Box sx={{ borderRadius: '50%', width: '175px', height: '175px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h1' color='error' display='flex' justifyContent='center'>
                      {count}
                    </Typography>
                    <Typography display='flex' justifyContent='center' width='190px'>
                      Subscribers
                    </Typography>
                  </Box>

                  <Lottie
                  options={{ ...animationData, animationData: animationFund }}
                  height={225}
                  width={225}
                />
                </Grid> */}

                <Grid item xs={4} justifyContent='center' alignItems='center'>
                  {/* <img src={tinkerqr} height={250} width={250} /> */}
                  <Typography variant='h5' textAlign='center' sx={{ color: '#1B2720', fontFamily: 'ClashDisplayRegular' }}>
                    Yet, we have
                    &nbsp;
                    <span style={{ fontSize: '50px', fontWeight: 'bold', fontFamily: 'ClashDisplaySemiBold' }}>{count}</span>
                    &nbsp;
                    Subscribers
                  </Typography>
                  <Typography textAlign='center' sx={{ color: '#1B2720', fontFamily: 'ClashDisplayRegular' }}>And still counting...</Typography>
                </Grid>
              </Grid>
            </Grid>

            {open ? <Grid item xs={12} width='75%' height='85vh' position='absolute' top={0} zIndex={99}>
              <Grid container justifyContent='center'  >
                <Grid item xs={6}>
                  <Lottie
                    options={{ ...defaultOptions, animationData }}
                    height={600}
                    width={400}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Lottie
                    options={{ ...defaultOptions, animationData }}
                    height={600}
                    width={400}
                  />
                </Grid>
              </Grid>
            </Grid> : null}
            {/* <BasicModal open={open} subscribeAmount={payment} /> */}

          </Grid>
        </Container >
      </ThemeProvider>

    </>
  )
}

export default App
