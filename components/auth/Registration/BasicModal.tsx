import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import creation_success from "@/public/icons/creation_success.svg";
import router from "next/router";

const style = {};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="w-full"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <button
        type="submit"
        onClick={handleOpen}
        className="w-[20%] block bg-primary hover:bg-primaryHover focus:bg-primaryDisabled 
                    text-white rounded-lg px-4 py-3 mt-4 mb-9 text-loginBtnTextSize font-arial border-2 border-primary"
      >
        FINISH
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 440,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
            p: 8,
          }}
        >
          <Typography id="modal-modal-caption" variant="h6" component="h2">
            Hurray!
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Account created successfully
          </Typography>
          <div className="ml-12">
            <Image
              alt="logo"
              src={creation_success}
              width={115}
              priority={true}
            />
          </div>
          <div className="cursor-pointer font-arial text-[18px] border border-primary bg-white text-primary rounded-lg p-4 mt-16">
            Proceed to dashboard
          </div>
        </Box>
      </Modal>
    </div>
  );
}
