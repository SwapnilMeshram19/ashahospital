import { specialities } from "../components/DataArray/Specialities";
import { DoctorCard } from "../components/doctorComponents/DoctorCard";
import { EmpanelmentCard } from "../components/empanelmentComponents/EmpanelmentCard";
import { FilterCategory } from "../components/FilterCategory";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import {
  useFetchEmpanelmentsQuery,
  useFetchGovernmentEmpanelmentsQuery,
  useFetchPrivateEmpanelmentsQuery,
} from "../features/empanelment/getEmpanelments";

export const Empanelment = () => {
  const { data: governmentEmpanelment = [], isLoading: govLoading } =
    useFetchGovernmentEmpanelmentsQuery();
  const { data: privateEmpanelment = [], isLoading: privateLoading } =
    useFetchPrivateEmpanelmentsQuery();

  return (
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
              <form className="hidden lg:block">
                <h3 className="-mx-2 -my-3 flow-root">
                  <div className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Search</span>
                    <span className="ml-6 flex items-center"></span>
                  </div>
                </h3>
                <Search />
              </form>

              <div className="lg:col-span-3">
                <div>
                  <div>
                    <div>Government</div>

                    {govLoading ? (
                      <Loading />
                    ) : (
                      <div className="grid grid-cols-4 gap-10 rounded-lg  border-gray-200 hover:line-clamp-none lg:h-full">
                        {governmentEmpanelment &&
                          governmentEmpanelment.map((emp) => (
                            <EmpanelmentCard empanelment={emp} />
                          ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div>Private TPA</div>
                    {privateLoading ? (
                      <Loading />
                    ) : (
                      <div className="grid grid-cols-4  gap-10 rounded-lg  border-gray-200 hover:line-clamp-none lg:h-full">
                        {privateEmpanelment &&
                          privateEmpanelment.map((emp) => (
                            <EmpanelmentCard empanelment={emp} />
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
