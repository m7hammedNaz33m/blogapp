import Post from '@/components/Post'
import { Container } from '@mui/material'
import { error } from 'console'
import React from 'react'




const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!response.ok){
    throw new Error('Something Went Wrong!');
  }
  return response.json()
} 

const page = async() => {
    const posts = await getPost()

  return (
    <Container maxWidth="lg" sx={{marginTop:"1.5rem"}}>
      <Post result={posts}></Post>
    </Container>
  )
}

export default page