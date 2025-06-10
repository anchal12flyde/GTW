import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    
    <Html lang="en">
      <Head>
       
        {/* Google Fonts: Poppins */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
