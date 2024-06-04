import { BoxesLoader } from "react-awesome-loaders";
const Loader = () => {
  return (
    <div>
      <BoxesLoader
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </div>
  );
};

export default Loader;
