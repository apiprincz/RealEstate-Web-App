import { Button, Grid } from "@mui/material";
import { propertyData } from "../../constants/data";
import { clearAll, useFilterContext } from "../../Contexts/FilterContext";
import PropertyCard from "../PropertyCard";
import SortMenu from "../SortMenu";
import { SiteText } from "../Styles/PageContent.styled";

import "./styles.css";

const Properties = ({ filterProperties }) => {
  const { filterItems, dispatch } = useFilterContext();

  
  const handleReset = () => {
    dispatch(clearAll())
  }

  if (filterProperties?.length <= 0) {
    return (
      <Grid  px={2} xs={12} md={9} lg={9.5}>
        <Grid
        xs={12}
        pb={4}
    
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid>
          <SiteText gray>
            <span style={{ color: "rgb(69, 237, 206)" }}>
              {filterProperties?.length}{" "}
            </span>{" "}
            Properties found
          </SiteText>
        </Grid>

        <SortMenu />
      </Grid>

        <Grid
          style={{ minHeight: "40vh" }}
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          flexDirection='column'
        >
          <SiteText gray>
            <span style={{ color: "rgb(69, 237, 206)" }}>No </span> Properties
            found for your search
          </SiteText>
          <br/>
        
          <Button  variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid px={2} xs={12} md={9} lg={9.5}>
      <Grid
        xs={12}
        pb={4}
    
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid>
          <SiteText gray>
            <span style={{ color: "rgb(69, 237, 206)" }}>
              {filterProperties?.length}{" "}
            </span>{" "}
            Properties found
          </SiteText>
        </Grid>

        <SortMenu />
      </Grid>

      <Grid container spacing={2}>
        {filterProperties?.map((property, index) => (
          <PropertyCard property={property} index={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Properties;
