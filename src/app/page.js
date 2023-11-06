"use client"
import { useState } from "react";
import CustomGallery from "@/app/CustomGallery";


function UniqueApp() {
  const customImageData = [
    {
      id: "0",
      img: "images/image-1.webp",
    },
    {
      id: "1",
      img: "images/image-2.webp",
    },
    {
      id: "2",
      img: "images/image-3.webp",
    },
    {
      id: "3",
      img: "images/image-4.webp",
    },
    {
      id: "4",
      img: "images/image-5.webp",
    },
    {
      id: "5",
      img: "images/image-6.webp",
    },
    {
      id: "6",
      img: "images/image-7.webp",
    },
    {
      id: "7",
      img: "images/image-8.webp",
    },
    {
      id: "8",
      img: "images/image-9.webp",
    },
    {
      id: "9",
      img: "images/image-10.jpeg",
    },
    {
      id: "10",
      img: "images/image-11.jpeg",
    },
  ];

  // Data state
  const [customImages, setCustomImages] = useState(customImageData);
  const [selectedItems, setSelectedItems] = useState([]);

  // Delete function
  const handleCustomDeleteClick = () => {
    const updatedImages = customImages.filter(
      (image) => !selectedItems.some((selected) => selected.id === image.id)
    );
    setCustomImages(updatedImages);
    setSelectedItems([]);
  };

  return (
    <div className="bg-white lg:max-w-6xl md:max-w-4xl sm:max-w-2xl mx-auto shadow-lg my-10 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center border-0 border-b py-4 px-12">
        <div className="text-xl font-bold text-black">
          {selectedItems.length ? (
            <>
              <input type="checkbox" checked /> {selectedItems.length} Files
              Selected
            </>
          ) : (
            <div className="text-xl font-bold text-black">
              0 Files Selected
            </div>
          )}
        </div>
        <button
          className="font-medium cursor-pointer rounded-lg px-4 py-2 bg-red-500 text-red-100 hover:bg-red-700 duration-300"
          onClick={handleCustomDeleteClick}
        >
          Delete files
        </button>
      </div>

      <CustomGallery
        images={customImages}
        setImages={setCustomImages}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        handleDeleteClick={handleCustomDeleteClick}
      />
    </div>
  );
}

export default UniqueApp;