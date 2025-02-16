import { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

import { getUsers, deleteUser } from "../service/api";
import { Link } from 'react-router-dom';

const TableWrapper = styled('div')`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
background: #3E5172;
& > th {
    color:#fff;
    font-size: 20px;
}
`;
const TBody = styled(TableRow)`
& > td {
    font-size: 20px;
}
`;

const AllUsers = () => {
        const [users, setUser] = useState([]);

        const [count, setCount] = useState([]);

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        var response = await getUsers(); // Fetch the user data from API
        console.log(response);
        setCount(response.data?.length)
      
        // Assign sequential IDs to users
        const updatedUsers = response.data.map((user, index) => ({
          ...user,
        }));
      
        setUser(updatedUsers); // Update the state with the modified data
      }

      const deleteUserData = async (id) => {
        await deleteUser(id);
        getUserDetails();
      }

    return(
        <TableWrapper>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell> 
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TBody>

                    ))
                }
            </TableBody>
        </TableWrapper>
    )
}
export default AllUsers;