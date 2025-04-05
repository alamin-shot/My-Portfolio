import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
export default function Nav() {
	return (
		<>
			<div className='nav'>
				<div className='nav_section'>
					<div className='container'>
						<div className='navbar'>
							<div className='nav_sec_1'>
								<Link href='/'>
									<h1>A</h1>
								</Link>
							</div>
							<div className='nav_sec_2'>
								<ul>
									<li>
										<Link href='/'>Home</Link>
									</li>
									<li>
										<Link href='/projects'>Projects</Link>
									</li>
									<li>
										<Link href='/about'>About</Link>
									</li>
									<li>
										<Link href='/contact'>Contact</Link>
									</li>
									<li>
										<Link href='https://github.com/alamin-shot' target='_blank'>
											<FiGithub />
										</Link>
									</li>
									<li>
										<Link
											href='https://www.linkedin.com/in/al-amin-600a15209/'
											target='_blank'
										>
											<FiLinkedin />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
