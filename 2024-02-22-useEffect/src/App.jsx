import { useState } from "react";
import { useEffect } from "react";
import { getBooks } from "./api/books";
import { Link } from "react-router-dom";

function Form() {
	const [user, setUser] = useState(() => {
		const currentState = JSON.parse(localStorage.getItem("currentFormState"));
		return currentState || { name: "", surname: "", email: "", password: "" };
	});
	useEffect(() => {
		localStorage.setItem("currentFormState", JSON.stringify(user));
	}, [user]);

	return (
		<div className="border border-blue-400 my-4">
			<form action="">
				<input
					type="text"
					value={user.name}
					onChange={(e) => {
						setUser({ ...user, name: e.target.value });
					}}
					placeholder="Iveskite vardą"
				/>
				<input
					type="text"
					value={user.surname}
					onChange={(e) => {
						setUser({ ...user, surname: e.target.value });
					}}
					placeholder="Iveskite pavardę"
				/>
				<input
					type="email"
					value={user.email}
					onChange={(e) => {
						setUser({ ...user, email: e.target.value });
					}}
					placeholder="Iveskite el. paštą"
				/>
				<input
					type="password"
					value={user.password}
					onChange={(e) => {
						setUser({ ...user, password: e.target.value });
					}}
					placeholder="Iveskite slaptažodį"
				/>
			</form>
		</div>
	);
}

export default function App({ notifyOnDestroy }) {
	const [number, setNumber] = useState(0);
	const [numberX2, setNumberX2] = useState(0);
	const [text, setText] = useState("Count is");
	const [bgColor, setBgColor] = useState("white");
	const [books, setBooks] = useState([]);
	// const []
	useEffect(() => {
		//Kai yra tuščias dependency array -> paleidžiama tik komponento sukūrimo metu

		getBooks().then((data) => setBooks(data));
		const listenForWindowChanges = (e) => {
			console.log(window.innerWidth);
			if (window.innerWidth > 500 && window.innerWidth < 700)
				setBgColor("yellow");
			else if (window.innerWidth > 700) {
				setBgColor("orange");
				console.log("happened");
			} else setBgColor("White");
		};
		window.addEventListener("resize", listenForWindowChanges);

		return () => {
			window.removeEventListener("resize", listenForWindowChanges);
			notifyOnDestroy();
		};
	}, []);
	useEffect(() => {
		console.log("Komponentas perkrautas");
	});
	useEffect(() => {
		console.log("New number is: " + number);
	}, [number]);

	console.log("Component reloaded");
	console.log(books);
	function a() {
		setNumber(number + 1);
	}
	return (
		<div style={{ background: bgColor }}>
			<Link
				to="/about-us"
				className="bg-red-400 hover:bg-red-500 text-white rounded px-4 py-1"
			>
				About us{" "}
			</Link>
			<Form />
			<input
				className="border"
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button
				className="bg-violet-400 hover:bg-violet-500 px-4 py-1 rounded-lg"
				onClick={a}
			>
				{text} {number}
			</button>
			<div>{numberX2}</div>
			<div className="grid grid-cols-2 gap-4">
				{books.map((book) => {
					return (
						<div
							key={book.id}
							className="flex justify-center"
						>
							<div className="rounded-lg overflow-hidden w-[300px]">
								<img
									src={book.img}
									className="w-full"
									width="300px"
								/>
								<div className="p-4 bg-white">
									<h3 className="font-bold text-wrap">{book.title}</h3>

									<p>Kaina: {book.price}€</p>
									<p>
										Autorius: <span className="italic">{book.author}</span>
									</p>
									<p>
										Išleista:{" "}
										{new Date(book.time * 1000).toLocaleDateString("lt")}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
