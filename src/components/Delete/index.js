import './index.css'

const Delete=(props)=>{
    const{details,deleteUser}=props
    const{content,uniqueId}=details
    const deleting=()=>{
        deleteUser(uniqueId)
    }
    return(
        <li className='li-container'>
            <h2>{content}</h2>
            <button className="button-1" onClick={deleting}>Delete</button>
        </li>
    )
}
export default Delete