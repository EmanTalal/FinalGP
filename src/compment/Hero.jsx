function Hero({ formData, cityDescription }) {
  return (
    <>
      <div className="hero h-96 bg-[url(https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Hello From {formData.destination}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
