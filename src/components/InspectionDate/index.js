import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import transition from "react-element-popper/animations/transition";
import { SiteText, SiteTextSmall } from "../Styles/PageContent.styled";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "../CustomInput";

export default function InspectionDate({
  setBooking,
  booking,
  values,
  setValues,
}) {
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  // const [values, setValues] = useState([]);
  const [time, setTime] = useState();
  const [check, setCheck] = useState(false);

  const [portalTarget, setPortalTaget] = useState();

  const handleCheckBox = () => {
    setCheck(!check);
  };
  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };
  const handleOnChange = (value) => {
    setBooking({ ...booking, phone: value });
  };

  useEffect(() => {
    let appt = [];
    if (booking.inspectionDays && values.length === 0) {
      console.log("days63646264", values, 1);
      setBooking({
        ...booking,
        inspectionDays: [...values],
        appointmentDays: [...appt],
      });

      return;
    } else {
      console.log("days63646264", values, booking.inspectionDays, 2);

      values.map((val) => appt.push(new Date(val)));
      console.log("appt", appt);

      setBooking({
        ...booking,
        inspectionDays: [...values],
        appointmentDays: [...appt],
      });
    }
    appt = [];
  }, [values]);

  useEffect(() => {
    if (booking.inspectionTime) {
      console.log("timegtthhh", time, 1);

      return;
    } else {
      console.log("timegtthhh", time, 2);

      setBooking({ ...booking, inspectionTime: time });
    }
  }, [time]);

  useEffect(() => {
    const portalDiv = document.createElement("div");

    /**
     * This ID is optional and has been added
     * to better recognize it in the DOM tree.
     */
    portalDiv.id = "myPortalDiv";

    document.body.appendChild(portalDiv);

    setPortalTaget(portalDiv);

    return () => document.body.removeChild(portalDiv);
  }, []);
  console.log(
    "val",
    values.map((val) => new Date(val))
  );
  console.log("time", time, time?.minute);
  return (
    <Grid xs={12} container spacing={2}>
      <Grid item xs={6} sm={4}>
        {/* <Typography color="white" textAlign="left">
          <SiteText>Select Date *</SiteText>
        </Typography> */}
        <DatePicker
          style={{
            width: "100%",
            boxSizing: "border-box",
            height: "53px",
          }}
          containerStyle={{
            width: "100%",
          }}
          multiple
          placeholder="Select Preferred Date*"
          portal
          minDate={new Date()}
          maxDate={new Date().setDate(60)}
          portalTarget={portalTarget}
          plugins={[<DatePanel />]}
          value={
            booking.inspectionDays.length > 3
              ? booking.inspectionDays.splice(3)
              : booking.inspectionDays
          }
          animations={[transition({ duration: 800, from: 35 })]}
          onChange={setValues}
        />
        <span style={{ color: "white", textAlign: "left" }}>
          <SiteTextSmall>Note:You can choose upto 3 days</SiteTextSmall>
        </span>
      </Grid>
      <Grid item xs={6} sm={4}>
        {/* <Typography color="white" textAlign="left">
          <SiteText>Select Time *</SiteText>
        </Typography> */}

        <DatePicker
          style={{
            width: "100%",
            boxSizing: "border-box",
            height: "53px",
            color: "black !important",
          }}
          containerStyle={{
            width: "100%",
          }}
          value={booking.inspectionTime}
          onChange={setTime}
          disableDayPicker
          format="HH:mm"
          placeholder="Select Time"
          animations={[transition({ duration: 800, from: 35 })]}
          plugins={[<TimePicker hideSeconds />]}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Input
          name="name"
          label="Name"
          handleChange={handleChange}
          type="text"
          value={booking.name}
          placeholder="Adams"
          required={true}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Input
          name="email"
          label="Email"
          handleChange={handleChange}
          type="email"
          value={booking.email}
          placeholder="Enter Email"
          required={true}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <PhoneInput
          country={"ng"}
          value={booking.phone}
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} mb={2}>
        <Input
          name="message"
          label="Your Message"
          type="text"
          rows={4}
          value={booking.message}
          handleChange={handleChange}
          multiline
        />
      </Grid>
      <Grid item xs={12} py={5}>
        <SiteTextSmall>
          <FormControlLabel
            control={<Checkbox checked={check} value={check} name="terms" />}
           style={{marginRight:'0'}}
            className="siteText"
            onChange={handleCheckBox}
          />By submitting this form I agree to{" "}
          <a href="/" className="textColored">
            Terms of Use
          </a>
        </SiteTextSmall>
      </Grid>
      <Grid item py={5}>
        <Button variant="contained">
          <SiteText>Submit A Tour Request</SiteText>
        </Button>
      </Grid>
      {/* {values?.map(val => <span>{val}</span>)} */}
    </Grid>
  );
}
