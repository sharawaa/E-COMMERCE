import "../../Style/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section>
          <img src="image/logo 1 (1).png" alt="#" />
        </section>

        <section>
          <img
            style={{ width: "30px" }}
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt=""
          />
          <img
            style={{ width: "30px", margin: "0px 50px" }}
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt=""
          />
          <img
            style={{ width: "30px" }}
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt=""
          />
        </section>
      </div>

      <div className="container">
        <p style={{ color: "white" }}>
          © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and Conditions{" "}
        </p>
      </div>
    </div>
  );
}
