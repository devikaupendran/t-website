import logo from '../assets/images/logo.png'
import headerCircle from '../assets/images/header-circle.png'
import background from '../assets/images/background.png'
// ------------------------ carousal images ------------------------ 
import carousal1 from '../assets/images/carousal1.jpg'
import carousal2 from '../assets/images/carousal2.jpg'
import carousal3 from '../assets/images/carousal3.jpg'
import carousal4 from '../assets/images/carousal4.jpg'
// ------------------------- About us images -------------------------
import aboutIcon1 from '../assets/images/about-icon1.png'
import aboutIcon2 from '../assets/images/about-icon2.png'
import aboutIcon3 from '../assets/images/about-icon3.png'
import aboutUsImg from '../assets/images/about-us-img.png'
// ---------------------- Services images ----------------
import mobileDevelopment from '../assets/images/service-mobileDevelopment.gif'
import webDevelopment from '../assets/images/service-webdevelopment.gif'
import webDesign from '../assets/images/service-webdesign.gif'
import cardBottomDesign from '../assets/images/service-card-bottom.png'

//---------------------- Testimonials image ----------------
import testimonialUserIcon from '../assets/images/testimonial-user-icon.png'

//---------------------- Testimonials image ----------------
import footerBgImage from '../assets/images/footer-bg.jpg'

import banner1 from '../assets/images/banner.jpg'
import banner2 from '../assets/images/banner2.jpg'

export const slides = [carousal4, carousal1, carousal2, carousal3];
export const about = [aboutIcon1, aboutIcon2, aboutIcon3];
export const detailsOfServicesCard = [
    {
        imageGif: mobileDevelopment,
        heading: 'Mobile Applications',
        subHeading: 'Build the perfect application to keep your business moving forward.'
    },
    {
        imageGif: webDesign,
        heading: 'Website Designing',
        subHeading: 'Your business deserves a unique identity. Consult with us to know the best design and development options.'
    },

    {
        imageGif: webDevelopment,
        heading: 'Web Applications',
        subHeading: 'Develop a Web Application that is Agile, Scalable and Robust.'
    },
]

export const testimonialArray = [
    {
        name: 'Pietro Saccomani',
        company: 'Founder,  Fifty Pixels Limited',
        comment: 'We love working with the team at Tricta. They’ve been an invaluable resource for us, allowing us to grow and serve more and more customers with the support of their team of developers and project managers. They’re reliable, always available and communicate well. I’d highly recommend working with them on your next project.',
    },
    {
        name: 'Sunny Clark',
        company: 'Founder,  Leading Fintech company',
        comment: 'Tricta is beyond professional in all their dealings and I am only glad to recommend them to anyone who wants to have a good job done on their project. Glad to have worked with them.',
    },
    {
        name: 'Matt',
        company: 'Founder, Matshepo',
        comment: 'I like working with Jomon and his team at Tricta, as they made me quite comfortable in explaining all the technical aspects of my project to me, and was quite attentive to all my requirements, suggestions and remarks. Hope to work with them again.',
    },
    {
        name: 'Beza Worku',
        company: 'Founder,  Tangerines LLC',
        comment: 'We’ve been working with Tricta for quite a long time, and we intend to continue our business relationship because of the ease to doing business with them, and ability to communicate with them at any point. Their dynamic team always comes with quick, yet robust solutions whenever a requirement arises, and hence we don’t think we need another partner for any of our IT development needs, anytime soon.',
    },
]
export const assets = {
    logo, headerCircle, background, aboutUsImg, cardBottomDesign, testimonialUserIcon,
    footerBgImage, banner1, banner2
}