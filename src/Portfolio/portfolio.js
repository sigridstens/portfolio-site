import React from 'react';
import './portfolio.css';
import ProjectPreview from "../ProjectPreview/project-preview";

export const projects = [
    {
        name: "Museum of Lost Experiences",
        type:"Graphic Design, Web Design, Web Development",
        role:"Branding and Web Development -- In Progress",
        previewImgPath: "/images/project-images/mole-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/mole-preview-mobile.jpg",
        projectImages:[
            "/images/project-images/mole-project-branding.png",
            "/images/project-images/mole-project-webdesign.png",
            "/images/project-images/mole-project-survey.png"
        ],
        url: "http://processmuseumoflostexperiences.wordpress.com/",
        linkpath: "/project-page/museum-of-lost-experiences",
        descriptionParaOne: "The Museum of Lost Experiences is a collection of crowd-sourced creative submissions on the subject of loss. All are welcome submit their own lost experience, and theMoLE encourages participants to use creativity as a way to process their feelings about difficult subjects, while using the collection website to connect intimately with the experiences of others.",
        descriptionParaTwo: "This project was the culmination of my M.A. program and reflects the skills I learned through my coursework including: branding and identity design, graphic design, web design, front-end web development, and motion graphics. From idea to actualization, theMoLE’s visual aesthetic and functionality reflect user expectations learned from surveying and interviewing.",
        descriptionParaThree: "The collection revisions what a museum can be, a shared space for artifacts of the human experience. It uses a collage aesthetic in the logo and identity to relate to the idea of disparate experiences coming to live together in one space under a common theme. The friendly color-scheme helps keep the space from being weighed down by the heaviness of some of the topics it holds, to bring focus to the value of processing difficult experiences rather than stewing in them."
    },
    {
        name: "Summer Nature Art Camp for Kids (SNACK)",
        type:"Graphic Design",
        role:"Branding and Illustration",
        linkpath:"/project-page/snack",
        previewImgPath: "/images/project-images/snack-preview.png",
        previewImgPathMobile: "/images/mobile-preview/snack-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/snack-project-branding.jpg",
            "/images/project-images/snack-project-map.jpg",
            "/images/project-images/snack-project-week5.jpg",
        ],
        projectImgFour: "/images/project-images/snack-project-week2.jpg",
        descriptionParaOne: "When SNACK’s 2020 summer season was interrupted by the covid-19 pandemic they shifted their programming to distance learning, giving local kids backpacks full of laminated activity sheets focused on learning about their local watershed and being creative in nature.",
        descriptionParaTwo: "Inspired by area flora and homegrown creativity the logo design mimics a potato stamp using hand cut letters, leaves, and texture from an actual potato. Credit for the potato stamp inspiration goes to SNACK organizers. The mark is highly adaptable because of its variety in elements and gives voice to SNACKS interest in fostering creativity,  scientific thinking, and a love of nature.",
        descriptionParaThree: "I also illustrated 10 weeks of activity sheets for SNACK using an iPad and stylus to draw graphics and scenes about the local watershed. The illustrations use a youth-focused color palette and style.",
    },
    {
        name:"Spritz & Spuntini, aperitivo bar",
        type:"Graphic Design",
        role:"Branding & Identity Design",
        previewImgPath: "/images/project-images/spritzspuntini-preview.png",
        previewImgPathMobile: "/images/project-images/spritzspuntini-project-mockup.jpg",
        projectImages: [
            "/images/project-images/spritzspuntini-project-moodboard.jpg",
            "/images/project-images/spritzspuntini-project-branding.png",
            "/images/project-images/spritzspuntini-project-mockup.png"
        ],
        linkpath: "/project-page/spritz-spuntini",
        descriptionParaOne: "Spritz & Spuntini is an imaginary cocktail lounge created for the love of Campari and branding. A take on Italian aperitivo—a tradition of pre-dinner drinks and appetizers to whet your appetite—Spritz & Spuntini engages young happy-hour-goers by serving up fresh twists on classic Italian cocktails and apps. In life you may have to take the bitter with the sweet, but at Spritz & Spuntini, the only bitter you’ll experience is in your Campari spritz.",
        descriptionParaTwo: "Using bright, bubbly colors and a bold type treatment the bar’s identity system evokes Italian Futurism, vintage vibes, and youthful exuberance.",
        descriptionParaThree: "",
    },
    {
        name:"Solon Springs Educational Foundation",
        type:"Graphic Design",
        role:"Logo Design",
        previewImgPath: "/images/project-images/ssef-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/ssef-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/ssef-project-branding.png",
            "/images/project-images/ssef-project-mockup.jpg",
        ],
        linkpath: "/project-page/ssef",
        descriptionParaOne: "This rebrand for the Solon Springs Educational Foundation to help bring its visual aesthetic in line with its work and mission—to provide the students, staff, and the Solon Springs School District with financial support to enrich educational opportunities and programs.",
        descriptionParaTwo: "The new logo design is striking, simple, and modern, making it easy for current and potential donors to recognize.",
        descriptionParaThree: "",
    },
    {
        name:"Mountain Bike Travel",
        type:"Graphic Design",
        role:"Branding & Identity Design",
        previewImgPath: "/images/project-images/mtnbiketravel-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/mtnbiketravel-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/mtnbiketravel-project-branding.png",
            "/images/project-images/mtnbiketravel-project-webdesign.png",
            "/images/project-images/mtnbiketravel-project-letterhead.png",
        ],
        linkpath: "/project-page/mtn-bike-travel",
        descriptionParaOne: "The identity for Mountain Bike Travel is modern, sporty, and streamlined—poised to attract expert mountain bikers who are interested in an organized travel adventure that caters to their skill level and thirst for the track.",
        descriptionParaTwo: "With a muted color palette inspired by the beauty of the Swiss Alps, a bold and edgy sans-serif typeface, and a simple yet distinctive logomark, the brand is austere and adventurous, eager to be paired with gorgeous photos of snowy peaks, lush trails, and intriguing local towns to entice expert riders to sign up for their next adventure.",
        descriptionParaThree: "",    },
    {
        name: "Our Saviour's Lutheran Church",
        type: "Graphic Design",
        role: "Branding & Identity Design",
        previewImgPath: "/images/project-images/oslc-preview.png",
        previewImgPathMobile: "/images/mobile-preview/oslc-preview-mobile.jpg",
        linkpath: "/project-page/oslc",
        projectImages: [
            "/images/project-images/oslc-project-branding.png",
            "/images/project-images/oslc-project-letterhead.png",
            "/images/project-images/oslc-project-mockup.png",
        ],
        descriptionParaOne: "Our Savior’s Lutheran Church is a faith community growing their membership by sharing their values—openness, acceptance, and a belief that our differences are gifts best used to help one another.",
        descriptionParaTwo: "The church’s primary goal for this project was to create a modern identity that helped invite in new members. The logo design depicts the iconic church tower with its door open to all and light spilling out. A subtle cross is present in the logo, to communicate the Christian values of the community, without overwhelming their identity as a welcoming community. Liturgical colors add meaning to the brand, blue for hope, white for light, and gold for joy.",
        descriptionParaThree: "",
    },
    {
        name:"Hoppy Trails: bikable beer adventures",
        type:"Graphic Design",
        role:"Branding and Mobile App Design",
        previewImgPath: "/images/project-images/hoppytrails-preview.png",
        previewImgPathMobile: "/images/mobile-preview/hoppytrails-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/hoppytrails-project-branding.png",
            "/images/project-images/hoppytrails-project-screen1.png",
            "/images/project-images/hoppytrails-project-screen2.png",
            "/images/project-images/hoppytrails-project-screen3.png",
            "/images/project-images/hoppytrails-project-screen4.png",
            "/images/project-images/hoppytrails-project-mockup.png",
            "/images/project-images/hoppytrails-project-bikehelmet.png",
        ],
        linkpath: "/project-page/hoppy-trails",
        descriptionParaOne: "Love bubbly beverages and the wind blowing through your hair as you cruise your way through summer?  Hoppy Trails is a proposed mobile application to simplify planning beer crawls by bike, so that you can spend less time organizing and more time drinking with your friends!",
        descriptionParaTwo: "The branding and mobile app design of this proposed application was designed during a mid-program course during my M.A. program. Using retro colors and typography, Hoppy Trails taps into 1970s nostalgia to help invoke the freedom and fun that bikable beer adventures embody.",
        descriptionParaThree: "",
    },
    {
        name:"Comfort Food Valentine Cards",
        type:"Illustration",
        role:"Illustration",
        previewImgPath: "/images/project-images/valentines-preview.png",
        previewImgPathMobile: "/images/mobile-preview/valentines-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/valentines-project-takeyouout.png",
            "/images/project-images/valentines-project-allriledup.png",
            "/images/project-images/valentines-project-makememelt.png",
            "/images/project-images/valentines-project-keepmewarm.png",
            "/images/project-images/valentines-project-mockup.jpg"
        ],
        linkpath: "/project-page/valentines",
        descriptionParaOne: "Ah, Valentine's Day — a celebration of extroverted love and commercialism, when despite your cynical nature you find yourself wandering through aisle after aisle of cards and chocolate trying to find your feelings reflected in a canned Hallmark card.",
        descriptionParaTwo: "This series of Valentines was created to appeal to the humor of lovers who lunch (and dinner, and dessert). Because in the arena of love, when has ice cream ever let you down?",
        descriptionParaThree: "The bright color scheme conveys cheer and excitement. Puns and wit collide merrily with adorable illustrations to create anthropomorphic comfort food that will make even your grumpiest friend or lover smile. Go ahead, eat your heart out."
    },
    {
        name:"Geometric Typeface",
        type:"Graphic Design",
        role:"Typographer",
        previewImgPath: "/images/project-images/geotypeface-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/geotypeface-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/geotypeface-project-fullalpha.png",
            "/images/project-images/geotypeface-project-mockup.jpg",
            "/images/project-images/geotypeface-project-poster1.png",
            "/images/project-images/geotypeface-project-poster2.jpg",],
        linkpath: "/project-page/typeface-design",
        descriptionParaOne: "A chunky geometric hand-drawn typeface for when you want your print pieces to stylishly shout from the rooftops. This alphabet soup was lovingly cooked up in a graduate typography course from the prompt, 'Create a typeface using any rulers you own.'",
        descriptionParaTwo: "Marinated in memories of Gobstobber candies, seasoned with geometric details, and sprinkled pinch of Modernist cheek, this typeface is ready to add flavor to your next poster design.",
        descriptionParaThree: "",
    },
    {
        name:"Indexical Vegetables Poster",
        type:"Illustration",
        role:"Illustration",
        previewImgPath: "/images/project-images/indexicalveg-preview.jpg",
        previewImgPathMobile: "/images/project-images/indexicalveg-project-mockup.jpg",
        projectImages: [
            "/images/project-images/indexicalveg-project-fullposter.jpg",
            "/images/project-images/indexicalveg-project-mockup.jpg",
            "/images/project-images/indexicalveg-project-closeup.jpg"
        ],
        linkpath: "/project-page/indexical-veggies",
        descriptionParaOne: "Have you had your recommended daily intake of vegetables today? Feast your eyes upon this medley of healthy and nutritious* vegetables! Bright colors and whimsical illustrative style come together to help whet your appetite for more.",
        descriptionParaTwo: "*In all seriousness, don’t skimp on those veggies. A healthy diet includes 5-10 servings of vegetables each day for adults, so do the right thing and get eating.",
        descriptionParaThree: "",
    },
    {
        name:"Blueberry Summer",
        type:"Guoache & Watercolor Painting",
        role:"Guoache & Watercolor Painting",
        previewImgPath: "/images/project-images/blueberrysummer-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/blueberrysummer-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/blueberrysummer-project-image.jpg",
            "/images/project-images/blueberrysummer-project-leftpane.jpg",
            "/images/project-images/blueberrysummer-project-rightpane.jpg"
        ],
        linkpath: "/project-page/blueberry-summer",
        descriptionParaOne: "You too can find your thrill on blueberry hill. This traditional guoache and watercolor painting was inspired by wild blueberries and landscapes in Northern Wisconsin.",
        descriptionParaTwo: "Created as a book spread concept for a children's book written by my father, the painting is a diptych dappled with filtered sunlight and summer nights at the cabin.",
        descriptionParaThree: "",
    },
    {
        name:"Fish & Chives",
        type:"Watercolor Painting",
        role:"Watercolor Painting",
        previewImgPath: "/images/project-images/fishandchives-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/fishandchives-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/fishandchives-project-image.jpg",
        ],
        linkpath: "/project-page/fish-chives",
        descriptionParaOne: "Ethereal chive flowers bloom from the mouth of a fish-shaped vintage perfume bottle. Overlaying watercolor layers in this still life help achieve depth of color and a glassy illusion.",
        descriptionParaTwo: "",
        descriptionParaThree: "",
    },
    {
        name:"Plant Party",
        type:"Watercolor Painting",
        role:"Painting",
        previewImgPath: "/images/project-images/plantparty-preview.jpg",
        previewImgPathMobile: "/images/mobile-preview/plantparty-preview-mobile.jpg",
        projectImages: [
            "/images/project-images/plant-party.jpg"
        ],
        linkpath: "/project-page/plant-party",
        descriptionParaOne: "When Andy Warhol said, “…one’s company, two’s a crowd, three’s a party,” he was obviously talking about plants, no? This still-life watercolor study is a vibrant peek into how plants party. The Snake Plant is still talking about how devilish Pothos’ new leaves were.",
        descriptionParaTwo: "",
        descriptionParaThree: "",
    }
];

function Portfolio() {

    return(
        <main>
            <section className="filtering">
            </section>

            <section className="gallery">
                {projects.map(project => {
                    return (
                        <ProjectPreview
                            name={project.name}
                            type={project.type}
                            role={project.role}
                            imgpath={project.previewImgPath}
                            linkpath={project.linkpath}

                        />
                    )
                })}
            </section>
        </main>
    )
}



export default Portfolio;