import React from 'react'

const Profile = ({name,Bio,profession,handleName,children}) => {
    
    return (
        <div>
            <h1>{name}</h1>
            <h1>{Bio}</h1>
            <h1>{profession}</h1>
            <button onClick={() =>handleName(name)} > click </button>  
            { children}  
        </div>
    )
}

export default Profile
