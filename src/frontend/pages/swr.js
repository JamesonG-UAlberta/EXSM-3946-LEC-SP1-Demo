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
  // Destructuring allows us to pull variables out of an object.
  // In this case the constants data, error, and isLoading are pulled out of the object properties returned by useSWR.
  // Alternatively, we would have to have done something like this:
  // const swr = useSWR('time', async () => {
  //    // Fetcher body.
  // });
  // const data = swr.data;
  // const error = swr.error;
  // const isLoading = swr.isLoading;

  // isLoading is a boolean that is true when the data is being fetched (async promise unfulfilled).
  // error is an object that contains the error message if the fetch fails.
  // data is the data returned by the fetcher function.
  // We can use conditional rendering to display different things depending on the state of the fetch (like a loading screen).
  // The first argument is the key, which is used to cache the data. 
  // Any subsequent calls (anywhere) to useSWR with the same key will return the cached data.
  const {data, error, isLoading} = useSWR('time', fetcher, {
    // This is where you add any options you want to apply to the fetcher.
    // In this case we are setting the refresh interval to 1 second.
    // refreshInterval can be set to a function which allows more rapid updates in unusual circumstances.
    // Say for example a sensor input is expected between 10 and 25:
    // refreshInterval: data => data < 10 || data > 25 ? 1000 : 10000
    refreshInterval: 0,
    // In this case we are setting revalidateOnFocus to false, which means that the data will not be revalidated when the page is focused.
    revalidateOnFocus: false,
    // In this case we are setting focusThrottleInterval to 10 seconds, which means that the data will not be revalidated when the page is focused for 10 seconds after the last focus.
    focusThrottleInterval: 10000,
    // In this case we are setting dedupingInterval to 1 second, which means that the data will not be revalidated if the last fetch was within 1 second.
    dedupingInterval: 1000,
    // In this case we are setting revalidateOnReconnect to false, which means that the data will not be revalidated when the page is reconnected.
    revalidateOnReconnect: false,
    // In this case we are setting refreshWhenHidden to false, which means that the data will not be revalidated when the page is hidden.
    refreshWhenHidden: false,

    revalidateOnMount: false,

    // In this case we are setting loadingTimeout to 5 seconds, which means that the request will be considered slow if it takes longer than 5 seconds.
    loadingTimeout: 5000,
    onLoadingSlow: () => console.log("Loading is slow."),

    // In this case we are setting shouldRetryOnError to false, which means that the request will not be resent if errored.
    shouldRetryOnError: false,
    // In this case we are setting errorRetryInterval to 5 seconds, which means that the after 5 seconds the request will be resent if errored.
    errorRetryInterval: 5000,
    // In this case we are setting errorRetryCount to 5, which means no more than 5 retries will be attempted.
    errorRetryCount: 5,
    
    fallbackData: props.initialData,
    
    revalidateIfStale: false
  });

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
        <Typography variant="body1" align="center" component="p">The time is {(Date(data.datetime)).toLocaleString()}. That is {data.unixtime} ticks since the Unix epoch.</Typography>
      }
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      initialData: await fetcher()
    }
  }
}
