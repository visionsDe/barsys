import { useEffect, useState } from 'react';

const LazyBackgroundImg = ({ className, img }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const getImageUrl = async () => {
      if (!img || !img.src) return;

      const imageUrl = img.src;
      const updatedImageUrl = imageUrl.replace("width=1", "width=720");
console.log(updatedImageUrl,"updatedImageUrl");
      const style = {
        backgroundImage: `url(${updatedImageUrl})`,
        visibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover', // Adjust as per your requirement
        backgroundPosition: 'center', // Adjust as per your requirement
      };

      setBackgroundImage(style.backgroundImage);
    };

    getImageUrl();
  }, [img]);

  return (
    <div className={className} style={{ ...backgroundImage }}>
      {/* You can add children or other content here if needed */}
    </div>
  );
};

export default LazyBackgroundImg;
