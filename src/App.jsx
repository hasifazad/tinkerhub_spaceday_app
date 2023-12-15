import { useEffect, useRef, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import Lottie from 'react-lottie'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Box, width } from '@mui/system'

import animationData from './assets/celeb.json'
import animationFund from './assets/fund.json'
import Timer from './components/Timer/Timer'
import tinkerqr from './assets/qrcode.png'
import { Howl } from 'howler'
import sound from './assets/sound.mp3'

import BasicModal from './components/Modal/Modal'
import axios from 'axios'
import NameRole from './components/NameRole/NameRole'
import Myprogress from './components/ProgressBar/ProgressBar'
import { Socket, io } from 'socket.io-client'




let data = [
  { amountDonated: 1000, subscriberName: 'John snow', subscriberEmail: 'johnsnow@mail.com' },
  { amountDonated: 3000, subscriberName: 'Ned Stark', subscriberEmail: 'nedstark@gmailo.com' },
  { amountDonated: 4900, subscriberName: 'Rob Stark', subscriberEmail: 'robstark@gmail.com' }
]

function App() {

  let RAZORPAY_URL = import.meta.env.VITE_RAZORPAY_URL
  let RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID
  let RAZORPAY_KEY_SECRET = import.meta.env.VITE_RAZORPAY_KEY_SECRET

  let [payeeArray, setPayeeArray] = useState([...data])
  let [payee, setPayee] = useState('hasif')
  let [open, setOpen] = useState(false)
  let [total, setTotal] = useState(0)
  let [payment, setPayment] = useState(0)

  let socket = useRef()

  useEffect(() => {
    socket.current = io('http://tinker.grocy.online/', {
      transports: ['websocket'],
      path: '/razorpay/socket.io'
    })

    socket.current.on('connect', () => {
      console.log('socket connected');
    })


    socket.current.on('subscription_activated', (res) => {

      setPayeeArray([...payeeArray, res])
      setPayment(res.amountDonated)
      setPayee(res.subscriberEmail)

      setTotal((prevTotal) => prevTotal + res.amountDonated)
      setOpen(true)

      setTimeout(() => {
        setOpen(false)
      }, 3000)
    })

    return () => {
      socket.current.on('disconnect', () => {
        console.log('disconnect');
      })
    }
  }, [])


  useEffect(() => {

    axios.get('http://tinker.grocy.online/payment/total').then((res) => {
      console.log(res);
      setTotal(res.data.totalDonation)
    }).catch((err) => {
      console.log(err);
    })

    // axios.get('http://tinker.grocy.online/subcription/all').then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }, [])



  // *** countdown timer configuration ***************
  const [time, setTime] = useState(false)
  useEffect(() => {
    let now = new Date()
    let start = new Date(2023, 11, 15, 23, 59, 59, 999)
    let countdown = start - now

    let timer = setTimeout(() => {
      setTime(true)
    }, countdown)
  }, [])

  const t = new Date();
  t.setSeconds(t.getSeconds() + (60 * 60 * 24 * 2))
  // ===================================================


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
      <Container sx={{ paddingTop: '5rem', display: 'flex', alignItems: 'center' }}>
        <Grid container alignItems='center'>


          <Grid item xs={12} >
            <Grid container display='flex' justifyContent='space-between'>

              {/* <Grid item xs={4}>
                {time ? <Timer expiryTimestamp={t} /> : <Typography variant='h2'>00:00:00</Typography>}
              </Grid> */}

              <Grid item xs={6}>
                <Typography fontWeight={600} variant='h3' color='error'>BE A PATRON</Typography>
                {/* <Typography variant='h5' textAlign='end'>
                  We are <span style={{ fontWeight: 'bold', fontSize: '30px', color: 'green' }}>₹{100000 - total}</span> closer to reach our goal!🤩
                </Typography> */}
              </Grid>
              <Grid item xs={6} display='flex' justifyContent='end' alignItems='center'>
                <img src='https://www.tinkerhub.org/files/LogoBLACK.png' alt='tinkerhub_logo' height={25} width={150} />
              </Grid>
              {/* <Grid item display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography textAlign='center' variant='h4'>01/01/2023</Typography>
                <br />
                <Typography textAlign='center' variant='h4'>11:02:45</Typography>
              </Grid> */}
            </Grid>
          </Grid>

          <Grid item xs={12} paddingTop={12} paddingBottom={3}>
            {/* <Typography sx={{ fontWeight: 'bold' }} variant='h4' textAlign='end'> ₹ 100K</Typography> */}
            <Myprogress total={total} />
          </Grid>

          <Grid item xs={12} >
            <Grid container justifyContent='space-between'>

              <Grid item xs={4} display='flex' justifyContent='center' alignItems='center'>
                {/* <NameRole people={payeeArray} /> */}
                <BasicModal open={open} subscribeAmount={payment} />
              </Grid>

              {/* <Grid item xs={4} >
                <Lottie
                  options={{ ...animationData, animationData: animationFund }}
                  height={225}
                  width={225}
                />
              </Grid> */}

              {/* <Grid item xs={4} display='flex' justifyContent='center' alignItems='center'>
                <img src={tinkerqr} height={250} width={250} />
              </Grid> */}
            </Grid>
          </Grid>

          {open ? <Grid item xs={12} width='75%' height='85vh' position='absolute' top={0}>
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


        </Grid>
      </Container >


    </>
  )
}

export default App
