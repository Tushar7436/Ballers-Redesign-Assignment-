
export const AboutUsPage = () => {
  return (
    <div className ="relative bg-fixed bg-no-repeat bg-cover bg-center">
      <section className="sticky top-0 h-screen w-full font-poppins" id ="first">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <h1 className="font-playfair text-black text-4xl md:text-6xl font-bold mt-12 mb-2">
            Stop being Introverted
          </h1>
          <p className="text-black text-lg md:text-2xl font-light">
            Show Yourself with Us.
          </p>
        </div>

        <iframe
          src="https://my.spline.design/untitled-81091ba6f7db7fba14e41a82633b20ca/"
          frameBorder="0"
          className="relative inset-0 w-full h-full z-0"
        ></iframe>
      </section>

      {/* Main About Us Content */}
      <section id="second">
      <div className="container sticky top-0 h-[120vh] z-5 mx-auto px-4 py-12 bg-gradient-to-b from-[#2C1B47] via-[#1A0B2E] to-[#2C1B47]">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fadeInUp">
          About Ballers
        </h1>

        <div className="max-w-4xl mx-auto">
          <section className="mb-12 grid md:grid-cols-2 gap-8 items-center animate-fadeInUp">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                Ballers is dedicated to revolutionizing sports investments by
                providing Ultra High Net Worth Individuals (UHNIs) with
                exclusive opportunities to invest in and own premium sports
                assets. We aim to create a community of passionate sports
                enthusiasts who can make a significant impact in the world of
                sports.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Mission"
                className="w-full h-auto rounded"
              />
            </div>
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-8 items-center animate-fadeInUp">
            <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 md:order-first">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Vision"
                className="w-full h-auto rounded"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                We envision a future where sports investments are not just
                financial decisions, but a way to actively participate in
                shaping the future of sports. Ballers strives to be the premier
                platform that connects visionary investors with groundbreaking
                opportunities in the sports industry.
              </p>
            </div>
          </section>

          <section className="mb-12 animate-fadeInUp">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300 mb-6">
              Ballers is powered by a team of seasoned professionals with
              extensive experience in sports management, finance, and
              technology. Our experts are committed to providing unparalleled
              insights and guidance to our members, ensuring that every
              investment opportunity is thoroughly vetted and aligned with our
              community's interests.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((member) => (
                <div
                  key={member}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                >
                  <img
                    src={`/placeholder.svg?height=150&width=150&text=Team Member ${member}`}
                    alt={`Team Member ${member}`}
                    className="w-24 h-24 rounded-full mx-auto mb-2"
                  />
                  <p className="font-semibold">Team Member {member}</p>
                  <p className="text-sm text-gray-400">Position</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center animate-fadeInUp">
            <p className="text-2xl font-bold text-gold">
              Invest in Sports. Support Champions.
            </p>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};
