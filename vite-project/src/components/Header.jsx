// import React from "react"  No longer need to do this for funt components, just for Class components cuz I need the life-cycle methods from React.

export default function Header(){
  
  return(
    // Didn't use fragments cuz I'll be applying style to this
    <header className="header">
      {/* sailor moon logo */}
      <img src="" alt="" />
      <h2>Sailor Moon Image Generator</h2>
    </header>
  )
}