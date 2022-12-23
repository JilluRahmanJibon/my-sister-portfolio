import React from 'react';

const AboutMe = () => {
    return (
        <section id='AboutMe'>
            <div  >
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 md:flex-none flex flex-col justify-center lg:items-start text-center lg:text-start items-center lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="font-bold text-blue-500 pb-4">About Me</p>
                            </div>

                            <p className="text-gray-700 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
                        </div>
                        <div className="flex flex-wrap text-center font-semibold gap-2 ">
                            <a
                                href="https://drive.google.com/uc?id=1MlOv761_8b_sBKL5LAcKfmghEPq_iR7y&authuser=0&export=download"
                                className="bg-blue-400 text-white rounded w-28 py-2  hover:bg-blue-500 transition-all"
                                aria-label="Get Resume"
                                title="Get Resume"
                            >
                                Get Resume
                            </a>
                            <a
                                href="#MySkills"
                                className="border-2 border-blue-400 text-black rounded hover:bg-blue-500 transition-all w-28 py-2"
                                aria-label="My Skills"
                                title="My Skills"
                            >
                                My Skills
                            </a >
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                        <img className="max-h-96 w-96 p-1 border-blue-500 border-2  rounded-xl object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;