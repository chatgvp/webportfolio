import { MantineProvider, createTheme, DirectionProvider } from "@mantine/core"
import FullLayout from "./_appShell"
import { ModalsProvider } from "@mantine/modals"

const theme = createTheme({
    // fontFamily: "Poppins, sans-serif",
    // fontFamilyMonospace: "Monaco, Courier, monospace",
    // headings: { fontFamily: "Poppins, sans-serif" },
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
