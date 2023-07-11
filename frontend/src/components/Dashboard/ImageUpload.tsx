/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageUploading from "react-images-uploading";
import CancelIcon from "@mui/icons-material/Cancel";
import "./imgStyle.css";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function ImageUpload({ img }: { img: any }) {
  const [images, setImages] = React.useState<{ dataURL: string; file: File }[]>(
    []
  );

  React.useEffect(() => {
    if (img) {
      // Set the initial image URL
      setImages([
        {
          dataURL: img,
          file: new File([], img), // Create a dummy file object
        },
      ]);
    }
  }, [img]);

  const onChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };

  return (
    <div>
      <div className="App">
        <ImageUploading
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              {images.length < 1 ? (
                <button
                  className="w-[300px] h-[300px] bg-gray-200 text-gray-400 font-bold text-2xl rounded-lg flex justify-center items-center hover:bg-gray-300 hover:text-gray-500 transition duration-300 ease-in-out"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Upload Image
                </button>
              ) : (
                ""
              )}
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <div className="content_img">
                    <img
                      className="w-[300px] h-[300px] object-cover rounded-lg"
                      src={image.data_url ? image.data_url : img}
                      alt=""
                      width={300}
                      height={300}
                    />
                    <div
                      className="absolute top-0 left-0 w-[300px] h-[300px] object-cover rounded-lg flex opacity-0 justify-center items-center hover:bg-gray-300 hover:opacity-80 transition duration-300 ease-in-out "
                      onClick={() => onImageUpdate(index)}
                    >
                      <p className="text-black font-semibold text-xl ">
                        Change Image
                      </p>
                    </div>
                    <div className="delete absolute top-0 right-0 h-20 w-20 opacity-0 invisible transition-all duration-500">
                      <CancelIcon
                        onClick={() => onImageRemove(index)}
                        color="error"
                      />
                    </div>
                  </div>
                  <div className="image-item__btn-wrapper"></div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
}

export default ImageUpload;
