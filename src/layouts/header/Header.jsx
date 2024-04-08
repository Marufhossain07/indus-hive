import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';

import '../../index.css';
import './swiper-custom.css'
import { Navigation } from 'swiper/modules';
const Header = () => {
    return (
        <div className='text-white font-pop mt-14'>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className='banner3 py-48 rounded-lg'>
                    <div className='text-left pl-14 space-y-4'>
                        <div className='flex  gap-3 items-center'>
                        <hr className='border border-orange-500 w-10'/>
                        <h3 className='text-xl font-medium'>Experts in field</h3>
                        </div>
                        <h3 className='text-5xl pb-2 font-semibold'>We Plan Your Big Dreams <br /> With Expertise</h3>
                        <p className='font-inter pb-7'>Unlock Your Industrial Potential: Find Prime Spaces <br /> for Manufacturing, Warehousing & More!</p>
                        <button className='btn font-inter py-2 px-5 bg-orange-500 border-none text-white'>Check Now</button>
                    </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                <div className='banner2 py-48 rounded-lg'>
                    <div className='text-left pl-14 space-y-4'>
                        <div className='flex  gap-3 items-center'>
                        <hr className='border border-orange-500 w-10'/>
                        <h3 className='text-xl font-medium'>Team You Want</h3>
                        </div>
                        <h3 className='text-5xl pb-2 font-semibold'>We Do Only What We Are <br /> Great On</h3>
                        <p className='font-inter pb-7'>Specializing in Industrial Excellence: Focused <br /> Solutions for Your Business Success</p>
                        <button className='btn font-inter py-2 px-5 bg-orange-500 border-none text-white'>Check Now</button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='banner1 py-48 rounded-lg'>
                    <div className='text-left pl-14 space-y-4'>
                        <div className='flex  gap-3 items-center'>
                        <hr className='border border-orange-500 w-10'/>
                        <h3 className='text-xl font-medium'>Best Place To Explore</h3>
                        </div>
                        <h3 className='text-5xl pb-2 font-semibold'>Powering Industry: Discover <br /> Dynamic Plants</h3>
                        <p className='font-inter pb-7'>Empowering Industries: Explore Cutting-edge Power <br /> Plants for Sustainable Growth</p>
                        <button className='btn font-inter py-2 px-5 bg-orange-500 border-none text-white'>Check Now</button>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;