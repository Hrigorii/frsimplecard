import React from "react"
import okimg from "../img/icon-complete.svg"


export function Confirm({ setValid }) {

	return (
		<div className="confirm">
			<div className="img">
				<img src={okimg} alt="" />
			</div>
			<h1>Thanc You!</h1>
			<p>We`ve added your card details</p>
			<button className="button">Continue</button>
		</div>
	)
}