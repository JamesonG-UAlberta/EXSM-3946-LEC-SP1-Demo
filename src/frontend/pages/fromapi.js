import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import https from 'https';

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
      <ul>
        {props.weather.map(weather => 
            <li>On {weather.date}, the temperature is {weather.temperatureC} degrees celcius, {weather.summary}.</li>
        )}
        </ul>
      <Typography variant="body1" align="center" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor laoreet lobortis. Sed imperdiet quis leo et tincidunt. Sed non ante nisi. Phasellus semper lacus et mi sodales hendrerit. Cras nisi ex, sagittis et ligula vel, ultrices hendrerit velit. Morbi sollicitudin blandit nisl sed hendrerit. Cras fringilla erat sed sollicitudin placerat. Morbi sit amet sapien rhoncus, molestie risus et, semper sem. Cras varius sem at dolor tristique, vitae dapibus velit vehicula. Pellentesque gravida commodo leo, consectetur ultrices quam vehicula et. Mauris eget neque nulla.
    </Typography>
    </>
  )
}
// The presence of this function converts this component (page) to server-side rendering.
export async function getServerSideProps() {
    // Server Data Fetching
    // Because the server doesn't have SSL certificates, we need to disable SSL verification.
    const failSafeAxios = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    // Get our data from the server.
    const weather = await (failSafeAxios.get('https://localhost:4000/WeatherForecast'));
    // Send the data to the page.
    return { 
        props: { 
            weather: weather.data
        } 
    }
}