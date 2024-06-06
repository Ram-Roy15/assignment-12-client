import { DNA } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-screen  h-screen flex justify-center items-center">
      <DNA
        visible={true}
        height="150"
        width="150"
        color="#4fa94d"
        type="ThreeDots"
        timeout={10000}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default LoadingSpinner;
