import './styles/FullScreenView.css';
import React, { useEffect, useState } from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

//import Close from '@material-ui/icons/Close';

function FullScreenView (props) {
	
	const [additionalImgs, setadditionalImgs] = useState([]);
	const [loadAdditionalImgs, setLoadAdditionalImgs] = useState(false);
//	const [length, setLength] = useState(0);

//	const [slideIndex, setSlideIndex] = useState(-1);

	useEffect(() => {
// Had to make this request a POST because GET does not sent a request with body data
		let fetchSupportingImgs = async (imgToView) => {
		
			let options = {
				method : 'POST',
				headers : {'Content-Type' : "application/json"},
				body : JSON.stringify({'image' : imgToView})
			};

			const resp = await fetch('/api/getSupporting', options);
			const imgs = await resp.json();
			let temp = JSON.parse(imgs[0].SupportingImages);
			//console.log(temp);
			setadditionalImgs(temp);
			setLoadAdditionalImgs(true);
			
			//console.log("Supporting is " + imgs.SupportingImages + "\n");
		}
		fetchSupportingImgs(props.selectedImg);
	}, [props.selectedImg]);

	const closeFullView = () => props.setSelectedImg(null);
	const nextPic = () => {
		console.log("next pic");

	}
	const prevPic = () => {
		console.log("prev pic");
	}
	/*additionalImgs[0]*/
	/*<img src={props.selectedImg} alt='fullViewItems'></img>*/

	return (
		<div className='slider' onClick={closeFullView}>
			<img src={props.selectedImg} className='slide__image' alt='fullViewItems'></img>
			<FaArrowAltCircleLeft className='left__arrow' onClick={() => prevPic} />

			<FaArrowAltCircleRight className='right__arrow' onClick={() => nextPic} />
			
			{!loadAdditionalImgs ? <div>{console.log("loading....")}</div>
			:(
				<div>{Object.values(additionalImgs).map(item => (
					<div key={item}>
						<img src={item} className='slide__image' alt='viewer'></img>
					</div>
					))}
				</div>
			)}
		</div>
	)
}

export default FullScreenView;