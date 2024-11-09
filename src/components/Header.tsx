import { Box, Button, Container, Link, Typography } from '@mui/material'
import React from 'react'


function Header() {
  return (
    <Container maxWidth='lg'>
        <Box sx={{
            display:'flex',
            justifyContent:"space-between",
            alignItems:"center",
            padding:"1.5rem",
            backgroundColor:"#000000e8",
            color:'white',
            borderRadius:"10px",
            marginTop:"1rem"
        }}>
            <Link href="/" sx={{color:"white"}} underline="none">
            <Typography variant='h5' >
                Blog Application
            </Typography>
            </Link>
            

            <Box >
            <Button variant="text" sx={{
                color:"white"
            }}>Sign IN</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default Header