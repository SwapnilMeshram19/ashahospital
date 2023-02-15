import axios from "axios";
import React, { useState } from "react";
import { AddSuccess } from "../components/AddSuccess";
import { empanelmentType } from "../components/DataArray/Specialities";
export const AddEmpanelment = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);

  const [selectedPhoto, setSelectedPhoto] = useState<FileList | null>(null);
  const [name, setName] = useState<string>("");
  const [empType, setEmpType] = useState<string>("");
  let formData = new FormData();


  const addEventOnClick = () => {
    formData.append("name", name);
    formData.append("empanelmentType", empType);
    if (selectedPhoto) {
      formData.append("empanelmentLogo", selectedPhoto[0]);
    }

    axios
      .post("http://localhost:8080/empanelment/addempanelment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data == "success") {
          setOpenModel(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" relative">
      <div className="flex flex-col items-center justify-center pt-5 pb-20">
        <h1 className="w-2/6 bg-neutral-200 p-3 text-center text-2xl font-bold">
          Add Empanelment
        </h1>
        <div className="w-2/6">
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
                      Empanelment Name <span></span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                 
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Empanelment Type
                    </label>
                    <select
                      id="speciality"
                      name="speciality"
                      autoComplete="speciality"
                      value={empType}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setEmpType(e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Select type</option>
                      {empanelmentType.map((ele,index) => (
                        <option value={ele.title} key={index}>
                          {ele.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Logo
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
                          <div className=" ml-5 w-32 cursor-pointer truncate rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            {selectedPhoto
                              ? selectedPhoto[0].name
                              : "Select Logo"}
                          </div>
                          <input
                            id="images"
                            type="file"
                            onChange={(event) =>
                              setSelectedPhoto(event.target.files)
                            }
                            className="sr-only"
                            accept="image/png, image/jpeg, image/jpg"
                          />
                        </label>
                        <div className="font-small block p-2 text-sm text-gray-400">
                          only .jpg / .jpeg / .png
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    onClick={addEventOnClick}
                    className="group relative inline-flex items-center justify-start overflow-hidden rounded-full border-2 bg-blue-600 px-5 py-3 font-medium transition-all hover:border-2 hover:border-blue-600 hover:bg-white"
                  >
                    <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      Add Empanelment
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddSuccess open={openModel} title={"Doctor Added Successfully"} />
    </div>
  );
};
