import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Cars from "../../../asset/image/image 20.png";
import Bike from "../../../asset/image/image 21.png";
import Microfibre from "../../../asset/image/image 22.png";
import BackCusions from "../../../asset/image/image 23.png";
import Nexkcusion from "../../../asset/image/image 24.png";
import CarSeat from "../../../asset/image/image 19.png";
import { useNavigate } from "react-router";

const FindYourProduct = () => {
  const ref = useRef<any>();

  const navigate = useNavigate();

  const udaif = () => {
    navigate("/viewPageScreen");
  };

  const productData = [
    { imageSrc: Cars, text: "CAR COVERS" },
    { imageSrc: Bike, text: "BIKE COVERS" },
    { imageSrc: Microfibre, text: "MICROFIBER CLOTH" },
    { imageSrc: BackCusions, text: "BACK CUSHIONS" },
    { imageSrc: Nexkcusion, text: "NECK CUSHIONS" },
    { imageSrc: CarSeat, text: "CAR SEAT ORGANIZERS" },
    // { imageSrc: CarSeat, text: "CAR SEAT ORGANIZERS" },
    // { imageSrc: Cars, text: "CAR COVERS" },
    // { imageSrc: Bike, text: "BIKE COVERS" },
    // { imageSrc: Microfibre, text: "MICROFIBER CLOTH" },
    // { imageSrc: BackCusions, text: "BACK CUSHIONS" },
    // { imageSrc: Nexkcusion, text: "NECK CUSHIONS" },
    // { imageSrc: CarSeat, text: "CAR SEAT ORGANIZERS" },
    // { imageSrc: CarSeat, text: "CAR SEAT ORGANIZERS" },
  ];

  const scroll = (ratio: any) => {
    ref.current.scrollLeft += ratio;
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="findYourProduct-Box1">Our Product Collections</div>
      <div className="webStories-scrollBox">
        {productData?.length > 6 ? (
          <button
            className="webStories-scrollbutton1"
            onClick={() => scroll(-400)}
          >
            {`<`}
          </button>
        ) : null}
        <div className="qwertyu" ref={ref}>
          {productData?.map((item: any) => {
            return (
              <div className="findYourProjuct-Box3">
                <img
                  className="findYourProduct-Img1"
                  src={item.imageSrc}
                  alt=""
                ></img>
                <p className="findYourProduct-Txt">{item?.text}</p>
              </div>
            );
          })}
        </div>
        {productData?.length > 6 ? (
          <button
            className="webStories-scrollbutton2 "
            onClick={() => scroll(400)}
          >
            {`>`}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default FindYourProduct;

// <div className="webStories-scrollBox">
// {data?.length > 4 ? (
//   <button
//     className="webStories-scrollbutton1"
//     onClick={() => scroll(-400)}
//   >
//     <MdOutlineKeyboardArrowLeft color="white" />
//   </button>
// ) : null}
// <div className="webStories-scroll" ref={ref}>
//   {data?.map((item: any) => {
//     return (
//       <div className="webStories-ImgDiv">
//         <img
//           onClick={() => handleClick(item?.attributes?.imageList)}
//           className="webStories-image"
//           src={item?.attributes?.image}
//           alt=""
//         ></img>
//         <p className="webStories-description">
//           {item?.attributes?.description}
//         </p>
//       </div>
//     );
//   })}
// </div>
// {data?.length > 4 ? (
//   <button
//     className="webStories-scrollbutton2 "
//     onClick={() => scroll(400)}
//   >
//     <MdOutlineKeyboardArrowRight color="white" />
//   </button>
// ) : null}

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import Cars from "../../../asset/image/image 20.png";
// import Bike from "../../../asset/image/image 21.png";
// import Microfibre from "../../../asset/image/image 22.png";
// import BackCusions from "../../../asset/image/image 23.png";
// import Nexkcusion from "../../../asset/image/image 24.png";
// import CarSeat from "../../../asset/image/image 19.png";
// import { useNavigate } from "react-router";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const FindYourProject = () => {
//   const navigate = useNavigate();
//   const productData = [
//     { imageSrc: Cars, text: "CAR COVERS" },
//     { imageSrc: Bike, text: "BIKE COVERS" },
//     { imageSrc: Microfibre, text: "MICROFIBER CLOTH" },
//     { imageSrc: BackCusions, text: "BACK CUSHIONS" },
//     { imageSrc: Nexkcusion, text: "NECK CUSHIONS" },
//     { imageSrc: CarSeat, text: "CAR SEAT ORGANIZERS" },
//     { imageSrc: CarSeat, text: "CAR SEAT ORGANIZERS" },
//   ];
//   const navigateToViewPage = () => {
//     navigate("/viewPageScreen");
//   };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//   };
//   return (
//     <div>
//       <div className="findYourProject-Box1">Our Product Collections</div>
//       {productData.length > 6 ? (
//   <button
//   className="webStories-scrollbutton1"
//   onClick={() => scroll(-400)}
// >
//   <MdOutlineKeyboardArrowLeft color="white" />
// </button>
//         <Row>
//           {productData.map((product, index) => (
//             <Col md={2} sm={4} xs={6} key={index}>
//               <div
//                 className="findYourProject-Box3"
//                 onClick={navigateToViewPage}
//               >
//                 <img
//                   src={product.imageSrc}
//                   alt={product.text}
//                   className="findYourProject-Img1"
//                 />
//                 <div className="findYourProject-Txt">{product.text}</div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <Slider {...settings}>
//           {productData.map((product, index) => (
//             <div key={index}>
//               <div
//                 className="findYourProject-Box3"
//                 onClick={navigateToViewPage}
//               >
//                 <img
//                   src={product.imageSrc}
//                   alt={product.text}
//                   className="findYourProject-Img1"
//                 />
//                 <div className="findYourProject-Txt">{product.text}</div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// };
// export default FindYourProject;
