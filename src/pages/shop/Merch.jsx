// import React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import { shopImages } from "../../utils/constants";

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Merch = () => {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const imageIndex = wrap(0, shopImages.length, page);
//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <section className="section-shop">
//       <div className="example-container">
//         <a href="https://vk.cc/ctmVns">
//           <h2 className="merch-title">Браслеты</h2>
//         </a>
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.img
//             className="shop-img"
//             key={page}
//             src={shopImages[imageIndex]}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.2 },
//             }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={1}
//             onDragEnd={(e, { offset, velocity }) => {
//               const swipe = swipePower(offset.x, velocity.x);

//               if (swipe < -swipeConfidenceThreshold) {
//                 paginate(1);
//               } else if (swipe > swipeConfidenceThreshold) {
//                 paginate(-1);
//               }
//             }}
//           />
//         </AnimatePresence>
//         <div className="next" onClick={() => paginate(1)}>
//           {"‣"}
//         </div>
//         <div className="prev" onClick={() => paginate(-1)}>
//           {"‣"}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Merch;
import merchOne from "/src/assets/images/shop1.png";
import merchTwo from "/src/assets/images/shop2.png";
import merchThree from "/src/assets/images/shop3.png";

const Merch = () => {
  return (
    <section className="merch">
      <a href="https://vk.cc/ctmVns" target="_blank">
        <h2>Браслеты</h2>
      </a>
      <div className="merch-wrapper">
        <div className="merch-item">
          <h3 className="merch-description">Ты мои цветы, я твоя вода</h3>
          <img className="merch-img" src={merchOne} alt="merch" />
          <p className="merch-price">1600 рублей</p>
        </div>

        <div className="merch-item">
          <h3 className="merch-description">Попробуй переговори мои голоса</h3>
          <img className="merch-img" src={merchTwo} alt="merch" />
          <p className="merch-price">1600 рублей</p>
        </div>

        <div className="merch-item">
          <h3 className="merch-description">Теплее солнца, холоднее луны</h3>
          <img className="merch-img" src={merchThree} alt="merch" />
          <p className="merch-price">1600 рублей</p>
        </div>
      </div>

      <a href="https://vk.cc/ctmVns" target="_blank">
        <h3 className="merch-order">Заказать</h3>
      </a>
    </section>
  );
};

export default Merch;
