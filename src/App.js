import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./ColorCard/ListOfCards.js";
import Searchbar from "./Searchbar/Searchbar.js";

function App() {
  
	const [search, setSearch] = useState(""); 

	useEffect(() => {
		document.addEventListener("click", welcome);
		return () => document.removeEventListener("click", welcome);
  });

	const welcome = () => {
		alert("Hello!");
	};

	return (
		<div>
			<Searchbar search={search} setSearch={setSearch} />
			<CardList search={search} />
		</div>
	);
}

export default App;