import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react'





const getPostById = async (id:number)=>{
    
    try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const data = await response.json()
        const filteredData = data.filter(x=>x.id === id)
           return filteredData[0]
    } catch (error) {
        throw new Error('Blog Not avaliable');
    }
    
}
const getCommentByPostId = async(id:number)=>{
    try{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    const filteredComments = data.filter(x=>x.postId === id)
    return filteredComments
    } catch (error) {
      throw new Error(`No Comments found `)  
    } 
}
const page = async({params}: {params: Promise<{ id: number }>
}) => {
const { id } = await params
    
    const post = await getPostById(Number.parseInt(id))
    const comments = await getCommentByPostId(Number.parseInt(id))
    console.log(comments)
  return (
    <Container maxWidth={"lg"}>
                <Box sx={{
            width:"100%",
            height:"250px",
            background:"#1b1f26",
            borderRadius:"10px",
            marginTop:"1.5rem"
        }}></Box>
         <Typography variant='h2' sx={{
            margin:'1rem 0',
            fontSize:"2em",
            color:"white",
            width:"100%",
            maxWidth:"calc(100vw /2)"
         }}>
            {post.title}
        </Typography>

       
        <Typography sx={{
            marginBottom:"2.5rem",
            color:"white",
            
        }} variant='body2'>
           {post.body}
        </Typography >

        <Box sx={{
            display:'flex',
            flexDirection:"column"
        }}>
            <Typography variant='h6' sx={{
                color:"white"
            }}>
                Comments
            </Typography>

            <Grid container spacing={2} 
            >
               {
                comments.map((x,id)=>(
                    <Grid  key={id} size={{xs:12,sm:6}} sx={{
                        background:"transparent",
                        color:"white",
                        border:"1px solid #ffffff3d",
                        padding:"1rem",
                        borderRadius:"10px"
                    }}>
                        <Box  sx={{
                            display:'flex',
                            gap:"1rem",
                            border:"1px solid transparent",
                            borderBottomColor:'#00000021',
                            paddingBottom:".5rem",
                            marginBottom:"1rem"
                        }}>
                            <Avatar alt='Profile Image' src='/images/avatar.jpg'></Avatar>
                            <Box>
                            <Typography variant='h6' sx={{
                                fontSize:"1em",
                                fontWeight:"100"
                            }}>
                                
                                {x.name}
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize:'.8em',
                                fontWeight:'100',
                                color:"#494949db"

                            }}>
                                {
                                    x.email
                                }
                            </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {x.body}
                        </Box>
                    </Grid>
                ))
               }
            </Grid>
        </Box>

    </Container>
  )
}

export default page