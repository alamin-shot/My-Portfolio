import Image from 'next/image';
// import img3 from './images/img3.png';
import img1 from './images/img1.png';
import { FiGithub, FiLinkedin, FiArrowRight, FiFacebook } from 'react-icons/fi';
import Link from 'next/link';
import { Footer } from './components/footer';

export default function Home() {
	return (
		<>
			<div className='home_layout'>
				<div className='home_section'>
					<div className='container'>
						<div className='home_header'>
							{/* Section 1: Text (staggered via CSS) */}
							<div className='section1'>
								<h1 data-text='AL AMIN'>AL AMIN</h1>
								<h3>
									Crafting digital experiences with{' '}
									<span className='highlight'>JS & REACT</span>
								</h3>
								<p className='intro'>
									frontend developer since 2024, turning ideas into sleek,
									interactive experiences. Passionate about clean code,
									intuitive design, and never-ending growth. Currently building
									the web,{' '}
									<span className='highlight'>one pixel at a time</span>.
								</p>
								<div className='cta_buttons'>
									<div className='skill-tag'>HTML</div>
									<div className='skill-tag'>CSS</div>
									<div className='skill-tag'>JS</div>
									<div className='skill-tag'>REACT</div>
									<div className='skill-tag'>NEXTJS</div>
								</div>
								<div className='cta_buttons'>
									<Link href='/projects' className='btn_primary'>
										View my work <FiArrowRight />
									</Link>
									<Link href='/contact' className='btn_secondary'>
										Say hello
									</Link>
								</div>

								<div className='social_links'>
									<Link href='https://github.com/alamin-shot' target='_blank'>
										<FiGithub />
									</Link>
									<Link
										href='https://www.linkedin.com/in/al-amin-600a15209/'
										target='_blank'
									>
										<FiLinkedin />
									</Link>
									<Link
										href='https://www.facebook.com/rifat.rj'
										target='_blank'
									>
										<FiFacebook />
									</Link>
								</div>
							</div>

							{/* Section 2: Image (slide-in via CSS) */}
							<div className='section2'>
								<Image
									src={img1}
									alt='Al Amin - Frontend Developer'
									height={380}
									className='hero_image'
									priority
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
