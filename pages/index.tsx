import { MantineProvider, createTheme } from "@mantine/core"
import FullLayout from "./_appShell"
import { ModalsProvider } from "@mantine/modals"

const theme = createTheme({
    fontFamily: "Söhne, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    headings: { fontFamily: "Poppins, sans-serif" },
})

export default function Home() {
    return (
        <MantineProvider theme={theme}>
            <ModalsProvider>
                <FullLayout />
            </ModalsProvider>
        </MantineProvider>
    )
}
