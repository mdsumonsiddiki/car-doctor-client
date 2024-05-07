import About from "../components/home/about/About";
import Banner from "../components/home/banner/Banner";
import Services from "../components/home/services/Services";

const Home = () => {
    return (
        <div className="container px-6 py-8 mx-auto">
           <Banner/>
           <About/>
           <Services/>
        </div>
    );
};

export default Home;