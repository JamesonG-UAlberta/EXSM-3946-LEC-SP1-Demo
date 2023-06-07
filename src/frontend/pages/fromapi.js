import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
    const [data, setData] = useState(null)
    // Client Data Fetching
    useEffect(() => {
        fetch('/api')
            .then(res => res.text())
            .then(data => setData(data))
    }, []);

  return (
    <>
      <Typography variant="h1" align="center" component="h2">Example App Home</Typography>
      <Typography variant="body1" align="center" component="p">
       Client-Side {data}
    </Typography>
      <Typography variant="body1" align="center" component="p">
       Server-Side {props.ssrBlurb}
    </Typography>
      <Typography variant="body1" align="center" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor laoreet lobortis. Sed imperdiet quis leo et tincidunt. Sed non ante nisi. Phasellus semper lacus et mi sodales hendrerit. Cras nisi ex, sagittis et ligula vel, ultrices hendrerit velit. Morbi sollicitudin blandit nisl sed hendrerit. Cras fringilla erat sed sollicitudin placerat. Morbi sit amet sapien rhoncus, molestie risus et, semper sem. Cras varius sem at dolor tristique, vitae dapibus velit vehicula. Pellentesque gravida commodo leo, consectetur ultrices quam vehicula et. Mauris eget neque nulla.
    </Typography>
    </>
  )
}
// The presence of this function converts this component (page) to server-side rendering.
export async function getServerSideProps() {
    // Server Data Fetching
    const ssrBlurb = await (fetch('http://localhost:3000/api').then(res => res.text()));
    return { 
        props: { 
            ssrBlurb: ssrBlurb 
        } 
    }
}