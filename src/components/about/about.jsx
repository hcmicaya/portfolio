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
				<p className="a-sub">
					It is a long established fact that a reader will be distracted by the readable content.
				</p>
				<p className="a-desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maxime aliquid quia, quod at iusto
					aperiam doloremque esse natus dolore soluta veniam fuga sint officiis ipsum distinctio aut quas
					dolor!
				</p>
				<div className="a-award">
					<img src={Helmet} alt="" className="a-award-img" />
					<div className="a-award-texts">
						<h4 className="a-award-title">Best Engineer</h4>
						<p className="a-award-desc">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum aspernatur ipsum
							consectetur ad aperiam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
