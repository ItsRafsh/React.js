type ProfileCardProps = {
    name?: string,
    year: number,
    job?: string    // tanda? = optional
}

const ProfileCard = (props: ProfileCardProps) => {
    const { name='anonymous', year, job } = props;
    return(
        <div className="card">
            <p>Name: {name}</p>
            <p>Birth Year: {year}</p>
            {job ? <p>Job: {job}</p> : null} {/*ini namanya if ternary*/}

        </div>
        
    )
}

// const ProfileCard = (props: ProfileCardProps) => {
//     return(
//         <div className="card">
//             <p>Name: {props.name}</p>
//             <p>Birth Year: {props.year}</p>
//             {/* {props.job && <p>Job: {props.job}</p>}  sama aja */}  
//             {props.job ? <p>Job: {props.job}</p> : null} {/*ini namanya if ternary*/}

//         </div>
        
//     )
// }

export default ProfileCard;