import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchEventQuery } from "../../features/events/getEvent";
import { Gallery } from "../Gallery";
import { Loading } from "../Loading";

export const EventDetails = () => {
  const { id } = useParams();
  const [count,setCount]=useState<Number>(0)

  const { data, isLoading } = useFetchEventQuery(id);

  return (
    <div className="bg-white">
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          data && (
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-700">
                  {data.title}
                </h1>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pt-6 pb-24"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <div className="lg:col-span-3">
                    <img
                      src={`data:${data.images[0].contentType};base64,${data.images[0].imageBase64}`}
                      className="w-full "
                    />
                    <div className="mt-4 w-full bg-gray-200 p-3 py-6 ">
                      {data.description}
                    </div>
                    <div>
                      <Gallery Images={data.images}/>
                    </div>
                  </div>

                  <form className="hidden lg:block">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <div className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          Search
                        </span>
                        <span className="ml-6 flex items-center"></span>
                      </div>
                    </h3>
                  </form>

                  {/* Product grid */}
                </div>
              </section>
            </main>
          )
        )}
      </div>
    </div>
  );
};
