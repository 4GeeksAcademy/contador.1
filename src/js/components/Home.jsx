import React from "react";
import Contador from "./Contador";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
	return (
		<div className="Home-container">
			<h1>CONTADOR</h1>
			
			<Contador />
		</div>	
            
	)
			
};

export default Home;