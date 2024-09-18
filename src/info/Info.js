import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Shaker",
    lastName: "Farooq",
    initials: "sh", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: '💻',
            text: 'love creating interactive web content'
        },
        {
            link: true,
            emoji: "📧",
            text: "<a href='mailto:shaker.webdev@gmail.com'>get in touch</a>"
        },
        {
            link: true,
            emoji: "📝",
            text: "download my <a href='http://shakir-xcode.github.io/Static-Images/resume.pdf'><span style='border-bottom:1px solid rgb(166,104,255); color:rgb(166,104,255);'>resume</span></a>"
        }
    ],
    socials: [
        {
            link: "https://github.com/shakir-xcode",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: `I am a dedicated web developer with a strong foundation in Information Technology. My academic background includes Bachelor's and Master's in Information Technology. I specialize in full-stack development, with a focus on the MERN stack. Through practical experience and academic pursuits, I have developed a solid understanding of modern web technologies. I am eager to apply my skills to challenging projects and contribute to innovative solutions.`,
    skills:
    {
        proficientWith: ['html5', 'css3', 'javascript', 'react.js', 'redux', 'tailwindcss', 'next.js', 'node.js', 'express.js', 'mongodb', 'SQL', 'git'],
        exposedTo: ['java', 'python', 'c++', 'php']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            id: 1,
            title: "Global Talk",
            description: "An instant messaging application that lets people from across the world communicate in their native language. The app lets people who don't share a common language communicate fluently in their native languages.",
            features: [
                "The app uses Google Translation API for real-time message translation",
                "The app supports over 130 languages",
                "Socket.io for real-time communication",
                "Screen sharing, Video and Voice calling implemented using webRTC",
                "JWT Authentication",
                "ExpressJS APIs and mongoDB as database",
                "Includes a Chabot using openAI API integration"
            ],
            technologies: [
                "HTML",
                "CSS",
                "Javascript",
                "React.js",
                "Tailwindcss",
                "Node.js",
                "Express.js",
                "MongoDb"
            ],
            live: "https://global-talk.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/shakir-xcode/GlobalTalk-client", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            id: 2,
            title: "MoviesHub",
            description: "MoviesHub is a platform that allows us to browse and discover movies from various genres. it provides detailed information about each movie including plot summaries, release date, rating etc.",
            features: [
                " Search functionality",
                "Favorite movies using local storage",
                "Detailed movie information",
                "Easy to use and intuitive interface",
                "Utilizes OMDb api",
                "Powered by redux"
            ],
            technologies: [
                "  HTML",
                "CSS",
                "Javascript",
                "React.js",
                "Redux",
                "Tailwindcss",
                "Axios",
                "React-router",
                "Node.js",
                "Express.js"
            ],
            live: "https://movieshub08.netlify.app/",
            source: "https://github.com/shakir-xcode/movies-app",
            image: mock2
        },
        {
            id: 3,
            title: "Tour and Travel Website",
            description: `<i>This project was developed during my internship at <b>Mir Web Solutions</b></i><br><br><b>Project Overview: </b>Developed a comprehensive multi-page website for a tour and travel agency, showcasing a range of tour packages, hotels, and cab services. Key features included an optimized image gallery and a responsive design that provided seamless navigation across devices.
<br><br>
<b>My Role:</b> Full front-end development using WordPress and Elementor, integrating dynamic content sections for packages, hotels, and services, and optimizing the contact form for user inquiries.`,
            features: [
                "Responsive and visually appealing interface",
                "Scroll animations",
                "Integrated Google Maps",
                "Booking Inquiry Form",
                "Designed with mobile-first approach",
            ],
            technologies: [
                "HTML",
                "CSS",
                "Wordpress",
                "Elementor",
            ],
            live: "https://cipellatours.in",
            source: "#",
            image: mock3
        },
        {
            id: 4,
            title: "Landing Page",
            description:
                `<i>This project was developed during my internship at <b>Mir Web Solutions</b></i><br><br><b>Project Overview:</b> Designed and developed a visually appealing single landing page for a tour and travel agency. The page highlighted various tour packages, focusing on user-friendly navigation and an intuitive layout to enhance user engagement.<br><br>
<b>My Role:</b> Front-end development using WordPress and Elementor, including the creation of custom sections for showcasing packages and integrating a contact form for user inquiries.`,
            features: [
                "Responsive and visually appealing interface",
                "Scroll animations",
                "Designed with mobile-first approach",
            ],
            technologies: [
                "HTML",
                "CSS",
                "Wordpress",
                "Elementor",
            ],
            live: "https://kashmir.threeregion.com/",
            source: "#",
            image: mock4
        },
        {
            id: 5,
            title: "Tesla Clone",
            description: "I created Tesla clone app to recreate the visually attractive and user-friendly homepage of Tesla's official website.",
            features: [
                "Responsive design",
                "Navigation menu",
                "  Simple and intuitive interface"
            ],
            technologies: [
                "HTML",
                "CSS",
                "Javascript",
                "React.js",
                "Tailwindcss",
            ],
            live: "https://tesla-clone08.netlify.app/",
            source: "https://github.com/shakir-xcode/tesla-clone",
            image: mock5
        },
        {
            id: 6,
            title: "Code Editor",
            description: "A minimalist code editor that can be used to run, test and visualize html, css and javascript code.",
            features: [
                "Powered by React.js",
                "Fast and light weight",
                "Uses localStorage to save code",
                "Supports HTML, CSS and Javascript"
            ],
            technologies: [
                "HTML",
                "CSS",
                "Javascript",
                "React.js",
                "Tailwindcss",
                "Codemirror"
            ],
            live: "https://code-editor08.netlify.app/",
            source: "https://github.com/shakir-xcode/code-editor",
            image: mock6
        },
    ]
}