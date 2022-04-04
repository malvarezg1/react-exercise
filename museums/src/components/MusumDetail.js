import React, { useEffect, useState } from "react"
function MusemuDetail(props){

    const [render, setRender] = useState(false);

    function changeRenderState(param){
        setRender(param)
    }
  
        if(render === false)
        {
            
        }
        else{
            return(<p>Rendering</p>)
        }

    
}
export default MusemuDetail;