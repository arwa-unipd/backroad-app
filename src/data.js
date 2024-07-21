import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
export const pageLinks = [
  {
    id: 1,
    href: '#home',
    name: 'home',
  },
  {
    id: 2,
    href: '#about',
    name: 'about',
  },
  {
    id: 3,
    href: '#services',
    name: 'services',
  },
  {
    id: 4,
    href: '#tours',
    name: 'tours',
  },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    icon: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 10th, 2020',
    title: 'best of python',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 10 ,
    price: 1000,
  },
  {
    id: 3,
    image: tour3,
    date: 'December 10th, 2020',
    title: 'best of c++',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'france',
    duration: 8,
    price: 1900,
  },
  {
    id: 4,
    image: tour4,
    date: 'April 3th, 2020',
    title: 'best of c++',
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'italy',
    duration: 14,
    price: 1200,
  },
]
