import { useState } from 'react';
import css from './CamperMedia.module.css';

const CamperMedia = ({ gallery }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className={css.mediaSection}>
      <div className={css.mainImageWrapper}>
        <img
          className={css.mainImage}
          src={gallery[activeImageIndex]?.original}
          alt={name}
        />
      </div>
      <ul className={css.thumbnailList}>
        {gallery.map((image, index) => (
          <li
            key={index}
            className={`${css.thumbnailItem} ${index === activeImageIndex ? css.activeThumb : ''}`}
            onClick={() => setActiveImageIndex(index)}
          >
            <img src={image.thumb} alt={`Preview ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperMedia;
