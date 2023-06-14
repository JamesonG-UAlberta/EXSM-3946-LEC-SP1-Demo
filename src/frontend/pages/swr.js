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

  const {data, error, isLoading} = useSWR('time', async () => {

  });

  return (
    <>
      <Typography variant="h1" align="center" component="h2">SWR Example</Typography>
    </>
  );
}
