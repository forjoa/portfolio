// images
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
            title: 'I don´t like to wear shirts',
            img: me,
            description: 'In all my life I didn´t like to wear shirts until I started using it. I know it sounds maybe weird but now I like to wear them and I feel more confortable using shirts than t-shirts. Yes. Just because.'
        },
        {
            id: 2,
            title: 'I felt in love',
            img: my_love,
            description: 'Talking deeply, I learned to be alone, and when that happenned I meet my life partner. She just make my world up and down and that makes me feel completed.'
        },
        {
            id: 3,
            title: 'Of course, I´m a turist',
            img: turist_me,
            description: 'I could say that I love to travel, to know new places, to eat new food, taste new flavours, smell new scents and meet new people. Every single time when I do what I love, there is this song playing in my head called: Generationwhy - ZHU.'
        },
        {
            id: 4,
            title: 'My last trip',
            img: kayak,
            description: 'When I realice I was in the Costa Brava ocean in a kayak laughing about everything, it blew my mind, it just make feel that I was living and that is a highlight in my mind about the best memories of my life.'
        },
        {
            id: 5,
            title: 'Minimalistic? It is me',
            img: cala,
            description: 'Black and white are my favorite colors due to the fact that they match with everything. I always prefer to have everything empty and minimun color pieces, it makes me feel confortable and in peace.'
        },
        {
            id: 6,
            title: 'HP | km/h | RPM',
            img: f1,
            description: 'Everytime I listen an engine I feel goosebumps, I feel like a child getting emotional with a new toy, there is something in motorsports that make me feel completly happy when I see it. Love velocity, love speed, love cars and as The Weeknd said `We don´t pray for love, we just pray for cars`.'
        }
    ]

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