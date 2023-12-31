import { useDisclosure, useIntersection, useWindowScroll } from "@mantine/hooks"
import {
    AppShell,
    Burger,
    Group,
    Text,
    ActionIcon,
    Container,
    Title,
    useComputedColorScheme,
    useMantineColorScheme,
    rem,
    Box,
} from "@mantine/core"
import { IconListSearch, IconMoon, IconSun } from "@tabler/icons-react"
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"
import cx from "clsx"
import classes from "../styles/Home.module.css"
import { SetStateAction, useEffect, useRef, useState } from "react"
import Content from "./components/_content"
import { Link } from "react-scroll"
import { Carousel } from "@mantine/carousel"
import { projectData, certificateData } from "./api/_data"
import { SiGithub, SiLinkedin } from "react-icons/si"
const links = [
    { label: "About", link: "#About", order: 1 },
    // { label: "Skills", link: "#Skills", order: 1 },
    { label: "Projects", link: "#Projects", order: 1 },
    { label: "Experiences", link: "#Experience", order: 1 },
    { label: "Certificates", link: "#Certificates", order: 1 },
    { label: "Contacts", link: "#Contact", order: 1 },
]
function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) {
        const containerTop =
            element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: containerTop, behavior: "smooth" })
    }
}

export default function FullLayout() {
    const [active, setActive] = useState(links[0].link)
    const items = links.map((item) => (
        <Box
            component="a"
            href={item.link}
            onClick={(event) => handleLinkClick(event, item)}
            key={item.label}
            className={cx(classes.link, {
                [classes.linkActive]: active === item.link,
            })}
            style={{
                paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))`,
            }}>
            {item.label}
        </Box>
    ))
    const handleLinkClick = (
        event: { preventDefault: () => void },
        item: { link: SetStateAction<string>; label: any }
    ) => {
        event.preventDefault()
        scrollToElement(item.label)
    }
    const [opened, { toggle }] = useDisclosure(false)
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    })
    function isElementInCenter(elementId: string) {
        const element = document.getElementById(elementId)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementCenter = rect.top + rect.height / 2
        return (
            elementCenter >= windowHeight / 2 &&
            elementCenter <= windowHeight / 2 + windowHeight / 2
        )
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        if (scrollPosition <= windowHeight / 10) {
            setActive("#About")
            return
        }
        if (
            scrollPosition + windowHeight >=
            document.body.scrollHeight - windowHeight / 100
        ) {
            setActive("#Contact")
            return
        }
        for (const item of links) {
            if (isElementInCenter(item.label)) {
                setActive(item.link)
                return
            }
        }
    }
    useEffect(() => {
        let ticking = false
        const handleScrollWithRAF = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener("scroll", handleScrollWithRAF)

        return () => {
            window.removeEventListener("scroll", handleScrollWithRAF)
        }
    }, [handleScroll])
    return (
        <>
            <AppShell
                header={{ height: 60 }}
                aside={{
                    width: 200,
                    breakpoint: "md",
                    collapsed: { desktop: false, mobile: !opened },
                }}
                padding="md">
                <AppShell.Header>
                    <Container size="lg">
                        <Group justify="space-between" mt="sm">
                            <Group>
                                <Title fz="xl">Gvpeña</Title>
                            </Group>
                            <Group>
                                <ActionIcon
                                    variant="default"
                                    size="lg"
                                    onClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/george-vincent-pe%C3%B1a-19842928b/",
                                            "_blank"
                                        )
                                    }>
                                    <SiLinkedin
                                        style={{
                                            width: rem(24),
                                            height: rem(24),
                                        }}
                                        stroke={1}
                                    />
                                </ActionIcon>
                                <ActionIcon
                                    variant="default"
                                    size="lg"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/chatgvp",
                                            "_blank"
                                        )
                                    }>
                                    <SiGithub
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            stroke: "1",
                                        }}
                                    />
                                </ActionIcon>

                                <ActionIcon
                                    onClick={() =>
                                        setColorScheme(
                                            computedColorScheme === "light"
                                                ? "dark"
                                                : "light"
                                        )
                                    }
                                    variant="default"
                                    size="lg"
                                    aria-label="Toggle color scheme">
                                    {computedColorScheme === "light" ? (
                                        <IconMoon stroke={1} />
                                    ) : (
                                        <IconSun stroke={1} />
                                    )}
                                </ActionIcon>
                                <Burger
                                    opened={opened}
                                    onClick={toggle}
                                    hiddenFrom="md"
                                    size="sm"
                                />
                            </Group>
                        </Group>
                    </Container>
                </AppShell.Header>
                <AppShell.Main style={{ flex: 1 }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 75,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}>
                        <Content />
                    </motion.div>
                </AppShell.Main>
                <AppShell.Aside p="md" withBorder={false}>
                    <Group mb="md">
                        <IconListSearch
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                        <Text size="sm">Table of contents</Text>
                    </Group>
                    {items}
                </AppShell.Aside>
            </AppShell>
        </>
    )
}
