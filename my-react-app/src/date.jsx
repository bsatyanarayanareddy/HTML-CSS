export function Date(){
    const date = new Date();
    const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year  = date.getFullYear();
    const month = months[date.getMonth()];
    const day   = date.getDate();
    return (
        <div>
            {`${month} ${day}, ${year}`}
        </div>
    )
}

