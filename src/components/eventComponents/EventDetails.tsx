import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchEventQuery } from '../../features/events/getEvent';

export const EventDetails =()=>{
    const {id}=useParams();
    
    const {data,isLoading}=useFetchEventQuery(id);
    console.log(data)
    
    
    return(
        <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">


            <div className="lg:col-span-3">
                <div>
                    name
                </div>
                {/* {isLoading ? (
                  <div>loading...</div>
                ) : (
                  <div className="grid grid-cols-2 gap-10 rounded-lg  border-gray-200 lg:h-full">
                    {data &&
                      data.map((event) => (
                        <EventCard eventData={event} key={event._id} />
                      ))}
                  </div>
                )} */}
              </div>
              {/* Filters */}

              <form className="hidden lg:block">
                <h3 className="-mx-2 -my-3 flow-root">
                  <div className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Search</span>
                    <span className="ml-6 flex items-center"></span>
                  </div>
                </h3>
                {/* <Search />

                <FilterCategory
                  title={"Specialities"}
                  categories={specialities}
                /> */}
              </form>

              {/* Product grid */}
              
            </div>
          </section>
        </main>
      </div>
    </div>
    )
    
}