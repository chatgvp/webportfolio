import { useScrollIntoView } from "@mantine/hooks"
import { Button, Text, Group, Box, Container } from "@mantine/core"

export default function Header() {
    const { scrollIntoView: scrollIntoView1, targetRef: targetRef1 } =
        useScrollIntoView<HTMLDivElement>({
            offset: 60,
        })
    const { scrollIntoView: scrollIntoView2, targetRef: targetRef2 } =
        useScrollIntoView<HTMLDivElement>({
            offset: 60,
        })

    return (
        <div>
            <Group justify="center">
                <Button
                    onClick={() =>
                        scrollIntoView1({
                            alignment: "center",
                        })
                    }>
                    Scroll to Target 1
                </Button>

                <Button
                    onClick={() =>
                        scrollIntoView2({
                            alignment: "center",
                        })
                    }>
                    Scroll to Target 2
                </Button>
            </Group>

            <Box
                style={{
                    width: "100%",
                    height: "50vh",
                    backgroundColor: "var(--mantine-color-blue-light)",
                }}
            />

            <Text ref={targetRef1}>Target 1</Text>

            <Box
                style={{
                    width: "100%",
                    height: "50vh",
                    backgroundColor: "var(--mantine-color-blue-light)",
                }}
            />

            <Text ref={targetRef2}>Target 2</Text>
        </div>
    )
}
