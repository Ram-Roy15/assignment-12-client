import { useEffect, useState } from "react";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import Swal from "sweetalert2";

const MyEmployee = () => {
  const [team, setTeam] = useState();
  useEffect(() => {
    const { data } = axiosCommon(`/all-users`).then((res) => {
      setTeam(res.data);
    });
    console.log(data);
  }, []);
  console.log(team);
  const hanldeRemove = async (id) => {
    try {
      const { data } = await axiosCommon.delete(`/my-team/${id}`);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setTeam(team?.filter((u) => u._id !== id));
          console.log(data);
        }
      });
    } catch (eror) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      console.error(eror);
    }
  };
  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border flex justify-center  border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="w-[900px] border-collapse bg-white text-left text-sm text-gray-500 dark:text-gray-400 mt-7 divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Photo
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Membar Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Remove from Team
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {team
                      ?.filter((u) => u.role === "employee")
                      .map((membar, index) => (
                        <tr key={membar._id}>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {index + 1}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={membar?.img_url}
                              alt=""
                            />
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {membar?.name}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {membar?.role}
                            </div>
                          </td>
                          <td
                            onClick={() => hanldeRemove(membar._id)}
                            className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                          >
                            <div className="flex btn btn-sm bg-red-500 text-white items-center gap-x-2">
                              Remove
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
      </section>
    </div>
  );
};

export default MyEmployee;
