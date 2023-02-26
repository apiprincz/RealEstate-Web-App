import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import SidebarMenu from "..";
import useWindowDimensions from "../../../Hooks/screen";
import { clearAll, useFilterContext } from "../../../Contexts/FilterContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: "80vh",
  overflow: "auto",
  position: "relative",
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  //   p: 4,
  zIndex: 200,
  pb: 4,
};

export default function FilterModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { width } = useWindowDimensions();
  const { filterItems, dispatch } = useFilterContext();


  const handleReset = () => {
    dispatch(clearAll())
  }

  return (
    <Grid xs={12} className="modal">
      <Grid>
        <Button className="modalBtn" variant="contained" onClick={handleOpen}>
          Filter By
        </Button>
      </Grid>

     {open && <Grid
        p={1}
        style={{
          position: "fixed",
          width: "300px",
          background: "hsl(0,0%,20%)",
          bottom: "68px",
          zIndex: 1000,
          transform: "translateX(-50%)",
    left: "50%"
        }}
        container
      >
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Grid>
      </Grid>}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        style={{ zIndex: "200" }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SidebarMenu />
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
}
