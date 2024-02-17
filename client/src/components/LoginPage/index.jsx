import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const LoginPage = () => {
	return (
		<>
			<div className="login_Container">
				<h1>Login</h1>

				<form className="login_form">
					<input type="text" name="user" placeholder="User" />
					<input type="text" name="password" placeholder="Password" />
					<button className="button button_small" type="submit">
						Login
					</button>
					<Link to="/">
						<button className="button button_small" type="submit">
							Voltar
						</button>
					</Link>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
