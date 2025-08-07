import React from "react";
import WH from "../assets/wh011.png"
import VPS from "../assets/vps012.png"
import Cloud from "../assets/cloud004.png"
import Mail from "../assets/email.png"
import IP from "../assets/ip01.png"
import Web from "../assets/web02.png"
import PY from "../assets/py03.png"
import Forex from "../assets/forex005.png"
import Proxy from "../assets/proxy0006.png"
import Google from "../assets/google.png"
import MS from "../assets/win007.png"
import KEY from "../assets/key.png"
import Mail02 from "../assets/mail02.png"

// What we offer 

{/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}

export default function Products() {
  return (
    <section
      id="new-features"
      className="py-4 bg-white sm:py-6 lg:py-10 border rounded-xl border-gray-400 mt-5 max-w-[1300px] flex justify-center m-auto  bg-gradient-to-t from-sky-100 shadow-md"
    >
      <div className="px-4 mx-auto max-w-5xl sm:px-2 lg:px-4">
        <div className="text-center">
          <h4 className="text-lg font-bold leading-tight text-gray-900 sm:text-2xl xl:text-4xl">
            What We Offer
          </h4>
          <p className="mt-3 text-base leading-7 text-gray-600 sm:mt-6">
            We provide a wide range of services to help your business succeed
            online:
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8 text-center sm:mt-10 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-12">

          {/* Feature 1 */}
          <div className="md:p-8 lg:p-10 flex flex-col justify-center items-center">
            <div className=" h-10  flex justify-center items-center mt-5">
              <img src={WH} alt="" />
            </div>
            <h3 className="mt-10 text-lg font-bold text-gray-900">
              Web Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Fast, dependable, and scalable hosting that keeps your website up
              and running smoothly around the clock.
            </p>
          </div>

          {/* Feature 2 */}
          
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 flex flex-col justify-center items-center ">
            <div className="relative bottom-2  flex justify-center items-center mb-2">
             <img src={VPS} alt="" />
            </div>
            <h3 className="mb-5  text-lg font-bold text-gray-900">
              VPS Hosting
            </h3>
            <p className="mb-4  text-base text-gray-600">
              Secure and flexible Virtual Private Servers to handle your
              projects with ease and reliability.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 flex flex-col justify-center items-center">
            <div className=" h-12 rounded-full flex justify-center items-center">
              <img src={Cloud} alt="" />
            </div>
            <h3 className="mt-10 text-lg font-bold text-gray-900">
              Cloud Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Future-proof your business with our reliable cloud hosting
              services that grow alongside you.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="md:p-8 lg:p-10 md:border-t md:border-gray-400 flex flex-col justify-center items-center">
            <div className="relative top-4 rounded-full  flex justify-center items-center">
              <img className="w-28" src={Mail02
                
              } alt="" />
            </div>
            <h3 className="mt-14 text-lg font-bold text-gray-900">
              Email Marketing Servers
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Run effective email campaigns with our dedicated servers, built
              for precision and reliability.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="relative -top-5  flex justify-center items-center">
              <img className="w-56" src={IP} alt="" />
            </div>
            <h3 className="mt-1 text-lg font-bold text-gray-900">
              Dedicated /24IP Solution
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Take control with customized IP blocks tailored to meet your
              specific needs.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="relative top-1  flex justify-center items-center">
              <img className="w-60" src={Web} alt="" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Website Design
            </h3>
            <p className="mt-10 text-base text-gray-600">
              Impress your audience with stunning, modern, and mobile-friendly
              designs crafted to reflect your brand perfectly.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="md:p-8 lg:p-10 md:border-t md:border-gray-400 flex flex-col justify-center items-center">
            <div className=" rounded-full flex justify-center items-center">
            <img src={PY} alt="" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-gray-900">
              Python Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Hosting made for developers! Run your Python apps on fast, secure,
              and optimized platforms.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="relative top-4 w-52 h-14 rounded-full flex justify-center items-center">
              <img src={Forex} alt="" />
            </div>
            <h3 className="mt-12 text-lg font-bold text-gray-900">
              Forex/Trading Servers
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Gain an edge in trading with ultra-fast and highly secure servers
              built for the financial market.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="relative top-3 w-44 h-14 rounded-ful flex justify-center items-center">
              <img src={Proxy} alt="" />
            </div>
            <h3 className="mt-12 text-lg font-bold text-gray-900">
              Proxy Servers
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Protect your online presence with high-performance proxy solutions
              that enhance privacy and security.
            </p>
          </div>

          {/* Feature 10 */}
          <div className="md:p-8 lg:p-10 md:border-t md:border-gray-400 flex flex-col justify-center items-center">
            <div className="relative -top-5 w-28 h-14 flex justify-center items-center">
              <img src={Google} alt="" />
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              Google Workspace
            </h3>
            <p className="mt-6 text-base text-gray-600">
              Google Workspace simplifies teamwork with powerful tools like Gmail, Docs, Drive, and Meet, all seamlessly integrated.
            </p>
          </div>

          {/* Feature 11 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="relative top-0 w-44 h-14 rounded-full flex justify-center items-center">
              <img src={MS} alt="" />
            </div>
            <h3 className="mt-7 text-lg font-bold text-gray-900">
              Microsoft 365
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Microsoft 365 enhances productivity with robust tools like Word, Excel, Teams, and OneDrive, all designed for seamless collaboration.
            </p>
          </div>

          {/* Feature 12 */}
          <div className="md:p-8 lg:p-10 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className=" relative top-3 w-20 h-14 rounded-ful flex justify-center items-center">
              <img src={KEY} alt="" />
            </div>
            <h3 className="mt-7 text-lg font-bold text-gray-900">
              License
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Ensure smooth operations with secure and reliable licensing solutions. Empower your infrastructure with scalability and performance.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
