import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { propertiesData } from "../../constants/data";
import { clearAll, useFilterContext } from "../../Contexts/FilterContext";
import { useSortContext } from "../../Contexts/SortContext";
import Paginate from "../Pagination";
import PropertyCard from "../PropertyCard";
import SortMenu from "../SortMenu";
import { SiteText } from "../Styles/PageContent.styled";

import "./styles.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Properties = ({ filterProperties }) => {
  const { filterItems, dispatch } = useFilterContext();
  const navigate = useNavigate();
  const query = useQuery();
  const propertyPerPage = 9;
  const page = query.get("page") || 1;

  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [slicedProperties, setSlicedProperties] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const { sortItems } = useSortContext();

  const handleReset = () => {
    dispatch(clearAll());
  };

  console.log("numberOfPages", numberOfPages);

  useEffect(() => {
    // setPage(1)
    navigate(`/properties?page=1`);
  }, []);
  useEffect(() => {
    if (filterProperties) {
      const numberOfPages = Math.ceil(
        filterProperties?.length / propertyPerPage
      );
      setNumberOfPages(numberOfPages);
    }
  }, [filterProperties]);

  // useEffect(() => {
  //   if (sortItems && filterProperties && page) {
  //     let sortProperties

  //   }
  // }, [sortItems, page, filterProperties]);

  useEffect(() => {
    let slicedProperties;
    let sortProperties;

    if (page && filterProperties) {
      const startIndex = (Number(page) - 1) * Number(propertyPerPage);
      const endIndex = Number(page) * Number(propertyPerPage);
      setStartIndex(startIndex);
      setEndIndex(endIndex);
      slicedProperties = filterProperties.slice(startIndex, endIndex);
      setSlicedProperties([...slicedProperties]);  

    }

    if (sortItems) {
      switch (sortItems.sortBy) {
        case "lth":
          sortProperties = slicedProperties.sort(function (a, b) {
            return a.price - b.price;
          });
          setSlicedProperties([...sortProperties]);
          console.log("pageChanges", slicedProperties);

          break;
        case "htl":
          sortProperties = slicedProperties.sort(function (a, b) {
            return b.price - a.price;
          });
          setSlicedProperties([...sortProperties]);
          console.log("pageChanges", slicedProperties);

          break;
        case "createdDate":
          sortProperties = slicedProperties.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setSlicedProperties([...sortProperties]);
          console.log("pageChanges", slicedProperties);

          break;
        case "roomsCount":
          sortProperties = slicedProperties.sort(function (a, b) {
            return b.propertyFeatures[0].room - a.propertyFeatures[0].room;
          });
          setSlicedProperties([...sortProperties]);
          console.log("pageChanges", slicedProperties);

          break;
        case "viewersCount":
          sortProperties = slicedProperties.sort(function (a, b) {
            return b.viewerCount.length- a.viewerCount.length;
          });
          setSlicedProperties([...sortProperties]);
          console.log("pageChanges", slicedProperties);

          break;
        case "favoritesCount":
          sortProperties = slicedProperties.sort(function (a, b) {
            return b.favoriteCount.length - a.favoriteCount.length;
          });
          setSlicedProperties([...sortProperties]);
          console.log("pageChanges", slicedProperties);

          break;

        default:
          break;
      }
    }
  }, [page, filterProperties, sortItems]);

  console.log("index", startIndex, endIndex, page);

  if (filterProperties?.length <= 0) {
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
              Propert{filterProperties?.length > 1 ? "ies" : 'y'} found
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
          flexDirection="column"
        >
          <SiteText gray>
            <span style={{ color: "rgb(69, 237, 206)" }}>No </span> Properties
            found for your search
          </SiteText>
          <br />

          <Button variant="outlined" onClick={handleReset}>
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

      <Grid xs={12}>
        <Grid container spacing={2} style={{ minHeight: "70vh" }}>
          {slicedProperties?.map((property, index) => (
            <PropertyCard property={property} index={index} />
          ))}
        </Grid>

        <Grid xs={12} container justifyContent="center" pt={5}>
          <Paginate page={page} numberOfPages={numberOfPages} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Properties;
