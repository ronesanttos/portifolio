const projects = [
    {
        id: 1,
        featured: true,
        category: 'Fullstack',
        title: 'Fullstack React + Django App',
        image: "/images/costs.webp",
        description:
            'Aplicação fullstack com React no frontend e Django REST no backend, incluindo autenticação e gerenciamento de projetos.',
        github: 'https://github.com/ronesanttos/fullstack-react-django-app',
        demo: 'https://frontend-react-8b3g.onrender.com/',
        technologies: ['React', 'Django', 'REST API', 'PostgreSQL'],
    },
    {
        id: 2,
        featured: true,
        category: 'Fullstack',
        title: 'App Receitas',
        image: "/images/receitas.webp",
        description:
            'Aplicação de receitas com interface moderna, busca dinâmica e organização por categorias.',
        github: 'https://github.com/ronesanttos/app-receitas',
        demo: 'https://app-receitas-cy3g.onrender.com/',
        technologies: ['React', 'CSS', 'JavaScript'],
    },
    {
        id: 3,
        featured: true,
        category: 'Fullstack',
        title: 'Virtual Store',
        image: "/images/virtual_store.webp",
        description:
            'Loja virtual com listagem de produtos, carrinho de compras e interface responsiva.',
        github: 'https://github.com/ronesanttos/virtual_store',
        demo: 'https://virtual-store-uhsd.onrender.com/',
        technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 4,
        title: 'Cards Rick and Morty',
        image: "/images/rick_morty.webp",
        description:
            'Aplicação web que consome a API pública de Rick and Morty para exibir personagens em formato de cards, com busca e listagem dinâmica.',
        github: 'https://github.com/ronesanttos/cards_rick_and_morty',
        demo: 'https://cards-rick-and-morty.vercel.app/',
        category: 'Front-end',
        technologies: ['React', 'API REST', 'JavaScript', 'CSS'],
    },
    {
        id: 5,
        title: 'Calculadora IMC',
        image: "/images/imc.webp",
        description:
            'Aplicação web para cálculo de Índice de Massa Corporal (IMC), com validação de dados e exibição dinâmica do resultado.',
        github: 'https://github.com/ronesanttos/calculadora_imc',
        demo: 'https://project-calculadora-imc.vercel.app/',
        category: 'Front-end',
        technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 6,
        title: 'App Photos Random',
        image: "/images/images_random.webp",
        description:
            'Aplicação que consome API externa para exibir imagens aleatórias dinamicamente, utilizando requisições HTTP.',
        github: 'https://github.com/ronesanttos/app-photos-random',
        demo: 'https://app-photos-random.vercel.app/',
        category: 'Front-end',
        technologies: ['React', 'API REST', 'JavaScript', 'CSS'],
    }
];

export default projects;