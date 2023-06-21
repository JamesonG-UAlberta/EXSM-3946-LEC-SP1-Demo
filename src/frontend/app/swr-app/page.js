"use client";
import { Typography, Alert, Box } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios';
import { Loop, ErrorOutline } from '@mui/icons-material';


const fetcher = async () => {
  // Artificial 2 second delay.
  await new Promise(r => setTimeout(r, 2000));
  const response = await axios.get("https://worldtimeapi.org/api/timezone/America/Edmonton");
  return response.data;
}

export default function SWR(props) {



  return (
    <>
      <Typography variant="h1" align="center" component="h2">SWR Example</Typography>      
      
      {/*isLoading ? 
      // Displayed while the SWR loads.
        <Box sx={{textAlign: "center"}}>
            <Loop sx={{
              fontSize: "6rem", 
              animation: "rotation 5s infinite linear",
              "@keyframes rotation": {
                "0%": {
                  transform: "rotate(0deg) scaleX(-1)"
                },
                "100%": {
                  transform: "rotate(360deg) scaleX(-1)"
                }
              }
            }}/>
        </Box>
      : error ? 
      // Displayed if an error occurs.
          <Alert severity="error">{error.message}</Alert>
      :
      // Displayed after the SWR loads.
      */
        <Typography variant="body1" align="center" component="p">The time is {(Date(props.initialData.datetime)).toLocaleString()}. That is {props.initialData.unixtime} ticks since the Unix epoch.</Typography>
      }
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      initialData: fetch("https://worldtimeapi.org/api/timezone/America/Edmonton", {
        method: "GET",
        next: {
            revalidate: 60,
        }
    }).then(res => res.json())
    }
  }
}
