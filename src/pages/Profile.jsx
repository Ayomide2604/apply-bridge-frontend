import React, { useState, useRef } from "react";
import avatar from "../assets/img/avatar.png";
import getImageUrl from "../utils/getImageUrl";
import useAuthStore from "../stores/useAuthStore";

const initialProfile = {
	firstName: "Jane",
	lastName: "Doe",
	email: "jane.doe@email.com",
	phone: "",
	location: "",
	picture: null,
	cv: null,
};

function Profile() {
	const { user } = useAuthStore();
	const [profile, setProfile] = useState(initialProfile);
	const [message, setMessage] = useState("");
	const [cvName, setCvName] = useState("");
	const fileInputRef = useRef();
	const cvInputRef = useRef();
	const [hover, setHover] = useState(false);

	const handleChange = (e) => {
		setProfile({ ...profile, [e.target.name]: e.target.value });
	};

	const handlePicture = (e) => {
		const file = e.target.files[0];
		if (file) {
			setProfile({ ...profile, picture: file });
			setPreview(URL.createObjectURL(file));
		}
	};

	const handleCV = (e) => {
		const file = e.target.files[0];
		if (file) {
			setProfile({ ...profile, cv: file });
			setCvName(file.name);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage("Profile updated successfully!");
		setTimeout(() => setMessage(""), 2000);
	};

	const triggerFileInput = () => {
		fileInputRef.current.click();
	};

	return (
		<div className="card border-0 shadow-sm">
			<div className="card-body">
				<h2 className="mb-4">Profile Settings</h2>
				{message && <div className="alert alert-success">{message}</div>}
				<form onSubmit={handleSubmit} className="row g-3">
					<div className="col-md-3 text-center">
						<div
							className="position-relative d-inline-block"
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
							style={{ cursor: "pointer" }}
							onClick={triggerFileInput}
						>
							<img
								src={getImageUrl(user?.record, user?.record?.avatar) || avatar}
								alt="Profile"
								className="avatar avatar-lg rounded-circle mb-2"
								style={{ width: 100, height: 100, objectFit: "cover" }}
							/>
							{hover && (
								<div
									className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 rounded-circle d-flex align-items-center justify-content-center"
									style={{ width: 100, height: 100, objectFit: "cover" }}
								>
									<i
										className="bx bx-camera text-white"
										style={{ fontSize: 32 }}
									/>
								</div>
							)}
							<input
								type="file"
								accept="image/*"
								className="d-none"
								onChange={handlePicture}
								ref={fileInputRef}
							/>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label">First Name</label>
								<input
									type="text"
									className="form-control"
									name="firstName"
									value={profile.firstName}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Last Name</label>
								<input
									type="text"
									className="form-control"
									name="lastName"
									value={profile.lastName}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Email</label>
								<input
									type="email"
									className="form-control"
									name="email"
									value={profile.email}
									onChange={handleChange}
									required
									disabled
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Phone Number</label>
								<input
									type="text"
									className="form-control"
									name="phone"
									value={profile.phone}
									onChange={handleChange}
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Location</label>
								<input
									type="text"
									className="form-control"
									name="location"
									value={profile.location}
									onChange={handleChange}
								/>
							</div>
							<div className="col-md-6">
								<label className="form-label">Upload CV</label>
								<input
									type="file"
									accept=".pdf,.doc,.docx"
									className="form-control"
									onChange={handleCV}
									ref={cvInputRef}
								/>
								{cvName && <div className="small mt-1">Selected: {cvName}</div>}
							</div>
							<div className="col-12">
								<button type="submit" className="btn btn-primary">
									Save Changes
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Profile;
