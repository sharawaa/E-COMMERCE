export default function Moderators(props){
    return(<>
    <tbody>
                <tr>
                <td>{props.moderator}</td>
                <td>{props.sureName}</td>
                <td>{props.name}</td>
                <td>{props.eMail}</td>
                <td>{props.phone}</td>
                <td>{props.goodsSold}</td>
                <td>{props.date}</td>
                </tr>
            </tbody>
    
    </>)
}