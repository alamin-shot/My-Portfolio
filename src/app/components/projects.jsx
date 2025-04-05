'use client';

import job from '../images/jobS.png';
import lens from '../images/lensify.jpg';
import preview from '../images/preview.jpg';
import pokedex from '../images/pokedex.png';

const projectsData = [
	{
		id: 1,
		title: 'Job Search',
		link: 'https://authenticated-job-search-app.vercel.app/',
		image: job,
	},
	{
		id: 2,
		title: 'Link Preview',
		link: 'https://link-preview-app-amber.vercel.app/',
		image: lens,
	},
	{
		id: 3,
		title: 'Image Search',
		link: 'https://image-search-app-lensify.vercel.app/',
		image: preview,
	},
	{
		id: 4,
		title: 'Pokedex',
		link: 'https://getpokeapp.netlify.app/',
		image: pokedex,
	},
];
export default projectsData;
