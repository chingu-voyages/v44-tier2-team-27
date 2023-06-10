import BooleanSVG1 from '../assets/images/boolean1.svg';
import BooleanSVG2 from '../assets/images/boolean2.svg';
import BooleanSVG3 from '../assets/images/boolean3.svg';
import { FC } from 'react';
import '../styles/components/loader.css';

interface LoaderProps {
	loading: boolean;
}

const Loader: FC<LoaderProps> = ({ loading }) => {
	return (
		<div>
			{loading ? (
				<div className="spinner-loader">
					<img className="booleanSVG boolean1" src={BooleanSVG1} alt="" />
					<img className="booleanSVG boolean2" src={BooleanSVG2} alt="" />
					<img className="booleanSVG boolean3" src={BooleanSVG3} alt="" />
				</div>
			) : null}
		</div>
	);
};

export default Loader;
