export default function Box(props){
    const imgSrc = props.url ;

    return (
        <div className="box">
            <img src={imgSrc} alt="Box Image" style={{width:"100%", height:"70%",borderRadius:"10px"}} />
            <p>Price:20rupees</p>
            <button>Add</button>
        </div>
    );
}
