import { orders } from "../../../../util/data"
import Order from "../admin component/Order"
export default function Orders(){
    return(
        <div>
            <section><p>Захиалгууд</p></section>
            <section>
                <button>Бүгд
Хайх</button>
<input type="text" />
            </section>
            <section>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Захиалга No</th>
      <th scope="col">Огноо</th>
      <th scope="col">Утас</th>
      <th scope="col">И-мэйл</th>
      <th scope="col">Хаяг</th>
      <th scope="col">Тоо</th>
      <th scope="col">Нийт дүн ₮</th>
      <th scope="col">Төлбөр</th>
      <th scope="col">Статус</th>
    </tr>
  </thead>
  {orders.map((unit)=>(
    <Order
    no={unit.no}
    date={unit.date}
    phone={unit.phone}
    email={unit.eMail}
    address={unit.address}
    number={unit.number}
    totalAmount={unit.totalAmount}
    payment={unit.payment}
    status={unit.status}
    
    />
  ))}
</table>
            </section>
            <section></section>
        </div>
    )
}