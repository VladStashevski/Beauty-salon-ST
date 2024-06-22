/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'STASHEVSKI.A';
export const siteDescription = 'Built with the SvelteKit Static Blog Starter';
export const siteURL = 'example.com';
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter';
export const siteAuthor = 'Vlad Stashevski';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 3;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Главная страница',
		route: '/'
	},
	{
		title: 'Блог',
		route: '/blog'
	},
	{
		title: 'Обо мне',
		route: '/about'
	},
	{
		title: 'Контакты',
		route: '/contact'
	},
	{
		title: 'Услуги',
		route: '/services'
	},
	{
		title: 'Работы',
		route: '/portfolio'
	},
	{
		title: 'Отзывы',
		route: '/reviews'
	}
];
