import styled from 'styled-components';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Icon from '@mui/material/Icon';
import UserForm from './UserForm';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddNewUserFormContainer = styled.div`
    margin-top: 14px;
    margin-bottom: 35px;
    margin-right: 40%;
    align-self: flex-end;
`;

const AddNewUserForm = ({ onAdd }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOnAdd = () => {
        onAdd();
        handleClose();
    }

    return <AddNewUserFormContainer>
        <Fab color="primary" onClick={handleOpen}>
            <AddCircleIcon>Add</AddCircleIcon>
        </Fab>
        <Dialog onClose={handleClose} open={isOpen}>
            <DialogTitle>Add User</DialogTitle>
            <UserForm onAdd={handleOnAdd} />
        </Dialog>
    </AddNewUserFormContainer>
}
export default AddNewUserForm