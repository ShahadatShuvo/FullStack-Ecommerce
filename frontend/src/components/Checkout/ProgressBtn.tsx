import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

function ProgressBtn(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const router = useRouter();

  const [progress, setProgress] = React.useState(10);
  const [cycleCompleted, setCycleCompleted] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    if (progress === 0) {
      setCycleCompleted(true);
    }
  }, [progress]);

  const handleOrderConfirm = () => {
    console.log("Order Confirmed");
    router.push("/checkout/payment");
  };

  return (
    <div>
      {cycleCompleted ? (
        <Button
          fullWidth
          variant="contained"
          onClick={handleOrderConfirm}
          className="mt-5 bg-black rounded-full"
        >
          Order processed! Go to Payment
        </Button>
      ) : (
        <ProgressBtn value={progress} />
      )}
    </div>
  );
}
