"use-client";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

function OrderConfirmed() {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <div className="w-full">
      <Button
        fullWidth
        variant="contained"
        onClick={handleOpen}
        className="mt-5 bg-black rounded-full"
      >
        Confirm Payment
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <CheckIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <span className="text-lg leading-6 font-medium text-gray-900">
                  Payment successful
                </span>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur amet labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <Button
                fullWidth
                variant="contained"
                onClick={handleClose}
                className="mt-5 bg-black rounded-lg"
              >
                Go back to Home
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderConfirmed;
