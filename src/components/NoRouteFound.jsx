import ErrorImage from "/404-Error.png";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const NoRouteFound = () => {
  const err = useRouteError();
  return (
    <div className="w-full h-screen text-center bg-slate-200">
      <div className="flex flex-row items-center justify-center">
        <img
          src={ErrorImage}
          alt="Error Image"
          className="object-cover w-1/2 h-1/2"
        />
      </div>
      <h1 className="m-2 text-2xl">
        Oops! The Path you&apos;re looking for can&apos;t be found.
      </h1>
      <h3 className="p-3 text-xl">{err.data}</h3>
      <h3 className="p-5">
        <Link
          className="p-3 font-sans text-xl font-bold text-white bg-orange-500 rounded-lg"
          to="/">
          Back Home
        </Link>
      </h3>
    </div>
  );
};

export default NoRouteFound;
