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

import JairosoftImage from "../../public/experience/Jairosoft Logo.png"
import UMImage from "../../public/experience/university of mindanao.png"
import CertHTMLCSS from "../../public/certificates/CertHTMLCSS.jpg"
import CertJava from "../../public/certificates/CertJava.jpg"
import { JSX } from "react"
import Resubot from "../../public/projects/resubot/0.png"
import Escobar from "../../public/projects/escobar/0.png"
import PurrfectPet from "../../public/projects/purrfectpet/0.png"
import TaraUsap from "../../public/projects/chatapp/0.png"
import Apluz from "../../public/projects/apluz/0.png"

const techIcons: TechTypeList = {
    "Frontend Centric": [
        {
            icon: <SiNextdotjs />,
            label: "NextJs",
        },
        {
            icon: <SiReact style={{ fill: "#61dafb" }} />,
            label: "ReactJs",
        },
        {
            icon: <SiJquery style={{ fill: "blue" }} />,
            label: "jQuery",
        },
    ],
    "Backend Centric": [
        {
            icon: <SiDjango style={{ fill: "#049284" }} />,
            label: "Django",
        },
        {
            icon: <SiFastapi style={{ fill: "#049284" }} />,
            label: "FastAPI",
        },
        {
            icon: <SiPhp style={{ fill: "#5866A5" }} />,
            label: "PHP",
        },
    ],
    Database: [
        {
            icon: <SiMysql />,
            label: "MySQL",
        },
        {
            icon: <SiFirebase style={{ fill: "orange" }} />,
            label: "Firebase",
        },
    ],
    "User Interface": [
        {
            icon: <SiHtml5 style={{ fill: "orange" }} />,
            label: "HTML",
        },
        {
            icon: <SiCss3 style={{ fill: "#099CFF" }} />,
            label: "CSS",
        },
        {
            icon: <SiBootstrap style={{ fill: "purple" }} />,
            label: "Bootstrap",
        },
        {
            icon: <SiFramer />,
            label: "Framer Motion",
        },
        {
            icon: <TbBrandMantine />,
            label: "Mantine",
        },
    ],
    "Mobile Development": [
        {
            icon: <SiFlutter style={{ fill: "#02569B" }} />,
            label: "Flutter",
        },
    ],
    "Programming Languages": [
        {
            icon: <SiJavascript style={{ fill: "#f7df1e" }} />,
            label: "JavaScript",
        },
        {
            icon: <SiTypescript style={{ fill: "#3178c6" }} />,
            label: "TypeScript",
        },
        {
            icon: <SiCplusplus style={{ fill: "#00599c" }} />,
            label: "C++",
        },
        {
            icon: <SiC style={{ fill: "#555555" }} />,
            label: "C",
        },
        {
            icon: <SiPython style={{ fill: "#306998" }} />,
            label: "Python",
        },
        {
            icon: <FaJava style={{ fill: "#007396" }} />,
            label: "Java",
        },
    ],
    Tools: [
        {
            icon: <SiXampp style={{ fill: "#fb7a24" }} />,
            label: "Xampp",
        },
        {
            icon: <SiGit style={{ fill: "#f1502f" }} />,
            label: "Git",
        },
        {
            icon: <SiPostman style={{ fill: "#ff6c37" }} />,
            label: "Postman",
        },
        {
            icon: <SiOpenai style={{ fill: "#049284" }} />,
            label: "Openai",
        },
        {
            icon: <SiVisualstudio style={{ fill: "#0078d7" }} />,
            label: "VScode",
        },
    ],
}
type TechTypeList = Record<string, TechType[]>
type TechType = {
    icon: JSX.Element
    label: string
}
type Project = {
    title: string
    description: string
    images: any
    link: string
    tech: TechType[]
}

const projectData: Project[] = []

const findTechInCategories = (techList: string[]): TechType[] => {
    const techTypeList: TechType[] = techList
        .flatMap((tech) => {
            const techTypes = Object.values(techIcons).flatMap(
                (category) =>
                    (category.find((item) => item.label === tech) ||
                        null) as TechType | null
            )
            return techTypes
        })
        .filter((techType) => techType !== null) as TechType[]

    return techTypeList
}
projectData.push({
    title: "Escobar Inventory Management System ",
    description:
        "The Escobar Inventory Management System represents a sophisticated web programming project focused on facilitating Create, Read, Update, and Delete (CRUD) operations while effectively managing stock. This system offers a refined approach to inventory control, significantly enhancing operational efficiency and data accuracy for businesses.",
    images: Escobar,
    tech: findTechInCategories([
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "JavaScript",
    ]),
    link: "https://github.com/chatgvp/escobarims",
})
projectData.push({
    title: "Resubot",
    description:
        "This is Resubot a Resume Analysis System is a powerful tool designed to evaluate resumes and provide detailed insights. It scans and assesses resumes, extracting valuable information to offer tailored results. Employers can quickly identify qualified candidates while job seekers receive feedback on their resume's strengths and weaknesses, streamlining the hiring process.",
    images: Resubot,
    tech: findTechInCategories([
        "NextJs",
        "ReactJs",
        "TypeScript",
        "FastAPI",
        "Openai",
        "Firebase",
    ]),
    link: "https://github.com/chatgvp/cce106resubot",
})

projectData.push({
    title: "Apluz Electronics ",
    description:
        "Apluz Electronics is my Software Engineering Project, an eCommerce platform designed to cater to inventory management needs. It offers administrators tools for seamless stock management while providing customers with an intuitive and comprehensive shopping experience. ",
    images: Apluz,
    tech: findTechInCategories([
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "JavaScript",
    ]),
    link: "https://github.com/chatgvp/apluz.com",
})

projectData.push({
    title: "PurrfectPet Management System",
    description:
        "The Pet Management System is a robust platform designed for pet and owner management. Tailored for veterinary clinics, it streamlines record-keeping, appointment scheduling, and medical history tracking for pets. ",
    images: PurrfectPet,
    tech: findTechInCategories([
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "JavaScript",
    ]),
    link: "https://github.com/chatgvp/purrfectpet",
})

projectData.push({
    title: "TaraUsap",
    description:
        "TaraUsap is a chat application using Flutter and Firebase. Users log in, join rooms, and chat with real-time, Firebase-powered messaging.",
    images: TaraUsap,
    tech: findTechInCategories(["Flutter", "Firebase"]),
    link: "https://github.com/chatgvp/chatApplication",
})

const Experience = [
    {
        image: JairosoftImage.src,
        date: "July to August 2023",
        name: "Jairosoft, INC",
        description: {
            title: "Python/Django Developer Intern",
            subdescription: [
                {
                    text: "I've gained a lot of knowledge about APIs, especially OpenAI integration, which we've used in our project.",
                },
                {
                    text: "I have gained valuable knowledge about backend integration using Django/Python as our backend.",
                },
            ],
        },
    },

    {
        image: UMImage.src,
        date: "August 2020 to Present",
        name: "University of Mindanao",
        description: {
            title: "Computer Science",
            subdescription: [
                {
                    text: "I learned a lot about Computer Science and math and gained a deep understanding of its complexities, data structures, Software Engineering, and logic-based problem-solving.",
                },
                {
                    text: "Acquired valuable and solid programming skills such as Web Development, Mobile Development, and other areas",
                },
            ],
        },
    },
]

const certificateData = [
    {
        image: CertHTMLCSS.src,
    },
    {
        image: CertJava.src,
    },
]

// projectData.push({
//     title: "Personal Web Portfolio",
//     description:
//         "This is Resubot a Resume Analysis System is a powerful tool designed to evaluate resumes and provide detailed insights. It scans and assesses resumes, extracting valuable information to offer tailored results. Employers can quickly identify qualified candidates while job seekers receive feedback on their resume's strengths and weaknesses, streamlining the hiring process.",
//     images: PurrfectPet,
//     tech: findTechInCategories(["NextJs", "ReactJs", "TypeScript", "Mantine"]),
//     link: "https://github.com/chatgvp/chatApplication",
// })
// --------------------------------------------------------------------------Escobar Electronics --------------------------------------------------------------------

// const escobarImageSources: any[] = []
// const escobarImageCount = 24
// const escobarImagePromises = []

// for (let i = 1; i <= escobarImageCount; i++) {
//     const imagePromise = import(`../../public/projects/apluz/${i}.png`)
//     escobarImagePromises.push(imagePromise)
// }
// Promise.all(escobarImagePromises).then((images) => {
//     images.forEach((image) => {
//         escobarImageSources.push(image.default.src)
//     })
//     projectData.push({
//         title: "Escobar Inventory Management",
//         description:
//             "Escobar's web-based pharmacy inventory management system empowers administrators to efficiently control stock levels and offers customers an intuitive, seamless shopping experience for comprehensive online retail solutions",
//         images: escobarImageSources,
//         tech: ["PHP", "Mysql", "Bootstrap", "HTML/CSS", "Javascript", "JQuery"],
//     })
// })
// --------------------------------------------------------------------------Apluz Electronics --------------------------------------------------------------------

// const apluzImageSources: any[] = []
// const apluzImageCount = 24
// const apluzImagePromises = []

// for (let i = 1; i <= apluzImageCount; i++) {
//     const imagePromise = import(`../../public/projects/apluz/${i}.png`)
//     apluzImagePromises.push(imagePromise)
// }
// Promise.all(apluzImagePromises).then((images) => {
//     images.forEach((image) => {
//         apluzImageSources.push(image.default.src)
//     })
//     projectData.push({
//         title: "Apluz Electronics",
//         description:
//             "This eCommerce website, enables administrators to manage inventory by stocking in and out items, while also offering a platform for customers to browse, purchase, and enjoy a seamless shopping experience. It provides a comprehensive solution for online retail with an intuitive interface and robust inventory management capabilities.",
//         images: apluzImageSources,
//         tech: ["PHP", "Mysql", "Bootstrap", "HTML/CSS", "Javascript", "JQuery"],
//     })
// })
// --------------------------------------------------------------------------Resubot --------------------------------------------------------------------
// const resubotImageSources: any[] = []
// const resubotImageCount = 4
// const resubotImagePromises = []

// for (let i = 1; i <= resubotImageCount; i++) {
//     const imagePromise = import(`../../public/projects/resubot/${i}.png`)
//     resubotImagePromises.push(imagePromise)
// }

// Promise.all(resubotImagePromises).then((images) => {
//     images.forEach((image) => {
//         resubotImageSources.push(image.default.src)
//     })
//     projectData.push({
//         title: "Resubot ",
//         description:
//             "This is Resubot a Resume Analysis System is a powerful tool designed to evaluate resumes and provide detailed insights. It scans and assesses resumes, extracting valuable information to offer tailored results. Employers can quickly identify qualified candidates while job seekers receive feedback on their resume's strengths and weaknesses, streamlining the hiring process.",
//         images: resubotImageSources,
//         tech: ["NextJS", "React", "FastAPI", "Openai", "Firebase"],
//     })
// })
// --------------------------------------------------------------------------purrfect pet --------------------------------------------------------------------
// const purrfectpetImageSources: any[] = []
// const purrfectpetImageCount = 13
// const purrfectpetImagePromises = []

// for (let i = 1; i <= purrfectpetImageCount; i++) {
//     const imagePromise = import(`../../public/projects/purrfectpet/${i}.png`)
//     purrfectpetImagePromises.push(imagePromise)
// }

// Promise.all(purrfectpetImagePromises).then((images) => {
//     images.forEach((image) => {
//         purrfectpetImageSources.push(image.default.src)
//     })
//     projectData.push({
//         title: "purrfectpetImages",
//         description:
//             "The Pet Management System is a robust platform designed for pet and owner management. Tailored for veterinary clinics, it streamlines record-keeping, appointment scheduling, and medical history tracking for pets. This user-friendly system simplifies daily operations, ensuring top-notch care for furry companions.",
//         images: purrfectpetImageSources,
//         tech: ["PHP", "Mysql", "Bootstrap", "HTML/CSS", "Javascript", "JQuery"],
//     })
// })
// --------------------------------------------------------------------------ChatApp --------------------------------------------------------------------

// const chatAppSources: any[] = []
// const chatAppCount = 7
// const chatAppPromises = []

// for (let i = 1; i <= chatAppCount; i++) {
//     const imagePromise = import(`../../public/projects/chatapp/${i}.png`)
//     chatAppPromises.push(imagePromise)
// }
// Promise.all(chatAppPromises).then((images) => {
//     images.forEach((image) => {
//         chatAppSources.push(image.default.src)
//     })
//     projectData.push({
//         title: "Apluz Electronics",
//         description:
//             "This eCommerce website, enables administrators to manage inventory by stocking in and out items, while also offering a platform for customers to browse, purchase, and enjoy a seamless shopping experience. It provides a comprehensive solution for online retail with an intuitive interface and robust inventory management capabilities.",
//         images: chatAppSources,
//         tech: ["PHP", "Mysql", "Bootstrap", "HTML/CSS", "Javascript", "JQuery"],
//     })
// })

export { projectData, Experience, certificateData, techIcons }
