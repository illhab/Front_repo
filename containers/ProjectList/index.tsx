import {useState} from 'react';

import {Button, InputAdornment, OutlinedInput} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {PageTitle, ProjectTable} from '@/components';

import {Wrapper} from './style';

// TODO:: projects api 나오면 변경
const projectsData = Array(53)
  .fill('')
  .map((_, idx) => ({
    id: String(idx),
    name: 'name' + idx,
    key: 'key' + idx,
    leader: 'leader' + idx,
  }));

export const ProjectList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Wrapper>
      <div className="title-wrapper">
        <PageTitle title="프로젝트" />
        <Button
          variant="contained"
          size="large"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 800,
            color: theme => theme.palette.secondary.main,
          }}
        >
          프로젝트 만들기
        </Button>
      </div>
      <div className="search-wrapper">
        <OutlinedInput
          sx={{
            color: '#fff',
            fontSize: '1.2rem',
            borderRadius: '2px',
            outline: '3px solid #20212D',
            background: '#363743',
          }}
          endAdornment={
            <InputAdornment
              position="end"
              sx={{
                padding: '1rem 0.8rem',
              }}
            >
              <SearchIcon
                sx={{
                  color: '#fff',
                  fontSize: '2.4rem',
                }}
              />
            </InputAdornment>
          }
        />
      </div>

      <ProjectTable
        dataSource={projectsData}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Wrapper>
  );
};
