import React, { useEffect, useState } from "react"
    
function Museums(){
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("https://back-museums-uniandes.herokuapp.com/api/museums")
        .then(response => response.json())
            .then(content => {
            setName(content[0].name)
            });
    })

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}



export default Museums