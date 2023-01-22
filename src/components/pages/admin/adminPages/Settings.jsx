import "../adminStyle/settings.css";


export default function Settings() {
  return <div className="settings container">
    <div className="settingsText">
    
      <p>  Тохиргоо</p>
    </div>
   
    <div className="settingsBody">
      <section> 
        <p>Хуучин нууц үг</p>
        <input type="text" />
      </section>
      <section>
        <p>Шинэ нууц үг</p>
        <input type="text" />
      </section>
      <section>
        <p>Шинэ нууц үг давтах</p>
        <input type="text" />
      </section>
      <section>
        <button>Хадгалах</button>
      </section>
    </div>
  </div>;
}
