import { USERS } from "../../../../util/data"
import AdminUser from "../admin component/AdminUser"


export default function AdminUsers(){
    return(
        <>
        <div>
            <section>
                <p>Хэрэглэгчид</p>
            </section>
            <section>
                <button>bugd</button>
                <input type="text" />
            </section>
            <section>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">Овог</th>
      <th scope="col">Нэр</th>
      <th scope="col">И-мэйл хаяг</th>
      <th scope="col">Утас</th>
      <th scope="col">Захиалга</th>
      <th scope="col">Огноо</th>
    </tr>
  </thead>
  {USERS.map((uni)=>(
    <AdminUser
    id={uni.id}
    name={uni.name}
    date={uni.date}
    order={uni.order}
    email={uni.email}
    sureName={uni.sureName}
    phone={uni.phone}
    />
  ))}
</table>
            </section>
            <section></section>
        </div>
        </>
    )
}