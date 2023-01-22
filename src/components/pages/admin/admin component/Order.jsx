export default function Orders(props){
    return(
        <>
<tbody>
                <tr>
                <td>{props.no}</td>
                <td>{props.date}</td>
                <td>{props.phone}</td>
                <td>{props.eMail}</td>
                <td>{props.address}</td>
                <td>{props.number}</td>
                <td>{props.totalAmount}</td>
                <td>{props.payment}</td>
                <td>{props.status}</td>
                
                </tr>
            </tbody>
        </>
    )
}