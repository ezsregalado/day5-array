import { useRef, useState } from "react";

export default function Card() {
  function sum(x, y) {
    return x + y;
  }

  const myObj = { name: "someone", lastname: "noname" };

  console.log(myObj.name);
  console.log(myObj.lastname);

  const [myArray, setMyArray] = useState([
    {
      name: "student1",
      course: "IT",
      section: "IT-06",
    },
    {
      name: "student2",
      course: "IT",
      section: "IT-05",
    },
    {
      name: "student3",
      course: "IT",
      section: "IT-04",
    },
    {
      name: "student4",
      course: "IT",
      section: "IT-03",
    },
  ]);

  const plus_one = (x) => {
    return x + 1;
  };

  // reference
  const nameRef = useRef(null);
  const courseRef = useRef(null);
  const sectionRef = useRef(null);

  const addStudent = () => {
    const newStudent = {
      name: nameRef.current.value,
      course: courseRef.current.value,
      section: sectionRef.current.value,
    };
    console.log(newStudent);
    setMyArray([newStudent, ...myArray]);
    nameRef.current.value = "";
    courseRef.current.value = "";
    sectionRef.current.value = "";
  };

  return (
    <div>
      <div className="border border-black flex gap-3 p-5">
        <input type="text" placeholder="student name" ref={nameRef} />
        <input type="text" placeholder="student course" ref={courseRef} />
        <input type="text" placeholder="student section" ref={sectionRef} />
        <button onClick={addStudent}>submit</button>
      </div>
      <table className="table-auto table w-full border-separate ">
        <thead>
          <tr>
            <th>name</th>
            <th>course</th>
            <th>section</th>
          </tr>
        </thead>
        <tbody>
          {myArray.map((student) => {
            return (
              <tr key={student.name} className="text-center font-thin">
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.section}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
