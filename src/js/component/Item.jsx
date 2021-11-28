import React from "react";
import PropTypes from "prop-types";

const Item = props => {
	return (
		<div className="row taskList d-flex align-items-center">
			<div className="col task">{props.name}</div>
			<div className="col" onClick={props.clic}>
				<i className="icon fas fa-trash-alt"></i>
			</div>
		</div>
	);
};

Item.propTypes = {
	name: PropTypes.string,
	clic: PropTypes.any
};

export default Item;
