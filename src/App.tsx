import { useState } from 'react';
import './App.css'
// type ShowInfoProps = {
//   name: string;
//   age: number;
//   children?: React.ReactNode;
// }
// function App() {
//   const myName: string = "Ta Quoc Hung";
//   const myAge: number = 19;
//   const isMarried: boolean = false;
// function ShowInfo(props: { name: string, age: number }): string {
//   return `Name:${props.name} - age ${props.age}`;
// }
// function ShowsInfo(): JSX.Element {
//   return <div> Name : Hung - Age: 19</div>;
// }
// function showInfo(props: ShowInfoProps): string {
//   return `Name:${props.name} - age: ${props.age}`
// }
// function ShowsInfo(props: ShowInfoProps): JSX.Element {
//   return (
//     <div>
//       Name: {props.name} - age{props.age}
//     </div>
//   );
// }
//   return (
//     <>
//       <h1>Hello {myName}</h1>
//       <h1>Age: {myAge}</h1>
//       <h1>Status: {isMarried ? "da co gia dinh" : "doc than"}</h1>
//       <div>{ShowsInfo({ name: "Hung", age: 18 })}</div>
//       <div>Components:
//         <ShowsInfo name="Hung" age={19}>
//           Có giá trị bên trong
//         </ShowsInfo>
//       </div>
//     </>
//   )
// }

function App() {
  const [color, setColor] = useState("green");
  return (
    <>
      <button onClick={() => setColor(color === "green" ? "red" : "green")}>click</button>
      <div
        style={{ width: 200, height: 200, backgroundColor: color }}></div>
      <hr />

    </>
  )
}

export default App;
