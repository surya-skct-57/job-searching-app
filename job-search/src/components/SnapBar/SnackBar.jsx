import React, { useState } from 'react';
import { Snackbar, Button } from '@mui/material';

const SnackBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Click Me
      </Button>
      <br />
      <br />
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}

        className='snackbar'
        open={open}
        autoHideDuration={6000} // Duration in milliseconds
        onClose={handleClose}
        message="Thanks for visiting our website"
      >
      </Snackbar>
    </div>
  );
};

export default SnackBar;