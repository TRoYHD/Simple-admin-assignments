import React , { useRef , useState } from 'react'
import { Form , Button , Card , Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link , useNavigate } from "react-router-dom"


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup}= useAuth()
    const [error, setError] =useState('')
    const [loading , setLoading]= useState(false)
    const navigate= useNavigate()


   async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError('password do not match')
        }
        try{
            setError('')
            setLoading(true)
         await signup(emailRef.current.value , passwordRef.current.value)
         navigate('/')
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }



  return (
    <>
<Card>
    <Card.Body >
        <h2 className= "text-center mb-4"> Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label style={{fontWeight:600}}>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} 
                required />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label style={{fontWeight:600}}>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} 
                required />
            </Form.Group>
            <br/>
            <Form.Group id="password-confirm">
                <Form.Label style={{fontWeight:600}}>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} 
                required />
            </Form.Group> 
            <br/>
            <Button disabled={loading}className= "w-100 " type="submit"> 
            Sign Up
            </Button>
        </Form>
    </Card.Body>
</Card>
 <div className="w-100 text-center mt-2" style={{fontWeight:600}}>
   Already have an account ? <Link to="/login">Log In</Link>
 </div>
 </>
  )
}
