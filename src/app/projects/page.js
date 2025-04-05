'use client';
import projectData from '../components/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiFileText } from 'react-icons/fi';

export default function Projects() {
	const [hoveredItem, setHoveredItem] = useState(null);

	const currentProject = hoveredItem
		? projectData.find((p) => p.id === hoveredItem)
		: null;

	const handleMouseEnter = (id) => {
		setHoveredItem(id);
	};

	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	return (
		<>
			<div className='projects'>
				<div className='container'>
					<div className='project_sections'>
						{/* Desktop preview panel (hidden on mobile) */}
						<div className='project_sections_1'>
							{currentProject ? (
								<div className='image-wrapper'>
									<Image
										src={currentProject.image}
										alt={currentProject.title}
										width={600}
										height={400}
										className='project-image active'
									/>
								</div>
							) : (
								<div className='placeholder'>
									Hover over a project to see preview
								</div>
							)}
						</div>

						<div className='project_sections_2'>
							<h1>MY WORK</h1>
							<div className='work_lists'>
								<ul>
									{projectData.map((data) => (
										<li
											key={data.id}
											onMouseEnter={() => handleMouseEnter(data.id)}
											onMouseLeave={handleMouseLeave}
										>
											<Link href={data.link} target='_blank'>
												{data.title}
												{/* Add mobile-only description */}
												<span className='mobile-description'>
													{data.description}
												</span>
											</Link>
										</li>
									))}
									<li className='resume-item'>
										<Link href='...' target='_blank'>
											<FiFileText className='resume-icon' />
											View My Resume
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
