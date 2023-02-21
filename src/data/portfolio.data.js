import MelodifyImg from '../assets/imgs/melodify-image.png'
import PanImg from '../assets/imgs/pan-image.png'
import BnbImg1 from '../assets/imgs/bnb-image1.png'
import BnbImg2 from '../assets/imgs/bnb-image2.png'
import MyNextEventImg from '../assets/imgs/mynextevent-image.png'



export const portfolioData = [
    {
        id: 1,
        image: MelodifyImg,
        video: "https://res.cloudinary.com/drei2wlxj/video/upload/v1676976806/1657539016139_badkxn.mp4",
        title: "Melodify",
        githubUrl: "https://github.com/Aviv-rs/Melodify",
        demoUrl: "https://melodify.onrender.com/music",
        description: "An music application inspired by Spotify created using React, Redux, and SASS (Front), \
        Node.js (Back), and MongoDB in collaboration with two other developers in a 15 days sprint that includes\:\n\
        • Live updating using a socket API\n\
        • Creation, editing, and drag & drop of playlists\n\
        • PWA(Progressive Web App) support"
    },
    {
        id: 2,
        image: PanImg,
        video: "https://res.cloudinary.com/drei2wlxj/video/upload/ac_none,e_accelerate:45,q_43/v1676987797/pan-video_yoc5xn.mov",
        title: "PAN - Physicians Association for Nutrition",
        githubUrl: "https://github.com/Dalya1812/panProject",
        demoUrl: "https://pan-int.org",
        description: "A web application designed to track the dietary habits of patients and provide them with medical advice from a healthcare professional:\n\
        • Stack: React (Front-end) and Firebase\n\
        • Firebase (Authentication and RealTime DB)\n\
        • Team composed of Juniors and Seniors (UI/UX Designer, Developers, Project Manager, Mentor)"
    },
    {
        id: 3,
        image: BnbImg1,
        video: "https://res.cloudinary.com/drei2wlxj/video/upload/ac_none,e_accelerate:43,q_58/v1676987780/bnb-video_ka8e5y.mov",
        title: "BnB ERP",
        githubUrl: "https://github.com/DavidELBAZpro",
        demoUrl: "https://www.google.com/search?q=this+project+is+private&rlz=1C5CHFA_enIL914IL914&oq=this+project+is+private&aqs=chrome..69i57j0i22i30j0i390l2.5884j0j7&sourceid=chrome&ie=UTF-8",
        description: "An ERP intended for owners of multiple rental properties:\n\
        • Stack: React + ANT Design pro (Front-end) / PHP - Symfony (Back-end) / MySQL\n\
        • Management of connections with the Channel Manager and various OTAs (AirBnb, Expedia, Booking)\n\
        • Creation and display of calendars, dashboard, and accounting.\n\
        • Dynamic generation of invoices."
    },
    {
        id: 4,
        image: MyNextEventImg,
        video: "https://res.cloudinary.com/drei2wlxj/video/upload/ac_none,e_accelerate:81,q_42/v1676985372/mynextevent-video_nrtwqq.mov",
        title: "MyNextEvent",
        githubUrl: "https://github.com/DavidELBAZpro/MyNextEvent",
        demoUrl: "https://github.com/DavidELBAZpro/MyNextEvent",
        description: "A nice Chrome extension to visualize the next events in the NBA League or the upcoming concerts ! 🎙️🏀"
    },

]