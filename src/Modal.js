
//////////rishabh is a goof ffffff


import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
export default function Modals() {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [superHeroName, setSuperHeroName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const[nameerror,setNameError]=useState(false);
    const[lastenamerror,setLastNameError]=useState(false);
    const[Emailerror,setEmailerror]=useState(false);
    const[supererror,setSuperman]=useState(false);
    const[ageerror,setAgeerror]=useState(false);
    const[condn,setCondn]=useState(false);
    let count = 0;
    const[cond,setCond]=useState(true);
    let update=[];
    const [arr, setArr] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        let obj = localStorage.getItem("lists");
        console.log(obj, "sss");
        let ob = JSON.parse(obj);
        console.log(ob, "qwertytyyttfghgfh");
       
        setArr(ob);
        setList(ob);
    }, [])
    

useEffect(()=>{
    setList(arr);
    if(!cond){
        localStorage.setItem("lists",JSON.stringify(arr));

    }
    else{
        setCond(false);
    }
  
},[arr])
const[details,searchDetails]=useState([]);
const [cndFN, setCndFN] = useState(true);
const [cndLN, setCndLN] = useState(true);
const [cndSN, setCndSN] = useState(true);
const [cndEmail, setCndEmail] = useState(true);
const [cndGender, setCndGender] = useState(true);
const [cndAge, setCndAge] = useState(true);
const sortList=(list)=>{!cndFN? setList(list): setCndFN(false);};
    const sortListLN=(list)=>{!cndLN? setList(list): setCndLN(false);};
    const sortListSN=(list)=>{!cndSN? setList(list): setCndSN(false);};
    const sortListEN=(list)=>{!cndEmail? setList(list): setCndEmail(false);};
    const sortListGN=(list)=>{!cndGender? setList(list): setCndGender(false);};
    const sortListAge=(list)=>{!cndAge? setList(list): setCndAge(false);};
    const handleClose = () => {
        setShow(false);
    }
   const search=(e)=>{
    let event=e.target.value;
    const newData = arr.filter(val => val.firstName.toLowerCase().includes(event.toLowerCase()) ||
    val.lastName.toLowerCase().includes(event.toLowerCase()) ||
    val.superHeroName.toLowerCase().includes(event.toLowerCase()) ||
    val.age.toLowerCase().includes(event.toLowerCase()) ||
    val.email.toLowerCase().includes(event.toLowerCase()) ||
    val.gender.toLowerCase().includes(event.toLowerCase())
  );
  if(e.target.value.length>0){
    setList(newData);
    }
    else if(e.target.value.length==0){
      setList(arr);
    }
 
   }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Emailerror) {
       
            return;
        }
        else if(supererror){
            return;
        }
        else if(ageerror){
            return;
        }
        else if(lastenamerror){
            return;
        }
        else if(nameerror){
            return;
        }
    
        
       
        else{
            setShow(false);
            const obj = {
                id: Math.floor(Math.random()*10),
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
            console.log(objjson,"ads")
            localStorage.setItem("lists", objjson);
    
            console.log(arr, "recird added");
            setFirstName("");
            setAge("");
            setLastName("");
            setGender("");
            setSuperHeroName("");
            setEmail("");
           
        }
        
       
       
    }
    const deleteitem = (update) => {
        console.log(update)
       
        setArr(arr.filter((val)=> { 
          
        return (!update.includes(val.id))})
    );
      
  
        
   
}
    const updatedlist=(ele,ind2)=>{
    
    if(ele.target.checked){
        update=[...update,ind2];
        console.log("ok",update);
    }
    else {
        update=update.filter((e)=>{
            return e!=ind2;
        })
        console.log(update,"sal");
        console.log("nooooooooo")
    }
    
        
    }
    const emailregex=/^[A-Za-z0-9+_.]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const letterregex=/^[A-Za-z]{1,}$/;
    const superregex=/^[A-Za-z0-9]{1,}$/;
    const HandleName=(e)=>{
        setFirstName(e.target.value);
        let name=e.target.value;
      
        if(!name.match(letterregex)){
           
            setNameError(true);
        }
       
        else{
            setNameError(false);
        }
     
    }
    const handle=(e)=>{
        setLastName(e.target.value);
        let name=e.target.value;
      
        if(!name.match(letterregex)){
          
            setLastNameError(true);
        }
        else{
            setLastNameError(false);
        }
     
    }
    const AgeValid=(e)=>{    
        setAge(e.target.value);
        let age=e.target.value;
        if(age>0 && age<=100){
            setAgeerror(false);
        }
        else{
            setAgeerror(true);
        }
      
    }
    const SupermanName=(e)=>{
        setSuperHeroName(e.target.value);
        let name=e.target.value;
      
        if(!name.match(superregex)){
          
            setSuperman(true);
        }
        else{
            setSuperman(false);
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        let email=e.target.value;
        if(!email.match(emailregex)){
            
            setEmailerror(true);
        }
        else{
            setEmailerror(false);
        }
    }
    const searching=()=>{
        details.length>0   ? (
            details.map((val)=>{
            return (<tr>
                <td>
                    <div className="form-check form-check-inline" >
                        <input className="form-check-input"  type="checkbox" value="option1" onChange={(e)=>updatedlist(e,val.id)} />

                    </div>
                    {count = count + 1}
                </td>
               
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
                <td>{val.superHeroName}</td>
                <td>{val.age}</td>
            </tr>);
            })): ( <h1>"no  found "</h1>)
    }
   
    const showw = () => {
        setShow(true);
    }
    // const searchItem((e)=>{
    //     let search=e.target.value;

    // })
   const handleChange=(e)=>{
    let name=(e.target.value);
    setGender(name);
   }
   const ss=(list,condn)=>{
    if(condn){
        setArr(list);
    }
    else{}

   }
    return (

        <div>

            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label className='mx-2'>FirstName</label>
                        <input type="text" className="form-control my-2 round rounded-4"  placeholder='Enter FirstName' value={firstName} onChange={HandleName} required></input>
                    </div>
                    {nameerror?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}
                    <div>
                        <label className='mx-2'>LastName</label>
                        <input type="text"  className="form-control my-2 round rounded-4" placeholder='Enter LastName' value={lastName} onChange={handle} required></input>
                        {lastenamerror?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}
                    </div>
                    <div>
                        <label className='mx-2'>Superhero Name</label>
                        <input type="text" className="form-control my-2 round rounded-4" placeholder='Enter Superhero Name' value={superHeroName} onChange={ SupermanName } required></input>
                        {supererror?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}
                    </div>
                    <div >
                        <label className='mx-2'>Email</label>
                        <input type="email" placeholder='Enter Email ' className="form-control my-2 round rounded-4" value={email} onChange={handleEmail} required ></input>
                        {Emailerror?<span style={{color:'red'}}>Email format not correct</span>:<span></span>}

                    </div>
                    <div className="form-group">
              <label>Enter Gender: </label>
              <br />
              <input
                type="radio"
                //className="form-control"
                name="gender"
                value="Male"
                id="checkGender"
                onChange={handleChange}
              ></input>
              <label>M</label>
              <br />
              <input
                type="radio"
                required
                //className="form-control"
                name="gender"
                value="Female"
                onChange={handleChange}
              ></input>
              <label>F</label>
            </div>
                    <div >
                        <label className='mx-2'>Age</label>
                        <input type='number' placeholder='Enter Age' className="form-control my-2 round rounded-4" value={age} onChange={AgeValid} required></input>
                        {ageerror?<span style={{color:'red'}}>Enter numbers only</span>:<span></span>}

                    </div>
                    <input type="submit" value="Submit here" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/* <button className='btn btn-primary my-4' type='' onClick={handleSubmit}>Submit</button> */}
                  

                </Modal.Footer>
            </Modal>
            <button onClick={showw} className='btn btn-outline-success'>Add Records</button>
            <button className='btn btn-outline-danger' onClick={()=>deleteitem(update)}>delete Record</button>
              <nav className="navbar navbar-light bg-light">
              <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1"  class="form-control" onChange={search} />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn">
    <i class="fas fa-search"></i>
  </button>
</div>

     
</nav>
            <br />
            <br />


            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName
                        <button onClick={()=>{
                            console.log(list,"aaa");
                            const liste=list
                           liste.sort((a,b)=>{
                            if(a.firstName<b.firstName){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndFN(true);
                           sortList(list);
                        }}>up</button>
                        <button onClick={()=>{
                            console.log(list,"aaa");
                            const liste=list
                           liste.sort((a,b)=>{
                            if(a.firstName<b.firstName){
                                return 1;
                            }
                            else{
                                return -1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndFN(true);
                           sortList(list);
                        }} >down</button></th>
                        <th scope="col">LastName
                        <button onClick={()=>{
                            const liste=list;
                            console.log(list,"aaa");
                           list.sort((a,b)=>{
                            if(a.lastName<b.lastName){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndLN(true);
                           sortListLN(liste);
                        }}>up</button>
                        <button onClick={()=>{
                        
                            console.log(list,"aaa");
                            const liste=list
                           liste.sort((a,b)=>{
                            if(a.lastName<b.lastName){
                                return 1;
                            }
                            else{
                                return -1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndLN(true);
                           sortListLN(list);
                        }}>down</button></th>
                        <th scope="col">Email
                        <button onClick={()=>{
                            console.log(list,"aaa");
                            const liste=list
                           liste.sort((a,b)=>{
                            if(a.email<b.email){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndEmail(true);
                           sortListEN(list);
                        }}>up</button>
                        <button onClick={()=>{
                            console.log(list,"aaa");
                            const liste=list
                           liste.sort((a,b)=>{
                            if(a.email<b.email){
                                return 1;
                            }
                            else{
                                return -1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndEmail(true);
                           sortListEN(list);
                        }}>down</button> </th>
                        <th scope="col">Gender
                        <button onClick={()=>{
                            const liste=list;
                            console.log(list,"aaa");
                           liste.sort((a,b)=>{
                            if(a.gender<b.gender){  
                                return -1;
                            }
                            else{
                                return 1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndGender(true);
                           sortListGN(list);
                        }}>up</button>
                        <button onClick={()=>{
                            const liste=list;
                            console.log(list,"aaa");
                           liste.sort((a,b)=>{
                            if(a.gender<b.gender){
                                return 1;
                            }
                            else{
                                return -1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndGender(true);
                           sortListGN(list);
                        }}>down</button> </th>
                        <th scope="col">SuperHero Name
                        <button onClick={()=>{
                            const liste=list;
                            console.log(list,"aaa");
                           liste.sort((a,b)=>{
                            if(a.superHeroName<b.superHeroName){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndSN(true);
                           sortListSN(list);
                        }}>up</button>
                        <button onClick={()=>{
                            const liste=list;
                            console.log(list,"aaa");
                           liste.sort((a,b)=>{
                            if(a.superHeroName<b.superHeroName){
                                return 1;
                            }
                            else{
                                return -1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndSN(true);
                           sortListSN(list);
                        }}>down</button></th>
                        <th scope="col">Age 
                        <button onClick={()=>{
                             const liste=list;
                            console.log(list,"aaa");
                            liste.sort((a,b)=>{
                            if(a.age<b.age){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndAge(true);
                           sortListAge(list);
                        }}>up</button>
                        <button onClick={()=>{
                             const liste=list;
                            console.log(list,"aaa");
                            liste.sort((a,b)=>{
                            if(a.age<b.age){
                                return 1;
                            }
                            else{
                                return -1;
                            }
                           })
                           console.log(list,"bhumika");
                           setCndAge(true);
                           sortListAge(list);
                        }}>down</button></th>
                    </tr>
                </thead>
                <tbody>
               { list.length?(list.map((val) => {
            return (<tr> 
                <td>
                    <div className="form-check form-check-inline" >
                        <input className="form-check-input"  type="checkbox" value="option1" onChange={(e)=>updatedlist(e,val.id)} />

                    </div>
                    {count = count + 1}
                </td>
               
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
                <td>{val.superHeroName}</td>
                <td>{val.age}</td>
            </tr>);
        }))  : (  <div><h1>Empty list not items</h1></div>) }
                </tbody>
            </table>
        </div>
    )
}
// rishabh