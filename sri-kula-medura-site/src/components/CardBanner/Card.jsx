import React from "react";

const Card = ({image, title, content}) => {
	return (
		<div className="col-md-2">
			<div className="card">
				<div className="text-center mt-4 mb-2">
					<img src={image} className="card-img-top " alt=""/>
				</div>
				<div className="card-body">
					<h5 className="card-title text-center mb-3">{title}</h5>
					<p className="card-text text-justify">{content}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;