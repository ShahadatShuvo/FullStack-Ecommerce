import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import ChaletIcon from "@mui/icons-material/Chalet";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import NoCrashIcon from "@mui/icons-material/NoCrash";

function CheckoutLeftDiv() {
  const { userProfile, updateShippingAddress, isDarkTheme } =
    useContext(GlobalStates);

  const [autoFill, setAutoFill] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const [formData, setformData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
    address_type: "home",
    detail: "",
  });

  const handleAutofill = () => {
    setAutoFill(!autoFill);
    if (!autoFill) {
      setformData((prevDate) => ({
        ...prevDate,
        first_name: `${userProfile?.first_name}`,
        last_name: `${userProfile?.last_name}`,
        email: `${userProfile?.email}`,
        phone_number: `${userProfile?.phone_number}`,
        country: `${userProfile?.country}`,
        state: `${userProfile?.state}`,
        city: `${userProfile?.city}`,
        zip_code: `${userProfile?.zip_code}`,
      }));
    } else {
      setformData((prevDate) => ({
        ...prevDate,
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country: "",
        state: "",
        city: "",
        zip_code: "",
      }));
    }
  };
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (formData.email === "" || formData.first_name === "") {
      const formObj = {
        first_name: `${userProfile?.first_name}`,
        last_name: `${userProfile?.last_name}`,
        email: `${userProfile?.email}`,
        phone_number: `${userProfile?.phone_number}`,
        country: `${userProfile?.country}`,
        state: `${userProfile?.state}`,
        city: `${userProfile?.city}`,
        zip_code: `${userProfile?.zip_code}`,
        address_type: "home",
        detail: "",
      };
      updateShippingAddress(formObj);
    } else {
      updateShippingAddress(formData);
    }

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const handleformData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-5 w-full md:w-[50%]">
      <div>
        <p className="text-sm md:text-base text-center font-semibold p-3 border border-slate-200 rounded-xl">
          Default Billing Address
        </p>
      </div>
      {/* Contact Info */}
      <div
        className={
          isDarkTheme
            ? "p-2 md:p-6 text-slate-300 border border-slate-200 rounded-xl flex items-center"
            : "p-2 md:p-6 text-gray-600 border border-slate-200 rounded-xl flex items-center"
        }
      >
        <AccountCircleOutlinedIcon className="text-2xl md:text-3xl" />
        <div className="ml-3 md:ml-5">
          <p className="text-sm md:text-base flex items-center">
            <span className="uppercase mr-2">Contact Info</span>
            <CheckOutlinedIcon />
          </p>
          <p
            className={
              isDarkTheme
                ? "text-white font-medium text-xs md:text-base"
                : "text-black font-medium text-xs md:text-base"
            }
          >
            <span>{`${userProfile.first_name} ${userProfile.last_name}`}</span>
            <span className="ml-2 md:ml-4">{userProfile.email}</span>
            <span className="ml-2 md:ml-4">{userProfile.phone_number}</span>
          </p>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="border border-slate-200  rounded-xl ">
        <div
          className={
            isDarkTheme
              ? "p-2 md:p-6 text-slate-300 border border-slate-200 rounded-xl flex items-center mb-3"
              : "p-2 md:p-6 text-gray-600 border border-slate-200 rounded-xl flex items-center mb-3"
          }
        >
          <LocalShippingOutlinedIcon className="text-2xl md:text-3xl" />
          <div className="ml-3 md:ml-5">
            <p className="text-sm md:text-base flex items-center">
              <span className="uppercase mr-2">SHIPPING ADDRESS</span>
              <CheckOutlinedIcon />
            </p>
            <p
              className={
                isDarkTheme
                  ? "text-white font-medium text-xs md:text-base"
                  : "text-black font-medium text-xs md:text-base"
              }
            >
              <span>{`${userProfile.country}, ${userProfile.state}, ${userProfile.city} - ${userProfile.zip_code}`}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 block border-t  border-slate-200 px-3 md:px-6 py-7  uppercase">
          <p className="text-sm md:text-base text-center font-semibold  rounded-xl capitalize ">
            Change Shipping Address
          </p>

          <div className="capitalize select-none">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={autoFill}
                  onClick={handleAutofill}
                  sx={{
                    color: isDarkTheme ? "white" : "black",
                  }}
                />
              }
              label="Autofill"
            />
          </div>

          <div className="w-full flex justify-between gap-3 md:gap-5">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                  // fontSize: "0.75rem",
                },
              }}
              label="First Name"
              variant="outlined"
              name="first_name"
              onChange={handleformData}
              value={formData.first_name}
            />
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Last Name"
              variant="outlined"
              name="last_name"
              onChange={handleformData}
              value={formData.last_name}
            />
          </div>
          <div className="w-full flex gap-3 md:gap-5">
            <TextField
              fullWidth
              size="small"
              type="email"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleformData}
              value={formData.email}
            />
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                  // fontSize: "0.75rem",
                },
              }}
              label="Phone Number"
              variant="outlined"
              name="phone_number"
              onChange={handleformData}
              value={formData.phone_number}
            />
          </div>
          <div className="w-full flex justify-between gap-3 md:gap-5">
            <TextField
              fullWidth
              size="small"
              type="text"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Country"
              variant="outlined"
              name="country"
              onChange={handleformData}
              value={formData.country}
            />
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="State"
              variant="outlined"
              name="state"
              onChange={handleformData}
              value={formData.state}
            />
          </div>
          <div className="w-full flex justify-between gap-3 md:gap-5">
            <TextField
              fullWidth
              size="small"
              type="text"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="City"
              variant="outlined"
              name="city"
              onChange={handleformData}
              value={formData.city}
            />
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Zip Code"
              variant="outlined"
              name="zip_code"
              onChange={handleformData}
              value={formData.zip_code}
            />
          </div>
          <div className="w-full flex justify-between gap-5 md:pt-5">
            <TextField
              id="outlined-multiline-static"
              sx={{
                background: isDarkTheme ? "#475569" : "white",
              }}
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Detail Address"
              multiline
              rows={4}
              className="w-full"
              name="detail"
              onChange={handleformData}
              value={formData.detail}
            />
          </div>

          <div className="w-full">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                <span
                  className={
                    isDarkTheme
                      ? "text-white font-semibold text-sm md:text-base"
                      : "text-black font-semibold text-sm md:text-base"
                  }
                >
                  Address type:
                </span>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="address_type"
                value={formData.address_type}
                onChange={handleformData}
              >
                <FormControlLabel
                  value="home"
                  // checked={true}
                  control={<Radio />}
                  label={
                    <div className="flex items-center">
                      <ChaletIcon className="text-3xl" />
                      <p className="ml-2 text-sm">Home (all day delivery)</p>
                    </div>
                  }
                  className="text-gray-500 capitalize ml-10 md:ml-32"
                />
                <FormControlLabel
                  value="office"
                  control={<Radio />}
                  label={
                    <div className="flex items-center">
                      <BusinessIcon className="text-3xl" />
                      <p className="ml-2 text-sm">
                        Office(Delivery 9AM - 5 PM)
                      </p>
                    </div>
                  }
                  className="text-gray-500 capitalize ml-10 md:ml-32"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="flex justify-center bg-transparent">
            <div className="flex items-center">
              <Box
                sx={{
                  m: 1,
                  position: "relative",
                  backgroundColor: success ? "#4caf50" : "#3f51b5",
                  borderRadius: "50%",
                }}
              >
                <Fab
                  size="small"
                  aria-label="save"
                  color="primary"
                  onClick={handleButtonClick}
                  sx={{
                    buttonSx,
                    backgroundColor: success ? "#4caf50" : "#3f51b5",
                  }}
                >
                  {success ? <CheckIcon /> : <NoCrashIcon />}
                </Fab>
                {loading && (
                  <CircularProgress
                    size={52}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: -6,
                      left: -6,
                      zIndex: 1,
                    }}
                  />
                )}
              </Box>
              <Box
                sx={{
                  m: 1,
                  position: "relative",
                  backgroundColor: success ? "#4caf50" : "#3f51b5",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    buttonSx,
                    color: "white",
                  }}
                  disabled={loading}
                  onClick={handleButtonClick}
                >
                  {!success
                    ? "Step:1 -- Confirm Shipping Address"
                    : "Shipping Address Confirmed!"}
                </Button>

                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutLeftDiv;
