import axios from 'axios';
import { useState } from 'react';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Modal } from './Modal';
export const App = () => {
  const [images, setImages] = useState([]);
  const onSubmit = query => {
    const API_KEY = '42539798-27c3408c7f5dca4caada8a6c7';
    const URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    axios
      .get(URL)
      .then(response => {
        setImages(response.data.hits);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      <ImageGallery>
        <ImageGalleryItem>
          <Loader />
          <Modal />
        </ImageGalleryItem>
      </ImageGallery>
      <Button />
    </>
  );
};
