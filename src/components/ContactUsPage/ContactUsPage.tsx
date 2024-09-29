import React from "react";

const ContactUsPage = () => {
    return (
        <section className="grid place-items-center mt-10">
            <div className="w-4/6 mb-10">
                <h1 className="text-center text-6xl font-semibold mb-11">Contact Us</h1>
                <p className="text-center text-2xl">Welcome to our Contact Us page! We're here to help with any questions, feedback, or concerns you may have. Please don't hesitate to reach out to us – our team is dedicated to providing you with the best service possible. We look forward to hearing from you!</p>
            </div>
            <div className="flex flex-col  bg-indigo-200">
                <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col w-1/2">
                        <h2 className="text-5xl font-medium mb-5">Get In Touch</h2>
                        <p className="text-xl font-semibold opacity-60">Have any questions or need assistance? Reach out to us, and we'll get back to you as soon as possible!</p>
                        <div className="flex mt-7">
                            <img className="w-[50px] transform transition-transform duration-500 hover:scale-125" src="https://www.svgrepo.com/show/127575/location-sign.svg" alt="" />
                            <div className="ml-4">
                                <p className="text-2xl font-medium">Address</p>
                                <p className="text-2xl opacity-60">London Eye, London, UK</p>
                            </div>
                        </div>
                        <div className="flex mt-7">
                            <img className="w-[50px] transform transition-transform duration-500 hover:scale-125" src="https://www.svgrepo.com/show/64208/phone.svg" alt="" />
                            <div className="ml-4">
                                <p className="text-2xl font-medium">Phone Number</p>
                                <p className="text-2xl opacity-60">+123-456-7890</p>
                            </div>
                        </div>
                        <div className="flex mt-7">
                            <img className="w-[50px] transform transition-transform duration-500 hover:scale-125" src="https://www.svgrepo.com/show/14478/email.svg" alt="" />
                            <div className="ml-4">
                                <p className="text-2xl font-medium">E-Mail</p>
                                <p className="text-2xl opacity-60">mailto@subx.com</p>
                            </div>
                        </div>

                        <hr className="border-gray-500 mt-7" />

                        <div className=" mt-7 mb-5">
                            <p className="text-2xl font-medium">Follow Us:</p>
                            <div className="flex ml-4 mt-3">
                                <img className="w-[50px] transform transition-transform duration-500 hover:scale-125 mr-5" src="https://www.svgrepo.com/show/3885/facebook.svg" alt="" />
                                <img className="w-[50px] transform transition-transform duration-500 hover:scale-125 mr-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/X_icon.svg" alt="" />
                                <img className="w-[50px] transform transition-transform duration-500 hover:scale-125 mr-5" src="https://www.svgrepo.com/show/13671/youtube.svg" alt="" />
                                <img className="w-[50px] transform transition-transform duration-500 hover:scale-125 mr-5" src="https://www.svgrepo.com/show/365495/instagram-logo-thin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                    <h1 className="text-5xl font-medium mb-5">Send a Message</h1>
                    <form action="#" className="space-y-8">
                        <div>
                            <label  className="text-2xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label  className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message"  className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="bg-slate-950 py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUsPage;