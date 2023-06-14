import { Typography } from '@mui/material'
import { useSWR } from 'swr'
import axios from 'axios';

export default function SWR() {
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
  const {data, error, isLoading} = useSWR('time', async () => {

  });

  return (
    <>
      <Typography variant="h1" align="center" component="h2">SWR Example</Typography>
    </>
  );
}
