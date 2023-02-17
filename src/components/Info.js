import React from "react"
import logoimg from "../img/card-logo.svg"

export function Info({ name, number, month, year, cvc }) {

	return (
		<div className="info">
			<div className="card front-side">
				<div className="logo">
					<img src={logoimg} alt="logo" />
				</div>
				<div className="front-side__info">
					<div className="number">
						{
							number ? `${number}` : '1234 5678 9012 0000'
						}
					</div>
					<div className="name">
						{
							name ? `${name} ` : 'YOUR NAME'
						}
					</div>
					<div className="date">
						{
							month || year ? `${month} / ${year}` : 'MM/YY'
						}
					</div>
				</div>
			</div>
			<div className="card back-side">
				<div className="back-side__cvc">
					{
						cvc ? `${cvc}` : 'CVC'
					}
				</div>
			</div>
		</div>
	)
}