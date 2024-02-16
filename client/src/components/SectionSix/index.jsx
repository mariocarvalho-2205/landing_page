import { useForm } from "react-hook-form";
import axios from "axios";
import Line from "../../assets/line_Horizontal.svg";
import "./styles.css";

const SectionSix = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	const sendData = async (data) => {
		try {
			//console.log("antes de passar pelo axios" + data)
			const response = await axios.post('http://localhost:3000/api/formData', data)
			reset()
			//console.log(response.data + " apos passar pelo axios")
		} catch (error) {
			console.error(error + "erro no fronte depois do axios");
		}
	};

	const onSubmit = (data) => {
		sendData(data);
	};

	return (
		<div id='section6' className="sectionSix_Container" onSubmit={handleSubmit(onSubmit)}>
			<div className="sectionSix_Title_Div">
				<h2 className="sectionSix_title_H2">Join Hydra</h2>
				<img src={Line} alt="line_separation" />
				<h3 className="sectionSix_SubTitle_H2">
					Let’s Build Your VR Experience
				</h3>
			</div>
			<div className="sectionSix_form_container">
				<form className="sectionSix_Form">
					<input
						className="input_form firstName"
						type="text"
						id="first_name"
						name="first_name"
						placeholder="First Name"
						{...register("first_name", {
							/*{ required: true, minLength: 3 }*/
						})}
					/>
					{/* {errors.first_name && errors.first_name.type === "required" && (
						<p>This field is required</p>
					)}
					{errors.first_name && errors.first_name.type === "minLength" && (
						<p>Minimum length is 3 characters</p>
					)} */}
					<input
						className="input_form lastName"
						type="text"
						id="last_name"
						name="last_name"
						placeholder="Last Name"
						{...register("last_name", {
							/*{ required: true, minLength: 3 }*/
						})}
					/>
					{/* {errors.last_name && errors.last_name.type === "required" && (
						<p>This field is required</p>
					)}
					{errors.last_name && errors.last_name.type === "minLength" && (
						<p>Minimum length is 3 characters</p>
					)} */}
					<input
						className="input_form email"
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						{...register("email", {
							/*{ required: true, pattern: /^\S+@\S+$/i }*/
						})}
					/>
					{/* {errors.email && errors.email.type === "required" && (
						<p>This field is required</p>
					)}
					{errors.email && errors.email.type === "pattern" && (
						<p>Invalid email address</p>
					)} */}
					<input
						className="input_form phoneNumber"
						type="text"
						id="phone_number"
						name="phone_number"
						placeholder="Phone Number"
						{...register("phone_number", {
							/*{ required: true, pattern: /^\d{10}$/ }*/
						})}
					/>
					{/* {errors.phone_number && errors.phone_number.type === "required" && (
						<p>This field is required</p>
					)}
					{errors.phone_number && errors.phone_number.type === "pattern" && (
						<p>Invalid phone number</p>
					)} */}
					<input
						className="input_form subject"
						type="text"
						id="subject"
						name="subject"
						placeholder="Subject"
						{...register("subject", {
							/*{ required: true, minLength: 5 }*/
						})}
					/>
					{/* {errors.subject && errors.subject.type === "required" && (
						<p>This field is required</p>
					)}
					{errors.subject && errors.subject.type === "minLength" && (
						<p>Minimum length is 5 characters</p>
					)} */}
					<textarea
						className="textarea"
						name="something"
						id="something"
						cols="30"
						rows="10"
						placeholder="Tell Us Something..."
						{...register("something", {
							/*{ required: true }*/
						})}
					></textarea>
					{/* {errors.something && errors.something.type === "required" && (
						<p>This field is required</p>
					)} */}
					<button type="submit" className="button button_big">
						Send to Hydra
					</button>
				</form>
			</div>
		</div>
	);
};

export default SectionSix;
