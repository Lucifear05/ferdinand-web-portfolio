import type { IHomeCard } from '@/types'

export const cards: IHomeCard[] = [
  {
    img: 'trendigo.jpg',
    title: 'Trendigo',
    body: 'E-commerce website project, integrated with Midtrans(Payment), Raja Ongkir(Shiping cost calculation), and WhatsApp messaging',
    stacks: ['Vue.js', 'Laravel', 'Inertia', 'MySQL'],
    category: 'Web Apps',
    link: 'https://github.com/Ferdinand05/trendigo',
  },
  {
    img: 'hrms.jpg',
    title: 'Human Resource Management System',
    body: 'HRMS project, with an in/out attendance system with GPS tracking, selfie capture. Manage employees, salaries, payroll, and leave.',
    stacks: ['Vue.js', 'Laravel REST API', 'MySQL'],
    category: 'Dashboards',
    link: 'https://github.com/Ferdinand05/frontend-hrms',
  },
  {
    img: 'medlife.png',
    title: 'Medlife',
    body: 'Expire medication reminder app. Provides notifications when medication is about to expire. Email and WhatsApp reminders.',
    stacks: ['Vue.js', 'Express.js', 'MongoDB'],
    category: 'Web Apps',
    link: 'https://github.com/Ferdinand05/frontend-medlife',
  },
  {
    img: 'sportrent.png',
    title: 'SportRent',
    body: 'sports equipment rental system, fully using Laravel. With rental features, schedule checking, rental receipt printing. Equipped with an admin dashboard.',
    stacks: ['Laravel', 'Bootstrap', 'MySQL'],
    category: 'Web Apps',
    link: 'https://github.com/Ferdinand05/penyewaan-lapangan-futsal',
  },
  {
    img: 'nilosaproduction.png',
    title: 'Simple Productions Tracking',
    body: 'production checking system, where customers can check and print production details using their customer code.',
    stacks: ['Laravel', 'Filament', 'MySQL'],
    category: 'Dashboards',
    link: 'https://github.com/Ferdinand05/productions_tracking',
  },
]
