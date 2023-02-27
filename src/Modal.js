import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
export default function Modals() {
    let count = 0;
    const [arr, setArr] = useState([]);
    useEffect(() => {
        let o = localStorage.getItem("lists");
        console.log(o, "sss");
        let ob = JSON.parse(o);
        console.log(ob, "qwertytyyttfghgfh");
        // setArr([...arr,...ob]);
        setArr(ob);

    }, [])
    console.log(arr, "stateob");
    useEffect(() => {

    }, [arr])


    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [superHeroName, setSuperHeroName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const handleClose = () => {
        setShow(false);
    }
    const handleSubmit = () => {

        setShow(false);
        const obj = {
            firstName,
            lastName,
            email,
            superHeroName,
            gender,
            age
        }
        let DATA = [...arr, obj];
        setArr(DATA);
        let objjson = JSON.stringify(DATA);
        localStorage.setItem("lists", objjson);

        console.log(arr, "recird added");
        // const getobj=localStorage.getItem("lists");
        // const stringobj=JSON.parse(getobj);
        // setDisplay(stringobj);
        // console.log(displayobj,"idsssss");




    }
    const showw = () => {
        setShow(true);
    }
    const han = () => {
        console.log(window.localStorage.getItem("lists"));
    }
    return (

        <div>
           
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label className='mx-2'>FirstName</label>
                        <input type="text" className="form-control my-2 round rounded-4" placeholder='Enter FirstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div>
                        <label className='mx-2'>LastName</label>
                        <input type="text" className="form-control my-2 round rounded-4" placeholder='Enter LastName' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                    <div>
                        <label className='mx-2'>Superhero Name</label>
                        <input type="email" className="form-control my-2 round rounded-4" placeholder='Enter Superhero Name' value={superHeroName} onChange={(e) => setSuperHeroName(e.target.value)}></input>
                    </div>
                    <div >
                        <label className='mx-2'>Email</label>
                        <input type='text' placeholder='Enter Email ' className="form-control my-2 round rounded-4" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                    </div>
                    <div >
                        <label className='mx-2'>Gender</label>
                        <input type='text' placeholder='Enter Gender ' className="form-control my-2 round rounded-4" value={gender} onChange={(e) => setGender(e.target.value)} ></input>

                    </div>
                    <div >
                        <label className='mx-2'>Age</label>
                        <input type='text' placeholder='Enter Age' className="form-control my-2 round rounded-4" value={age} onChange={(e) => setAge(e.target.value)} ></input>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-primary my-4' onClick={handleSubmit}>Submit</button>

                </Modal.Footer>
            </Modal>
            <button onClick={showw} className='btn btn-outline-success'>Add Record</button>
            <button onClick={showw} className='btn btn-outline-danger'>delete Record</button>
        
            <br/>
            <br/>
            

            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">SuperHero Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email </th>
                        <th scope="col">Age </th>
                    </tr>
                </thead>
                <tbody>

                    {arr.map((e) => {
                        return (<tr>
                            <td>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />

                                </div>
                                {count = count + 1}
                            </td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.superHeroName}</td>
                            <td>{e.gender}</td>
                            <td>{e.age}</td>
                        </tr>);
                    })}

                </tbody>
            </table>
        </div>
    )
}
