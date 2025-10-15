"use client";
import React, { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import SmoothScroll from "@/components/smoothScroll";
import { WavyBackground } from "@/components/ui/wavy-background";
import Preloader from "@/components/utils/Preloader";
import { Image } from "@heroui/react";

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      })();
    }
  }, []);

  const springOptions = { bounce: 0.1 };

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="flex flex-col w-full overflow-hidden">
        <WavyBackground className="flex w-full h-screen p-16 my-32">
          <div className="w-full flex flex-col h-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="relative z-10 flex flex-col items-center space-y-8">
                <div className="flex flex-col items-center space-y-4">
                  <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-6xl font-medium tracking-tight text-transparent md:text-8xl lg:text-[12rem] xl:text-[14rem]">
                    IEEE
                  </h1>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>

                <div className="text-center">
                  <TextLoop
                    className="text-xl font-light tracking-wide text-white/80 md:text-2xl lg:text-3xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    }}
                    variants={{
                      initial: {
                        y: 10,
                        opacity: 0,
                        filter: "blur(2px)",
                      },
                      animate: {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        filter: "blur(2px)",
                      },
                    }}
                  >
                    <span>For IEEE Members</span>
                    <span>For Researchers</span>
                    <span>For Developers</span>
                    <span>For Innovators</span>

                  </TextLoop>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
            </div>
            <div className="flex flex-col items-center gap-8 mt-16">
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-white/90 tracking-tight">
                    2025
                  </div>
                  {/* <div className="text-sm text-white/50 font-medium tracking-wider uppercase mt-1">
                    2025
                  </div> */}
                </div>

                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-white/90 tracking-tight">
                    Kalasalingam Academy of Research and Education
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">
                    Krishnankovil
                  </div>
                </div>


              </div>

              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
          </div>
        </WavyBackground>
        <div className="flex flex-col gap-32">
          {/* <InfiniteSlider gap={68}>
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
            <img
              src="assets\logo\logo_full.png"
              alt="logo"
              className="h-[48px] w-auto"
            />
          </InfiniteSlider> */}

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.2em]">
                  Faculty Profile
                </div>
                <div className="text-5xl md:text-7xl font-semibold text-center leading-tight text-white">
                  Academic Excellence.
                  <br />
                  Industry Innovation.
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                <div className="relative p-12 h-[450px] flex items-center justify-center">
                  <img
                    src="/assets/logo/mam.png"
                    alt="Faculty Profile"
                    className="h-full w-auto object-contain rounded-2xl"
                  />
                </div>
              </div>

              <InView
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-8">
                  <div className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                    Associate Professor
                  </div>
                  <div className="space-y-4 text-lg text-white/70 font-light leading-relaxed">
                    <div className="space-y-2">
                      <p className="text-white/90 font-medium">Kalasalingam University</p>
                      <p className="text-base text-white/60">Electronics and Communication Engineering Department</p>
                      <p className="text-sm text-white/50">Full-time • Oct 2023 - Present • 2 yrs 1 mo</p>
                      <p className="text-sm text-white/50">India Remote</p>
                      <p className="text-sm text-white/60 mt-2">Verification and Validation (V&V), Electronics and +4 skills</p>
                    </div>

                    <div className="space-y-2 pt-4">
                      <p className="text-white/90 font-medium">IEEE Professional Member</p>
                      <p className="text-sm text-white/50">Dec 2020 - Present • 4 yrs 11 mos</p>
                    </div>

                    <div className="space-y-2 pt-4">
                      <p className="text-white/80">Assistant Professor</p>
                      <p className="text-base text-white/60">Kalasalingam Academy of Research and Education</p>
                      <p className="text-sm text-white/50">Full-time • Jun 2017 - Nov 2023 • 6 yrs 6 mos</p>
                      <p className="text-sm text-white/60">Universal Verification Methodology (UVM), Python and +2 skills</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                    <span className="text-sm text-white/50 font-medium">
                      Guiding students in the right way
                    </span>
                  </div>
                </div>
              </InView>
            </section>

            <section className="py-16"></section>
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-black/10 via-black/5 to-transparent backdrop-blur-3xl border border-white/[0.08] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="relative p-12 md:p-16">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full aspect-video rounded-[24px] bg-black/80 shadow-xl ring-1 ring-white/[0.05] transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <source src="/assets/videos/ads.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-16 px-8">
            <section className="flex flex-col items-center gap-12 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  IEEE Membership Benefits
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Empowering Innovation.
                  <br />
                  <span className="text-white/70">Inspiring Excellence.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Technical Publications
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Research Access
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Get access to a vast collection of research papers, journals, magazines, conference proceedings, and eBooks, including IEEE's flagship publication, IEEE Spectrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Standards Development
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Shape the Future
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Gain insight into new and evolving standards and have the opportunity to influence their direction and drive the creation and adoption of emerging technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Professional Development
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Continuous Learning
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Utilize online learning resources, including continuing professional education courses and webinars to stay technically current and advance your skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 h-[280px] flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      Community Support
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      Technology for Humanity
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Become part of a community that supports the mission to advance technology for humanity, which includes initiatives that promote technology education and support students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-white/80">
                  Empowering professionals and students in technology worldwide
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Campus Location
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Where excellence
                  <br />
                  <span className="text-white/70">meets innovation.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <InView
                variants={{
                  hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-8">
                  <div className="text-3xl md:text-4xl font-light text-white/90 leading-relaxed">
                    Kalasalingam Academy of Research and Education
                  </div>
                  <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                    <p>
                      A private deemed to be university located in Krishnankoil near Rajapalayam in Tamil Nadu, India. The campus is close to the ancient temple town of Srivilliputhur.
                    </p>
                    <p>
                      Formerly Arulmigu Kalasalingam College of Engineering and Kalasalingam University, the institution represents the perfect fusion of academic excellence and research innovation.
                    </p>
                    <p className="text-base text-white/60">
                      <strong className="text-white/80">Address:</strong> Kalasalingam Academy of Research and Education, Krishnankoil, Srivilliputhur, Tamil Nadu 626126, India
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                    <span className="text-sm text-white/50 font-medium">
                      Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </InView>

              <InView
                variants={{
                  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/assets/images/educity.jpg"
                      alt="Edu City, Turku, Finland"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      radius="none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </InView>
            </div>
          </div>

          <InfiniteSlider gap={24} className="my-16">
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Technology
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Standards
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Research
            </div>
            <div className="text-6xl md:text-8xl lg:text-9xl text-center font-light text-white/90 tracking-tighter px-8">
              Excellence
            </div>
          </InfiniteSlider>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-8 px-8">
            <section className="flex flex-col items-center gap-16 py-32">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  IEEE Recognition
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Excellence in Engineering.
                  <br />
                  <span className="text-white/70">
                    Recognition that matters.
                  </span>
                </h2>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </div>
                    <div className="text-6xl font-light text-white mb-2">€5,000</div>
                    <div className="text-white/60 font-light mb-8">Grand Prize</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </div>
                    <div className="text-6xl font-light text-white mb-2">€3,000</div>
                    <div className="text-white/60 font-light mb-8">Second Place</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                    </div>
                    <div className="text-6xl font-light text-white mb-2">€2,000</div>
                    <div className="text-white/60 font-light mb-8">Third Place</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div> */}

              <div className="text-center mt-16">
                <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                  IEEE awards and recognition programs honor outstanding technical achievements, leadership, and contributions to advancing technology for humanity across all engineering disciplines.
                </p>
              </div>
            </section>

            {/* <div className="relative aspect-video h-[200px] overflow-hidden rounded-xl bg-zinc-700/30 p-[2px]  min-w-80">
              <Spotlight
                className="from-blue-200 via-blue-300 to-blue-400 blur-3xl "
                size={124}
              />
              <div className="relative h-full w-full rounded-xl bg-black p-8">
                Anyone in the EU with AI/ML passion! You can apply solo or as a
                team (up to 4). At least one team member must be technically
                proficient in AI/ML.
              </div>
            </div> */}
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  IEEE Events & Conferences
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Global gatherings.
                  <br />
                  <span className="text-white/70">Knowledge exchange.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-16">
              {/* Day 1 */}
              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                          Technical Conferences
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/40">
                        Year-Round
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2">
                          Global Symposiums
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          IEEE hosts over 1,900 conferences annually worldwide, bringing together researchers, engineers, and industry leaders to share cutting-edge innovations.
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-lg font-medium text-white/80">
                          1,900+
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                        <div className="text-sm text-white/50">Annual Events</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>

              {/* Day 2 */}
              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                          Workshops & Webinars
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/40">
                        Online & In-Person
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2">
                          Professional Development
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          Continuous learning opportunities through technical workshops, webinars, and training programs covering emerging technologies and industry best practices.
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-lg font-medium text-white/80">
                          24/7
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                        <div className="text-sm text-white/50">Access</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>

              {/* Day 3 */}
              <InView
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                          Publications & Journals
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/40">
                        Peer-Reviewed
                      </span>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-light text-white mb-2">
                          Research Impact
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          Publish and access groundbreaking research through IEEE's 200+ peer-reviewed journals and magazines, reaching millions of professionals worldwide.
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-lg font-medium text-white/80">
                          200+
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-transparent to-transparent"></div>
                        <div className="text-sm text-white/50">Publications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InView>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-16 px-8 py-24">
            <section className="flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Partners
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Powered by excellence.
                  <br />
                  <span className="text-white/70">Driven by innovation.</span>
                </h2>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-12 flex flex-col items-center justify-center gap-6 min-h-[280px]">
                  <div className="text-center">
                    <h3 className="text-3xl font-light text-white mb-3">IEEE</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      The world's largest technical professional organization dedicated to advancing technology for humanity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-12 flex flex-col items-center justify-center gap-6 min-h-[280px]">
                  <div className="text-center">
                    <h3 className="text-3xl font-light text-white mb-3">Kalasalingam University</h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Kalasalingam Academy of Research and Education - A leading institution fostering innovation and research excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8">
            <section className="flex flex-col items-center gap-16 py-24">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Frequently Asked
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  IEEE Membership
                  <br />
                  <span className="text-white/70">Information.</span>
                </h2>
              </div>
            </section>

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      Who can join IEEE?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      IEEE membership is open to professionals, students, and anyone interested in advancing technology. Various membership grades are available based on education and experience.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      What are the membership benefits?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      Members gain access to IEEE Xplore digital library, networking opportunities, professional development resources, discounts on conferences, and the ability to publish in prestigious journals.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      How do I become a member?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      Visit IEEE.org and complete the online membership application. Choose your membership grade and select technical societies that align with your interests.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      What is IEEE Xplore?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      IEEE Xplore is a digital library providing access to over 5 million technical documents including journals, conference papers, standards, and educational courses.
                    </p>
                  </div>
                </details>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <details className="peer">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="text-xl font-light text-white">
                      Can students join IEEE?
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                      <div className="w-3 h-px bg-white/60"></div>
                      <div className="w-px h-3 bg-white/60 absolute"></div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 mb-6"></div>
                    <p className="text-white/70 font-light leading-relaxed">
                      Yes! IEEE offers special student membership rates with full access to resources, networking opportunities, and career development tools to help launch your professional journey.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8 py-32">
            <section className="flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Join the Future
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Join IEEE Today
                  <br />
                  <span className="text-white/70">
                    Shape tomorrow's technology.
                  </span>
                </h2>
              </div>

              <div className="text-center max-w-2xl">
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  Become part of the world's largest technical professional organization. Connect with innovators, access cutting-edge research, and advance your career.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center px-16 py-5 text-lg font-medium text-black bg-white rounded-full transition-all duration-300 hover:bg-white/90 hover:scale-105 transform"
                    onClick={() => window.open("https://lu.ma/2vs4wsjr", "_blank")}
                  >
                    <span className="relative z-10 font-medium">Become a Member</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-white to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Magnetic>

                <div className="text-center">
                  <p className="text-sm text-white/50 font-light">
                    Join 400,000+ members worldwide • Multiple membership options
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col self-center w-full max-w-[1280px] gap-24 px-8 py-32">
            <section className="flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-6">
                <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
                  Connect
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-center leading-tight text-white max-w-4xl">
                  Get in Touch
                  <br />
                  <span className="text-white/70">We're here to help.</span>
                </h2>
              </div>

              <div className="text-center max-w-2xl">
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  For membership inquiries, collaboration opportunities, or general questions about IEEE.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-16 py-5 text-lg font-medium text-white bg-white/5 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105 transform"
                  >
                    <span className="relative z-10 font-light">
                      Get in touch
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Magnetic>
              </div>
            </section>
          </div>

          <div className="bg-black border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                    IEEE
                  </h2>
                  <p className="text-white/60 text-lg font-light max-w-md">
                    Advancing technology for humanity through innovation, education, and professional excellence.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                    Connect
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.linkedin.com/company/kare-ieee-electron-devices-society"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/kare_ieee_eds?igsh=ZTl5ZGtmdDhjZmY="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                    Organization
                  </h3>
                  <div className="space-y-3">
                    <p className="text-white/60 text-sm">IEEE</p>
                    <p className="text-white/60 text-sm">
                      Kalasalingam Academy
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/40 text-sm">
                  © 2025 IEEE. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}

// make it look apple style, billion dollar company looking, minimalist, modern
