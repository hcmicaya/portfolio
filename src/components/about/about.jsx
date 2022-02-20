import './about.css';
import Helmet from '../../img/award.jpeg';

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg" />
				<div className="a-card">
					<img
						src="https://images.unsplash.com/photo-1635865653470-8976db975eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
						alt=""
						className="a-img"
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">"Non est ad astra mollis e terris via"</p>
				<p className="a-desc">
					Has a mechanical engineering degree and passed the FE (Mechanical) and PE (HVAC) Exams. I currently
					work as a mechanical designer designing commercial projects. Self-taught developer who has a passion
					in learning new technologies.
				</p>
				<div className="a-award">
					<img src={Helmet} alt="" className="a-award-img" />
					<div className="a-award-texts">
						<h4 className="a-award-title">Engineer-in-Training</h4>
						<p className="a-award-desc">
							“Normal people believe that if it ain’t broke, don’t fix it. Engineers believe that if it
							ain’t broke, it doesn’t have enough features yet.” - Scott Adams
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
