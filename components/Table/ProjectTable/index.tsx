import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import {TablePagination} from '@mui/base';

import {TableWrapper} from './style';

interface Props {
  dataSource: {
    id: string;
    name: string;
    key: string;
    leader: string;
  }[]; // TODO:: 추후 api 명세서 나오면 수정
  page: number;
  rowsPerPage: number;
  handleChangePage: (_: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectTable = (props: Props) => {
  const {
    dataSource,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;
  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              '.MuiTableCell-root': {
                fontSize: '1.4rem',
                fontWeight: 800,
              },
            }}
          >
            <TableCell>이름</TableCell>
            <TableCell>키</TableCell>
            <TableCell>리더</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((x, idx) => (
              <TableRow key={x.id}>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.key}</TableCell>
                <TableCell>{x.leader}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={dataSource.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="페이지 당 행 수:"
              labelDisplayedRows={({from, to, count}) =>
                `${from}-${to} / 총 ${count}`
              }
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableWrapper>
  );
};
