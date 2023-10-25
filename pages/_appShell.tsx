import { useDisclosure, useIntersection, useWindowScroll } from "@mantine/hooks"
import {
    AppShell,
    Avatar,
    Burger,
    Button,
    Group,
    Text,
    ActionIcon,
    Container,
    Title,
    useComputedColorScheme,
    useMantineColorScheme,
    rem,
    Box,
    Paper,
    AspectRatio,
    Card,
    Divider,
    Grid,
    SimpleGrid,
    useDirection,
} from "@mantine/core"
import {
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
    IconListSearch,
    IconMoon,
    IconSun,
    IconTextDirectionLtr,
    IconTextDirectionRtl,
} from "@tabler/icons-react"
import cx from "clsx"
import classes from "../styles/Home.module.css"
import { SetStateAction, useEffect, useRef, useState } from "react"
import Content from "./components/_content"
import { Link } from "react-scroll"
import { Carousel } from "@mantine/carousel"
import { projectData, certificateData } from "./api/_data"
import { SiGithub } from "react-icons/si"
import { dir } from "console"
const links = [
    { label: "About", link: "#About", order: 1 },
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
        // <Link activeClass="active" smooth spy to={item.label}>
        //     {item.label}
        // </Link>
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
        // setActive(item.link)
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
        // Use requestAnimationFrame for smoother performance
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
    }, [])
    const { toggleDirection, dir } = useDirection()
    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            // navbar={{
            //     width: 400,
            //     breakpoint: "sm",
            //     collapsed: { mobile: !opened },
            // }}
            // aside={{
            //     width: 200,
            //     breakpoint: "md",
            //     collapsed: { desktop: false, mobile: true },
            // }}
            padding="md">
            <AppShell.Header>
                <Container>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Group justify="space-between" mt="sm">
                        <Title fz="xl">Gvpeña</Title>{" "}
                        <Group>
                            <ActionIcon
                                onClick={() => toggleDirection()}
                                variant="default"
                                radius="md"
                                size="lg">
                                {dir === "rtl" ? (
                                    <IconTextDirectionLtr stroke={1.5} />
                                ) : (
                                    <IconTextDirectionRtl stroke={1.5} />
                                )}
                            </ActionIcon>
                            <ActionIcon variant="default" size="lg">
                                <SiGithub
                                    style={{ width: rem(24), height: rem(24) }}
                                    stroke={1}
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
                        </Group>
                    </Group>
                </Container>
            </AppShell.Header>
            {/* <AppShell.Navbar p="md">
                <Avatar
                    radius="xl"
                    size="100%"
                    color="dark"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    style={{ maxWidth: "90%", maxHeight: "40%" }} // Add this line
                />
                <h1>George Vincent B. Peña</h1>
                <Text c="dimmed" fz="sm">
                    Hey! How nice of you to look at my personal site, Thank you!
                    I am software engineer that specializes at backend apis,
                    front end integration, recently found myself studying UX
                    too.
                </Text>
            </AppShell.Navbar> */}
            <AppShell.Main style={{ flex: 1 }}>
                <Content />
            </AppShell.Main>
            <AppShell.Aside p="md" withBorder={false}>
                <Group mb="md">
                    <IconListSearch
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                    />
                    <Text>Table of contents</Text>
                </Group>
                {items}
            </AppShell.Aside>
            {/* <AppShell.Footer p="md" style={{ marginTop: "auto" }}>
                <Container className={classes.inner}>
                    <div className={classes.logo}>
                        <Text
                            size="xs"
                            c="dimmed"
                            className={classes.description}>
                            Build fully functional accessible web applications
                            faster than ever
                        </Text>
                    </div>
                </Container>
                <Container className={classes.afterFooter}>
                    <Text c="dimmed" size="sm">
                        © 2020 mantine.dev. All rights reserved.
                    </Text>

                    <Group
                        gap={0}
                        className={classes.social}
                        justify="flex-end"
                        wrap="nowrap">
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandTwitter
                                style={{ width: rem(18), height: rem(18) }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandYoutube
                                style={{ width: rem(18), height: rem(18) }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandInstagram
                                style={{ width: rem(18), height: rem(18) }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </Container>
            </AppShell.Footer> */}
        </AppShell>
    )
}
