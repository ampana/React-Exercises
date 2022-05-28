import data from '../data.js'

export default function Card(props) {
    console.log(data.length)
    console.log(props.item.id)
    let hasHr
    if((props.item.id) < data.length) {
        hasHr = true
        console.log(hasHr)
    }
  return (
<div>
  <div className="card">
    <img src={props.item.imageUrl} className="card--image"/>
    <div className="flex--container">
        <div className="place">
            <p className="location">{props.item.location}</p>
            <p><a href={props.item.googleMapsUrl} className="googleMapsUrl">View on Google Maps</a></p>
        </div>
        <p className="title">{props.item.title}</p>
        <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
        <p className="description">{props.item.description}</p>
    </div>
    
 </div>{hasHr && <hr className="horizontal--line" />}
</div>
);
}