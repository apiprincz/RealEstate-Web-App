import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { propertyData } from "../../constants/data";
import { clearAll, useFilterContext } from "../../Contexts/FilterContext";
import { useSortContext } from "../../Contexts/SortContext";
import AgentCard from "../AgentCard";
import Paginate from "../Pagination";
import PropertyCard from "../PropertyCard";
import SortMenu from "../SortMenu";
import { SiteText } from "../Styles/PageContent.styled";

import "./styles.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Agents = ({ filterAgents }) => {
  const { filterItems, dispatch } = useFilterContext();
  const navigate = useNavigate();
  const query = useQuery();
  const agentPerPage = 12;
  const page = query.get("page") || 1;

  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [slicedAgents, setSlicedProperties] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const { sortItems } = useSortContext();

  console.log("sdfjsdjfjsdfjsd", filterAgents)

  const handleReset = () => {
    dispatch(clearAll());
  };

  console.log("numberOfPages", numberOfPages);

  useEffect(() => {
    // setPage(1)
    navigate(`/agents?page=1`);
  }, []);
  useEffect(() => {
    if (filterAgents) {
      const numberOfPages = Math.ceil(
        filterAgents?.length / agentPerPage
      );
      setNumberOfPages(numberOfPages);
    }
  }, [filterAgents]);

  // useEffect(() => {
  //   if (sortItems && filterAgents && page) {
  //     let sortAgents

  //   }
  // }, [sortItems, page, filterAgents]);

  useEffect(() => {
    let slicedAgents;
    let sortAgents;

    if (page && filterAgents) {
      const startIndex = (Number(page) - 1) * Number(agentPerPage);
      const endIndex = Number(page) * Number(agentPerPage);
      setStartIndex(startIndex);
      setEndIndex(endIndex);
      slicedAgents = filterAgents.slice(startIndex, endIndex);
      setSlicedProperties([...slicedAgents]);  

    }

    if (sortItems) {
      switch (sortItems.sortBy) {
        case "lth":
          sortAgents = slicedAgents.sort(function (a, b) {
            return a.price - b.price;
          });
          setSlicedProperties([...sortAgents]);
          console.log("pageChanges", slicedAgents);

          break;
        case "htl":
          sortAgents = slicedAgents.sort(function (a, b) {
            return b.price - a.price;
          });
          setSlicedProperties([...sortAgents]);
          console.log("pageChanges", slicedAgents);

          break;
        case "createdDate":
          sortAgents = slicedAgents.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setSlicedProperties([...sortAgents]);
          console.log("pageChanges", slicedAgents);

          break;
        case "roomsCount":
          sortAgents = slicedAgents.sort(function (a, b) {
            return b.propertyFeatures[0]?.room - a.propertyFeatures[0]?.room;
          });
          setSlicedProperties([...sortAgents]);
          console.log("pageChanges", slicedAgents);

          break;
        case "viewersCount":
          sortAgents = slicedAgents.sort(function (a, b) {
            return b.viewerCount?.length- a.viewerCount?.length;
          });
          setSlicedProperties([...sortAgents]);
          console.log("pageChanges", slicedAgents);

          break;
        case "favoritesCount":
          sortAgents = slicedAgents.sort(function (a, b) {
            return b.favoriteCount?.length - a.favoriteCount?.length;
          });
          setSlicedProperties([...sortAgents]);
          console.log("pageChanges", slicedAgents);

          break;

        default:
          break;
      }
    }
  }, [page, filterAgents, sortItems]);

  console.log("index", startIndex, endIndex, page);

  if (filterAgents?.length <= 0) {
    return (
      <Grid px={2} xs={12} md={12} lg={12}>
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
                {filterAgents?.length}{" "}
              </span>{" "}
              Agents found
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
            <span style={{ color: "rgb(69, 237, 206)" }}>No </span> Agents
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
    <Grid px={2} xs={12} md={12} lg={12}>
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
              {filterAgents?.length}{" "}
            </span>{" "}
            Agent{filterAgents?.length > 1 && "s"} found
          </SiteText>
        </Grid>

        <SortMenu />
      </Grid>

      <Grid xs={12}>
        <Grid container spacing={2} style={{ minHeight: "70vh" }}>
          {slicedAgents?.map((agent, index) => (
            <AgentCard agent={agent} index={index} />
          ))}
        </Grid>

        <Grid xs={12} container justifyContent="center" pt={5}>
          <Paginate page={page} numberOfPages={numberOfPages} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Agents;
