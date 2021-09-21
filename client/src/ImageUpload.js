import React, { useState } from 'react';


function ImageUpload(){

	var [imgfile, setFile] = useState('');
	var [filestatus, setFileStatus] = useState(false);

	const changeHandler = (event) => {
		setFile(event.target.files[0]);
		setFileStatus(true);
	};

	const handleSubmission = () => {

		const formData = new FormData();
		formData.append('File', imgfile);
		/*
		const sendImg = fetch('/api/imageFile',{method: 'POST',body: formData});
		const response = sendImg.json();
		*/
		fetch(
			'/api/imageFile',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	};

	return (
		<div className='image_upload'>
			<h2>File Upload</h2>
			<div className='fileInputField'>
				<input type="file" name="image_upload" onChange={changeHandler} />
				
				{filestatus ? (
				<div>
					<p>Filename: {imgfile.name}</p>
					<p>Filetype: {imgfile.type}</p>
					<p>Size in bytes: {imgfile.size}</p>
					{/*<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>*/}
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}

export default ImageUpload