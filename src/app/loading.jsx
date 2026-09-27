const Loading = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>

        <p className="text-sm text-[#9CA3AF]">Loading exercises...</p>
      </div>
    </section>
  );
};

export default Loading;
