import React from "react";
import "./Carousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = ({images}) => {
    const [index, setIndex] = React.useState(0);

    const prev = () => {
        let newIndex = (index - 1 + images.length) % images.length
        setIndex(newIndex);
    }
    const next = () => {
        let newIndex = (index + 1) % images.length;
        setIndex(newIndex);
    }
    return(
    <div className="carousel">
    <button onClick={prev}><ArrowBackIosIcon/></button>
        <div className="datas">
          <h1>{images[index].title}</h1>
          <p>{images[index].subtitle}</p>
          <img src={images[index].img} alt="" />
        </div>
    <button onClick={next}><ArrowForwardIosIcon/></button>
    </div>
    )
}

export default Carousel;