import Product from "./Product";
import { DATA } from "../../util/data";

export default function Products() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {DATA.map((unit) => (
        <Product
          title={unit.name}
          image={unit.image}
          description={unit.description}
          price={unit.price}
        />
      ))}
    </div>
  );
}
