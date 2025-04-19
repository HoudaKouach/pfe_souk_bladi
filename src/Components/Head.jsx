
// import React from "react";
// import Slider from "react-slick";
// import Image1 from './hero/product1.png';
// import Image2 from './hero/dattes.png';
// import Image3 from './hero/slider1.png';


// const ImageList=[
//   {
//     id: 1,
//     img: Image1,
//     title: "Upto 50% off on all Men's Wear",
//     description: "lorem His life will forever be Changed dolor sit amet,consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Image2,
//     title: "Upto 30% off on all Men's Wear",
//     description: "lorem His life will forever be Changed dolor sit amet,consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Image3,
//     title: "Upto 70% off on all Men's Wear",
//     description: "lorem His life will forever be Changed dolor sit amet,consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ]


// const Head = () => {

//         var settings = {
//         dots: false,
//         arrows:false,
//         infinite:true,
//         speed:800,
//         slidesTscroll:1,
//         autoplay:true,
//         autoplaySpeed:4000,
//         cssEase:"ease-in-out",
//         pauseonHover:false,
//         pauseOnfocus:true,
//         }






//     return (
//       <div className="ralative overflow-hidden min-h-[550] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
//             {/* backgound pattern */}
//         <div className="h-[700px] w-[700px] bg-primary/40 absoulute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 ">

//         </div>
//             {/* Hero section */}
//             <div className="container pb-8 sm:pd-0">
//             <Slider  {...settings}>
//           {ImageList.map((data)=>(


//         <div>     
//           <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          
//           {/* النصوص */}
//           <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
//             <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//               {data.title}
//             </h1>
//             <p className="text-base sm:text-lg text-gray-700 dark:text-gray-100">
//                 {data.description}            </p>
//             <div>
//               <button style={{ backgroundColor: "#B99470" }} className=" hover:scale-105 duration-200 text-white py-3 px-6 rounded-full text-lg shadow-lg">
//                 Order Now
//               </button>
//             </div>
//           </div>

//           {/* الصورة */}
//           <div className="order-1 sm:order-2">
//             <div className="relative z-10">
//               <img
//                 src={data.img}
//                 alt="Men's Wear"
//                 className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] lg:scale-120 object-contain mx-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//           ))}
//         </Slider>

//             </div>
//       </div>

//     )
      
// }
// export default Head


import React from "react";
import Slider from "react-slick";
import Image1 from './hero/product1.png';
import Image2 from './hero/JB.png';
import Image3 from './hero/slider1.png';





const ImageList=[
  {
    id: 1,
    img: Image1,
    title: "Accessoires du Drâa-Tafilalet à -50% !",
    description: "Un savoir-faire traditionnel, une touche artistique et une esthétique inspirée de notre riche patrimoine.Mon Marché de Pays... L'authenticité de votre pays est entre vos mains",
  },
  {
    id: 2,
    img: Image2,
    title: "Offres exceptionnelles ! Jusqu'à 30 % de réduction sur les dattes premium de Drâa-Tafilalet",
    description: "Dattes Tafilalet Draa... qualité naturelle, saveur traditionnelle et innombrables bienfaits pour la santé !",
  } ,
  {
    id: 3,
    img: Image3,
    title: "Du cœur du Draa-Tafilalet, Des produits naturels et authentiques avec des réductions jusqu'à 70% !",
    description: "L’authenticité et la qualité venues du cœur du Sud marocain !",
  },
]


const Head = () => {

  var settings = {
    dots: false,
    arrows:false,
    infinite:true,
    speed:800,
    slidesTscroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseonHover:false,
    pauseOnfocus:true,
    }



  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:text-white duration-200"
      style={{ backgroundColor: "#B99470" }}
    >
      {/* خلفية ديال الشكل الديكوري */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10" />

      {/* المحتوى الرئيسي */}
      <div className="container px-4 sm:px-0">
        <Slider  {...settings}>
          {ImageList.map((data)=>(


        <div>     
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          
          {/* النصوص */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
            <h1 className="text-[#000000] sm:text-5xl font-bold leading-tight">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 text-[#000000]">
                {data.description}            </p>
            <div>
              <button style={{ backgroundColor: "#B5C18E" }} className=" hover:scale-105 duration-200 text-white py-3 px-6 rounded-full text-lg shadow-lg">
                Order Now
              </button>
            </div>
          </div>

          {/* الصورة */}
          <div className="order-1 sm:order-2">
            <div className="relative z-10">
              <img
                src={data.img}
                alt="Men's Wear"
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] lg:scale-120 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

          ))}
        </Slider>
       
    </div>
  </div>
  );
};

export default Head;
