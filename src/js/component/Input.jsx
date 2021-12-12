import React, { useState } from "react";
import Item from "./Item.jsx";

const Input = () => {
	// HOOKS

	const [inputValue, setInputValue] = React.useState("");
	const [uList, setList] = React.useState([]);

	//FUNCTIONS

	// Changes the value of the input
	const validateInput = event => {
		setInputValue(event.target.value);
		if (event.target.value === "")
			console.error("The input can't be empty");
	};

	// Adds a task on the list
	const enterInput = event => {
		if (event.keyCode == 13 && inputValue != "") {
			let myList = uList;
			myList.push(event.target.value);
			setList(myList);
			setInputValue("");
		}
	};

	// Function that deletes tasks
	const deleteTask = index => {
		let newArray = [...uList];
		newArray.splice(index, 1);
		setList(newArray);
	};

	return (
		<>
			<div className="container">
				<div className="title">TO DO List</div>
				{/* Input */}
				<input
					className="row myInput"
					type="text"
					onChange={validateInput}
					value={inputValue}
					onKeyDown={enterInput}
					placeholder="What needs to be done?"
				/>
				{/* Task list */}
				{uList.map((task, i) => (
					<Item key={i} name={task} clic={e => deleteTask(i)} />
				))}
				{/* Tasks counter */}
				<div className="row counter">
					{uList.length > 0
						? uList.length + " item left"
						: "No tasks, add a task"}
				</div>
			</div>
		</>
	);
};

export default Input;
