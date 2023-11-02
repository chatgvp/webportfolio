import "@/styles/globals.css"
import "@mantine/core/styles.css"
import "animate.css/animate.min.css"
import {
    MantineProvider,
    createTheme,
    DirectionProvider,
    MantineColorsTuple,
} from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
const theme = createTheme({
    fontFamily: "Poppins, sans-serif",
})
// import { MantineProvider } from "@mantine/core"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DirectionProvider>
                <MantineProvider theme={theme}>
                    <ModalsProvider>
                        <Component {...pageProps} />
                    </ModalsProvider>
                </MantineProvider>
            </DirectionProvider>
        </>
    )
}
