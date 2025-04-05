'use client';
import { FiMail, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import Image from 'next/image';
import myself from '../images/myghibli.png';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';

export default function Contact() {
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid Email').required('Required'),
		message: Yup.string().min(5, 'Message too short!').required('Required'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			toast.success('Thanks for your time! Check back you soon!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			resetForm();

			// In a real implementation, you would send the form data to your backend here
			console.log(values);
		},
	});
	return (
		<>
			<ToastContainer />
			<div className='contact'>
				<div className='container'>
					<div className='contact_sections'>
						<div className='contact_sec_1'>
							<div className='contact_description'>
								<h1>Contact.</h1>
								<h2>
									Get in touch with me via social media or send me and email
								</h2>
								<div className='contact_social_link'>
									<div className='part1'>
										<a
											href='https://www.facebook.com/rifat.rj'
											aria-label='Facebook'
											target='_blank'
										>
											<FiFacebook />
										</a>
										<a
											href='https://www.instagram.com/the_unknown_danger/'
											aria-label='Instagram'
											target='_blank'
										>
											<FiInstagram />
										</a>
									</div>
									<div className='part2'>
										<a
											href='https://www.linkedin.com/in/al-amin-600a15209/'
											aria-label='linkedin'
											target='_blank'
										>
											<FiLinkedin />
										</a>
										<a
											href='https://www.Gmail.com'
											aria-label='Gmail'
											target='_blank'
										>
											<FiMail />
										</a>
									</div>
								</div>
							</div>
							<div className='person_image'>
								<Image src={myself} alt='myself' height={350} />
							</div>
						</div>
						<div className='contact_sec_2'>
							<h1>Send me an email</h1>
							<form onSubmit={formik.handleSubmit}>
								<div className='section_1_mail'>
									<div className='input-group'>
										<input
											id='name'
											name='name'
											type='text'
											placeholder='Your Name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
										/>
										{formik.touched.name && formik.errors.name ? (
											<div className='error'>{formik.errors.name}</div>
										) : null}
									</div>

									<div className='input-group'>
										<input
											id='email'
											name='email'
											type='email'
											placeholder='Your Email'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email ? (
											<div className='error'>{formik.errors.email}</div>
										) : null}
									</div>
								</div>

								<div className='msg_sec'>
									<div className='input-group'>
										<textarea
											id='message'
											name='message'
											placeholder='Your Message'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.message}
										/>
										{formik.touched.message && formik.errors.message ? (
											<div className='error'>{formik.errors.message}</div>
										) : null}
									</div>
								</div>

								<button
									type='submit'
									disabled={formik.isSubmitting || !formik.isValid}
								>
									Send email
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
