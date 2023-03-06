import React from "react";
import MUIDataTable from "mui-datatables";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";


import moment from "moment";
import Switch from "react-switch";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useEffect } from "react";
import { propertyData } from "../../constants/data";
import { SiteIcon, SiteText } from "../Styles/PageContent.styled";

const columns = [
  {
    name: "property",
    label: "Property",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "date",
    label: "Date Published",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "action",
    label: "Action",
    options: {
      filter: true,
      sort: false,
    },
  },
];


const PropertyTable = ({ value, handleOpen }) => {
  const [responsive, setResponsive] = useState("standard");
  const [alert, setAlert] = useState(false);
  const [rowsSelected, setRowsSelected] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const Navigate = useNavigate();
  // const { teams } = useSelector((state) => state.merchants.teams);
  const [val, setVal] = useState();
  const [selectedRow, setSelectedRow] = useState();

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const openOptions = Boolean(anchorEl);
  const handleOptionClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setItem(item);
    setSelectedRow(item);
  };
  const handleOptionClose = () => {
    setAnchorEl(null);
  };

  const handleOpenEditItem = () => {
    setOpen(true);
  };

  const options = {
    filterType: "none",
    responsive,
    selectableRows: "multiple",
    rowsSelected: rowsSelected,
    print:false,
    filter:false,
    download:false,
    search:false,
    isRowSelectable:false,
    selectableRowsHideCheckboxes:true,
    


    onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
      console.log("crows", rowsSelectedData, allRows, rowsSelected);
      setRowsSelected(rowsSelected);
    },
    onRowsDelete: (rowsDeleted, newData) => {
      console.log("rowsDeleted");
      console.dir(rowsDeleted);
      console.log("new", newData);
      if (
        rowsDeleted &&
        rowsDeleted.data &&
        rowsDeleted.data[0] &&
        rowsDeleted.data[0].dataIndex === 0
      ) {
        window.alert("Can't delete this!");
        return false;
      }
      console.log("were", rowsDeleted);
      let items = [];
      rowsDeleted.data.forEach((row) => {
        items.push(value?.[row.dataIndex]._id);
      });

      console.log("were", items);
      setAlert(true);

      console.log(rowsDeleted, "were deleted!");
    },
  };

  const handleNav = (id) => {
    Navigate(`/campaign/edit/${id}`);
  };

  const handleAlert = () => {
    setAlert(true);
  };

  const rows = val?.map((item, index) => {
    return {
      property: <SiteText>{item.title}</SiteText>,
      date: <SiteText>{moment(item.createdAt).format("MMM Do YYYY")}</SiteText>,
      status: <SiteText>{item.status}</SiteText>,
      action: (
        <Grid container alignItems='center'>
          <SiteIcon>
          <EditIcon />
            
          </SiteIcon>&nbsp;&nbsp;
          <SiteIcon>
          <DeleteIcon />

          </SiteIcon>&nbsp;&nbsp;

          <Switch
            // onChange={() => handleChange(item.status, item._id)}
          
         
            checked={item.status}
          />
        </Grid>
      ),
    };
  });

  const handleRowClick = (items) => {
    // console.log('row',rowData, rowMeta);
    console.log("trti", items);

    // setSelectedRows(items)
    // console.log('eer', selectedRows)
  };

  console.log("rows", rowsSelected);

  const onCancel = () => {
    setAlert(false);

    setRowsSelected([]);
  };

  const handleDelete = (id) => {};

  useEffect(() => {
    if (propertyData) {
      setVal([...propertyData]);
    }
  }, [propertyData]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable style={{background:'transparent !important'}} data={rows} columns={columns} options={options} />
        </Grid>
        {/* {alert && (
          <SweetAlert
            warning
            title={
              <>
                <h4>{selectedRow.teamId}</h4>
                <p>Delete this Team, Are You Sure??</p>{" "}
              </>
            }
            showCancel
            confirmBtnText={
              <Button style={{ color: "black" }}>Yes, Delete It</Button>
            }
            confirmBtnBsStyle="danger"
            Name={<Button style={{ color: "black" }}>Delete Campaign?</Button>}
            onConfirm={() => handleDelete(selectedRow._id)}
            onCancel={onCancel}
            focusCancelBtn
          ></SweetAlert>
        )} */}
      </Grid>
    </>
  );
};

export default PropertyTable;
