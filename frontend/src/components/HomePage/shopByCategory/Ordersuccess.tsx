"use-client";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import * as React from "react";
import { ProductCardProps } from "../../../../interfaces";

function MyApp({
  onHandleClick,
  product,
  type,
}: {
  onHandleClick: any;
  product: ProductCardProps;
  type: string;
}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product Successfully Added to Cart!", {
      variant,
      autoHideDuration: 3000,
    });
    onHandleClick(product);
  };

  return (
    <React.Fragment>
      {type === "btn" ? (
        <Button
          variant="contained"
          size="small"
          className="rounded-full bg-black mt-3"
          onClick={handleClickVariant("success")}
        >
          Order Now
        </Button>
      ) : type === "icon" ? (
        <IconButton aria-label="added" onClick={handleClickVariant("success")}>
          <AddCircleOutlineIcon color="success" />
        </IconButton>
      ) : (
        <Button
          variant="contained"
          className="text-sm md:text-md w-[60%] bg-black text-white rounded-full flex justify-center items-center md:gap-2"
          onClick={handleClickVariant("success")}
        >
          <NextWeekOutlinedIcon />
          <span className="md:mt-1">Add to Cart</span>
        </Button>
      )}
    </React.Fragment>
  );
}

export default function OrderSuccess({
  onHandleClick,
  product,
  type,
}: {
  onHandleClick: any;
  product: ProductCardProps;
  type: string;
}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp type={type} onHandleClick={onHandleClick} product={product} />
    </SnackbarProvider>
  );
}
