import axios from "axios";
import React, { useState } from "react";
interface imageI {
  name: string;
  size: string;
  type: string;
  path: string;
  base64: string;
}
export const AddEvent = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  let formData=new FormData();
  const photoHandleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files);
    if (e.target.files) {
      let fileArray=Array.from(e.target.files).map((file:File)=>(file));
      setSelectedPhotos((prevFile:any)=>[...prevFile,fileArray])
    }
   
    console.log(e.target.files)
    
  };
  console.log(selectedPhotos.flat())
  selectedPhotos.forEach((file)=>{
    formData.append('images',file)
  })
  console.log(formData)
 
  const addEventOnClick = () => {

  
    
    axios({
      method: "POST",
      url: "http://localhost:8080/event/addevent",
     
      data:formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => console.log(res)).catch((error)=>console.log(error));
  //   axios
  //     .post("http://localhost:8080/event/addevent", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  }
  // console.log(selectedPhotos);
  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              encType="multipart/form-data"
            >
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photos
                    </label>

                    <div className="form-check-label mt-1 flex pt-2 pb-4">
                      <div className="flex space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <label htmlFor="images">
                          <div className=" ml-5 cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Upload Photos
                          </div>
                          <input
                            id="images"
                            name="images"
                            type="file"
                            onChange={photoHandleChange}
                            className="sr-only"
                            multiple
                            accept="image/png, image/jpeg, image/jpg"
                          />
                        </label>
                        <div className="font-small block p-2 text-sm text-gray-400">
                          only .jpg / .jpeg / .png
                        </div>
                      </div>
                    </div>
                    {/* {selectedPhotos.length > 0 && (
                      <div className="mt-1 flex h-auto flex-wrap justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        {selectedPhotos &&
                          selectedPhotos.map((images) => (
                            <div
                              key={images.path}
                              className="flex w-1/3 flex-wrap "
                            >
                              <div className="w-full p-1 md:p-2">
                                <img
                                  src={images.path}
                                  className="block h-72 w-72 rounded-lg object-fill"
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    onSubmit={()=>addEventOnClick()}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
