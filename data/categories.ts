import { Category } from '../types';

export const categories: Category[] = [
    {
        id: 1,
        name: 'India',
        slug: '/india',
        subCategories: [
            { name: 'Haryana', slug: '/india/haryana' },
            { name: 'Punjab', slug: '/india/punjab' },
            { name: 'Uttar Pradesh', slug: '/india/up' },
            { name: 'Rajasthan', slug: '/india/rajasthan' },
            { name: 'Delhi', slug: '/india/delhi' },
            { name: 'Bihar', slug: '/india/bihar' }
        ]
    },
    { id: 2, name: 'Business', slug: '/business' },
    { id: 3, name: 'Finance', slug: '/finance' },
    { id: 4, name: 'Health/Medical', slug: '/health' },
    { id: 5, name: 'Tech', slug: '/tech' },
    { id: 6, name: 'Education/Career', slug: '/education' },
    { id: 7, name: 'Law', slug: '/law' },
    { id: 8, name: 'Sports', slug: '/sports' },
    { id: 9, name: 'Politics', slug: '/politics' },
    { id: 10, name: 'Crime', slug: '/crime' },
];
