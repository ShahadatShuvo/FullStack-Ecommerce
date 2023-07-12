import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  // key: number | string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
}

function ProductView(props: ProductCardProps) {
  const [counter, setCounter] = React.useState(0);
  const [favourite, setFavourite] = React.useState(false);
  const [accordion1, setAccordion1] = React.useState(true);
  const [accordion2, setAccordion2] = React.useState(true);

  const onHandleFavourite = () => {
    setFavourite((prevState) => !prevState);
  };
  return (
    <div className=" h-[75vh] flex justify-between gap-5">
      <div className="w-[40%] card relative">
        <div className="absolute right-2 top-1 p-2 bg-white rounded-full">
          {!favourite && (
            <FavoriteBorderRoundedIcon onClick={onHandleFavourite} />
          )}
          {favourite && (
            <FavoriteRoundedIcon
              sx={{ color: "red" }}
              onClick={onHandleFavourite}
            />
          )}
        </div>

        <div className="p-5 bg-blue-50 rounded-lg flex justify-center items-center">
          <Image
            style={{
              height: "auto",
              width: "auto",
            }}
            src={props.image_url}
            alt=""
            width={350}
            height={350}
            className="pt-5"
          />
        </div>
      </div>
      <div className="w-[60%]">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <div className="mt-3 flex justify-between">
          <p className="px-5 text-center text-sm py-1 border-2 border-green-600 rounded-lg">
            TK {props.price}
          </p>
          <p className="text-gray-500 font-semibold">
            Available in stock: {props.stock}
          </p>
          <p className="text-gray-500 font-medium">
            <StarIcon className="text-yellow-600 mt-[-3px]" />
            <span>4.9 (98 reviews)</span>
          </p>
        </div>
        <div className="mt-6 w-full flex justify-around items-center gap-5">
          <div className="w-[40%] bg-blue-50 px-2 py-1 rounded-full flex items-center justify-around">
            <IconButton
              aria-label="delete"
              onClick={() =>
                setCounter((prevState) => {
                  if (prevState === 0) {
                    return prevState;
                  }
                  return prevState - 1;
                })
              }
            >
              <RemoveIcon />
            </IconButton>

            <p className="px-2">{counter}</p>
            <IconButton
              aria-label="delete"
              onClick={() => setCounter((prevState) => prevState + 1)}
            >
              <AddIcon />
            </IconButton>
          </div>

          <Button
            variant="contained"
            className="w-[60%] bg-black text-white rounded-full flex justify-center items-center gap-2"
          >
            <NextWeekOutlinedIcon /> <span className="mt-1">Add to Cart</span>
          </Button>
        </div>

        <div className="mt-5 w-full">
          <div
            className="w-full justify-between bg-blue-50 hover:bg-blue-100 px-5 py-1 rounded-full flex items-center"
            onClick={() => setAccordion1((prevState) => !prevState)}
          >
            <p>Description</p>
            {accordion1 ? <RemoveIcon /> : <AddIcon />}
          </div>
          {accordion1 && (
            <div className="mt-3 p-3 rounded-lg bg-gray-100">
              {props.description}
            </div>
          )}
        </div>
        <div className="mt-5 w-full">
          <div
            className="w-full justify-between bg-blue-50 hover:bg-blue-100 px-5 py-1 rounded-full flex items-center "
            onClick={() => setAccordion2((prevState) => !prevState)}
          >
            <p>Features</p>
            {accordion2 ? <RemoveIcon /> : <AddIcon />}
          </div>
          {accordion2 && (
            <div className="mt-3 p-3 rounded-lg bg-gray-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              repellat, iure veritatis facilis commodi similique ratione sunt
              temporibus saepe cum porro, excepturi quae exercitationem autem
              odio! Hic dignissimos itaque fugiat corporis quod minus minima.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductView;
