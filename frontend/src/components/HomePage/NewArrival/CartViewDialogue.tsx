import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import ProductView from "../ProductDetails";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
interface ProductCardProps {
  // key: number | string;
  title: string;
  description: string;
  features: string;
  price: number;
  stock: number;
  image_url: string;
}
export default function CartViewDialogue(props: ProductCardProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <FullscreenOutlinedIcon fontSize="small" />
        <span className="text-xs">Quick View</span>
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        fullWidth
        scroll="body"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <div className="p-5">
          <ProductView
            // key={props.key}
            title={props.title}
            stock={props.stock}
            description={props.description}
            features={props.features}
            price={props.price}
            image_url={props.image_url || "/img/icon.png"}
          />
        </div>
      </BootstrapDialog>
    </div>
  );
}
