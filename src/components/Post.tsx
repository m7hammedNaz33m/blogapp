"use client"
import React from 'react'

import Stack from '@mui/material/Stack';
import { Box, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
interface Posts {
    id:number,
    title:string,
    body:string,
    userid:number
}
type Post = {
    result:Posts[] 
}

const Post = ({result}:Post ) => {
   
  return (
    <Grid container spacing={2} >

{
    result.map((x,id)=>(
     <Grid size={{ xs: 12, sm: 6 ,md:4}} key={x.id} sx={{
         display:'flex',
         flexDirection:"column",
         justifyContent:'space-between',
         borderRadius:"10px",
         boxShadow:"0 10px 10px #00000021",
         padding:"1.5rem",
         background:"#1b1f26",
         color:"white",
         border:"1px solid #ffffff6b"

     }}>
        <Box sx={{
            display:'flex',
            flexDirection:"column",
            gap:".8rem",
            marginBottom:"1rem"
        }}>
         <Typography variant='h5' sx={{
            textTransform:"uppercase"
         }}>
             {x.title}
         </Typography>
         <Typography variant='body1' sx={{
            color: "#c3c3c3",
            fontSize: ".8em"}}>
             {x.body}
         </Typography>

        </Box>
        <Box sx={{display:"flex",
            flexDirection:"column"
        }}>
        <Box sx={{
            width:"100%",
            height:"200px",
            background:"#0e1217",
            borderRadius:"10px",
            marginBottom:"1rem"

         }}>

         </Box>
        <Link href={`/posts/${x.id}`} sx={{color:"white"}} underline="none">
       
       Read More...
       </Link>
        </Box>
         
        

     </Grid>
    ))
 }

  
</Grid>
  )
}

export default Post

