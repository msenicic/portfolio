import { nanoid } from 'nanoid';

export const DATA_SKILLS = [
    {
        id: nanoid(),
        skill: 'HTML5',
        imageSrc: '/html-5-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'CSS3',
        imageSrc: '/css-3-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'JavaScript',
        imageSrc: '/javascript-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'SASS',
        imageSrc: '/sass-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'jQuery',
        imageSrc: '/jquery-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'WordPress',
        imageSrc: '/wordpress-color-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'CraftCMS',
        imageSrc: '/craftcms-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'React',
        imageSrc: '/react-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'NextJs',
        imageSrc: '/nextjs-fill-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'Git',
        imageSrc: '/git-svgrepo-com.svg'
    },
    {
        id: nanoid(),
        skill: 'Firebase',
        imageSrc: '/firebase-svgrepo-com.svg'
    }
]

export const DATA_PROJECTS = [
    {
        title: 'React & NextJs Projects',
        projects: [
            {
                id: nanoid(),
                imageSrc: '/rps-dev.msenicic.vercel.app_.png',
                imageAnimation: false,
                code: 'https://github.com/msenicic/rps-app-nextjs-firebase',
                link: 'https://rps-dev.msenicic.vercel.app/',
                title: 'RPS Online Game (Unfinished)',
                description: 'Online Rock Paper Scissors game where you can anonymously play with other players without logging in. (Unfinished but the application works)',
                tags: ['NextJs','SCSS','Firebase']
            },
            {
                id: nanoid(),
                imageSrc: '/food-recipes-dev.msenicic.vercel.app_.png',
                imageAnimation: true,
                code: 'https://github.com/msenicic/food-recipes-app-nextjs-headlessCMS',
                link: 'https://food-recipes-dev.msenicic.vercel.app/',
                title: 'Food Recipes (Unusable)',
                description: 'NextJs application with a combination of headless Wordpress where you can log in or register and then make new recipes or view other recipes. (Currently unusable because the host has shut down the platform)',
                tags: ['NextJs','SCSS','Headless CMS','Rest API']
            },
            {
                id: nanoid(),
                imageSrc: '/react-advanced-form-dev.msenicic.vercel.app_.png',
                imageAnimation: false,
                code: 'https://github.com/msenicic/react-advanced-form',
                link: 'https://react-advanced-form-dev.msenicic.vercel.app/',
                title: 'Advanced Form',
                description: 'An advanced form made in React that contains custom hooks, useContext, swiperJs and more',
                tags: ['React','SCSS','Vite']
            },
            {
                id: nanoid(),
                imageSrc: '/react-tenzies-dev.msenicic.vercel.app_.png',
                imageAnimation: false,
                code: 'https://github.com/msenicic/react-tenzies-app',
                link: 'https://react-tenzies-dev.msenicic.vercel.app/',
                title: 'Tenzies App',
                description: 'The goal of the game is to collect all the dice of the same number in the least amount of time and number of moves',
                tags: ['React','Css']
            },
            {
                id: nanoid(),
                imageSrc: '/react-quiz-dev.msenicic.vercel.app_.png',
                imageAnimation: false,
                code: 'https://github.com/msenicic/react-quiz-app',
                link: 'https://react-quiz-dev.msenicic.vercel.app/',
                title: 'Quiz App',
                description: 'A quiz where there are various categories, difficulties and types of questions that are connected via API',
                tags: ['React','Css', 'API']
            },
        ]
    },
    {
        title: 'Wordpress & CraftCms Projects',
        projects: [
            {
                id: nanoid(),
                imageSrc: '/craft-project.ddev.site.png',
                imageAnimation: true,
                code: 'https://github.com/msenicic/travel-craft-site',
                title: 'Travel',
                description: 'Travel site, which contains Neo matrix fields, user management, swiper... U can log in or register and then comment something about site',
                tags: ['CraftCms','SCSS','JavaScript','Docker & Ddev']
            },
            {
                id: nanoid(),
                imageSrc: '/osuwp-local.dev.msenicic.com_.png',
                imageAnimation: true,
                code: 'https://github.com/msenicic/osu-clone-wordpress-site',
                title: 'Osu clone',
                description: 'Clone of Osu site, which contains custom gutenberg blocks combine with Acf fields',
                tags: ['Wordpress','SCSS','JavaScript']
            },
            {
                id: nanoid(),
                imageSrc: '/prello_site-local.dev.msenicic.com_.png',
                imageAnimation: true,
                code: 'https://github.com/msenicic/prello-craft-site',
                title: 'Prello clone',
                description: 'Clone of Prello site for stories, which contains flexible content, user management, swiper...',
                tags: ['CraftCms','SCSS','JavaScript']
            },
        ]
    }
]