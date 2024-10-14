import React, { useContext, useEffect, useRef, useState } from 'react'
import './Home.css'
import PieChart from '../PieChart/PieChart'
import BarGraph from '../BarGraph/BarGraph'
import RoundedGraph from '../RoundedGraph/RoundedGraph';
import LineGraph from '../LineGraph/LineGraph';
import { UserContext } from '../SidebarProvider/SidebarProvider';
import profile from '../../assets/images/profile.png'

export default function Home() {
    const [activeIndices, setActiveIndices] = useState([false, false, false,  false]);
    const revealRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; 
    const {show} = useContext(UserContext);

    const handleScroll = () => {
        const newActiveIndices = revealRefs.map((ref) => {
            if (ref.current) {
                const windowHeight = window.innerHeight;
                const revealTop = ref.current.getBoundingClientRect().top;
                const revealPoint = 150; 
                return revealTop < windowHeight - revealPoint;
            }
            return false;
        });
        setActiveIndices(newActiveIndices);
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    let customSidebar = {
        marginLeft : `${show ? '0px': '200px'}`,
        transition: 'all 1s linear',
    }
  return (
    <section style={customSidebar}>
        <div className='text-center home_sub_container p-3'>
                <h1>Welcome to ICampus Buddy</h1>
                <p>ICampus Buddy is a platform designed to help students stay organized and motivated throughout their college journey.</p>
            </div>
            <div className='p-3 profile_container m-5 h-100 d-flex '>
                <div className='d-flex flex-column align-items-center profile_sub_container p-4 h-100 position-relative'>
                    <span>Profile Picture</span>
                    <img src={profile} alt='profile-picture' className='w-100 pt-3'/>
                    <span className='pt-3 text-danger'>Student ID: 12345</span>
                </div>
                <div className='w-100 p-4'>
                    <span className='d-block text-center registered_text'>Registered Information</span>
                    <div className='mt-3 registration_info_container'>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Name</span>
                            <span>Jhon Doe</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Status</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Status Date</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Staff No.</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Old Staff No.</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Old Staff No.</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Old Staff No.</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Old Staff No.</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Old Staff No.</span>
                            <span>Approved</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center common_border_line px-2 py-2'>
                            <span>Old Staff No.</span>
                            <span>Approved</span>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={revealRefs[0]} className={`m-5 bg-white graphs_container reveal ${activeIndices[0] ? "active" : ""}`} >
                    <div className='row justify-content-between p-3'>
                        <div className='col-8 h-100'>
                            <span className='text-center pb-4 d-block fw-bold'>3 Years Teachers Strength</span>
                            <BarGraph />
                        </div>
                        <div className='col-4 h-100 align-self-center p-3'>
                            <span className='text-center pb-2 d-block fw-bold'>3 Years Teachers Strength Group Level</span>
                            <PieChart />
                        </div>
                    </div>
            </div>
            <div ref={revealRefs[1]} className={`m-5 bg-white graphs_container reveal ${activeIndices[1] ? "active" : ""}`} >
                    <div className='row justify-content-between p-3'>
                        <div className='col-8 h-100'>
                            <span className='text-center pb-4 d-block fw-bold'>3 Years Teachers Strength</span>
                            <LineGraph />
                        </div>
                        <div className='col-4 h-100 align-self-center p-3'>
                            <span className='text-center pb-2 d-block fw-bold'>3 Years Teachers Strength Group Level</span>
                            <RoundedGraph />
                        </div>
                    </div>
            </div>
            <div ref={revealRefs[2]} className={`px-3 py-5 profile_container m-5 reveal ${activeIndices[2] ? "active" : ""} position-relative`}>
                <span className='common_text_snap px-3 py-2'>General Snapshot</span>
                <ul className='d-flex flex-wrap justify-content-center align-items-center gap-5 mt-4'>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                            <i className="fa-solid fa-school icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span>1</span>
                                <span>Schools</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                            <i className="fa-solid fa-graduation-cap icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='d-block'>4</span>
                                <span className='d-block'>Boards</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                            <i className="fa-solid fa-laptop-file icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='d-block'>5</span>
                                <span className='d-block'>Wings</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                        <i className="fa-brands fa-google-scholar icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='d-block'>26</span>
                                <span className='d-block'>Grades</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                        <i className="fa-solid fa-graduation-cap icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='d-block'>6</span>
                                <span className='d-block'>Students</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                        <i className="fa-solid fa-person-chalkboard icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='d-block'>0</span>
                                <span className='d-block'>Teachers</span>
                            </div>
                        </li>
                        <li className='d-flex justify-content-around align-items-center cards p-4'>
                        <i className="fa-solid fa-clipboard-user icons_sizes"></i>
                            <div className='d-flex flex-column align-items-center'>
                                <span className='d-block'>11</span>
                                <span className='d-block'>Staff</span>
                            </div>
                        </li>
                    </ul>
            </div>
            <div ref={revealRefs[3]} className={`px-3 py-5 profile_container mx-5 mt-5 reveal ${activeIndices[3] ? "active" : ""} position-relative`}>
            <span className='common_text_snap px-3 py-2'>CRM Snapshot</span>
                <ul className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span>0</span>
                        <span>Open Leads</span>
                    </li>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span className='d-block'>2</span>
                        <span className='d-block'>Registration</span>
                    </li>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span className='d-block'>3</span>
                        <span className='d-block'>Future Admissions</span>
                    </li>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span className='d-block'>6</span>
                        <span className='d-block'>Admitted</span>
                    </li>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span className='d-block'>1</span>
                        <span className='d-block'>TC Applied</span>
                    </li>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span className='d-block'>0</span>
                        <span className='d-block'>TC Approved</span>
                    </li>
                    <li className='d-flex flex-column justify-content-center align-items-center cards'>
                        <span className='d-block'>0</span>
                        <span className='d-block'>Left</span>
                    </li>
                </ul>
            </div>
    </section>
  )
}
