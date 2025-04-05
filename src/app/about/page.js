import Image from 'next/image';
import img from '../images/img1.png';
import img2 from '../images/offTopic.png';
import img3 from '../images/Desk.png';
export default function About() {
	return (
		<>
			<div className='about'>
				<div className='container'>
					<div className='about_sections'>
						<div className='about_sec_1'>
							<div className='description'>
								<h1>about.</h1>
								<h2>I`m a React developer based in Dhaka, Bangladesh.</h2>
								<p>
									Since 2023, I`ve enjoyed turning complex problems into simple,
									started my frontend journey with JS & React. When I`m not
									swearing at screen, you`ll find me cooking, watching series or
									working out in the gym.
								</p>
							</div>
							<div className='about_image'>
								<Image src={img} alt='self_image' />
							</div>
						</div>
						<div className='about_sec_2'>
							<div className='random_image'>
								<Image src={img2} alt='randomImage' />
							</div>
							<div className='random_description'>
								<h1>Random Facts</h1>
								<ul>
									<li>I`m into game development</li>
									<li>I dring a lot of tea</li>
									<li>Watching series is my chill time</li>
									<li>I love to cook</li>
									<li>Gymming is medication</li>
								</ul>
							</div>
						</div>
						<div className='about_sec_3'>
							<div className='research'>
								<h1>JS research journal</h1>
								<p>
									Learn a little bit more about JS study, how I study each JS
									topic, and how I built my knowledge as a programmer. I’ve
									included key things that I`ve learned so far, and even some
									sneak peeks of the trickiest topic`s that most of the mentors
									would hide from beginner`s
								</p>
								<a
									href='https://www.notion.so/JAVASCRIPT-JOURNEY-c6eb1698c27a41f2be09fbe4256aeb30'
									target='_blank'
								>
									Get more in Notion
								</a>
							</div>
							<div className='sec_3_img'>
								<Image src={img3} alt='desk' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
