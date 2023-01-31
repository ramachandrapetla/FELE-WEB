import './Home.css'

const Home = () => {
    return (
        <div className='body-height'>
            <div className='h-full w-full grid grid-cols-4 grid-rows-1 gap-4 p-8'>
                <img className='col-span-2' src="https://www.citypng.com/public/uploads/small/51614557777dpetxlu4tamyymayuq2d41yxi35na8jqhsvpyox41hkb6ra3mashujlljqmzzk0ugqdz5tbukkdxt5pkzshu0hb9puvnhyqaduso.png" alt="Blockchain Network" />
                <div className="col-span-2 title-content">
                    <h1 className="heading">FELE</h1>
                    <p className="sub-heading">Fabric Experimentation and Learning Environment</p>
                </div>
            </div>
        </div>
    )
}

export default Home;