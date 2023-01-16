import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const data =[
//   {
//     title: "JBL bar 2.1 deep bass",
//     image:
//       "https://target.scene7.com/is/image/Target/GUEST_86a9c2be-9727-4296-9f58-91d85dde1e62",
//     description: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisqueLorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
//    price: "$11,70",
//     category: "camera",
//    },

// ]

export default function Bottom(){
    return(
        <div>
            <Card style={{ width: "600px" }}>
      <Card.Img style={{width: "568px", height: "399px"}} variant="top" src="https://www.bhphotovideo.com/images/images500x500/Bose_24644_251_Outdoor_Environmental_Speakers_291429.jpg" />
      <Card.Body>
        <Card.Title>JBL bar 2.1 deep bass</Card.Title>
        <h2>$11,70</h2>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
        </div>
    )
}