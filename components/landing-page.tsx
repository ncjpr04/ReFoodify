'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Reviews from './reviews'
import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal'
import Slider from './image-slider'
import {Search, Truck, Recycle, Clock, MapPin, Award } from 'lucide-react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Leaderboard from './leaderboard'
import Image from 'next/image'
export function LandingPageComponent() {
  const [email, setEmail] = useState('')

  const { ref, inView } = useInView({
    triggerOnce: true, // Start the counter only once when it comes into view
  });

  return (
    <div id="home" className="flex flex-col min-h-screen">


      <main className="flex-1 w-full">
        {/* <ImageSlider /> */}

        <section className="w-full py-32 bg-white">
          <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-10 p-5 lg:space-y-0 lg:space-x-10">



            {/* Right Content: Text + Buttons + Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
                <span className="text-green-600">Reduce Food Waste,</span> <br /> Feed Communities <br /> With <span className='text-green-800'>ReFoodify</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Help redistribute excess food by connecting with local retailers and restaurants, or reduce waste by donating or composting.
              </p>

              {/* Call to Action Buttons */}
              <div className="space-x-4 ">
                <Modal>
                  <ModalTrigger className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                    Donate Now!
                  </ModalTrigger>


                  <ModalBody>
                    <ModalContent>
                      <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"> {/* Changed max-w-md to max-w-lg */}
                          <div className="mb-4">
                          </div>
                          <div className="modal-body">
                            <form id="donationForm">
                              <div className="mb-4">
                                <input type="text" id="name" className="form-control border border-gray-300 rounded-lg p-2 w-full" placeholder="Your Name" required />
                              </div>
                              <div className="mb-4">
                                <input type="text" id="restaurantName" className="form-control border border-gray-300 rounded-lg p-2 w-full" placeholder="Organisation Name (Optional)" />
                              </div>
                              <div className="mb-4">
                                <input type="tel" id="contactNumber" className="form-control border border-gray-300 rounded-lg p-2 w-full" placeholder="Contact Number" required />
                              </div>
                              <div className="mb-4">
                                <input type="email" id="email" className="form-control border border-gray-300 rounded-lg p-2 w-full" placeholder="Email" required />
                              </div>
                              <div className="mb-4">
                                <select id="foodQuality" className="form-control border border-gray-300 rounded-lg p-2 w-full" required>
                                  <option value="">Food Quality</option>
                                  <option value="Good">Good</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Compost">Compost</option>
                                </select>
                              </div>
                              <div className="mb-4">
                                <input type="number" id="foodQuantity" className="form-control border border-gray-300 rounded-lg p-2 w-full" placeholder="Food Quantity (kg)" min="15" required />
                              </div>
                              <div className="mb-4">
                                <input type="text" id="address" className="form-control border border-gray-300 rounded-lg p-2 w-full" placeholder="Type your address" required />
                              </div>
                              <button type="submit" className="bg-green-600 text-white rounded-lg py-2 px-4 w-full hover:bg-green-500 transition duration-300">Donate</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </ModalContent>
                  </ModalBody>
                </Modal>
                <button className="bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                  List Excess Food
                </button>
              </div>

              {/* Location Search Form */}
              <form className="w-full max-w-md mt-4 flex space-x-2">
                <input
                  type="text"
                  className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your location"
                />
                <button type="submit" className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-lg transition duration-300">
                  <Search />
                </button>
              </form>
            </div>
            {/* Left Content: Image */}
            <div className="w-full lg:w-1/2 ">
              <Slider />
              {/* <img src="https://raw.githubusercontent.com/ncjpr04/TechComets/refs/heads/main/image%20(1)-min.png?token=GHSAT0AAAAAACUXY73OVZNBXVLZYYDX2UFUZY3FD7A" alt="Food Waste Reduction" className="rounded-2xl shadow-lg object-cover w-full h-full" /> */}
            </div>
          </div>
        </section>
        {/* <Slider /> */}

        <section id="how-it-works" className="w-full flex-col gap-10 flex justify-center items-center">
          <Image src="https://raw.githubusercontent.com/ncjpr04/TechComets/refs/heads/main/chart2.jpg"  alt='chart' className='w-fit' height={1000} width={1000} />
          {/* WIP */}
          <div className="container px-4 md:px-6 gap-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className='hover:bg-green-50 border-[#9dffc1]'>
                <CardContent className="flex flex-col  pt-5  items-center space-y-4 p-6">
                  <Search className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Find Excess Food</h3>
                  <p className="text-center text-gray-500">Browse listings from local businesses.</p>
                </CardContent>
              </Card>
              <Card className='hover:bg-green-50 border-[#9dffc1]'>
                <CardContent className="flex flex-col  pt-5 items-center justify-center space-y-4 p-6">
                  <Truck className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Claim & Collect</h3>
                  <p className="text-center text-gray-500">Reserve your food and pick it up.</p>
                </CardContent>
              </Card>
              <Card className='hover:bg-green-50 border-[#9dffc1]'>
                <CardContent className="flex flex-col  pt-5  items-center space-y-4 p-6">
                  <Recycle className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Contribute or Compost</h3>
                  <p className="text-center text-gray-500">Ensure unused food gets to those who need it or is composted responsibly.</p>
                </CardContent>
              </Card>
            </div>
           {/* WIP */}
            <Image src="https://raw.githubusercontent.com/ncjpr04/TechComets/refs/heads/main/chart1.jpg" alt="chart" width={1000} height={1000} />
          </div>
        </section>
        <Leaderboard/>
        <section
          id="impact"
          className="w-full py-12 md:py-24 lg:py-32 rounded-2xl border border-[#9dffc1] bg-green-50 flex justify-center items-center"
          ref={ref} // Attach the ref to the section
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Making a Real Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className=' hover:shadow-md border-[#9dffc1] hover:shadow-[#9dffc1]'>
                <CardContent className="flex  pt-5  flex-col items-center space-y-4 p-6">
                  <p className="text-4xl font-bold text-green-500">
                    {inView && (
                      <CountUp
                        start={0}
                        end={100}
                        suffix="+"
                        duration={2}
                        redraw={true}
                      />
                    )}
                  </p>
                  <p className="text-xl font-semibold">Tons of Food Saved</p>
                </CardContent>
              </Card>
              <Card className=' hover:shadow-md border-[#9dffc1] hover:shadow-[#9dffc1]'>
                <CardContent className="flex flex-col  pt-5  items-center space-y-4 p-6">
                  <p className="text-4xl font-bold text-green-500">
                    {inView && (
                      <CountUp
                        start={0}
                        end={5000}
                        suffix="+"
                        duration={2}
                        redraw={true}
                      />
                    )}
                  </p>
                  <p className="text-xl font-semibold">Meals Provided</p>
                </CardContent>
              </Card>
              <Card className=' hover:shadow-md border-[#9dffc1] hover:shadow-[#9dffc1]'>
                <CardContent className="flex flex-col   pt-5 items-center space-y-4 p-6">
                  <p className="text-4xl font-bold text-green-500">
                    {inView && (
                      <CountUp
                        start={0}
                        end={50}
                        suffix="+"
                        duration={2}
                        redraw={true}
                      />
                    )}
                  </p>
                  <p className="text-xl font-semibold">Tons of Waste Reduced</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-10 w-10 text-green-500" />
                <h3 className="font-bold text-lg">Real-Time Listings</h3>
                <p className="text-base text-gray-500">See available food in real-time.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <MapPin className="h-10 w-10 text-green-500" />
                <h3 className="font-bold text-lg">Geolocation Matching</h3>
                <p className="text-base text-gray-500">Find food nearby easily.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Recycle className="h-10 w-10 text-green-500" />
                <h3 className="font-bold text-lg">Composting Integration</h3>
                <p className="text-base text-gray-500">Ensure food that can&apos;t be used goes to compost, not landfill.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Award className="h-10 w-10 text-green-500" />
                <h3 className="font-bold text-lg">Incentives & Rewards</h3>
                <p className="text-base text-gray-500">Earn rewards for saving food.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full   flex-col flex justify-center items-center">
          {/* <div className="container"> */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
          <div className='rounded-2xl overflow-hidden w-screen'>
            <Reviews />
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User"
                    className="rounded-full"
                    width={100}
                    height={100}
                  />
                  <p className="text-center italic">"This platform has revolutionized how we handle excess food. It's a win-win for everyone!"</p>
                  <p className="font-semibold">- Sarah, Local Restaurant Owner</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User"
                    className="rounded-full"
                    width={100}
                    height={100}
                  />
                  <p className="text-center italic">"We've been able to feed so many more people in need thanks to this incredible initiative."</p>
                  <p className="font-semibold">- John, Charity Coordinator</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User"
                    className="rounded-full"
                    width={100}
                    height={100}
                  />
                  <p className="text-center italic">"I love being able to get quality food at a discount while helping reduce waste. It's amazing!"</p>
                  <p className="font-semibold">- Emily, Consumer</p>
                </CardContent>
              </Card>
            </div> */}
          {/* </div> */}
        </div>

        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Saving Food Today!</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community and make a difference in reducing food waste.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Donate Now!</Button>
                <Button variant="outline">List Of Excess Food!</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 UrbanFoodSaver. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Input
            className="max-w-lg flex-1"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" size="sm">
            Subscribe
          </Button>
        </div>
      </footer>
    </div>
  )
}
