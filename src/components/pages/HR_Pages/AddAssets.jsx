import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useState } from "react";

const AssetsAdd = () => {
  const { loading, setLoading, user } = useAuth();
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const axiosCommon = useAxiosCommon();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;

    const quantity = e.target.quantity.value;
    console.log(name, startDate, type, quantity);
    const data = {
      email: user?.email,
      name,
      startDate,
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
    <div className="max-w-md mx-auto mt-10  bg-base-100 p-8 rounded-md shadow-md">
      <h1 className="text-2xl text-center font-bold mb-4">Add Product</h1>
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
              <option value="Retunrable">Returnable</option>
              <option value="Non_returnable">Non_Returnable</option>
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
              placeholder="Enter Quantity"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#064694] bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Date
            </label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
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

export default AssetsAdd;
