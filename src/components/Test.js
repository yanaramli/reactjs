import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import AllImages from './AllImages';
import '../ImgGrid.css';
import LoadingComponent from './LoadingComponent';
import RefreshComponent from './RefreshComponent';

const API_ENDPOINT = 'https://picsum.photos/v2/list?limit=6&page=';
const initialState = {
	allNewPhoto: [],
	page: 1
};

const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

const Test = () => {
	const [state, setState] = useState(initialState);
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleHide = () => setShowModal(false);

	const fetchPhoto = () => {
		setState({ page: randomNumber(100), allNewPhoto: [] });
		fetch(`${API_ENDPOINT}${state.page}`, {
			headers: {
				'Cache-Control': 'no-cache'
			}
		})
			.then((response) => response.json())
			.then((response) => {
				setState((currState) => ({ ...currState, allNewPhoto: response }));
				//use spread operator (...state) to take all the state

				console.log(response);
			})
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		fetchPhoto();
		// eslint-disable-next-line
	}, []);

	const handleClick = () => fetchPhoto();

	return (
		<Container>
			{state.allNewPhoto.length ? (
				<div className="Container">
					<AllImages
						allNewPhoto={state.allNewPhoto}
						setShowModal={setShowModal}
						setSelectedImage={setSelectedImage}
					/>
				</div>
			) : (
					<Row>
						<LoadingComponent />
					</Row>
				)}

			<Row className="mt-3">
				<RefreshComponent
					handleClick={handleClick}
				/>
			</Row>

			<ModalComponent
				showModal={showModal}
				selectedImage={selectedImage}
				handleHide={handleHide}
				setShowModal={setShowModal}
			/>
		</Container>
	);
};

export default Test;
