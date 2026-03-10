import LoadingAnimation from "./../assets/Loading_Paperplane.gif";

const Loader = () => {
  return(
    <div className="h-full w-full bg-white">
      <img className="h-20 w-20" src={LoadingAnimation} alt="loading" />
    </div>
  )
};

export default Loader;