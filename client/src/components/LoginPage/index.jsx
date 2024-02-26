import { useState, useHistory } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const LoginPage = () => {
	const history = useHistory;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			console.log("antes de passar pelo axios" + username + " " + password);
			const response = await axios.post(
				"http://localhost:3000/api/formData/login",
				{ username, password }
			);
			console.log(response.data); // Aqui você pode verificar se o login foi bem-sucedido
			history.push("/cadastros"); // Redireciona para a rota de cadastros se o login for bem-sucedido
		} catch (error) {
			console.error("Erro no login:", error);
			setError("Usuário ou senha inválidos");
		}
	};

	return (
		<>
			<div className="login_Container">
				<h1>Login</h1>
				{error && <p>{error}</p>}
				<form className="login_form" onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
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
