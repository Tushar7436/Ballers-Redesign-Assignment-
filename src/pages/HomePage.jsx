import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { UserPlus,ThumbsUp, Section } from 'lucide-react';
import { CrownLogo, TextLogo } from "../components/logo";
import { ScrollMarquee } from '../components/ScrollWrapper';


import One from "../assets/one.png";
import Two from "../assets/two.png";
import Three from "../assets/three.png";
import Fourth from "../assets/Four.png";
import Five from "../assets/Five.png";
import Six from "../assets/Six.png";
import Seven from "../assets/seven.png";


gsap.registerPlugin(ScrollTrigger);

export const HomePage=() => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const membershipRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hero animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out"
      });

      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power4.out"
      });

      gsap.from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power4.out"
      });

      // Scroll animations
      gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      gsap.from(".membership-card", {
        scrollTrigger: {
          trigger: membershipRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
<div className="min-h-screen">
  <section ref={heroRef} className="sticky top-0 min-h-screen flex items-center justify-center px-4 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] via-[#2C1B47] to-[#1A0B2E]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-3xl animate-float"></div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto text-center relative z-10">
      {/* Logo */}
      <div className="flex flex-row items-center justify-center mb-12">
        <CrownLogo className="text-[#FFD700] mb-4" />
        <TextLogo className="text-4xl" />
      </div>

      <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white">
        Playground for <br />
        the world's <span className="text-[#FFD700]">0.01%</span>
      </h1>
      
      <p ref={subtitleRef} className="text-xl md:text-2xl mb-4 text-gray-300">
        Rare opportunities. Rare access. Rarer people.
      </p>
      
      <p ref={descriptionRef} className="text-gray-400 max-w-2xl mx-auto mb-8">
        A playground for the wealthy and successful to get access
        to the most exclusive assets, clubs and people in sports.
      </p>
      
      <button
        ref={ctaRef}
        className="bg-[#FFD700] text-[#1A0B2E] px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
      >
        Join the exclusive club
      </button>
    </div>

    {/* Decorative Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#FFD700]/20 rotate-45"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-purple-500/20 rotate-12"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-blue-500/20 -rotate-12"></div>
    </div>
  </section>

  {/* Section - 2 */}
  <section className="sticky top-0 h-[120vh] z-5 py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C1B47] via-[#1A0B2E] to-[#2C1B47]"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 animate-on-scroll">
        Why Sport as an asset class?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="border border-gray-800 rounded-lg p-8 hover:border-[#FFD700] transition-colors bg-[#1A0B2E]/50 backdrop-blur-sm">
              <h3 className="text-xl font-light text-[#FFD700] mb-4">Sports beyond the game</h3>
              <p className="text-gray-400">Valued at nearly $1 trillion, sports is more than just about the game. With top athletes, exclusive clubs and more, it offers a vast opportunity of Experiences.</p>
            </div>
          </div>
          <div>
            <div className="border border-gray-800 rounded-lg p-8 hover:border-[#FFD700] transition-colors bg-[#1A0B2E]/50 backdrop-blur-sm">
              <h3 className="text-xl font-light text-[#FFD700] mb-4">Exclusive access. Extraordinary Returns</h3>
              <p className="text-gray-400">Beyond traditional investments, wealth creation hinges on spotting the right opportunities. It's an opportunity too big to miss.</p>
            </div>
          </div>
          <div>
            <div className="border border-gray-800 rounded-lg p-8 hover:border-[#FFD700] transition-colors bg-[#1A0B2E]/50 backdrop-blur-sm">
              <h3 className="text-xl font-light text-[#FFD700] mb-4">Elite Network</h3>
              <p className="text-gray-400">Connect with like-minded individuals who share your passion in investments and seek sports as assets.</p>
            </div>
          </div>
          <div>
            <div className="border border-gray-800 rounded-lg p-8 hover:border-[#FFD700] transition-colors bg-[#1A0B2E]/50 backdrop-blur-sm">
              <h3 className="text-xl font-light text-[#FFD700] mb-4">For those who don’t just play the game.</h3>
              <p className="text-gray-400">It's the 0.01% experience for the 0.01%. Get access to exclusive events, invite-only clubs, unique opportunities, and VIPs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* Section - 3 */}
  <section ref={membershipRef} className="py-28 relative overflow-hidden -pb-[100]">
    <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E] via-[#2C1B47] to-[#1A0B2E]"></div>
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-20 animate-on-scroll">
        Exclusive Membership Process
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Get Invited Card */}
        <div className="membership-card group">
          <div className="relative border border-gray-800 rounded-xl p-8 hover:border-[#FFD700] transition-all duration-500 bg-[#1A0B2E]/50 backdrop-blur-sm">
            <div className="absolute -top-10 left-8">
              <div className="bg-[#FFD700] rounded-full p-4">
                <UserPlus className="w-8 h-8 text-[#1A0B2E]" />
              </div>
            </div>
            
            <h3 className="text-2xl font-light text-[#FFD700] mb-3 mt-4">
              Get invited
            </h3>
            <p className="text-xl text-white mb-4">
              Beyond just exclusive.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ballers is an exclusive club limited to 1000 members—each representing 
              the pinnacle. To join this esteemed group, you must be 
              endorsed by a current member and apply for membership.
            </p>
          </div>
        </div>

        {/* Get Approved Card */}
        <div className="membership-card group">
          <div className="relative border border-gray-800 rounded-xl p-8 hover:border-[#FFD700] transition-all duration-500 bg-[#1A0B2E]/50 backdrop-blur-sm">
            <div className="absolute -top-10 left-8">
              <div className="bg-[#FFD700] rounded-full p-4">
                <ThumbsUp className="w-8 h-8 text-[#1A0B2E]" />
              </div>
            </div>
            
            <h3 className="text-2xl font-light text-[#FFD700] mb-3 mt-4">
              Get approved
            </h3>
            <p className="text-xl text-white mb-4">
              The best deserve the absolute best.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We perform thorough background checks on anyone that gets invited 
              and only extend exclusive, non-transferable memberships to those 
              who meet our stringent criteria.
            </p>
          </div>
        </div>
      </div>

      {/* Membership CTA */}
      <div className="text-center mt-20">
        <button className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFD700] hover:text-[#1A0B2E] transition-all duration-300 transform hover:scale-105">
          Request an Invitation
        </button>
      </div>
    </div>
  </section>

  <section className="sticky top-0 h-[120vh] z-5 ">
    <div>
      <ScrollMarquee/>
    </div>
  </section>

  {/*New section */}
  <section className="relative overflow-hidden -pb-[100px]">
  <div className="relative overflow-hidden py-28 bg-gradient-to-r from-[#1A0B2E] via-[#2C1B47] to-[#1A0B2E]">
    {/* Gradient Overlays */}
    <div className="absolute inset-y-0 left-0 w-64"></div>
    <div className="absolute inset-y-0 right-0 w-64"></div>

    {/* Section Heading */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-white">
        Investment Horizons
      </h2>
      <p className="text-lg text-gray-300 mt-2">
        Investing in the best to bring excellence
      </p>
    </div>

    {/* Logo Flexbox with Centering */}
    <div className="flex items-center justify-center space-x-10">
      <img src={One} alt="Logo 1" className="h-20 mx-5" />
      <img src={Two} alt="Logo 2" className="h-20 mx-10" />
      <img src={Three} alt="Logo 3" className="h-20 mx-10" />
      <img src={Fourth} alt="Logo 4" className="h-20 mx-10" />
      <img src={Five} alt="Logo 5" className="h-20 mx-10" />
      <img src={Six} alt="Logo 6" className="h-20 mx-10" />
      <img src={Seven} alt="Logo 7" className="h-20 mx-5" />
      {/* Add more logos as needed */}
    </div>
  </div>
</section>



  {/* Section - 4 */}
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#2C1B47] to-[#1A0B2E]"></div>
    <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
      <div className="animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to join the elite?</h2>
        <p className="text-gray-400 mb-8">
          Take the first step towards accessing exclusive sports investments and experiences.
        </p>
        <button className="bg-[#FFD700] text-[#1A0B2E] px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </div>
  </section>
</div>

  );
}

