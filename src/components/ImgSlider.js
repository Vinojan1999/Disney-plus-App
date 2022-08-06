import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h2>1</h2>
                </div>
                <div>
                    <h2>2</h2>
                </div>
                <div>
                    <h2>3</h2>
                </div>
            </Slider>
        </div>
    )
};

export default ImgSlider;