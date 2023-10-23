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
    SiBootstrap,
    SiCplusplus,
    SiDjango,
    SiFastapi,
    SiFirebase,
    SiFlutter,
    SiJavascript,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPython,
    SiReact,
} from "react-icons/si"
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
                    <Tabs.Panel value={index.toString()} key={index}>
                        <h4>
                            <b>{experience.description.title}</b>
                        </h4>
                        <b>{experience.name}</b>
                        <Text c="dimmed">{experience.date}</Text>
                        <Container size="sm">
                            <List>
                                {experience.description.subdescription.map(
                                    (subDesc, subIndex) => (
                                        <ListItem key={subIndex}>
                                            {subDesc.text}
                                        </ListItem>
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
            <Container py="xl" id="About">
                <Title order={2} className={classes.title} my="sm">
                    ABOUT
                </Title>
                <Divider></Divider>
                <Group grow wrap="nowrap" py="lg">
                    <div>
                        <Text fz="lg">
                            I am <b>George Vincent Peña</b>, a passionated web
                            developer who enjoys problem-solving and building
                            programming applications. I'm excited to learn and
                            grow, confidently progressing on this journey.
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
                    className={classes.description}
                    ta="center"
                    mt="md">
                    Currently, I am actively engaged in leveraging my
                    proficiency in ReactJS and Python, while also possessing a
                    well-honed skill set in PHP and MySQL, cultivated through
                    hands-on experience and expertise.
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
                                </Grid.Col>
                                <Grid.Col span={7}>
                                    <Paper>
                                        <Carousel
                                            slideGap="xl"
                                            draggable={false}
                                            withIndicators>
                                            {project.images.map(
                                                (image, imageIndex) => (
                                                    <Carousel.Slide
                                                        className={classes.card}
                                                        key={imageIndex}>
                                                        <Image src={image} />
                                                    </Carousel.Slide>
                                                )
                                            )}
                                        </Carousel>
                                    </Paper>
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
                    mt="md">
                    Here are some of the experience i have gained in my learning
                    jouney
                </Text>
                {Experiences}
            </Container>
            <Container py="xl" id="Certificates">
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    CERTIFICATES
                </Title>
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
                            I'm always open to engaging in meaningful
                            conversations, whether it's about coding, work, or
                            any other topic. Don't hesitate to get in touch with
                            me via social media or shoot me an{" "}
                            <Text
                                component="span"
                                className={classes.highlight}
                                inherit
                                c="a">
                                Email
                            </Text>
                        </Text>
                    </Container>
                </div>
            </Container>
        </>
    )
}
