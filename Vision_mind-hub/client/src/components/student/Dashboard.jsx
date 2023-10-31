import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

import Navbar from './Navbar'
import Statistics from './Statistics'
import Finder from './Finder'
import Messages from './Messages'
import Appointments from './Appointments'
import Chat from './chat/Chat'
import ViewProfile from './ViewProfile'
import EditProfile from './EditProfile'
import DeleteProfile from './DeleteProfile'
import TeacherProfile from './TeacherProfile'

import { io } from 'socket.io-client';

function StudentDashoard() {

    const [student, setStudent] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    async function getStudent() {

      try{
        if(localStorage.getItem('token')) {
          const res = await axios.post('/api/student/details', {token: localStorage.getItem('token')})
          setStudent(res.data)
          console.log(student);
          // const socket = io('');
          // socket.emit('associateId', {username: res.data.username})
          localStorage.setItem('student', JSON.stringify(res.data))
        } 
        else
        {
          const res = await axios.post('/api/student/details', {token})
          setStudent(res.data)  
          console.log(res.data) 
          // const socket = io('');       
          // socket.emit('associateId', {username: res.data.username})
          localStorage.setItem('student', JSON.stringify(res.data))
          localStorage.setItem('token', token)
        } 
      }
      catch(err) {
        console.log(err)
        navigate('/login')
      }
        
    }

    useEffect(() => {
      getStudent()
    }, [])

  return (
    <>
      <Navbar student={student}/>
      <div className="container">
        <Routes>
          <Route path="/" element={ <Statistics student={student} /> } />
          <Route path="/finder" element={ <Finder/> } />
          <Route path="/messages" element={ <Messages/> } />
          <Route path="/appointments" element={ <Appointments/> } />
          <Route path="/profile/:username" element={ <TeacherProfile/> } />
          <Route path="/view-profile" element={ <ViewProfile/> } />
          <Route path="/edit-profile" element={ <EditProfile/> } />
          <Route path="/delete-profile" element={ <DeleteProfile/> } />
          <Route path="/Chat" element={ <Chat user={student}/> } />
        </Routes>
      </div>
    </>
  )
}

export default StudentDashoard