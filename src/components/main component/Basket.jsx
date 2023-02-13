// import React, { useState } from "react";
// import "../../Style/backed.css"
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { useContext } from "react";
// import { ProductContext } from "../../App";


// export default function Backed() {
//   const {data} = useContext(ProductContext)
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// let basketItem = JSON.parse(localStorage.getItem("basket"));

// let basketProduct= data && data.filter((hoho)=>basketItem.find((a)=> a.id===hoho.id))
// console.log("basket prod" , basketProduct)
  
//   return (
//     <>
//       <a onClick={handleShow} href="##">
//         <img src="./image/tereg.svg" alt="" />
//       </a>

//       <Offcanvas className="Offcanvas" placement="end" show={show} onHide={handleClose} >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>
//             <div className="offTitle">
//             <div>Таны сагс</div>
//             <div><a href="##">Сагс хоослох</a></div>
//             </div>
//           </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           {basketProduct}
         
//         </Offcanvas.Body>
//       <button className="orderButton">Захиалах</button>
//       </Offcanvas>
//     </>
//   );
// }
