import React, { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item.jsx";

const Input = props => {
	// HOOKS
	// Use state with the value of my input
	const [inputValue, setInputValue] = React.useState("");
	// Use state with the task list
	const [uList, setList] = React.useState([]);

	//FUNCTIONS

	// Changes the value of the input
	// and shows a console error when the input is empty
	const validateInput = event => {
		// Sets state with the value of the input
		setInputValue(event.target.value);
		if (event.target.value === "")
			console.error("The input can't be empty");
	};

	// Adds a task on the list
	const enterInput = event => {
		// If you the that you press is ENTER and the input was not empty
		if (event.keyCode == 13 && inputValue != "") {
			// Copies the state
			let myList = uList;
			// Pushes the new task in the array
			myList.push(event.target.value);
			// Adds the task in the state that contains the list
			setList(myList);
			// Sets the input value with an empty string
			setInputValue("");
		}
	};

	// Function that deletes tasks
	const deleteTask = index => {
		// Initializes an array bringing the uList state by spread
		let newArray = [...uList];
		// Deletes the task with splice method
		newArray.splice(index, 1);
		// Updates the state that contains all the tasks
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
					placeholder={props.myPlaceHolder}
				/>
				{/* Task list */}
				{uList.map((task, i) => (
					<Item key={i} name={task} clic={deleteTask} />
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

Input.propTypes = {
	myPlaceHolder: PropTypes.string
};

export default Input;
