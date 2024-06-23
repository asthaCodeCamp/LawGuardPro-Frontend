import React from "react";
import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface SuccessModalProps {
  open: boolean;
  handleClose: () => void;
}


const SuccessModal: React.FC<SuccessModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="modal-title" variant="h6" component="h2">
            Successfully Submitted!
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
        <Typography id="modal-description" sx={{ mt: 2, }}
        className="bg-[#F0FDF4] text-green-600 ">
          You have successfully submitted your inquiry. By clicking "continue," you will be redirected to the case file.
        </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ mt: 3, width: '100%' }}
          className="self-start text-white rounded-lg bg-LawGuardPrimary px-12 py-3 mt-5  w-full text-[16px] font-semibold capitalize hover:bg-LawGuardPrimary"
        >
          Continue
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
