import Image from "next/image";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function DashboardPage() {
  return (
    <section className="relative pt-40 pb-24">
      <div
        className="w-full absolute top-0 left-0 z-0 h-60 rounded-lg"
        style={{
          background: `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`,
        }}
      ></div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
          <Image
            src="/images/doctor_pic.png"
            alt="user-avatar-image"
            width={100} // Replace with the actual width of the image
            height={100} // Replace with the actual height of the image
            className="border-4 border-solid border-white rounded-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
              Emma Smith
            </h3>
            <p className="font-normal text-base leading-7 text-gray-500">
              Los Anbeles, California
            </p>
          </div>
          <button className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-indigo-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                className="stroke-gray-700 transition-all duration-500 group-hover:stroke-indigo-600"
                d="M14.1667 11.6666V13.3333C14.1667 14.9046 14.1667 15.6903 13.6785 16.1785C13.1904 16.6666 12.4047 16.6666 10.8333 16.6666H7.50001C5.92866 16.6666 5.14299 16.6666 4.65483 16.1785C4.16668 15.6903 4.16668 14.9047 4.16668 13.3333V11.6666M16.6667 9.16663V13.3333M11.0157 10.434L12.5064 9.44014C14.388 8.18578 15.3287 7.55861 15.3287 6.66663C15.3287 5.77466 14.388 5.14749 12.5064 3.89313L11.0157 2.8993C10.1194 2.3018 9.67131 2.00305 9.16668 2.00305C8.66205 2.00305 8.21393 2.3018 7.31768 2.8993L5.82693 3.89313C3.9454 5.14749 3.00464 5.77466 3.00464 6.66663C3.00464 7.55861 3.9454 8.18578 5.82693 9.44014L7.31768 10.434C8.21393 11.0315 8.66205 11.3302 9.16668 11.3302C9.67131 11.3302 10.1194 11.0315 11.0157 10.434Z"
                stroke="#374151"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
            <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
              Software Engineer
            </span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
          <div className="flex items-center gap-4">
            <button className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">
              Edit Profile
            </button>
            <button className="py-3.5 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100">
              Settings
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 ">
            <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400 ">
              Skills
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.78135 5.55191C9.4453 3.5173 9.77728 2.5 10.3928 2.5C11.0083 2.5 11.3403 3.5173 12.0043 5.55191L12.2949 6.44244C12.4784 7.00479 12.5701 7.28596 12.7928 7.44706C13.0155 7.60816 13.3125 7.60816 13.9063 7.60816H14.8683C17.0355 7.60816 18.119 7.60816 18.3081 8.19335C18.4972 8.77854 17.6169 9.40763 15.8563 10.6658L15.0921 11.2118C14.6069 11.5586 14.3643 11.732 14.278 11.9937C14.1918 12.2554 14.2841 12.5382 14.4687 13.1038L14.7569 13.9872C15.4209 16.0218 15.7529 17.0391 15.2549 17.3993C14.7569 17.7595 13.8878 17.1308 12.1496 15.8733L11.3887 15.323C10.9083 14.9754 10.6681 14.8016 10.3928 14.8016C10.1175 14.8016 9.87731 14.9754 9.39687 15.323L8.63605 15.8733C6.89779 17.1308 6.02866 17.7595 5.5307 17.3993C5.03273 17.0391 5.36471 16.0218 6.02866 13.9872L6.31927 13.0966C6.50278 12.5343 6.59454 12.2531 6.50948 11.9924C6.42441 11.7318 6.18419 11.558 5.70375 11.2104L4.94293 10.6601C3.20467 9.40261 2.33555 8.77389 2.52575 8.19102C2.71596 7.60816 3.79026 7.60816 5.93886 7.60816H6.87929C7.47315 7.60816 7.77008 7.60816 7.99277 7.44706C8.21547 7.28596 8.30723 7.00479 8.49074 6.44244L8.78135 5.55191Z"
                  stroke="#9CA3AF"
                  stroke-width="1.6"
                />
              </svg>
            </p>
            <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5">
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                HTML
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                CSS
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                Dart
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                C++
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                UI Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
