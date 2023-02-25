import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Paginate({page, numberOfPages}) {


  return (
    <Stack spacing={2}>
      <Pagination
        count={numberOfPages}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
          component={Link}
          to={`/properties?page=${item.page}`}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
