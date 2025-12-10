import LoadingAnimation from "./../assets/Loading_Paperplane.gif";

const Loader = () => {
  return(
    <div className="100vh 100vw justify-center items-center bg-white">
      <img className="h-20 w-20" src={LoadingAnimation} alt="loading" />
    </div>
  )
};

export default Loader;