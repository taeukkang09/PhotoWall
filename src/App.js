import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
    const [image, setImage] = useState("");
    const clientId = "OgNMGe7xH5aKowwinfQJ1ptPiAeSkye6K48zz4f-o_I";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
    };
    const handleSubmit = () => {
        console.log(image);
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
        axios.get(url).then((response) => {
            console.log(response);
            setResult(response.data.results);
        });
    };
    return (
        <div className="app">
            <div className="heading">
                <h1>Welcome to PhotoWall! </h1>
            </div>

            <div className="input">
                <input onChange={handleChange} type="text" name="image" placeholder="Search for images" />
            </div>
            <button onClick={handleSubmit} type="submit">Search</button>
            <div className="result">
                {result.map((image) => (
                    <>
                        <div className="card">
                            <img src={image.urls.thumb} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
export default App;