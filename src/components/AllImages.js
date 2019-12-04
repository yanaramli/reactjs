import React from 'react'
import { Image } from 'react-bootstrap'

const AllImages = ({ allNewPhoto, setShowModal, setSelectedImage }) => {
    return (

        allNewPhoto.map((photo, index) => (
            <Image
                onClick={() => {
                    setShowModal(true);
                    setSelectedImage(photo);
                }}
                key={index}
                src={photo.download_url}
                className="img"
                width="300px"
                alt="image"
                rounded
            />
        ))

    )
}

export default AllImages