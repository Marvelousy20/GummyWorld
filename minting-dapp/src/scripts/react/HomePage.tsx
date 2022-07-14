// @ts-nocheck

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Dapp from "./Dapp";

import Logo from "../../asset/GummyWorldLogo.png";
import Hillspanel from "../../asset/HillsPanel.png";
import Cloud1 from "../../asset/Clouds1.png";
import WelcomeAvatar from "../../asset/WelcomeAvatar.png";
import Wonderland9 from "../../asset/Wonderland9.png";
import Wonderland10 from "../../asset/Wonderland10.png";
import Wonderland11 from "../../asset/Wonderland11.png";
import Wonderland12 from "../../asset/Wonderland12.png";
import Wonderland14 from "../../asset/Wonderland14.png";
import Wonderland15 from "../../asset/Wonderland15.png";
import Wonderland16 from "../../asset/Wonderland16.png";
import Whiteboard from "../../asset/Whiteboard.png";
import Cloud4 from "../../asset/Cloud4.png";
import star from "../../asset/star.png";
import Twitter from "../../asset/twitter.png";
import Discord from "../../asset/discord.png";
import Telegram from "../../asset/telegram.png";
import Whatsapp from "../../asset/whatsapp.png";
import HillRed from "../../asset/HillRed.png";
import HillGreen from "../../asset/HillGreen.png";
import HillYellow from "../../asset/HillYellow.png";
import GroundPanel from "../../asset/GroundPanel.png";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("i am rendering")

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    console.log("modal is opened");
  }

  return (
    <div className="relative pt-8">
      <section className="flex justify-center mt-10 sm:mt-0 relative z-10">
        <div className="flex items-center">
          <ul
            className="flex font-ce text-base gap-x-6 sm:gap-x-8 lg:gap-x-12 md:text-2xl text-white"
            style={{ WebkitTextStroke: "1px #a0410d" }}
          >
            <li>about</li>
            <li>roadmap</li>
            <li>team</li>
            <li>faq</li>
            <li>merch</li>
          </ul>
        </div>
      </section>

      <div
        className="absolute right-4 md:right-10 top-7 cursor-pointer"
        onClick={openModal}
        style = {{zIndex: '10000000000000000'}}
      >
        <div
          className="px-4 py-2 hover:shadow-lg rounded-full bg-gray-100 font-bold"
          style={{ cursor: "pointer" }}
        >
          MINT NOW
        </div>
      </div>

      <div className="flex justify-center w-full mt-16">
        <img src={Logo} alt="gunnyworld" className="w-[50%]" />
      </div>

      <div
        className="text-2xl md:text-3xl lg:text-5xl mt-32 md:mt-52 xl:mt-72 text-center relative z-10 font-ce text-white"
        style={{ WebkitTextStroke: "2px #a0410d" }}
      >
        Welcome to GummyWorld
      </div>

      <div className="absolute z-10 top-20 -right-24 md:-right-52 w-2/3">
        <img src={Hillspanel} alt="hillspanel" className="" />
      </div>

      <div className="absolute top-0">
        <img src={Cloud1} alt="cloud1" className="object-cover" />
      </div>

      <div className="relative gap-y-8 z-10 grid grid-cols-1 mt-8 md:mt-12 lg:mt-16 md:grid-cols-2 items-center px-4 md:px-8 lg:px-20">
        <div className="place-self-center">
          <img src={WelcomeAvatar} className="object-cover lg:h-[300px]" />
        </div>

        <div className="max-w-[600px] bg-gradient-to-b from-white to-[#c5a1a1] text-lg md:text-xl font-bold font-bebas p-6 rounded-3xl border-[5px] border-[#3c1411] text-[#3c1411]">
          The fitness pacer test is a multistage aerobic capacity test that
          progressively gets more difficult as it continues. The 20 meter pacer
          test will begin in 30 seconds. Line up at the start. The running speed
          starts slowly, but gets faster each minute after you hear this.
        </div>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 relative z-10 mt-8 md:mt-12 lg:mt-28">
        <img src={Wonderland9} alt="wonderland9" />
        <img src={Wonderland10} alt="wonderland10" />
        <img src={Wonderland11} alt="wonderland11" />
        <img src={Wonderland12} alt="wonderland12" />
        <img src={Wonderland14} alt="wonderland14" />
        <img src={Wonderland15} alt="wonderland15" />
        <img src={Wonderland16} alt="wonderland16" />
      </div>

      <div className="relative z-10">
        <p
          className="text-2xl md:text-3xl lg:text-5xl mt-16 lg:mt-32 font-ce text-white text-center"
          style={{ WebkitTextStroke: "2px #a0410d" }}
        >
          Our Roadmap
        </p>

        <div className="max-w-[800px] mx-auto mt-6 md:mt-12 bg-gradient-to-b from-white to-[#c5a1a1] text-lg md:text-xl font-bold font-bebas p-6 rounded-3xl border-[5px] border-[#3c1411] text-[#3c1411]">
          THE FITNESSGRAM PACER TEST IS A MULTISTAGE AEROBIC CAPACITY TEST THAT
          PROGRESSIVELY GETS MORE DIFFICULT
        </div>

        <div className="mt-8">
          <img
            src={Whiteboard}
            alt="whiteboard.png"
            className="max-w-[100%] lg:max-w-[900px] mx-auto"
          />
        </div>

        <img
          src={star}
          alt="star"
          className="absolute -top-10 w-[100px] left-[35%] hidden md:block"
        />
        <img
          src={star}
          alt="star"
          className="absolute -top-10 w-[100px] right-[35%] hidden md:block"
        />
        <img
          src={Cloud4}
          alt="cloud4"
          className="absolute top-0 w-[150px] right-0 hidden md:block"
        />
      </div>

      <div className="relative h-[1400px] md:h-[1200px] mt-8 md:mt-12 lg:mt-20">
        <div className="absolute top-0 z-30">
          <img src={HillRed} alt="hillred" className="" />
        </div>
        <div className="absolute top-0 z-20">
          <img src={HillGreen} alt="hillred" className="" />
        </div>
        <div className="absolute top-0 z-10">
          <img src={HillYellow} alt="hillred" className="" />
        </div>

        <div className="top-32 lg:top-64 relative z-30">
          <div>
            <img
              src={star}
              alt="star"
              className="absolute w-[100px] left-[35%] hidden md:block"
            />
            <p
              className="text-2xl md:text-3xl lg:text-5xl mb-6 md:mb-16 font-ce text-white text-center"
              style={{ WebkitTextStroke: "2px #a0410d" }}
            >
              Meet the Team
            </p>
            <img
              src={star}
              alt="star"
              className="absolute top-0 w-[100px] right-[35%] hidden md:block"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[800px] mx-auto items-center justify-center place-items-center">
              <div>
                <img
                  src={Twitter}
                  alt="twitter"
                  className="object-cover h-[200px] lg:h-[300px]"
                />
                <p className="text-lg font-bold font-bebas text-center mt-2">
                  @Twitter
                </p>
              </div>
              <div>
                <img
                  src={Telegram}
                  alt="twitter"
                  className="object-cover h-[200px] lg:h-[300px]"
                />
                <p className="text-lg font-bold font-bebas text-center mt-2">
                  @Twitter
                </p>
              </div>
              <div>
                <img
                  src={Discord}
                  alt="twitter"
                  className="object-cover h-[200px] lg:h-[300px]"
                />
                <p className="text-lg font-bold font-bebas text-center mt-2">
                  @Twitter
                </p>
              </div>
              <div>
                <img
                  src={Whatsapp}
                  alt="twitter"
                  className="object-cover h-[200px] lg:h-[300px]"
                />
                <p className="text-lg font-bold font-bebas text-center mt-2">
                  @Twitter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-50 pb-12 md:pb-24">
        <div className="absolute top-0">
          <img src={GroundPanel} alt="groundpanel" />
        </div>

        <div className="relative">
          <p
            className="text-2xl md:text-3xl sm:pt-8 md:pt-12 xl:pt-24 lg:text-5xl mb-6 md:mb-10 font-ce text-white text-center"
            style={{ WebkitTextStroke: "2px #a0410d" }}
          >
            Join Our Community
          </p>

          <p
            className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-10 font-bebas text-white max-w-[800px] mx-auto text-center"
            style={{ WebkitTextStroke: "1px #a0410d" }}
          >
            FOLLOW US ON TWITTER AND JOIN OUR DISCORD TO STAY UP-TO-DATE WITH
            ALL OF OUR PROJECT ANNOUNCEMENTS.
          </p>

          <div className="flex gap-x-10 justify-center">
            <div>
              <a
                href="#"
                className="bg-white font-bold px-4 md:px-6 lg:px-8 py-2 rounded-2xl"
              >
                Discord
              </a>
            </div>

            <div>
              <a
                href="#"
                className="bg-white font-bold py-2 px-4 md:px-6 lg:px-8 rounded-2xl"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dapp />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
