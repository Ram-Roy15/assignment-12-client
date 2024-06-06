import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";

import useAxiosCommon from "../../hooks/useAxiosCommon";

const AddAssets = () => {
  const { loading, setLoading, user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const quantity = e.target.quantity.value;
    console.log(name, type, quantity);
    const data = {
      email: user?.email,
      name,
      type,
      quantity,
    };
    try {
      const res = await axiosCommon.post(`/products`, data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Poducts Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Product Type
            </label>
            <select
              name="type"
              id="type"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
            >
              <option value="retunrable">Returnable</option>
              <option value="non_returnable">Non_Returnable</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Poducts Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              required
              placeholder="Enter Your Email Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#064694] w-full  rounded-md py-3 text-white"
          >
            {loading ? (
              <TbFidgetSpinner
                size={24}
                className="animate-spin font-bold  m-auto"
              />
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAssets;
