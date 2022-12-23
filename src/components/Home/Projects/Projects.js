import React from 'react';

const Projects = () => {
    return (
        <section id='Projects' className='py-20'>
            <h1 className='text-blue-500 font-bold lg:pb-0 pb-5 lg:text-start text-center'>Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                <div >
                    <img className='max-h-96 rounded-t w-full object-cover' src="https://jillurahmanjibon.netlify.app/static/media/lg-view.4b412053437aa1248cbe.png" alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='font-semibold text-2xl'>Project Name </h1>
                        <a className='font-bold border border-slate-500 text-blue-500 hover: py-2 px-4 hover:bg-blue-500 hover:text-white  transition-all rounded-sm ' href="/">Details </a>
                    </div>
                    <a href="/" className='bg-blue-500 py-2 block text-center font-semibold text-white hover:bg-blue-600 transition-all rounded-b'>View Project</a>
                </div>
                <div  >
                    <img className='max-h-96 rounded-t w-full object-cover' src="https://jillurahmanjibon.netlify.app/static/media/lg-view.4b412053437aa1248cbe.png" alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='font-semibold text-2xl'>Project Name </h1>
                        <a className='font-bold border border-slate-500 text-blue-500 hover: py-2 px-4 hover:bg-blue-500 hover:text-white  transition-all rounded-sm ' href="/">Details </a>
                    </div>
                    <a href="/" className='bg-blue-500 py-2 block text-center font-semibold text-white hover:bg-blue-600 transition-all rounded-b'>View Project</a>
                </div>
                <div >
                    <img className='max-h-96 rounded-t w-full object-cover' src="https://jillurahmanjibon.netlify.app/static/media/lg-view.4b412053437aa1248cbe.png" alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='font-semibold text-2xl'>Project Name </h1>
                        <a className='font-bold border border-slate-500 text-blue-500 hover: py-2 px-4 hover:bg-blue-500 hover:text-white  transition-all rounded-sm ' href="/">Details </a>
                    </div>
                    <a href="/" className='bg-blue-500 py-2 block text-center font-semibold text-white hover:bg-blue-600 transition-all rounded-b'>View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;