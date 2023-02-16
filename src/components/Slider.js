import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: false,
            centerMode: true,
            centerPadding: "60px"
        };
        return (
            <div className={'container'}>
                <h2>Auto Play</h2>
                <Slider className = 'slider' {...settings}>
                    <div className='box'>
                    <div className='sliderBlock' >
                        <img className='sliderImg' src='https://img.championat.com/news/big/d/r/lionel-messi-igrat-v-futbol-eto-dar_1591983547879932178.jpg'/>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='sliderBlock'>
                        <img className='sliderImg' src='https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?center=0.25143824027072759,0.3685000505358606&mode=crop&rnd=133202937611530000'/>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='sliderBlock'>
                        <img className='sliderImg' src='https://images.hindustantimes.com/img/2022/09/21/1600x900/FBL-EUR-C3-SHERIFF-MAN-UNITED-4_1663736556001_1663736556001_1663736617092_1663736617092.jpg'/>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='sliderBlock'>
                        <img className='sliderImg' src='https://interestingfootball.com/wp-content/uploads/2022/02/512px-Kylian_Mbappe_2.jpg'/>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='sliderBlock'>
                        <img className='sliderImg' src='https://www.vbetnews.com/uploads/2022/01/271859500_244314347726441_892959753598144613_n-e1642514208211-910x1024.jpg'/>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='sliderBlock'>
                        <img className='sliderImg' src='https://cdn.mos.cms.futurecdn.net/uzMGrKrxN467SmL4SFuEML.jpg'/>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='sliderBlock'>
                    <img className='sliderImg' src='https://imageio.forbes.com/specials-images/imageserve/633b6c847b304297ba78b209/Kylian-Mbappe-of-Paris-Saint-Germain-reacts-after-scoring-during-match-against-OGC/0x0.jpg?format=jpg&crop=3261,1331,x0,y489,safe&height=1331&width=3261'/>
                    </div>
                    </div>

                </Slider>
            </div>
        );
    }
}