import {
    MantineProvider,
    createTheme,
    DirectionProvider,
    MantineColorsTuple,
} from "@mantine/core"
import FullLayout from "./_appShell"
import { ModalsProvider } from "@mantine/modals"

/* Define a class to apply the Poppins font */
const myColor: MantineColorsTuple = [
    "#e0fbff",
    "#cbf2ff",
    "#9ae2ff",
    "#64d2ff",
    "#3cc5fe",
    "#23bcfe",
    "#09b8ff",
    "#00a1e4",
    "#0090cd",
    "#007cb5",
]
const theme = createTheme({
    fontFamily: "Poppins, sans-serif",
})
import { motion, AnimatePresence } from "framer-motion"
export default function Home() {
    return (
        <DirectionProvider>
            <MantineProvider theme={theme}>
                <ModalsProvider>
                    <FullLayout />
                </ModalsProvider>
            </MantineProvider>
        </DirectionProvider>
    )
}
