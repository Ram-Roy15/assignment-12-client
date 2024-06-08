import { useEffect, useState } from "react";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import { Helmet } from "react-helmet-async";

const MyTeam = () => {
  const [team, setTeam] = useState();
  useEffect(() => {
    const { data } = axiosCommon(`/all-users`).then((res) => {
      setTeam(res.data);
    });
    console.log(data);
  }, []);
  console.log(team);

  return (
    <div>
      <Helmet>
        <title>My team</title>
      </Helmet>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border flex justify-center  border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="w-[600px] mt-7 divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {team
                      ?.filter((u) => u.role === "employee")
                      .map((membar) => (
                        <tr key={membar._id}>
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

export default MyTeam;
