import { useContext } from 'react';
import { Providers } from '../../AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(Providers);

    return (
        <div className='max-w-[1140px] mx-auto mt-10'>
            <div className='border-l-2 border-orange-400 pl-5'>
                <h3 data-aos="fade-right" data-aos-duration='1000' className='font-inter text-xl'>Welcome back, <span className='font-pop text-2xl font-semibold'>{user.displayName}</span> <br /> We are glad to see you again.</h3>
            </div>
            <div className='mt-10'>
                <h3 data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1000' className='text-3xl font-pop font-medium border-b-2 border-orange-400 pb-1'>User Profile Preview</h3>
                <div data-aos="zoom-in" data-aos-duration='1000' data-aos-delay='1200' className="card h-full mt-10 w-72 mx-auto bg-base-100 border border-orange-300 shadow-orange-200 shadow-xl">
                    <figure className="px-5 pt-5">
                        <div>
                            <img src={user.photoURL} alt="" className="rounded-xl h-60" />

                        </div>
                    </figure>
                    <div className="card-body text-center px-0 font-inter">
                        <h2 className="font-semibold text-xl font-pop">{user.displayName}</h2>
                        <p>{user.email}</p>

                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h3 data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1300' className='text-3xl font-pop font-medium border-b-2 border-orange-400 pb-1'>Recent Activity</h3>
                <p data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1400' className='text-lg font-inter mt-2'>Welcome to Activity log. Here you can view <br /> and manage your IndusHive Activity. Such as viewed property, your daily active duration. You can also delete them.</p>
                <div data-aos="fade-right" data-aos-duration='1000'  className='text-lg mt-2 space-y-2 font-medium'>
                    <h3>Total Viewed Property : 20</h3>
                    <h3>Property Bought : 2</h3>
                    <h3>Property Rented : 1</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;