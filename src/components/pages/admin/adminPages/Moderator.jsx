import { moderator } from "../../../../util/data"
import Moderators from "../admin component/Moderators"

export default function Moderator(){
    return(
        <div>
       <section>
        <p>Модераторууд</p>
       </section>


       <section>
        <input type="text" />
       </section>



       <section>

       <table class="table">
  <thead>
    <tr>
      <th scope="col">Moderator</th>
      <th scope="col">Овог</th>
      <th scope="col">Нэр</th>
      <th scope="col">И-мэйл хаяг</th>
      <th scope="col">Утас</th>
      <th scope="col">Зарсан</th>
      <th scope="col">Огноо</th>
      
    </tr>
  </thead>
  {moderator.map((unite)=>(
    <Moderators
    moderator={unite.moderator}
    sureName={unite.sureName}
    name={unite.name}
    eMail={unite.eMail}
    phone={unite.phone}
    goodsSold={unite.goodsSold}
    date={unite.date}
    />
  ))}
</table>
       </section>
        </div>
    )
}