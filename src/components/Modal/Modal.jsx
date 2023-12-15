import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Lottie from 'react-lottie';
import animationData from '../../assets/celeb.json'
import { styled } from '@mui/system';
import { Fade } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '10rem',
    bgcolor: 'background.paper',
    // 
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    borderRadius: '5px'
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const TransparentBackdrop = styled('div')({
    background: 'rgba(0, 0, 0, 0)', // Fully transparent black
});

export default function BasicModal({ open, subscribeAmount }) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);


    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // style={{ backgroundColor: '', opacity: 1 }}
                BackdropComponent={TransparentBackdrop}
            >

                <Fade in={open}>
                    <Box sx={style} >
                        <Box >
                            <Typography textAlign='center' id="modal-modal-title" variant="h4" component="h2">
                                {/* Thankyou for your support!
                                <br /> */}
                                +{subscribeAmount}
                            </Typography>
                        </Box>
                        {/* <Box  >
                        <Lottie
                            options={{ ...animationData, animationData }}
                            height={100}
                            width={100} />
                    </Box> */}
                    </Box>
                </Fade>

            </Modal>
        </div >
    );
}