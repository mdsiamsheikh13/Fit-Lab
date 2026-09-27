import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="text-7xl font-bold text-[#C2F800]">404</p>

        <h1 className="mt-4 text-3xl font-bold text-white">Page Not Found</h1>

        <p className="mt-3 max-w-md text-[#9CA3AF]">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="btn mt-6 bg-[#C2F800] text-black hover:bg-[#C2F800]"
        >
          Back to Workouts
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
