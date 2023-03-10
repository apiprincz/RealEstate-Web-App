import React from "react";
import { Grid, TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./styles.css";
import { SiteIcon } from "../Styles/PageContent.styled";

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
  half,
  quarter,
  rows,
  multiline,
  twothird,
  required,
  value,
  disabled,
  readonly,
  startAdornment,
  placeholder,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={half ? 6 : 12}
      md={quarter ? 4 : twothird ? 8 : half ? 6 : 12}
      className="customInput"
    >
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required={required}
        readonly={readonly}
        disabled={disabled}
        placeholder={placeholder}
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        startAdornment={startAdornment}
        rows={4}
        multiline={multiline}
        value={value}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? (
                        <SiteIcon>
                          <VisibilityOff />
                        </SiteIcon>
                      ) : (
                        <SiteIcon>
                          <Visibility />
                        </SiteIcon>
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : name === "instagram"
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <SiteIcon>
                      <InstagramIcon />
                    </SiteIcon>
                  </InputAdornment>
                ),
              }
            : name === "website"
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <SiteIcon>
                      <LanguageIcon />
                    </SiteIcon>
                  </InputAdornment>
                ),
              }
            : name === "twitter"
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <SiteIcon>
                      <TwitterIcon />
                    </SiteIcon>
                  </InputAdornment>
                ),
              }
            : name === "facebook"
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <SiteIcon>
                      <FacebookIcon />
                    </SiteIcon>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
