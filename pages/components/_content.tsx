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
import {
    mockdata,
    Experience,
    projectData,
    certificateData,
} from "../api/_data"
import { useEffect, useRef } from "react"
import { modals } from "@mantine/modals"
import {
    SiBookstack,
    SiBootstrap,
    SiCplusplus,
    SiDjango,
    SiFacebook,
    SiFastapi,
    SiFirebase,
    SiFlutter,
    SiGithub,
    SiGmail,
    SiInstagram,
    SiJavascript,
    SiJquery,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPython,
    SiReact,
} from "react-icons/si"
import { motion } from "framer-motion"
import { IconCircleCheck } from "@tabler/icons-react"
const techIcons = [
    { icon: <SiNextdotjs />, label: "NextJs" },
    { icon: <SiReact />, label: "ReactJs" },
    { icon: <SiDjango />, label: "Django" },
    { icon: <SiFastapi />, label: "Fast API" },
    { icon: <SiBootstrap />, label: "Bootstrap" },
    { icon: <SiFlutter />, label: "Flutter" },
    { icon: <SiJavascript />, label: "javascript" },
    { icon: <SiPhp />, label: "PHP" },
    { icon: <SiPython />, label: "Python" },
    { icon: <SiMysql />, label: "Mysql" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiJquery />, label: "Jquery" },
]
export default function Content() {
    const IconWithLabel = techIcons.map((item, index) => (
        <Text mt={10} key={index} fz="lg">
            {item.icon} {item.label}
        </Text>
    ))
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
                        <Text c="dimmed" fz="lg">
                            {experience.date}
                        </Text>
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
                                        <List.Item key={subIndex} fz="lg">
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
            <Container py="xl" id="About" pt="xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                            },
                        },
                    }}>
                    <h1 className="title">Wubba Lubba Dub Dub!</h1>
                </motion.div>
                <Title order={2} className={classes.title} my="sm">
                    ABOUT
                </Title>
                <Divider></Divider>
                <Group grow wrap="nowrap" py="lg">
                    <div>
                        <Text fz="lg">
                            I am <b>George Vincent Peña</b>, a passionated web
                            developer who enjoys problem-solving and building
                            programming applications. I&apos;m excited to learn
                            and grow, confidently progressing on this journey.
                        </Text>
                        <br />
                        <Text fz="lg">
                            Here are some Technnology im familar with
                        </Text>
                        <SimpleGrid cols={4} spacing="xs" verticalSpacing="xs">
                            {IconWithLabel}
                        </SimpleGrid>
                    </div>
                    <Avatar radius="xl" size={200} />
                </Group>
            </Container>
            <Container py="xl" id="Projects">
                <Title order={2} className={classes.title} ta="center" my="sm">
                    PORJECTS
                </Title>
                <Divider></Divider>
                <Text
                    c="dimmed"
                    // className={classes.description}
                    fz="lg"
                    ta="center"
                    mt="md">
                    In my learning journey, I've gained experience in web
                    development and mobile app development, working on a variety
                    of projects that involve API integration, CSS design, and
                    database management.
                </Text>
                <Grid grow>
                    {projectData.map((project, index) => (
                        <Grid.Col span={12} key={index} my="xl">
                            <Grid>
                                <Grid.Col span={5}>
                                    <Title order={5} my="sm" fw={800}>
                                        {project.title}
                                    </Title>
                                    <Text
                                        c="dimmed"
                                        fz="lg"
                                        fw={500}
                                        className={classes.cardTitle}
                                        mt="md">
                                        {project.description}
                                    </Text>
                                    <Text fz="lg" fw={700} py="sm">
                                        Technology used in this project
                                    </Text>

                                    <SimpleGrid cols={3}>
                                        {project.tech.map((tech, index) => (
                                            <SimpleGrid cols={3}>
                                                <Text c="dimmed" fz="lg">
                                                    {tech}
                                                </Text>
                                            </SimpleGrid>
                                        ))}
                                    </SimpleGrid>
                                </Grid.Col>
                                <Grid.Col span={7}>
                                    <Carousel
                                        slideGap="xl"
                                        draggable={false}
                                        withIndicators
                                        className={`${classes.carousel}`} // Add classes for custom styling
                                    >
                                        {project.images.map(
                                            (image, imageIndex) => (
                                                <Carousel.Slide
                                                    className={`${classes.card}`}
                                                    key={imageIndex}>
                                                    <Image
                                                        height="300vh"
                                                        src={image}
                                                        alt={`${image} ${imageIndex}`}
                                                        className={`${classes.image}`} // Add classes for custom styling
                                                    />
                                                </Carousel.Slide>
                                            )
                                        )}
                                    </Carousel>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
            <Container py="xl" id="Experiences">
                <Title order={2} className={classes.title} ta="center" my="sm">
                    EXPERIENCES
                </Title>
                <Divider></Divider>
                <Text
                    c="dimmed"
                    className={classes.description}
                    ta="center"
                    fz="lg"
                    mt="md">
                    Here are some of the experience i have gained in my learning
                    jouney
                </Text>
                {Experiences}
            </Container>
            <Container py="xl" id="Certificates" my="xl">
                <Title order={2} className={classes.title} ta="center" my="sm">
                    CERTIFICATES
                </Title>
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
            <Container className={classes.wrapper} size={1400} id="Contacts">
                <div className={classes.inner}>
                    <Title className={classes.title}>Say Hello</Title>
                    <Container p={0} size={600}>
                        <Text
                            size="lg"
                            c="dimmed"
                            className={classes.description}>
                            I&apos;m always open to engaging in meaningful
                            conversations, whether it&apos;s about coding, work,
                            or any other topic. Don&apos;t hesitate to get in
                            touch with me via social media or shoot me an{" "}
                            <Anchor
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=gvbpena@gmail.com"
                                target="_blank"
                                underline="hover">
                                Email
                            </Anchor>
                            <Anchor
                                href="https://www.facebook.com/messages/t/chatgvp"
                                target="_blank">
                                <button>Open Messenger</button>
                            </Anchor>
                            {/* <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=gvbpena@gmail.com"
                                target="_blank">
                                <Button>Send an Email</Button>
                            </a> */}
                        </Text>
                        <Center>
                            <ActionIcon variant="default" size="lg">
                                <SiFacebook
                                    style={{ width: rem(24), height: rem(24) }}
                                    stroke={1}
                                />
                            </ActionIcon>
                            <ActionIcon variant="default" size="lg">
                                <SiInstagram
                                    style={{ width: rem(24), height: rem(24) }}
                                    stroke={1}
                                />
                            </ActionIcon>
                            <ActionIcon variant="default" size="lg">
                                <SiGmail
                                    style={{ width: rem(24), height: rem(24) }}
                                    stroke={1}
                                />
                            </ActionIcon>
                        </Center>
                    </Container>
                </div>
            </Container>
        </>
    )
}
