
import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Providers } from '../../AuthProvider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user } = useContext(Providers)
    const auth = getAuth()

    const handleUpdate = e => {
       e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
           
        })
        .catch(() => {
           
        });
        
    }

    return (
        <div>
            <Helmet>
                <title>IndusHIve | Update Profile</title>
            </Helmet>
            <div >
                <div  data-aos="fade-right" data-aos-duration='1000' className="card h-full mt-10 w-72 mx-auto bg-base-100 border border-orange-300 shadow-orange-200 shadow-xl">
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
                <div  data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1000' className="mt-10">
                    <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-orange-200">
                        <h1  data-aos="zoom-in" data-aos-duration='1000' data-aos-delay='1500' className="text-2xl font-bold text-center">Update Your Information</h1>
                        <form onSubmit={handleUpdate} noValidate="" action="" className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1600' className="block font-bold text-lg dark:text-gray-600">Name</label>
                                <input data-aos="fade-left" data-aos-duration='1000' data-aos-delay='1700' type="text" required name="name" id="name" defaultValue={user.displayName} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1800' className="block font-bold text-lg dark:text-gray-600">Photo URL</label>
                                <input data-aos="fade-left" data-aos-duration='1000' data-aos-delay='1900' type="text" required name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>


                            <button  data-aos="zoom-out" data-aos-duration='1000' data-aos-delay='1200' className='btn w-full font-bold font-inter py-2 px-8 bg-orange-500 border-none text-white'>Register</button>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;