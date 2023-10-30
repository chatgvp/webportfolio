import "@/styles/globals.css"
import "@mantine/core/styles.css"
import "animate.css/animate.min.css"
// import { MantineProvider } from "@mantine/core"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
