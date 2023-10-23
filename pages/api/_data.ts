import { FaCode } from "react-icons/fa"
import { IconUser, IconCookie } from "@tabler/icons-react"

import JairosoftImage from "../../public/experience/Jairosoft Logo.jpg"
import UMImage from "../../public/experience/university of mindanao.png"
import CertHTMLCSS from "../../public/certificates/CertHTMLCSS.jpg"
import CertJava from "../../public/certificates/CertJava.jpg"
import image1 from "../../public/projects/apluz/1.png"
import image2 from "../../public/projects/apluz/2.png"

const mockdata = [
    {
        title: "Frontend Development",
        description: "Proficient in ReactJS and Mantine as a CSS framework",
        icon: FaCode,
    },
    {
        title: "Backend Development",
        description:
            "People say it can run at the same speed as lightning striking. Its icy body is so cold it will not melt even if it is immersed in magma.",
        icon: IconUser,
    },
]
const apluzImageSources: any[] = []
const apluzImageCount = 24
const apluzImagePromises = []

for (let i = 1; i <= apluzImageCount; i++) {
    const imagePromise = import(`../../public/projects/apluz/${i}.png`)
    apluzImagePromises.push(imagePromise)
}
Promise.all(apluzImagePromises).then((images) => {
    images.forEach((image) => {
        apluzImageSources.push(image.default.src)
    })
    projectData.push({
        title: "Apluz Website",
        description:
            "This eCommerce website, enables administrators to manage inventory by stocking in and out items, while also offering a platform for customers to browse, purchase, and enjoy a seamless shopping experience. It provides a comprehensive solution for online retail with an intuitive interface and robust inventory management capabilities.",
        images: apluzImageSources,
    })
})

const resubotImageSources: any[] = []
const resubotImageCount = 4
const resubotImagePromises = []

for (let i = 1; i <= resubotImageCount; i++) {
    const imagePromise = import(`../../public/projects/resubot/${i}.png`)
    resubotImagePromises.push(imagePromise)
}

Promise.all(resubotImagePromises).then((images) => {
    images.forEach((image) => {
        resubotImageSources.push(image.default.src)
    })
    projectData.push({
        title: "resubotImages",
        description:
            "This is Resubot a Resume Analysis System is a powerful tool designed to evaluate resumes and provide detailed insights. It scans and assesses resumes, extracting valuable information to offer tailored results. Employers can quickly identify qualified candidates while job seekers receive feedback on their resume's strengths and weaknesses, streamlining the hiring process.",
        images: resubotImageSources,
    })
})
const purrfectpetImageSources: any[] = []
const purrfectpetImageCount = 13
const purrfectpetImagePromises = []

for (let i = 1; i <= purrfectpetImageCount; i++) {
    const imagePromise = import(`../../public/projects/purrfectpet/${i}.png`)
    purrfectpetImagePromises.push(imagePromise)
}

Promise.all(purrfectpetImagePromises).then((images) => {
    images.forEach((image) => {
        purrfectpetImageSources.push(image.default.src)
    })
    projectData.push({
        title: "purrfectpetImages",
        description:
            "The Pet Management System is a robust platform designed for pet and owner management. Tailored for veterinary clinics, it streamlines record-keeping, appointment scheduling, and medical history tracking for pets. This user-friendly system simplifies daily operations, ensuring top-notch care for furry companions.",
        images: purrfectpetImageSources,
    })
})

const projectData: { title: string; description: string; images: any[] }[] = []

const Experience = [
    {
        image: JairosoftImage.src,
        date: "July to August 2022",
        name: "Jairosoft, INC",
        description: {
            title: "Python/Django Developer Intern",
            subdescription: [
                {
                    text: "Acquired proficiency in Django, serving as the dedicated Backend Developer for the team.",
                },
                {
                    text: "Gained valuable experience in API manipulationlex challenges.",
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
                    text: "I learned a lot about computer science and gained a deep understanding of its complexities and intricacies.",
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

export { mockdata, projectData, Experience, certificateData }
