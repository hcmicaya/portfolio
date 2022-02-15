import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
	const formRef = useRef();
	const [ done, setDone ] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_19edemz', 'template_a21qz5j', formRef.current, 'user_6dUovBrH8rUPiJdEQsWBk').then(
			(result) => {
				console.log(result.text);
				setDone(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="c">
			<div className="c-bg" />
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">Contact Me</h1>
					<div className="c-info">
						<div className="c-info-item">
							<img src={Phone} alt="" className="c-icon" />
							+702 528-2359
						</div>
						<div className="c-info-item">
							<img src={Email} alt="" className="c-icon" />
							hcmicaya@gmail.com
						</div>
						<div className="c-info-item">
							<img src={Address} alt="" className="c-icon" />
							#35 Kalapati St. Vililia Village Talipapa Novaliches Quezon City Philippines
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						<b>Lorem ipsum dolor </b>sit amet consectetur adipisicing elit. Ab, doloremque nesciunt id
						numquam eveniet vero laudantium, corrupti, quis voluptas iusto possimus. Aperiam error officiis
						quos provident reprehenderit rem doloremque delectus!
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && '#333' }}
							type="text"
							placeholder="Name"
							name="user_name"
						/>
						<input
							style={{ backgroundColor: darkMode && '#333' }}
							type="text"
							placeholder="Subject"
							name="user_subject"
						/>
						<input
							style={{ backgroundColor: darkMode && '#333' }}
							type="text"
							placeholder="Email"
							name="user_email"
						/>
						<textarea
							rows="5"
							placeholder="Message"
							name="message"
							style={{ backgroundColor: darkMode && '#333' }}
						/>
						<button>Submit</button>
						{done && 'Thank you...'}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
