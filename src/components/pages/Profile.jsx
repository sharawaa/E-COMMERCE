import axios from "axios";
import { useContext, useState } from "react";
//import MapTest from "../m-bottom/MapTest";
import { UserContext } from "../mainComponent/UserProvider";
import "../../Style/profile.css";

export default function Profile(props) {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [stock, setStock] = useState([]);
  const users = user && user.data;
  // const products = props.products;

  function profileOrder() {
    axios
      .post("http://localhost:2000/profileOrder", { userId: users._id })
      .then((res) => (setOrders(res.data.product), setStock(res.data.stock)));
  }

  console.log("zahialguud", orders);
  // let findOrder = orders && orders.find((order) => order.userId === users._id);

  // let findProduct =
  //   products &&
  //   products.filter((orderPro) => {
  //     return findOrder?.orderProducts.find((product) => {
  //       return product.id === orderPro.id;
  //     });
  //   });

  // console.log("find order", findOrder);
  // console.log("find product", findProduct);
  return (
    <>
      <div className="profileContainer">
        <section>
          <h1>Hello {users && users.userName}</h1>
          <button onClick={profileOrder}>zahialguudaa harah</button>
        </section>
        {/* <section>
          <h1>tanii zahialsan baraanuud </h1>
          {findProduct.map((order, index) => {
            return <div key={index}>{<h4>{order.name}</h4>}</div>;
          })}
        </section> */}
      </div>
    </>
  );
}
