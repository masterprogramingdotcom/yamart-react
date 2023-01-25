import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import album from "../../../../asset/images/album.jpeg";
const ImageUpload = ({ formik }) => {
  const [fileLength, setFileLength] = useState(0);
  const [fileArray, setfileArray] = useState([]);
  const [allfile, setallfile] = useState([])
  const handleChange = (e) => {
    console.log(e.target.files);
    const files = e.target.files;
    console.log(files)
    setFileLength(files.length);
    for (let i = 0; i < files.length; i++) {
      formik.setFieldValue(`image_${i + 1}`, files[i]);
      fileArray.push(URL.createObjectURL(files[i]))

    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <label className="cursor-pointer h-32 w-[125.5px] p-2 text-gray-500 border rounded-md flex flex-col items-center  justify-center text-3xl">
          <FontAwesomeIcon icon={faUpload} />
          <span className="mt-2 block text-sm leading-normal">
            Upload Files
          </span>
          <input
            type="file"
            onChange={handleChange}
            multiple
            accept=".jpg,.jpeg,.png"
            className="hidden"
          />
        </label>
        </div>
        {fileLength > 0 ? (
          Array.from(Array(fileLength - 1)).map((_, index) => (
            <div
              key={new Date().getTime() + index}
              className="h-32  w-[125.5px]  p-2 border rounded-md"
            >
            </div>
          ))

        ) : (
          <></>
        )}
        
         <div className="flex flex-row gap-4">
          
                    {(fileArray || []).map(url => (
                      <div class="grid grid-rows-4 grid-flow-col gap-4">
                        <img src={url} alt="..." />
                        </div>
                    ))}
                </div>
                </div>
  );
};

export default ImageUpload;
