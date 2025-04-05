import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

export function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer_content'>
					<p className='copyright'>
						© {new Date().getFullYear()} Al Amin. Made with{' '}
						<FiHeart className='heart-icon' /> in Bangladesh
					</p>
					<div className='footer_links'>
						<Link href='/' className='footer_link'>
							Privacy
						</Link>
						<span className='divider'>|</span>
						<Link href='/' className='footer_link'>
							Terms
						</Link>
						<span className='divider'>|</span>
						<Link href='/contact' className='footer_link'>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
