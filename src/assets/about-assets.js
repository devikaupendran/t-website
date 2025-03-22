// ------------------------- About us section icons -------------------------
import aboutIcon1 from '../assets/images/about/about-icon1.png'
import aboutIcon2 from '../assets/images/about/about-icon2.png'
import aboutIcon3 from '../assets/images/about/about-icon3.png'
import aboutUsImg from '../assets/images/about/about-us-img.png'


// ------------ meet our team images ------------
import jomonJacob from '../assets/images/about/jomon.jpeg'
import arunGToms from '../assets/images/about/Arun-G-Toms.png'
import AntonyVincent from '../assets/images/about/Antony-Vincent.png'

// --------- vision, mission, history image -----------
import history from '../assets/images/about/history.svg'
import vision from '../assets/images/about/vision.svg'
import mission from '../assets/images/about/mission.svg'

export const about = [aboutIcon1, aboutIcon2, aboutIcon3];

export const aboutAsset = {
    aboutUsImg
}
// --------- vision, mission, history -----------
export const aboutUs = [
    {
        image:vision,
        heading:'Vision',
        description:'Our vision is to be a global leader in software innovation, known for revolutionizing industries, transforming lives, and shaping the future of technology. We aspire to create groundbreaking solutions that redefine the possibilities of what software can achieve, driving positive change and unlocking new opportunities for businesses and individuals around the world. With a relentless focus on excellence, creativity, and customer-centricity, we aim to inspire the next generation of innovators and leave a lasting legacy of technological advancement and positive impact on society.'
    },
    {
        image:mission,
        heading:'Mission',
        description:'Our mission is to empower businesses and individuals by delivering cutting-edge software solutions that streamline processes, drive efficiency, and unlock new possibilities. We are committed to leveraging the latest technologies, embracing innovation, and exceeding customer expectations to drive sustainable growth and create lasting value for our stakeholders. Through our passion for excellence and dedication to customer success, we aim to be a trusted partner in driving digital transformation and shaping the future of technology.'
    },
    {
        image:history,
        heading:'History',
        description:'Launched in 2017 with a small office in India, we have grown to several centers across Asia, Australia, and North America, with our clientele from all of these places and more.'
    },
]


export const meetOurTeamArray = [
    {
        name: 'Jomon Jacob',
        image: jomonJacob,
        position: 'CEO',
        about: 'The captain of our ship, Jomon is a seasoned professional and an expert in agile methodologies, always available for his colleagues and clients alike Jomon Jacob is an IT professional with 20 years experience of managing various Indian and International software projects. He is also an eminent personality with many other business associations including film production. His film ’The great Indian Kitchen’ has received best film award by Kerala State in 2020.'
    },

    {
        name: 'Arun G Toms',
        image: arunGToms,
        position: 'CTO',
        about: 'Arun manages the operation side of the team, and is influential in making key decisions with the efficient running of the company on a day to day basis. Arun is an AWS Certified Solutions Architect – Professional with a proven track record of 12 years in architecting, implementing, and managing robust cloud solutions. Adept at optimizing AWS services to meet complex business requirements, enhance performance, and ensure cost-effectiveness. Extensive experience in implementing security best practices and ensuring compliance with industry standards.'
    },

    {
        name: 'Antony Vincent',
        image: AntonyVincent,
        position: 'COO',
        about: 'A man behind the scenes, Antony is focused more on the management and financial aspect of the company; management being his area of expertise. 12 years of experience leading financial strategies for organizations across diverse industries. Proven expertise in financial planning, risk management, and driving operational efficiencies to optimize overall business performance. A strategic thinker with a track record of delivering sustainable financial growth and enhancing shareholder value.'
    }
]