import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com/', icon: 'fab fa-instagram' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-universal-access fa-fw',
    title: 'Tailored Adventures',
    text: 'Our expert planners craft personalized itineraries to suit your preferences, ensuring a journey as unique as you are.',
  },
  {
    id: 2,
    icon: 'fas fa-users fa-fw',
    title: 'Group Expeditions',
    text: 'Join fellow adventurers on our Group Expeditions for shared experiences and lasting connections.',
  },
  {
    id: 3,
    icon: 'fas fa-camera-retro fa-fw',
    title: 'Local Living Retreats',
    text: 'Immerse yourself with our Local Living Retreats while experiencing the authentic lifestyle and flavors of the area.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'August 26th, 2025',
    title: 'Explore Italy',
    info: "Discover the historic sites of Rome, including the iconic Colosseum and Roman Forum. Immerse yourself in the art and culture of Florence, home to masterpieces like Michelangelo's David. Experience the romantic canals of Venice, with a visit to St. Mark's Square.",
    location: 'Italy',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'September 10th, 2025',
    title: 'Adventure in New Zealand',
    info: 'Discover the natural beauty of Fiordland National Park, Milford Sound, and Queenstown. Engage in thrilling outdoor activities like bungee jumping and hiking. Experience Maori culture and traditional haka performances. Relax in the geothermal wonders of Rotorua.',
    location: 'New Zealand',
    duration: 8,
    cost: 2500,
  },
  {
    id: 3,
    image: tour3,
    date: 'October 5th, 2025',
    title: 'Journey through Japan',
    info: "Explore Kyoto's historic temples and serene gardens, unfolding tales of ancient grace. Witness the ethereal beauty of cherry blossoms in spring, a breathtaking spectacle. Indulge in the diverse flavors of Japanese cuisine, from the artful presentation of sushi to the comforting warmth of ramen.",
    location: 'Japan',
    duration: 10,
    cost: 3000,
  },
  {
    id: 4,
    image: tour4,
    date: 'November 15th, 2025',
    title: 'South African Safari',
    info: 'Embark on a safari adventure in Kruger National Park. Explore the vibrant city of Cape Town and ascend Table Mountain. Experience the diverse cultures and cuisines of South Africa. Relax on the beautiful beaches of the Garden Route.',
    location: 'South Africa',
    duration: 12,
    cost: 2800,
  },
  {
    id: 5,
    image: tour5,
    date: 'December 3rd, 2025',
    title: "Discover Peru's Wonders",
    info: 'Uncover the ancient mysteries of Machu Picchu as you trek along the Inca Trail. Immerse yourself in the rich culture of Cusco and the Sacred Valley. Experience the awe-inspiring landscapes of the Nazca Lines. Venture into the heart of the Amazon.',
    location: 'Peru',
    duration: 7,
    cost: 2600,
  },
  {
    id: 6,
    image: tour6,
    date: 'January 20th, 2026',
    title: 'Australian Adventure',
    info: 'Snorkel or dive in the Great Barrier Reef, a UNESCO World Heritage Site. Encounter iconic Australian wildlife, including kangaroos and koalas. Explore the cosmopolitan cities of Sydney and Melbourne.',
    location: 'Australia',
    duration: 14,
    cost: 3200,
  },
]
