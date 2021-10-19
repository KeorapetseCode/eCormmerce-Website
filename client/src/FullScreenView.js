import './styles/FullScreenView.css';
import React, { useEffect, useState } from "react";

//import Close from '@material-ui/icons/Close';

function FullScreenView (props) {
	
	const [additionalImgs, setadditionalImgs] = useState([]);
	const [loadImgs, setLoadImgs] = useState(false);

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
//			const temp = JSON.stringify(imgs);
			console.log(typeof imgs);
			setadditionalImgs(imgs);
			setLoadImgs(true);
			//console.log("Supporting is " + imgs.SupportingImages + "\n");
		}
		fetchSupportingImgs(props.selectedImg);
	}, [props.selectedImg]);

	const closeFullView = () => {
//		console.log("closing page for " + props.selectedImg);
		props.setSelectedImg(null);
	}


	return (
		<div className='fullScreenView' onClick={() => closeFullView()}>
			<img src={props.selectedImg} alt='fullViewItems'></img>
			{!loadImgs ? <div className='loading__icon'>loading...!</div>
			:(
				<div>GOT Data {console.log(additionalImgs[0].SupportingImages)}</div>

			)}
		</div>


	)
}

export default FullScreenView;