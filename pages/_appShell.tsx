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
} from "@mantine/core"
import {
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
    IconListSearch,
    IconMoon,
    IconSun,
} from "@tabler/icons-react"
import cx from "clsx"
import classes from "../styles/Home.module.css"
import { useEffect, useRef, useState } from "react"
import Content from "./components/_content"
const links = [
    { label: "About", link: "#About", order: 1 },
    // { label: "Skills", link: "#Skills", order: 1 },
    { label: "Projects", link: "#Projects", order: 1 },
    { label: "Experiences", link: "#Experience", order: 1 },
    { label: "Certificates", link: "#Certificates", order: 1 },
    { label: "Contacts", link: "#Contact", order: 1 },
]

function scrollToProjects(link: string) {
    const projectsContainer = document.getElementById(link)

    if (projectsContainer) {
        const containerTop =
            projectsContainer.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: containerTop, behavior: "smooth" })
    }
}

export default function FullLayout() {
    const [active, setActive] = useState("#About")
    const items = links.map((item) => (
        <Box<"a">
            component="a"
            href={item.link}
            onClick={(event) => {
                event.preventDefault()
                setActive(item.link)
                scrollToProjects(item.label)
            }}
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
    const [opened, { toggle }] = useDisclosure(false)
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    })
    const handleScroll = () => {
        const containers = [
            { id: "About", link: "#About" },
            // { id: "Skills", link: "#Skills" },
            { id: "Experiences", link: "#Experience" }, // Corrected to "Experiences"
            { id: "Projects", link: "#Projects" },
            { id: "Certificates", link: "#Certificates" },
            { id: "Contacts", link: "#Contact" }, // Corrected to "Contact"
        ]

        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        if (scrollPosition <= windowHeight / 10) {
            setActive("#About")
            return
        }
        if (
            scrollPosition + windowHeight >=
            document.body.scrollHeight - windowHeight / 10
        ) {
            setActive("#Contact")
            return
        }
        for (const container of containers) {
            if (isElementInCenter(container.id)) {
                setActive(container.link)
            }
        }
    }

    const isElementInCenter = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            // navbar={{
            //     width: 400,
            //     breakpoint: "sm",
            //     collapsed: { mobile: !opened },
            // }}
            aside={{
                width: 200,
                breakpoint: "md",
                collapsed: { desktop: false, mobile: true },
            }}
            padding="md">
            <AppShell.Header>
                <Container>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Group justify="space-between">
                        <Title>This is Logo</Title>{" "}
                        <Group>
                            <Button variant="default">Third</Button>
                            <Button variant="default">Third</Button>
                            <Button variant="default">Third</Button>
                            <Button variant="default">Third</Button>
                            <ActionIcon
                                onClick={() =>
                                    setColorScheme(
                                        computedColorScheme === "light"
                                            ? "dark"
                                            : "light"
                                    )
                                }
                                variant="default"
                                size="xl"
                                aria-label="Toggle color scheme">
                                <IconSun
                                    className={cx(classes.icon, classes.light)}
                                    stroke={1.5}
                                />
                                <IconMoon
                                    className={cx(classes.icon, classes.dark)}
                                    stroke={1.5}
                                />
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
            <AppShell.Main>
                <Content />
            </AppShell.Main>
            <AppShell.Aside p="md" withBorder={false}>
                {items}
            </AppShell.Aside>
            <AppShell.Footer p="md">
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
            </AppShell.Footer>
        </AppShell>
    )
}
