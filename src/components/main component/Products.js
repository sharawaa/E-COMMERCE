import Product from "./Product";

const data = [
    {
     title: "Camera",
     image:
       "https://target.scene7.com/is/image/Target/GUEST_86a9c2be-9727-4296-9f58-91d85dde1e62",
     description: "Sony Alpha iii",
    price: "1000",
     category: "camera",
    },
    {
     title: "Wireless headphones",
     image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXJSN0crlJSYtzeZ2ZzUFyXHD2mj7QN5cxhhPwCBRjw&s",
     description:
       "Beat",
    price: "350",
     category: "accessories",
    },
    {
     title: "RTX3070",
     image:
       "https://m.media-amazon.com/images/I/61XC1vb1HFL.jpg",
     description:
       "Graphic card",
    price: "1000",
     category: "pcParts",
    },
    {
     title: "CPU",
     image:
       "https://m.media-amazon.com/images/I/51CVLuhri5L.jpg",
     description:
       "I7-12700K",
    price: "900",
     category: "pcParts",
    },
    {
     title: "Laptop",
     image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
     description:
       "Macbook Pro",
    price: "3000",
     category: "laptop",
    },
    {
     title: "Phone",
     image:
       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-unselect-gallery-1-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660754213188",
     description:
       "Iphone 14 Promax",
    price: "2000",
     category: "phones",
    },
    {
     title: "RAM",
     image:
       "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/G.SKILL_Trident_Z_Royal_Elite_series_DDR4_memory_coming_May_2021.jpg",
     description:
       "TridentZ Royal",
    price: "500",
     category: "pcParts",
    },
    {
     title: "Motherboard",
     image:
       "https://dlcdnwebimgs.asus.com/gain/36e07492-4808-4066-8f4a-0b454ca0a1ef/w800",
     description:
       "ASUS Z690",
    price: "700",
     category: "pcParts",
    },
    // {
    //  title: "Power Supply",
    //  image:
    //    "https://m.media-amazon.com/images/I/61G4pXx0IGL.jpg",
    //  description:
    //    "",
    // price: "400",
    //  category: "pcParts",
    // },
    // {
    //  title: "Phone",
    //  image:
    //    "https://images.samsung.com/pk/smartphones/galaxy-s21/buy/s21_ultra_basicgroup_kv_mo_img.jpg",
    //  description:
    //    "S21 Ultra",
    // price: "1900",
    //  category: "phones",
    // },
    // {
    //  title: "Phone",
    //  image:
    //    "https://m.media-amazon.com/images/I/71ZDY57yTQL._SX522_.jpg",
    //  description:
    //    "Iphone 14 Pro",
    // price: "1500",
    //  category: "phones",
    // },
    // {
    //  title: "Phone",
    //  image:
    //    "https://media.wired.com/photos/6332360740fe1e8870aa3bc0/master/pass/iPhone-14-Review-Gear.jpg",
    //  description:
    //    "Iphone 14",
    // price: "1200",
    //  category: "phones",
    // },
    // {
    //  title: "",
    //  image:
    //    "",
    //  description:
    //    "",
    // price: "",
    //  category: "",
    // },
    ]
    
  
  
  

export default function Products(){
    return(
        <div style={{display:"flex", flexWrap: "wrap", gap: "20px"}}>{data.map((unit)=>(
            <Product
            title={unit.title}
            image={unit.image}
            description={unit.description}
            price={unit.price}
             />
             ))
            }
        </div>
        
        )}

