import Aside from "./Aside"

const data =[
    {
        ognoo: "22 oct 2021",
        title: "Who avoids a pain that produces?",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPo9bz2XPZfgzDi41qwrYRMC2rM6Dcg2y8iLZuPR43WVdIcyWgWm9xL2HJe3JQV7uS9mI&usqp=CAU",
        description: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
       
        category: "camera",
       },
       {
        title: "Who avoids a pain that produces?",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXJSN0crlJSYtzeZ2ZzUFyXHD2mj7QN5cxhhPwCBRjw&s",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
       
        category: "accessories",
       },
]


export default function Asides(){
    return(
        <div>{data.map((uni)=>(
            <Aside
            ognoo={uni.ognoo}
            title1={uni.title}
            image1={uni.image}
            description1={uni.description}
            />
        ))
        }
     </div>
    )}