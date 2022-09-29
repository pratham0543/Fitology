import HomeServices from './Services/HomeSerivces.jsx';
import Start from './Getstarted/Start';
import Testi from './Testimonials/Testi';
import HomeBlog from './HomeBlogs/HomeBlog.jsx';


const Home = () => {
    return (<>
        <Start />
        <HomeServices />
        <HomeBlog />
        <Testi />

    </>
    )

}

export default Home;