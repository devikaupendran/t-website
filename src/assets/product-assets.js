import eCommerce from '../assets/images/products/e-commerce.jpg'
import enviroTrack from '../assets/images/products/enviroTrack.jpg'
import convoAi from '../assets/images/products/convoAI.jpg'
import digitalSignage from '../assets/images/products/digitalSignage.jpg'
import dineAlert from '../assets/images/products/dinealert.jpg'
import fleetManagement from '../assets/images/products/fleetManagement.jpg'
import clinicManagement from '../assets/images/products/clinicManagement.jpg'
import helpybo from '../assets/images/products/helpybo.jpg'
import weatherStation from '../assets/images/products/weatherStation.jpg'

// --------------- product background image ---------------- 
import aiChipHand from '../assets/images/products/aiChipHand.png'
import globe from '../assets/images/products/globe.png'
import digitalScreen from '../assets/images/products/digitalScreen.png'
import tracking from '../assets/images/products/tracking.png'

//---------------------- product page image ----------------
import productBanner from '../assets/images/products/banner.png'
import monitor from '../assets/images/products/monitor.svg'

export const productCarousalSlides = [
    eCommerce,
    enviroTrack,
    convoAi,
    digitalSignage,
    dineAlert,
    fleetManagement,
    clinicManagement,
    helpybo,
    weatherStation
]

export const productAssets = {
    productBanner, monitor,
}

export const product1 = {
    heading: {
        line1: 'EnviroTrack',
        line2: ''
    },
    description: 'EnviroTrack is an advanced all-in-one micro-environment monitoring solution designed to ensure the safety and reliability of critical environments. By continuously tracking parameters like temperature, humidity, air quality, and light levels, EnviroTrack helps prevent any potential risks to sensitive equipment and materials. Its real-time data analytics and alerts enable proactive management, ensuring that any environmental fluctuations are immediately addressed before they cause any damage. Whether for labs, server rooms, or storage facilities, EnviroTrack provides peace of mind with its precision and comprehensive monitoring capabilities.',
    image: enviroTrack,
    backgroundImage: globe,
}

export const product2 = {

    heading: {
        line1: 'Fleet',
        line2: 'Management System'
    },
    description: 'Optimize your fleet like never before with our advanced Fleet Management System. Track vehicles in real-time, streamline operations, boost efficiency, cut down on costs, and enhance safety – all from a single, intuitive platform. Gain full visibility and control over your fleet’s performance, monitor driver behavior, maintain timely vehicle servicing, and ensure compliance, all while making data-driven decisions. Drive your business forward with seamless integration, smarter insights, and complete control, putting you in the driver’s seat of your fleet’s success.',
    image: fleetManagement,
    backgroundImage: tracking,
}

export const product3 = {
    heading: {
        line1: 'AI-ENABLED',
        line2: 'ECOMMERCE'
    },
    description: 'AI-enabled eCommerce is revolutionizing the online shopping experience by offering personalized, efficient, and data-driven solutions. With AI, businesses can provide tailored recommendations, dynamic pricing, and improved customer service through chatbots and virtual assistants. It enhances inventory management, predicts trends, and optimizes the supply chain for better decision-making. By leveraging AI, eCommerce platforms can improve user engagement, increase conversions, and drive customer loyalty, making shopping smarter and more intuitive.',
    image: eCommerce,
    backgroundImage: aiChipHand,
}

export const product4 = {
    heading: {
        line1: 'AI-ENABLED',
        line2: 'DIGITAL SIGNAGE'
    },
    description: 'Signage is an affordable, high-impact solution that enhances brand visibility and communication. It captures attention, directs traffic, and creates a lasting impression in any environment. Whether for promotions, directions, or events, signage elevates the customer experience. It’s the perfect tool to boost engagement, enhance branding, and drive business growth efficiently.',
    image: digitalSignage,
    backgroundImage: digitalScreen,
}

