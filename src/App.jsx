import BodyContent from "./Components/BodyContent/BodyContent"
import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"

function App() {
  // const a = 10;
//   const firstname = 'John';
//   const lastname = 'Doe';
//   const age = 30;
//   const jobTitle = 'Software Engineer';

//   const getFullName = (f, l) => {
//     return `${f} ${l}`;

//   };

//   const arr = ["Apple", "Microsoft"];

//   const skill =  <ul>
//   <li>HTML</li>
//   <li>CSS</li>
//   <li>JavaScript</li>
//   <li>React</li>
// </ul>;

// const bobj = {
//   name: "Bob",
//   age: 30,
//   job: "Software Engineer",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345"
//   }
// }

  return (
    <>
      {/* <div className="cont"> */}
        {/* <h1>React rocks</h1>
        <p>{10*10}% for JSX</p>
        <p>This is a variable: {a}</p>
        <p>{ a>50 ? "Greater" : "Lesser"}</p> */}
        {/* <h1>Employee details</h1>
        <p>Full name: {firstname} {lastname}</p>
        <p>Full name (function): {getFullName("Rumesh", "Kumara")}</p>
        <p>Age: {age}</p>
        <p>Job title: {jobTitle}</p>
        <p>{firstname} like {arr[1]} device</p>
        <h2>Skills</h2>
         {skill}
        <h2>Object</h2>
        <p>{bobj.name}</p> 
      </div> */}
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent/>
        <BodyContent>
          <h3>Another Body Content</h3>
          <button>Enter</button>
        </BodyContent>
        <FooterContent/>

      </div>
    </>
  )
}

export default App
