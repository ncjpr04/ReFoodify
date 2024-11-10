'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from "react-icons/fa";
import 'tailwindcss/tailwind.css';
import { FaRegStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function ScrollMarque() {
    useEffect(() => {


        const animationleft1 = gsap.to("#left1", {
            x: "-20%",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                // markers: true,
                start: "top 60%",
                end: "bottom 20%",
                scrub: 1,
                // pin: true,
            }
        });
        const animationleft2 = gsap.to("#left2", {
            x: "-40%",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                // markers: true,
                start: "top 20%",
                end: "bottom 20%",
                scrub: 1,
                // pin: true,
            }
        });
        const animationright = gsap.to("#right", {
            x: "20%",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                // markers: true,
                start: "top 40%",
                end: "bottom 20%",
                scrub: 1,
                // pin: true,
            }
        });



        return () => {

            if (animationleft1.scrollTrigger) {
                animationleft1.scrollTrigger.kill();
            }
            animationleft1.kill();

            if (animationleft2.scrollTrigger) {
                animationleft2.scrollTrigger.kill();
            }
            animationleft2.kill();
            if (animationright.scrollTrigger) {
                animationright.scrollTrigger.kill();
            }
            animationright.kill();
        };
    }, []);

    return (
        <div id='reviews' className=' w-full min-h-fit relative bg-[#e0ffdd]'>
            <div id="page" className='md:h-screen min-h-[550px] max-h-[700px] pb-10 bg-gradient-to-t from-white to-white md:w-full gap-5 overflow-hidden  flex flex-col  sm:pt-12 sm:pb-10 justify-center items-center '>
                <div id="left1" className="h-fit gap-5 flex justify-center">
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82] border-[1px] shadow-lg   cursor-pointer'>
                            <img src="public\img (1).jpg" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' />
                            <div className="left w-full p-1 md:h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' /> */}
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Divyanshu Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Amazing effort in providing raw materials to empower local families—truly inspiring "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/solo.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex  justify-center  md:mt-2 gap-1 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjVCFTDcEntfy4W6tIA2Z6VsvkC4b_HKgCqpcXo8Iy8TZNIi_uGo=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Divyanshu Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaStar color="gold" /> */}
                                            <FaRegStar />
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Generous food distribution to children—heartwarming to see smiles on every face "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/TechComets/refs/heads/main/img%20(1).jpg?token=GHSAT0AAAAAACUXY73PXQVBKLTZF4BWFRVCZY3CQKQ" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/Nitin.avif" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Nitin Choudhary
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Beautifully organized food distribution—children’s faces lit up with joy! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/unlockcar.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjVmIq0p782F-okO9Gv6oo6qNFQWSZALB5o1bjvwtNiD04ItABqC=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Faiyan Ahmed
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Empowering kids through thoughtful meal distribution—hope served with every plates "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md:h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjXcLUQ0zGwW7wW7yp5kcfXWiAk-a4pmpcz24sWvW6XCYSBALwmU=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Mukesh
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Incredible initiative—delivering essential food products right where it's needed "
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="right" className=" h-fit  gap-5 justify-center flex ">
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/unlockcar.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjV9wnsZrUq0_a3VwKgnZyc9qqH_7GH8g3qruFeTVDDjhjnHA7fA=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Ritam
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Incredible initiative providing hearty meals to workers—fueling their day with warmth "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/tictactoe.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjXcLUQ0zGwW7wW7yp5kcfXWiAk-a4pmpcz24sWvW6XCYSBALwmU=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Jumma
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    "Thoughtful meal distribution along the road—making a real difference in the community "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/threemanmorris.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjXkxFCjkCi1FioCJ5zmMPCmYS-pzUqGr9puGxxC-VOYuu8wjEtfbA=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Ambar
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    "Efficiently distributing meals from the car, bringing joy to hungry kids! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/shataranj.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjWiKt8ih1_1MIuUuAq2M1F-CnQNh_j9CvgG1AEx1LBWmschQow=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Mr. Bread
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Local bakery sharing leftover bread—small acts of kindness making big impacts "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md:h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjXcLUQ0zGwW7wW7yp5kcfXWiAk-a4pmpcz24sWvW6XCYSBALwmU=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Divyanshu Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Amazing effort in providing raw materials to empower local families—truly inspiring "
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="left2" className="h-fit gap-5 justify-center flex ">
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/mancala.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjUwvwxw0PMCZGg97si3_iE3lISjBqq3lB5jP4lJZLwpr7NSyP8f=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Rahul Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Generous food distribution to children—heartwarming to see smiles on every face "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/shataranj.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjWC1QMKsIxBXPFYLCW6IPuyWBQekaR3pHCSxRbr1lCwK_qUcg=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Dharmendra Kumar Jha
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Beautifully organized food distribution—children’s faces lit up with joy! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            {/* <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/dominoes.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' /> */}
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjUpgp2AxbZ9dBFKSaCjzoNGdv-KMn4-K5PyCimjIOfheIxS6g-y=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Shiv Lakhera
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Empowering kids through thoughtful meal distribution—hope served with every plates "
                                </div>
                            </div>
                        </div>
                    </a>
                    
                    {/* <a href="#" className='h-full min-h-24 max-w-[300px] lg:min-w-[40%] max-h-[150px] min-w-[300px] md:min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#3aff82]  border-[1px] shadow-lg   cursor-pointer'>
                            <img src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/checkers.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md   ' />
                            <div className="left w-full p-1 md-h-full h-32 pb-2 rounded-2xl shadow-md  bg-white  border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center items-center  md:mt-2 gap-2 px-2 ">
                                    <img src="https://play-lh.googleusercontent.com/a-/ALV-UjX8rWNhfEI09TUii8UXwpYFBLVXJFPlIG9oTtVcIyFQDH3gm7k=s32-rw" alt="" className='profile  w-10 h-10 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-[14px] font-semibold text-black justify-between">
                                        Kalpana Sharma
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full md:px-2 h-16 rounded-xl text-black text-[12px]  text-center flex justify-center items-center">
                                    " Fun and engaging, perfect for family game nights. Love it! "
                                </div>
                            </div>
                        </div>
                    </a> */}
                    
                </div>
            </div >
        </div >
    );
}

export default ScrollMarque;

