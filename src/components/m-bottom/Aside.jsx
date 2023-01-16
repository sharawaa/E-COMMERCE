import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Aside(props){
    return(<div>
        <Card style={{ width: '350px' }}>
      <Card.Img variant="top" src={props.image1} />
      <Card.Body>
        <Card.Title>{props.title1}</Card.Title>
        <Card.Text>
          {props.description1}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       
        </div>
    )
}