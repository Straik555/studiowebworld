import React from "react";
import Slider from "react-slick";

import {list} from "./list";

export const SliderBlock = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={'slider-wrap'}>
            <Slider {...settings}>
                {list.map(item => (
                    <div
                        className={'element'}
                        key={item.id}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="button">
                            <button className={'more'}>Узнать Больше</button>
                            <button className={'join'}>Присоединится</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}