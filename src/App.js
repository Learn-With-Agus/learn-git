import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const myName = "agus";
    const strongName = <strong>Agus</strong>;
    let numberA = 8;
    let numberB = 80;
    let hasil = numberA + numberB;
    return (
        <div class="learn-operation">
            <h1>
                Halo {myName} hari ini kita belajar menghitung {numberA} +{" "}
                {numberB} = {hasil}{" "}
            </h1>
            <h1>
                Halo {myName} hari ini kita belajar menghitung {numberA} +{" "}
                {numberB} = {hasil}{" "}
            </h1>
            <h1>
                Halo {myName} hari ini kita belajar menghitung {numberA} +{" "}
                {numberB} = {hasil}{" "}
            </h1>
            <h1>
                Halo {myName} hari ini kita belajar menghitung {numberA} +{" "}
                {numberB} = {hasil}{" "}
            </h1>
            <h1>
                Halo {myName} hari ini kita belajar menghitung {numberA} +{" "}
                {numberB} = {hasil}{" "}
            </h1>
        </div>
    );
}

export default App;
