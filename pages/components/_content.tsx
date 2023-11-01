import {
    Container,
    Title,
    Text,
    SimpleGrid,
    Card,
    rem,
    useMantineTheme,
    Tabs,
    Image,
    Button,
    Group,
    Grid,
    Modal,
    Paper,
    AspectRatio,
    TextInput,
    Avatar,
    Divider,
    Center,
    BackgroundImage,
    Box,
    Stack,
    List,
    ListItem,
    ThemeIcon,
    Anchor,
    ActionIcon,
} from "@mantine/core"
import classes from "../../styles/Content.module.css"
import { Carousel } from "@mantine/carousel"
import "@mantine/carousel/styles.css"
import { RiShareBoxLine } from "react-icons/ri"
import {
    Experience,
    projectData,
    certificateData,
    techIcons,
} from "../api/_data"
import { useEffect, useRef } from "react"
import { modals } from "@mantine/modals"
import {
    SiBookstack,
    SiBootstrap,
    SiC,
    SiCplusplus,
    SiCss3,
    SiDjango,
    SiFacebook,
    SiFastapi,
    SiFirebase,
    SiFlutter,
    SiFramer,
    SiGit,
    SiGithub,
    SiGmail,
    SiHtml5,
    SiInstagram,
    SiJavascript,
    SiJquery,
    SiMysql,
    SiNextdotjs,
    SiOpenai,
    SiPhp,
    SiPostman,
    SiPython,
    SiReact,
    SiSharex,
    SiTypescript,
    SiVisualstudio,
    SiXampp,
    SiDiscord,
    SiLinkedin,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { TbBrandMantine } from "react-icons/tb"

import { PiHandWavingBold } from "react-icons/pi"
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"
import { IconCircleCheck } from "@tabler/icons-react"
import Aos from "aos"
import "aos/dist/aos"

// import ScrollAnimation from "react-animate-on-scroll"
import { useScrollIntoView } from "@mantine/hooks"
interface TechIcon {
    icon: JSX.Element
    label: string
}

interface TechIcons {
    [key: string]: TechIcon[]
}
export default function Content() {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    })
    const Experiences = (
        <Tabs defaultValue="0" orientation="vertical">
            <Tabs.List>
                {Experience.map((experience, index) => (
                    <Tabs.Tab value={index.toString()} key={index}>
                        <Image
                            width={125}
                            height={125}
                            src={experience.image}
                            alt={experience.name}
                        />
                    </Tabs.Tab>
                ))}
            </Tabs.List>
            <div>
                {Experience.map((experience, index) => (
                    <Tabs.Panel value={index.toString()} key={index} p="xl">
                        <h4>
                            <b>{experience.description.title}</b>
                        </h4>
                        <b>{experience.name}</b>
                        <Text c="dimmed">{experience.date}</Text>
                        <Container size="sm">
                            <List
                                type="ordered"
                                icon={
                                    <ThemeIcon
                                        color="teal"
                                        size={24}
                                        radius="xl">
                                        <SiBookstack size="1rem" />
                                    </ThemeIcon>
                                }>
                                {experience.description.subdescription.map(
                                    (subDesc, subIndex) => (
                                        <List.Item key={subIndex}>
                                            {subDesc.text}
                                        </List.Item>
                                    )
                                )}
                            </List>
                        </Container>
                    </Tabs.Panel>
                ))}
            </div>
        </Tabs>
    )

    return (
        <>
            <Container
                id="About"
                size="lg"
                style={{
                    height: "100vh",
                    paddingTop: "50px",
                }}
                mt="xl">
                <h1 style={{ fontSize: "60px" }} className="titlefont">
                    Hello, I'm{" "}
                    <Text
                        size="xl"
                        component="span"
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan" }}
                        inherit>
                        George Vincent Peña
                    </Text>{" "}
                    {/* <div className="center-container">
                        <div className="center"></div>{" "}
                    </div> */}
                </h1>
                <Text>
                    A passionated <b>software developer</b> who enjoys
                    problem-solving and building programming applications.
                    I&apos;m excited to learn and grow, confidently progressing
                    on this journey.
                </Text>
                <br />
                <Button
                    onClick={() =>
                        scrollIntoView({
                            alignment: "center",
                        })
                    }>
                    Say Hello <PiHandWavingBold />
                </Button>
                <Grid gutter="xl">
                    <Grid.Col span={10}></Grid.Col>
                    <Grid.Col span={2}>
                        <Title order={1} my="sm">
                            <p className="titlefont">ABOUT.</p>
                        </Title>
                    </Grid.Col>
                </Grid>
                <Divider />
                <Grid grow my="xl">
                    <Grid.Col span={6}>
                        <Text my="sm">
                            In 2017, I was introduced to programming, and from
                            that moment, my genuine interest was sparked. Over
                            time, this interest evolved into a dedicated
                            professional pursuit.
                        </Text>
                        <Text my="sm">
                            Here are some <b>Technnologies</b> that im familar
                            with
                        </Text>
                        <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
                            <Group>
                                {techIcons["Frontend Centric"][0].icon}
                                <Text c="dimmed">
                                    {techIcons["Frontend Centric"][0].label}
                                </Text>
                            </Group>
                            <Group>
                                {techIcons["Frontend Centric"][1].icon}

                                <Text c="dimmed">
                                    {techIcons["Frontend Centric"][1].label}
                                </Text>
                            </Group>
                            <Group>
                                {techIcons["Backend Centric"][0].icon}

                                <Text c="dimmed">
                                    {techIcons["Backend Centric"][0].label}
                                </Text>
                            </Group>
                            <Group>
                                {techIcons["Database"][0].icon}

                                <Text c="dimmed">
                                    {techIcons["Database"][0].label}
                                </Text>
                            </Group>
                        </SimpleGrid>

                        <br />
                        <Anchor
                            onClick={() =>
                                modals.open({
                                    title: <b>Full Skill Set List</b>,
                                    children: (
                                        <>
                                            {Object.keys(techIcons).map(
                                                (category, index) => (
                                                    <div key={index}>
                                                        <Text fz="lg" fw={700}>
                                                            {category}
                                                        </Text>
                                                        <Divider />
                                                        <SimpleGrid
                                                            p="md"
                                                            cols={2}
                                                            spacing="xs"
                                                            verticalSpacing="xs">
                                                            {techIcons[
                                                                category
                                                            ].map((item) => (
                                                                <Text
                                                                    key={index}
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                    }}>
                                                                    {item.icon}{" "}
                                                                    <Text
                                                                        c="dimmed"
                                                                        ml={4}>
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Text>
                                                                </Text>
                                                            ))}
                                                        </SimpleGrid>
                                                    </div>
                                                )
                                            )}
                                        </>
                                    ),
                                })
                            }>
                            View full Arsenal <RiShareBoxLine />
                        </Anchor>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Avatar
                            src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.18169-9/29375_114527412046652_599135455_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=b9145c&_nc_ohc=D6cHqGl78UQAX85z-a-&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfC3E07QRnRVa5h8dWUnPz06F3dD188fGjyqkZWQj7Qwtw&oe=6567E31D"
                            size={300} // Set the size to "100%" to maximize the available space
                            radius={120}
                            mx="auto"
                        />
                    </Grid.Col>
                </Grid>
            </Container>
            <Container id="Projects" py="xl" my="xl" size="lg">
                <Grid gutter="xl">
                    <Grid.Col span={3}>
                        <Title order={1} my="sm">
                            <p className="titlefont">PROJECTS.</p>
                        </Title>
                    </Grid.Col>
                    <Grid.Col span={9}></Grid.Col>
                </Grid>
                <Divider />

                <Text c="dimmed" mt="md">
                    In my learning journey, I&apos;ve gained experience in web
                    development and mobile app development, working on a variety
                    of projects that involve API integration, CSS design, and
                    database management.
                </Text>
                <Grid grow>
                    {projectData.map((project, index) => (
                        <Grid.Col span={12} key={index} my="xl">
                            <Grid>
                                <Grid.Col span={5} p="lg">
                                    <Title order={4} my="sm">
                                        <p className="titlefont">
                                            {project.title}
                                        </p>
                                    </Title>
                                    <Text
                                        c="dimmed"
                                        className={classes.cardTitle}
                                        mt="md">
                                        {project.description}
                                    </Text>
                                    <Text fw={700} py="sm">
                                        Technology used in this project
                                    </Text>
                                    <SimpleGrid cols={3}>
                                        {project.tech.map((tech, index) => (
                                            <Text c="dimmed" key={index}>
                                                <Group>
                                                    {tech.icon}
                                                    {tech.label}
                                                </Group>
                                            </Text>
                                        ))}
                                    </SimpleGrid>
                                    <Group my="xl">
                                        <Button
                                            variant="outline"
                                            color="gray"
                                            // leftSection={<SiGithub size={14} />}
                                            rightSection={
                                                <RiShareBoxLine size={14} />
                                            }>
                                            Live Demo
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                window.open(
                                                    project.link,
                                                    "_blank"
                                                )
                                            }
                                            variant="light"
                                            leftSection={<SiGithub size={14} />}
                                            rightSection={
                                                <RiShareBoxLine size={14} />
                                            }>
                                            Code repo
                                        </Button>
                                    </Group>
                                </Grid.Col>
                                <Grid.Col span={7} p="lg">
                                    <Image
                                        src={project.images.src}
                                        // alt={`${image} ${imageIndex}`}
                                        className={classes.image}
                                    />
                                    {/* <Carousel
                                        slideGap="xl"
                                        draggable={false}
                                        withIndicators
                                        className={`${classes.carousel}`}>
                                        {project.images.map(
                                            (image, imageIndex) => (
                                                <Carousel.Slide
                                                    className={`${classes.card}`}
                                                    key={imageIndex}>
                                                    <Image
                                                        height="300vh"
                                                        src={image}
                                                        alt={`${image} ${imageIndex}`}
                                                        className={`${classes.image}`}
                                                    />
                                                </Carousel.Slide>
                                            )
                                        )}
                                    </Carousel> */}
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
            <Container py="xl" id="Experiences" size="lg">
                <Grid gutter="xl">
                    <Grid.Col span={9}></Grid.Col>
                    <Grid.Col span={3}>
                        <Title order={1} my="sm">
                            <p className="titlefont">EXPERIENCES.</p>
                        </Title>
                    </Grid.Col>
                </Grid>

                <Divider></Divider>
                <Text
                    c="dimmed"
                    className={classes.description}
                    // ta="center"
                    // fz="lg"
                    mt="md">
                    Here are some of the experience i have gained in my learning
                    jouney
                </Text>
                {Experiences}
            </Container>
            <Container py="xl" id="Certificates" my="xl" size="lg">
                <Grid gutter="xl">
                    <Grid.Col span={3}>
                        <Title order={1} my="sm">
                            <p className="titlefont">CERTIFICATES.</p>
                        </Title>
                    </Grid.Col>
                    <Grid.Col span={9}></Grid.Col>
                </Grid>
                <Divider></Divider>
                <Text
                    c="dimmed"
                    className={classes.description}
                    ta="center"
                    mt="md">
                    Programming became my passion since its introduction to me;
                    it immediately caught my interest
                </Text>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    {certificateData.map((article, index) => (
                        <Card
                            p="md"
                            radius="md"
                            withBorder
                            className={classes.card}
                            key={index}>
                            <AspectRatio ratio={1920 / 1080}>
                                <Image src={article.image} alt="Certificate" />
                            </AspectRatio>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
            <Container
                size="xl"
                id="Contacts"
                my="xl"
                py="xl"
                ref={targetRef}
                style={{ height: "40vh" }}>
                <Title ta="center">
                    <p className="titlefont">Say Hello</p>
                </Title>
                <Container p={0} size="xs">
                    <Text c="dimmed" ta="center">
                        I&apos;m always open to engaging in meaningful
                        conversations, whether it&apos;s about coding, work, or
                        any other topic. Don&apos;t hesitate to get in touch
                        with me via{" "}
                        <Anchor
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=gvbpena@gmail.com"
                            target="_blank"
                            underline="hover">
                            Email
                        </Anchor>
                    </Text>
                </Container>
            </Container>
        </>
    )
}
