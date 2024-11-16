import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../../assets/style/style.scss';



function ComicsSlider(){

        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                <div className='slider'>
                    <SwiperSlide>
                        <div className='slider_1'>
                            <div className="text">
                                <h2>HARACTER CLOSE-UP</h2>
                                <h1>MEET GENIS-VELL, THE SON OF THE FIRST CAPTAIN MARVEL</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_2'>
                            <div className="text">
                                <h2>THIS JANUARY</h2>
                                <h1>WATCH THE ALL-NEW 'ULTIMATE SPIDER-MAN' #1 TRAILER</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_3'>
                            <div className="text">
                                <h2>CHARACTER CLOSE-UP</h2>
                                <h1>MEET ANTI-VENOM, THE VENOM SYMBIOTE'S POLAR OPPOSITE</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_4'>
                            <div className="text">
                                <h2>ROMANCE RECAP</h2>
                                <h1>THE MANY LOVES OF NIGHTCRAWLER</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_5'>
                            <div className="text">
                                <h2>'PREDATOR: THE LAST HUNT'</h2>
                                <h1>VENGEANCE ARRIVES FOR THE GALAXY'S DEADLIEST HUNTERS</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        )
};

export default ComicsSlider;