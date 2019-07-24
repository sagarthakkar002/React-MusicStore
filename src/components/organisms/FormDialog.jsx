import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {  withRouter } from 'react-router-dom'

const FormDialog= (props) =>{
 const {  history } = props;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

   function handleClose(props){
    
    let path = '/';
    console.log(props)
    history.push(path);
    setOpen(false);


  }
  function handleNo(props){
    
    let path = '/addSong';
    console.log(props)
    history.push(path);
    setOpen(false);


  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you Sure want to cancel form 
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yes
          </Button>
          <Button onClick={handleNo} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withRouter(FormDialog);


