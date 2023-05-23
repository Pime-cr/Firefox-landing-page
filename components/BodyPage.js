const BodyPage = () => {
    return ( 
        <section>
                <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
                        <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
                        <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde recusandae provident non quibusdam voluptatum accusantium similique quidem vel repellendus praesentium debitis impedit ipsa temporibus fugiat, dolorum eveniet odit officiis nihil.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src="image_content1.svg" alt="img-1" className="object-cover object-center rounded shadow-xl"/>
                    </div>
                 </div>

                <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 md:ml-16 flex flex-col items-start text-left mb-16 md:mb-0">
                        <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
                        <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde recusandae provident non quibusdam voluptatum accusantium similique quidem vel repellendus praesentium debitis impedit ipsa temporibus fugiat, dolorum eveniet odit officiis nihil.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first">
                        <img src="image_content2.svg" alt="img-1" className="object-cover object-center rounded "/>
                    </div>
                </div>

                <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
                        <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
                        <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde recusandae provident non quibusdam voluptatum accusantium similique quidem vel repellendus praesentium debitis impedit ipsa temporibus fugiat, dolorum eveniet odit officiis nihil.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src="image_content3.png" alt="img-1" className="object-cover object-center rounded "/>
                    </div>
                </div>



    </section>
     );
}
 
export default BodyPage;