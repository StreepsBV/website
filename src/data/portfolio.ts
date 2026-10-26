export interface PortfolioWork {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  images?: string[];
  imageAlt: string;
  summary: string;
  description: string;
}

export const portfolio: PortfolioWork[] = [
  {
    slug: 'boat-1',
    title: '',
    category: 'Yacht painting',
    location: '',
    year: '',
    image: '/content/portfolio/boat-1/front.jpg',
    images: ['/content/portfolio/boat-1/2.jpg', '/content/portfolio/boat-1/3.jpg', '/content/portfolio/boat-1/4.jpg', '/content/portfolio/boat-1/5.jpg', '/content/portfolio/boat-1/6.jpg'],
    imageAlt: '',
    summary: 'A refined exterior finish for a timeless vessel.',
    description: 'Restored and refined the yacht’s exterior finish with hand-painted awlgrip.',
  },
  {
    slug: 'kasteel-d-ursel',
    title: '',
    category: 'Residence painting',
    location: '',
    year: '',
    image: '/content/portfolio/kasteel-d-ursel/front.jpg',
    images: ['/content/portfolio/kasteel-d-ursel/2.jpg', '/content/portfolio/kasteel-d-ursel/3.jpg', '/content/portfolio/kasteel-d-ursel/4.jpg'],
    imageAlt: '',
    summary: '',
    description: '400 hand painted pillasters.',
  },
  {
    slug: 'boat-2',
    title: '',
    category: 'Yacht painting',
    location: '',
    year: '',
    image: '/content/portfolio/boat-2/front.jpg',
    images: ['/content/portfolio/boat-2/2.jpg', '/content/portfolio/boat-2/3.jpg', '/content/portfolio/boat-2/4.jpg'],
    imageAlt: '',
    summary: 'An Elegant yacht with refined details.',
    description: 'Restored and refined the yacht’s exterior finish with hand-painted awlgrip.',
  },
  {
    slug: 'cafe-kleine-tunnel',
    title: '',
    category: 'Residence painting',
    location: '',
    year: '',
    image: '/content/portfolio/cafe-kleine-tunnel/front.jpg',
    images: ['/content/portfolio/cafe-kleine-tunnel/2.jpg'],
    imageAlt: '',
    summary: 'A new look for a charming cafe.',
    description: 'Repainted the cafe in a modern style.',
  },
];
