import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <h1>App</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/subdirectory/example">Example</a></li>
      </ul>
    </nav>
    <main>
    <Component {...pageProps} />
    </main>
    <footer>
      &copy; 2023
    </footer>
  </> 
}
