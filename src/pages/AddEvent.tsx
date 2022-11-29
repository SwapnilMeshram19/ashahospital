import axios from "axios";
import React, { useState } from "react";
export const AddEvent = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  let formData = new FormData();
  const photoHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let fileArray = Array.from(e.target.files).map((file: File) => file);
      setSelectedPhotos((prevFile: any) => [...prevFile, fileArray]);
    }
  };

  const addEventOnClick = () => {
    formData.append("title", title);
    formData.append("description", description);
    selectedPhotos.flat().forEach((file) => {
      formData.append("images", file);
    });
    axios
      .post("http://localhost:8080/event/addevent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-5 pb-20">
        <h1 className="w-[60%] bg-neutral-200 p-3 text-center text-2xl font-bold">
          Add Event
        </h1>
        <div className="w-[60%]">
          <div className="mt-5 md:col-span-2 md:mt-0">
            {/* form */}
            <div>
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                    {selectedPhotos.length > 0 && (
                      <div className="justify-left mt-1 flex h-auto flex-wrap rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        {selectedPhotos &&
                          selectedPhotos.flat().map((image) => (
                            <div
                              key={URL.createObjectURL(image)}
                              className="flex w-1/3 flex-wrap "
                            >
                              <div className="w-full p-1 md:p-2">
                                <img
                                  src={URL.createObjectURL(image)}
                                  className="block h-72 w-72 rounded-lg object-fill"
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    onClick={addEventOnClick}
                    className="group relative inline-flex items-center justify-start overflow-hidden rounded-full border-2 bg-blue-600 px-5 py-3 font-medium transition-all hover:border-2 hover:border-blue-600 hover:bg-white"
                  >
                    <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      Add Event
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
