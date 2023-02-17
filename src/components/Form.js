import React, { useState } from "react"

export function Form({ name, month, year, cvc, setName, setValid, valid, number, setNumber, setMonth, setYear, setCvc }) {


	const [dirtyNumber, setDirtyNumber] = useState(false);
	const [errorNumber, setErrorNumber] = useState(true)
	const [dirtyMonth, setDirtyMonth] = useState(false);
	const [errorDate, setErrorDate] = useState(true);
	const [dirtyYear, setDirtyYear] = useState(false);
	const [dirtyCvc, setDirtyCvc] = useState(false);
	const [errorCvc, setErrorCvc] = useState(true)


	function onBlurHandle(event) {
		switch (event.target.name) {
			case 'card-number':
				setDirtyNumber(true);
				break
			case 'month':
				setDirtyMonth(true);
				break;
			case 'year':
				setDirtyYear(true);
				break;
			case 'cvc':
				setDirtyCvc(true);
				break;
		}
	}

	function inputName(event) {
		let inputName = event.target.value.replace(/[^.\sA-Z]/i, '').match(/^.{0,25}/gi);
		setName(inputName);
	}

	function inputNumber(event) {
		let inputNumber = event.target.value.replace(/[^\d]/, '').match(/^.{0,16}/g);
		let out = inputNumber.toString().match(/\d{4}/g) ? inputNumber.toString().match(/\d{4}/g) : null;
		setNumber(inputNumber);
		if (!out || out.length !== 4) {
			setErrorNumber(true);
		} else if (out.length === 4) {
			setNumber(out.join(' '));
			setErrorNumber(false);
		}
	}

	function inputDate(event, set) {
		let number = event.target.value.replace(/[^\d]/, '').match(/^.{0,2}/g);
		set(number)
		if (number.toString().length === 2) {
			setErrorDate(false);
		} else {
			setErrorDate(`${event.target.name} can not be blank`);
		}
	}


	return (
		<div className="form">
			<form action="#" className="input-form">
				<div className="input-form__item">
					<label htmlFor="fullName">cardholder name</label>
					<input id="fullName" type="text"
						name="full-name" placeholder="Your Name"
						value={name}
						onInput={event => inputName(event)}
					/>
				</div>
				<div className="input-form__item">
					<label htmlFor="cardNumber">card number</label>
					<input id="cardNumber" type="text"
						className={`${(errorNumber && dirtyNumber) ? "error" : ""}`}
						name="card-number" placeholder="1234 5678 9012 000"
						value={number}
						onInput={event => inputNumber(event)}
						onBlur={event => onBlurHandle(event)}
					/>
					{(errorNumber && dirtyNumber) &&
						<div className="allert">Wrong format, numbers only</div>
					}
				</div>
				<div className="input-form__date">
					<label>exp. date (MM/YY)</label>
					<input type="text"
						className={`date ${(errorDate && dirtyYear && dirtyMonth) ? "error" : ""}`} name="month" placeholder="MM"
						value={month}
						onBlur={event => onBlurHandle(event)}
						onInput={event => {
							inputDate(event, setMonth);
						}}
					/>
					<input type="text"
						className={`date ${(errorDate && dirtyYear && dirtyMonth) ? "error" : ""}`} name="year" placeholder="YY"
						value={year}
						onBlur={event => onBlurHandle(event)}
						onInput={event => {
							inputDate(event, setYear);
						}}
					/>
					{(errorDate && dirtyYear && dirtyMonth) &&
						<div className="allert">Can`t be blank</div>
					}
				</div>
				<div className="input-form__cvc">
					<label htmlFor="cvc">cvc</label>
					<input id="cvc" type="text" className={`cvc ${(errorCvc && dirtyCvc) ? "error" : ""}`} name="cvc" placeholder="000"
						value={cvc}
						onBlur={event => onBlurHandle(event)}
						onInput={event => {
							let number = event.target.value.replace(/[^\d]/, '').match(/^.{0,3}/g);
							setCvc(number);
							if (number.toString().length === 3) {
								setErrorCvc(false);
							} else {
								setErrorCvc(true);
							}
						}}
					/>
					{(errorCvc && dirtyCvc) &&
						<div className="allert">Can`t be blank</div>
					}
				</div>
				<button className="button" disabled={(!errorNumber && !errorDate && !errorCvc) ? false : true}
					onClick={event => {
						event.preventDefault();
						setValid(true);
					}}
				>Confirm</button>
			</form >
		</div >
	)
}