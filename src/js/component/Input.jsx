import React, { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item.jsx";

let counter = 0;

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
			counter++;
			setInputValue("");
		}
	};

	const deleteTask = index => {
		let myList = uList;
		myList.splice(index, 1);
		counter--;
		setList(myList);
	};

	return (
		<>
			<div className="container">
				<div className="title">TO DO List</div>
				<input
					className="row myInput"
					type="text"
					onChange={e => validateInput(e)}
					value={inputValue}
					onKeyUp={e => enterInput(e)}
					placeholder={props.myPlaceHolder}
				/>

				{uList.map((task, i) => (
					<Item key={i} name={task} clic={deleteTask} />
				))}

				<div className="row counter">
					{counter > 0
						? counter + " item left"
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
