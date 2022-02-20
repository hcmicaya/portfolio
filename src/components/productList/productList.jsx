import './productList.css';
import Product from '../product/product';
import { products } from '../../data';

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title"> Portfolio </h1>
				<p className="pl-desc">Projects that utilizes different technologies</p>
			</div>
			<div className="pl-list">
				{products.map((item) => (
					<Product
						key={item.id}
						title={item.title}
						desc={item.desc}
						img={item.img}
						link={item.link}
						source={item.source}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
