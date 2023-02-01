import { useEffect, useState } from "react";
import image1 from "./image/image1.webp"
import image22 from "./image/image22.jpg"
import image from "./image/image.png"
import image6 from "./image/image6.jpg"
import image2 from "./image/image2.jpg"
import Product from "./Product";

function Home() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages] = useState([image1, image2, image22, image, image6])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])

  return (
    <>

      <div className="relative h-full flex items-center mt-55">
        <img 
          className="h-96 w-full object-cover sm:h-[80vh] md:h-[60vh] lg:h-[60vh]" 
          width={800} 
          src={allImages[selectedImage]}
          alt=""
        /> 
        <div className="absolute left-0 bottom-0 flex items-center justify-center">
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-l"
            onClick={() => {
              if (selectedImage > 0) {
                setSelectedImage(selectedImage - 1);
              }
            }}
          >
            PREV
          </button>
        </div>
        <div className="absolute right-0 bottom-0 flex items-center justify-center">
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-r"
            onClick={() => {
              if (selectedImage < allImages.length - 1) {
                setSelectedImage(selectedImage + 1);
              }
            }}
          >
            NEXT
          </button>
        </div>
      </div>
      <Product/>
    </>
  );
}

export default Home;
