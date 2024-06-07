import { useState } from "react";
import useServices from "../services/useServices";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const RequestedAssets = () => {
  const [search, setSearch] = useState("");
  const services = useServices(search);
  console.log(services);
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    setSearch(search);
  };
  return (
    <div>
      <div>
        <h1 className="text-center  text text-2xl font-bold text-gray-700 mt-5 uppercase ">
          my requested assets
        </h1>
        <hr />
        <form
          onSubmit={handleSearch}
          className="flex justify-center mt-5 
          mb-5 rounded-md rounded-s-full"
        >
          <input
            type="text"
            name="search"
            placeholder="Search for assets"
            className="rounded-s-full px-4 py-2 w-80 text-gray-700"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-e-full px-4 rounded"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <section className="container px-4 mx-auto">
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Asset Name
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Availability
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Assets Type
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Request button
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {services.map((service) => (
                        <tr key={service._id}>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {service.name}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                service.quantity > 0
                                  ? "bg-green-50 text-green-700"
                                  : "bg-red-50 text-red-700"
                              } dark:bg-gray-800`}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="currentColor"
                                />
                              </svg>

                              <h2 className="text-sm font-normal">
                                {service.quantity > 0
                                  ? "Available"
                                  : "Out of Stock"}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {service.type}
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <Button
                                onClick={open}
                                className="text-blue-500 btn btn-sm transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                disabled={service.quantity <= 0}
                              >
                                Request
                              </Button>
                              <Transition appear show={isOpen}>
                                <Dialog
                                  as="div"
                                  className="relative z-100 focus:outline-none"
                                  onClose={close}
                                  __demoMode
                                >
                                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4">
                                      <TransitionChild
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 transform-[scale(95%)]"
                                        enterTo="opacity-100 transform-[scale(100%)]"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 transform-[scale(100%)]"
                                        leaveTo="opacity-0 transform-[scale(95%)]"
                                      >
                                        <DialogPanel className="w-full max-w-md rounded-xl bg-[#0545ab] backdrop-blur-2xl p-6 ">
                                          <DialogTitle
                                            as="h3"
                                            className="text-base/7 font-medium text-white"
                                          >
                                            Payment successful
                                          </DialogTitle>
                                          <p className="mt-2 text-sm/6  text-white">
                                            Your payment has been successfully
                                            submitted. We’ve sent you an email
                                            with all of the details of your
                                            order.
                                          </p>
                                          <div className="mt-4">
                                            <Button
                                              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                              onClick={close}
                                            >
                                              Got it, thanks!
                                            </Button>
                                          </div>
                                        </DialogPanel>
                                      </TransitionChild>
                                    </div>
                                  </div>
                                </Dialog>
                              </Transition>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>

              <span>previous</span>
            </a>

            <div className="items-center hidden md:flex gap-x-3">
              <a
                href="#"
                className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
              >
                1
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                2
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                3
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                ...
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                12
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                13
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                14
              </a>
            </div>

            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RequestedAssets;
