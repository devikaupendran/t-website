import mobileDevelopmentIcon from '../assets/images/services/service-mobileDevelopment.gif'
import webDevelopmentIcon from '../assets/images/services/service-webdevelopment.gif'
import webDesignIcon from '../assets/images/services/service-webdesign.gif'
import ecommerceIcon from '../assets/images/services/service-ecommerce.gif'
import serverSupportIcon from '../assets/images/services/service-serverSupport.gif'
import testingIcon from '../assets/images/services/service-testing.gif'

// ---------------------- Services card  bottom design ----------------
import cardBottomDesign from '../assets/images/services/service-card-bottom.png'

// ---------------- service page cover image ----------------
import serviceBanner from '../assets/images/services/serviceBanner.jpg'


import design from '../assets/images/services/design.jpg'
import ecommerce from '../assets/images/services/ecommerce.jpg'
import mobileDevelopement from '../assets/images/services/mobileDevelopment.jpg'
import webDevelopment from '../assets/images/services/webDevelopment.jpg'
import testing from '../assets/images/services/testing.jpg'
import server from '../assets/images/services/serverSupport.jpg'

export const servicesCardDetails = [
    {
        imageGif: mobileDevelopmentIcon,
        heading: 'Mobile Applications',
        subHeading: 'Build the perfect application to keep your business moving forward.',
        description: 'In today’s fast-paced digital landscape, mobile applications have become indispensable tools for businesses to stay competitive and engage with their customers on a deeper level. Tricta is at the forefront of mobile app development, offering advanced solutions that are tailored to meet the evolving needs of modern businesses.Tricta leverages the latest advancements in mobile technology to develop high-performance applications that deliver exceptional user experiences. Whether it’s harnessing the power of artificial intelligence, integrating blockchain technology for enhanced security, or leveraging augmented reality to create immersive experiences, we push the boundaries of innovation to ensure that your app stands out in the crowded app marketplace.',
        offer: 'At Tricta, we’re committed to pushing the boundaries of advanced technology mobile app development to empower businesses to thrive in the digital age. Whether you’re looking to create innovative customer experiences, streamline business processes, or disrupt industries, we have the expertise and capabilities to turn your vision into reality. Contact us today to learn more about how we can help you leverage advanced technology to achieve your business objectives and stay ahead of the competition.',
        image: mobileDevelopement
    },
    {
        imageGif: webDesignIcon,
        heading: 'Website Designing',
        subHeading: 'Your business deserves a unique identity. Consult with us to know the best design and development options.',
        description: 'Websites are what we rely on a daily basis to either gather information or to share, save or process data into the intended solution. Almost no business could consider themselves safe without a website and while it may seem quite basic, some deal of professional thought needs to go into the designing of the same.',
        offer: 'We provide website solutions ranging from a basic landing page to a fully-fledged, robust eCommerce websites, which could be custom created using any stable coding language like PHP or Python, along with any of their frameworks, or utilize any leading Content Management Systems like Wordpress, Magento, Shopify, WooCommerce, Joomla, etc. Our UI and graphic designers bring out the best look and feel your brand deserves, utilizing any elements that you provide or suggest, ensuring you get the most possible positive attention from your customers and viewers.',
        image: design
    },

    {
        imageGif: webDevelopmentIcon,
        heading: 'Web Applications',
        subHeading: 'Develop a Web Application that is Agile, Scalable and Robust.',
        description: 'Web applications need to be agile, scalable, and robust to ensure they are successful in the long run, which in turn guarantees the smooth functioning of one’s business. This is also why one needs to develop a custom application compared to procuring off the shelf solution to limit the amount of time required for training business process not relevant to the business.',
        offer: 'While developing custom applications we develop interfaces that interact with other Legacy systems thereby helping our clients from the burden of managing multiple databases. Cloud solutions that we offer are highly scalable to meet a potential ever-growing customer base while at the same time, we take necessary precautions to keep the application and it’s data, secure in a cloud space. We do custom coding in PHP under several of it’s frameworks, like Laravel, Symfony, CodeIgnitor, CakePHP to name a few. Python is another programming language that we use along with it’s own set of frameworks. Server-side coding to help build these web applications is an important area of our expertise, for which we use Javascript and Node.js. Database level creation and updation are inclusive of these projects in MySQL, Postgre SQL, Oracle etc. Our solutions are mainly used for Enterprise Resource Planning, Customer Relationship Management, Project Management & Learning Management Systems, etc.',
        image: webDevelopment
    },

    {
        imageGif: ecommerceIcon,
        heading: 'Ecommerce Solutions',
        subHeading: 'Harness the power of ecommerce through your website or mobile application.',
        description: 'Conducting business via the internet has been growing at a tremendous pace, with multiple payment solutions and options available out there. The real challenge always lies on which of these options to choose, to be linked to an Ecommerce module, which has to be compatible with each other, easy to use, and most of all safe and secure in each of the step. Creating a custom solution is also not something that one should take likely so as to avoid the risk of being labelled ’unsecure’.',
        offer: 'We leave no stones unturned to ensure we have a totally secure application, with any and all sensitive information encrypted and stored on a secure space, which ensures you as well as your customers to conduct safe business transaction online. Our Ecommerce solutions are backed with Stock management system which helps the business to monitor in real time on the availability of products. We have the right skill set to develop E-commerce solutions for businesses in any platform with custom layout designs, payment gateway integration, shopping cart development, web based reporting and many more based on client interest. Tricta Technologies makes it easy to create a beautiful, engaging shopping experience. And your store won’t just look good — we’ve built in all the latest features and best practices for better search rankings, faster page loads and higher conversion.',
        image: ecommerce
    },

    {
        imageGif: serverSupportIcon,
        heading: 'Server Support',
        subHeading: 'Ensure the security of your data with our server support with the least downtime along with 24/7 monitoring.',
        description: 'No matter the type of service or product you display online, it goes without a saying that you need a secure hosting space whether it is a local server, or a cloud based one. It is important to understand it’s technical specification and settings to ensure you get the most out of the hosted application. Monitoring it regularly for security threats and setting compliance might be the difference between a stable application website and an unreliable one.',
        offer: 'We have a dedicated pool of resources who can proactively monitor and alert any potential server issues thereby ensuring zero downtime of their servers, and our experienced technical staff is capable of suggesting the right server specification and install them based on business needs by ensuring secure backup and fast recovery option. We also provide installation support for media servers and software applications, along with AWS, Azure and Google Cloud support. We offer comprehensive database tuning support to our clients to guarantee optimum functioning of their application. Our team has proven track record of providing data migration services during the migration from legacy system to new platform.',
        image: server
    },

    {
        imageGif: testingIcon,
        heading: 'Testing Services',
        subHeading: 'Ensure that your service is tested in all the necessary parameters including security, performance and efficiency.',
        description: 'Identification and rectification of errors that occurred during any stage of the software development is important so as to maintain the integrity and reliability of the final product. It is especially important when the project cycle involves an agile approach and regular changes are required, as this requires regular cross verification, and to find if the end result is as it is intended.',
        offer: 'We have a highly professional Quality Assurance (QA) team with the prime focus of providing end to end inspection of the application through our cutting edge testing process. This involves Functional testing which is carried out to ensure that the software application is working precisely as per the requirement specification. Functional testing is generally a black box testing with no concern over source code and is tested by providing appropriate input and verifying the output, and also comparing the actual results with the expected results. We also do Security testing, Regression testing and Performance testing during different stages of the project cycle, to ensure all the parameters and met when the final output is delivered.',
        image: testing
    },
]

export const serviceAssets = {
    serviceBanner, cardBottomDesign
}