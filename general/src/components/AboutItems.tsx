// images
import React from 'react'
import me from '../img/me/me.webp'
import turist_me from '../img/me/turist.webp'
import my_love from '../img/me/my_love.jpg'
import kayak from '../img/me/kayak.jpg'
import cala from '../img/me/cala.webp'
import f1 from '../img/me/f1.jpg'

// components
import AboutItem from './AboutItem.jsx'

const AboutItems = () => {
    const memories = [
        {
            id: 1,
            title: "My Evolution in Clothing Preferences",
            img: me,
            description: "Throughout my life, I've had an aversion to wearing shirts. This is a particular aversion because shirts are a staple in most wardrobes. However, as time passed, something unexpected happened. I decided to give the shirts a chance and to my surprise, I found them to be surprisingly comfortable. The change in my clothing preferences was a revelation. Now, not only do I wear shirts, but I also prefer them to t-shirts. It's a subtle but important change that reflects personal growth and changing tastes."
        },
        {
            id: 2,
            title: 'Felt in Love',
            img: my_love,
            description: 'Speaking candidly, I learned the art of solitude, and during this journey of self-discovery, I had the incredible fortune of crossing paths with my life partner. She has single-handedly redefined my world, turning it into a realm of boundless love and companionship. With her, I have discovered a sense of loyalty that I never knew was missing.'
        },
        {
            id: 3,
            title: "Of Course, I'm a Tourist",
            img: turist_me,
            description: "If I say that I have a deep passion for travel, it would be an understatement. Exploring new destinations, tasting exotic cuisines, immersing myself in different cultures, and meeting people from diverse backgrounds have become the very essence of my life. With each new journey, I find myself accompanied by a mental soundtrack, and the song 'Generationwhy - ZHU' provides the perfect backdrop to these memorable adventures."
        },
        {
            id: 4,
            title: "My Latest Adventure",
            img: kayak,
            description: "This realization came to me as I kayaked the clear waters of the Costa Brava, sunlight dancing on the waves and laughter echoing in the air. At that moment, I felt a profound sense of vitality and freedom. It was a revelation, a vivid memory etched in my mind, reminding me of the pure joy of living life to the fullest."
        },
        {
            id: 5,
            title: "Minimalism? My Lifestyle",
            img: cala,
            description: "The allure of simplicity, captured in the timeless combination of black and white, has always held a special place in my heart. These two colors, with their understated elegance, seamlessly blend with any setting. I find solace and comfort in keeping my surroundings ordered and my possessions minimalistic. It's not just a design preference; it's a way of life, bringing a sense of calm and tranquility to my daily existence."
        },
        {
            id: 6,
            title: "HP | km/h | RPM",
            img: f1,
            description: "The symphony of roaring engines and the exhilarating rush of speed – these are the elements that have the power to stir my soul like nothing else. There's an indescribable magic in motorsports that transports me back to the wonder and excitement of childhood. Each time I witness the spectacle of racing, my heart races in tune with the RPM, and I'm reminded of The Weeknd's words, 'We don't pray for love, we just pray for cars.' It's a passion that fuels my spirit and fills my life with unbridled joy."
        }
    ];

    return (
        <div className="about-general-container">
            {
                memories.map((prop, key) => {
                    return (
                        <AboutItem prop={prop} key={key} />
                    )
                })
            }
        </div>
    )
}

export default AboutItems