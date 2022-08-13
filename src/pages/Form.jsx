import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import './form.css'
import Footer from '../components/Footer';
import DatePicker from 'react-date-picker';
import moment from 'moment'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";


const Container = styled.div`
height:100vh;
`
const ServiceWrapper = styled.div`
margin-left:25%;
width: 50%;

`

const App = styled.h1`
display: flex;
justify-content: center;
text-align: center;
align-items: center;

`

const ServHeader = styled.h3`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
background-color: #EFF4FF;
border: none;
color: #2557D6;
padding: 10px 20px;
text-decoration: none;
border-radius: 100px;

`
const ServTime = styled.h6`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
background-color: #ffefef;
border: none;
color: #d62525;
padding: 10px 0px;
text-decoration: none;
border-radius: 100px;


`




const Form = () => {
  const data = useSelector((state) => state.service);
  const [date, setDate] = useState(new Date());
  const dateString = moment(date).format('MM-DD-YYYY');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState(`${data.heading}`);
  const [time, setTime] = useState(`${data.schedule}`);

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      
      name,
      email,
      date,
      number,
      message,
      service,
      time
    };
    
    try {
      await axios.post("/patient", newPost)
      toast.success("Appointment Booked")
     
     
    } catch (err) {}
    try{
      window.location.replace("/");
    }catch(err){

    }
  };
   

   

  return (

    <Container>
      <Navbar/>
      <ToastContainer />
    <div className='formContainer'>
      <ServiceWrapper>
      <App>Service Selected: </App>
      <ServHeader> {data.heading}</ServHeader>
      <ServTime>  {data.schedule}</ServTime>
      <h4> Please confirm appointment date : 
      <DatePicker
      onChange={setDate} 
      value={date}
      />
      </h4>
     
      </ServiceWrapper>
    
   
    <form className="bookForm"  onSubmit={handleSubmit}>
    <div className="writeFormGroup">
         
          <input
            type="text"
            placeholder="name...."
            className="bookInput"
            autoFocus={true}
            required
            onChange={e=>setName(e.target.value)}
            
          />
           
          <input
            type="text"
            placeholder="email...."
            className="bookInput"
            autoFocus={true}
            required
            onChange={e=>setEmail(e.target.value)}
          />
          
          <input
            type="text"
            pattern="[0-9]*"
            maxLength="10"
            value={number}
            placeholder="phone number...."
            onChange={(e) =>
              setNumber((v) => (e.target.validity.valid ? e.target.value : v))
            }// if the input is not a number, it wont fire 
            // check if the inputted value is valid , return the current inputted value , else
            
          />
          <input
            type="text"
            placeholder="Appointment date...."
            autoFocus={true}
            disabled 
            value={dateString}
            onChange={e=>setDate(e.target.value)}
            
          />
           <input
            type="text"
            placeholder="Service selected...."
            style={{ display: "none" }}
            disabled 
            value={service}
            onChange={e=>setService(e.target.value)}
            
          />
           <input
            type="text"
            placeholder="Service Time...."
            style={{ display: "none" }}
            disabled 
            value={time}
            onChange={e=>setTime(e.target.value)}
            
          />
        </div>
        <div className="message">
       
          <textarea
            placeholder="If you have a message for us ..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setMessage(e.target.value)}
            
          ></textarea>
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
   <div>
    <Footer/>
   </div>
    
    </Container>
  )
}

export default Form