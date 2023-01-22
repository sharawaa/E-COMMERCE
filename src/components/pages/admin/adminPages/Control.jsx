import "../adminStyle/control.css";
import { products } from "../../../../util/data";
import AdminProduct from "../admin component/AdminProduct";



export default function Control() {
  return (
    <>
      <div className="controlContainer">
          <p>Хянах самбар </p>
        <div className=" controlTable">
          <p className="suuld">Сүүлд зарагдсан</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Зураг</th>
                <th scope="col">Барааны нэр</th>
                <th scope="col">Үнэ</th>
                <th scope="col">Үлдэгдэл</th>
                <th scope="col">Хямдрал %</th>
                <th scope="col">Категори</th>
                <th scope="col">:</th>
                </tr>
            </thead>
    
                
                {products.map((unit)=>(
                  <AdminProduct 
                  image={unit.image}
                  name={unit.productName}
                  price={unit.price}
                  sale={unit.sale}
                  category={unit.category}
                  remainder={unit.remainder}
                  />
                  

                ))}
                
               
                
               
          </table>
        </div>
      </div>
    
    
    </>
  );
}
