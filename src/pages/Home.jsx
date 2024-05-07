import About from "../components/home/about/About";
import Banner from "../components/home/banner/Banner";

const Home = () => {
    return (
        <div className="container px-6 py-8 mx-auto">
           <Banner/>
           <About/>
        </div>
    );
};

export default Home;