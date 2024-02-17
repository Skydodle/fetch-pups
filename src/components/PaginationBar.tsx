import React from 'react';
import { Stack, Container, Pagination, styled } from '@mui/material';

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    // Targeting all pagination buttons
    color: theme.palette.text.primary, // Default text color
    '&:hover': {
      backgroundColor: '#1e7dd9', // Custom hover background color
      color: 'white', // Hover text color
    },
  },
  '& .Mui-selected': {
    // Styles for selected page button
    backgroundColor: '#1e7dd9', // Selected background color
    color: 'white', // Selected text color
    '&:hover': {
      backgroundColor: theme.palette.primary.dark, // Darker on hover
    },
  },
  '& .MuiPaginationItem-ellipsis': {
    // Optional: Style ellipsis
    color: theme.palette.text.secondary, // Adjust if needed
  },
}));

interface PaginationBarProps {
  totalResults: number;
  page: number;
  setPage: (page: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalResults,
  page,
  setPage,
}) => {
  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Stack spacing={2} direction="row" justifyContent="center">
        <StyledPagination
          count={Math.floor(totalResults / 9)}
          page={page}
          size="large"
          onChange={(event, newPage) => setPage(newPage)}
          color="primary"
          variant="text"
          shape="rounded"
          siblingCount={2}
          defaultPage={1}
          showFirstButton={true}
          showLastButton={true}
        />
      </Stack>
    </Container>
  );
};

export default PaginationBar;
