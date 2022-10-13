import { useContext, useState, useEffect } from 'react';
//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
//import { ContextVar } from './StateProvider.js';


function SlideShowData({mainItemImage}) {

//	const imgList = useContext(ContextVar);

	const [additionalImgs, setadditionalImgs] = useState([]);
	const [loadAdditionalImgs, setLoadAdditionalImgs] = useState(false);

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
			temp = mainItemImage;
			console.log(temp);
			setadditionalImgs(temp);
			setLoadAdditionalImgs(true);
					
					//console.log("Supporting is " + imgs.SupportingImages + "\n");
		}
		fetchSupportingImgs(mainItemImage);
	}, [mainItemImage]);

	if (loadAdditionalImgs){
		return additionalImgs;
	}
	else{
		return mainItemImage;
	}
/*
	return (
		<div>
			KKKKK
		</div>
	)*/
}

export default SlideShowData;