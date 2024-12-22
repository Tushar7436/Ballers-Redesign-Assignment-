const Infinite = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">

                    {/* Logo Carousel animation */}
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li>
                                <img src="./facebook.png" alt="Facebook" />
                            </li>
                            <li>
                                <img src="./disney.png" alt="Disney" />
                            </li>
                            <li>
                                <img src="./airbnb.png" alt="Airbnb" />
                            </li>
                            <li>
                                <img src="./apple.png" alt="Apple" />
                            </li>
                            <li>
                                <img src="./spark.png" alt="Spark" />
                            </li>
                            <li>
                                <img src="./samsung.png" alt="Samsung" />
                            </li>
                            <li>
                                <img src="./quora.png" alt="Quora" />
                            </li>
                            <li>
                                <img src="./sass.png" alt="Sass" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infinite;