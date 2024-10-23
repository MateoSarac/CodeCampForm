import React, { FunctionComponent, useState } from "react";
import "./App.css";

// type AgeProps = {
//   age?: number;
// };

// const App: FunctionComponent<AgeProps> = ({ age = 27 }) => {
//   console.log(age >= 18 ? "Punoljetni ste!" : "Niste punoljetni!");

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p> {age >= 18 ? "Punoljetni ste!" : "Niste Punoljetni!"}</p>
//       </header>
//     </div>
//   );
// };

// type LoginProps = {
//   isLoggedIn?: boolean;
// };

// const App: FunctionComponent<LoginProps> = ({ isLoggedIn = false }) => {
//   console.log(isLoggedIn ? "Logirani ste!" : "Niste logirani!");

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p> {isLoggedIn ? "Logirani ste!" : "Niste logirani!"}</p>
//       </header>
//     </div>
//   );
// };

// type DataProps = {
//   firstName?: string;
//   lastName?: string;
// };

// const App: FunctionComponent<DataProps> = ({
//   firstName = "Mateo",
//   lastName = "Sarac",
// }) => {
//   console.log(`Ja sam ` + firstName + ` ` + lastName);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           {" "}
//           Ja sam {firstName} {lastName}
//         </p>
//       </header>
//     </div>
//   );
// };

// type ArrayProps = {
//   array?: [];
// };

// const App: FunctionComponent<ArrayProps> = ({
//   array = ["Mateo", "Mirko", "Slavko"],
// }) => {
//   console.log(`Imena iz niza: `);
//   array.forEach((element) => {
//     console.log(element);
//   });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p> Imena iz niza: {array}</p>
//       </header>
//     </div>
//   );
// };

// type User = {
//   firstName: string;
//   lastName: string;
//   birthYear: number;
// };

// const App: FunctionComponent = () => {
//   const array: User[] = [
//     {
//       firstName: "Mateo",
//       lastName: "Šarac",
//       birthYear: 1997,
//     },
//     {
//       firstName: "Marko",
//       lastName: "Marić",
//       birthYear: 2008,
//     },
//     {
//       firstName: "Andrej",
//       lastName: "Alilović",
//       birthYear: 2011,
//     },
//   ];

//   const calculateAge = (birthYear: number) => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Lista korisnika</h1>
//         <ul>
//           {array.map((user, index) => {
//             const age = calculateAge(user.birthYear);
//             return (
//               <li key={index}>
//                 {user.firstName} {user.lastName} - {age} godina
//                 {age < 18 && <span> (Mlađi od 18)</span>}
//               </li>
//             );
//           })}
//         </ul>
//       </header>
//     </div>
//   );
// };

// export const App: FunctionComponent = () => {
//   const [count, setCount] = useState(0);
//   console.log("Trenutni broj: " + count);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count: {count}
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Resetiraj
//       </button>
//     </div>
//   );
// };

// export const App: FunctionComponent = () => {
//   const [poruka, setPoruka] = useState("Dobro došli!");
//   console.log(poruka);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setPoruka("Bolje vas našli!");
//         }}
//       >
//         Promjenite poruku: {poruka}
//       </button>
//     </div>
//   );
// };

// export const App: FunctionComponent = () => {
//   const [name, setName] = useState("");
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Unesite svoje ime"
//       />
//       <p>Pozdrav, {name} !</p>
//     </div>
//   );
// };

export const App: FunctionComponent = () => {
  const [state, setState] = useState(true);

  console.log(state);

  const changeState = () => {
    setState((current) => !current);
  };

  return <div>{<button onClick={changeState}>Change state</button>} </div>;
};
