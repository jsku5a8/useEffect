import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [resourseType, setResourseType] = useState("posts");
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0)

	const result = useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
			.then((response) => response.json())
			.then((json) => setData(json));
	}, [resourseType]);

	const sss = useEffect(() => {
		const timerId = setInterval(() => {
			console.log("adsvc");
		}, 1000);
		return () => clearInterval(timerId);
	}, [count]);

	console.log(sss);


	return (
		<div className="container">
			<header className="App-header">
				<button
					onClick={() => {
						setResourseType("posts");
					}}>
					POSTS
				</button>
				<button
					onClick={() => {
						setResourseType("users");
					}}>
					USERS
				</button>
				<button
					onClick={() => {
						setResourseType("comments");
					}}>
					COMMENTS
				</button>
				<p>{resourseType}</p>
				{data.map((el) => {
					return <div key={el.id}>{el.name}</div>;
				})}
			</header>
		</div>
	);
}

export default App;
