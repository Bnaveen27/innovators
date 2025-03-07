import React, { useState } from 'react';
import Modal from 'react-modal';
import { GrPrevious , GrNext} from "react-icons/gr";
import './Gallery.css';
import img1 from '../../Assets/Images/HeroImg/img-2.jpg';
import img2 from '../../Assets/Images/HeroImg/img-3.jpg';
import img3 from '../../Assets/Images/HeroImg/img-4.jpg';
import img4 from '../../Assets/Images/HeroImg/img-2.jpg';
import img5 from '../../Assets/Images/HeroImg/img-1.jpg';
import gallryHero from '../../Assets/Images/diamond.jpg';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9; 

  const images = [
    { id: 1, src: img1, title: 'Workshop - One' },
    { id: 2, src: img2, title: 'Workshop - Two' },
    { id: 3, src: img3, title: 'Workshop - Three' },
    { id: 4, src: img4, title: 'Workshop - Four' },
    { id: 5, src: img1, title: 'Workshop - Five' },
    { id: 6, src: img2, title: 'Workshop - Six' },
    { id: 7, src: img3, title: 'Workshop - Seven' },
    { id: 8, src: img4, title: 'Workshop - Eight' },
    { id: 9, src: img1, title: 'Workshop - Nine' },
    { id: 10, src: img5, title: 'Workshop - Ten' },
    { id: 11, src: img5, title: 'Workshop - Eleven' },
    { id: 12, src: img5, title: 'Workshop - Twelve' },
  ];

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="gallery">
      <Navbar/>
      <div className="gallery-hero">
        <img src={gallryHero} alt="Gallery Hero" className='photos-top'/>
        <div className="gallery-hero-text">Gallery Highlights</div>
      </div>
      <div className="gallery-grid">
        {currentImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <div className="image-container" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.title} className="gallry-img" />
            </div>
            <div className="title-container">
              <p className="gallry-title">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className='page-butn'>
        <GrPrevious onClick={goToPreviousPage} disabled={currentPage === 1}/>
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button className='page-butn'>
          <GrNext onClick={goToNextPage} disabled={currentPage === totalPages}/>
        </button>
      </div>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
          ariaHideApp={false}
        >
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">
            <img src={currentImage.src} alt={currentImage.title} className="modal-image" />
          </div>
        </Modal>
      )}
      <Footer/>
    </div>
  );
};

export default Gallery;
