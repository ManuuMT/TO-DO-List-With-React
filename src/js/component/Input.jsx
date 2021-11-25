import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = props => {
	const [inputValue, setInputValue] = React.useState("");
	const [uList, setList] = React.useState([]);

	const validateInput = event => {
		setInputValue(event.target.value);
		if (event.target.value === "")
			console.error("The input can't be empty");
	};

	const enterInput = event => {
		if (event.keyCode == 13 && event.target.value != "") {
			let myList = uList;
			myList.push(event.target.value);
			setList(myList);
			setInputValue(""); // PREGUNTAR A MANU
		}
	};
	// <i class="fas fa-trash-alt"></i>
	const deleteTask = index => {
		let myList = uList;
		myList.splice(index, 1);
		setList(myList);
	};

	const listHTML = uList.map((task, i) => {
		return (
			<>
				<li key={i}>{task}</li>
				<button onClick={e => deleteTask(i)}>x</button>
			</>
		);
	});

	return (
		<>
			<input
				type="text"
				onChange={e => validateInput(e)}
				value={inputValue}
				onKeyUp={e => enterInput(e)}
				placeholder={props.myPlaceHolder}
			/>
			<ul>{listHTML}</ul>
		</>
	);
};

Input.propTypes = {
	myPlaceHolder: PropTypes.string
};

export default Input;
