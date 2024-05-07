import Slider from "./Slider";
import bgimgs1 from '../../../assets/images/banner/1.jpg'
import bgimgs2 from '../../../assets/images/banner/2.jpg'
import bgimgs3 from '../../../assets/images/banner/3.jpg'
import bgimgs4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <Slider bgimg={bgimgs1}/>
      <div className="absolute bottom-6 right-14 space-x-5 z-50">
        <a href="#slide4" className="btn btn-circle hover:bg-red">❮</a> 
        <a href="#slide2" className="btn btn-circle hover:bg-red">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <Slider bgimg={bgimgs2}/>
      <div className="absolute bottom-6 right-14 space-x-5 z-50">
        <a href="#slide1" className="btn btn-circle hover:bg-red">❮</a> 
        <a href="#slide3" className="btn btn-circle hover:bg-red">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
    <Slider bgimg={bgimgs3}/>
      <div className="absolute bottom-6 right-14 space-x-5 z-50">
        <a href="#slide2" className="btn btn-circle hover:bg-red">❮</a> 
        <a href="#slide4" className="btn btn-circle hover:bg-red">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
    <Slider bgimg={bgimgs4}/>
      <div className="absolute bottom-6 right-14 space-x-5 z-50">
        <a href="#slide3" className="btn btn-circle hover:bg-red">❮</a> 
        <a href="#slide1" className="btn btn-circle hover:bg-red">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Banner;
