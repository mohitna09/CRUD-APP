import { useEffect, useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { addUser, getUsers } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div {
margin-top: 20px;
}
`

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}



const AddUser = () => {

    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate();


      const [count, setCount] = useState([]);
    
        useEffect(() => {
            getUserDetails();
        }, [])
    
        const getUserDetails = async () => {
            let response = await getUsers(); 
            console.log(response);
            setCount(response.data?.length)
          
          }

    const onValueChange = (e) => {
        setUser({ ...user, id:count+1, [e.target.name]: e.target.value})
        console.log(user);
    }

    const  AddUserDetails = async () => {
     await addUser(user);
     navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input  onChange = {(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input  onChange = {(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input  onChange = {(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button onClick={() => AddUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>

    )
}
export default AddUser;