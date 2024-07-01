import SectionTitle from "../../../Components/SectionTitle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"testimonials"}
            >
            </SectionTitle>
            <div className="text-center">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews?.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <Rating className="mx-auto mb-10"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="mx-auto w-[100px] h-[100px] text-black mb-10"></FaQuoteLeft>
                            <p>{review.details}</p>
                            <h3 className="text-xl text-orange-500 font-bold">{review.name}</h3>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;