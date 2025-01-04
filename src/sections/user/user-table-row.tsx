import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { Button } from '@mui/material';

// ----------------------------------------------------------------------

// Define the UserProps type
export type UserProps = {
  nodeId: string;
  name: string;
  port: number;
  status: string;
};

type UserTableRowProps = {
  row: UserProps;
};

export function UserTableRow({ row }: UserTableRowProps) {
  const handleDelete = () => {
    console.log(`Delete row with Node Id: ${row.nodeId}`);
  };

  const handleDetails = () => {
    console.log(`View details for Node Id: ${row.nodeId}`);
  };

  return (
    <TableRow hover tabIndex={-1} >
      {/* Node Id Column */}
      <TableCell>{null}</TableCell>

      {/* Name Column */}
      
      <TableCell component="th" scope="row">
        <Box gap={0} display="flex" alignItems="center">
          {row.nodeId}
        </Box>
      </TableCell>
      <TableCell>{row.name}</TableCell>

      {/* Port Column */}
      <TableCell>{row.port}</TableCell>

      {/* Status Column */}
      <TableCell>
        <Label color={row.status === 'banned' ? 'error' : 'success'}>
          {row.status}
        </Label>
      </TableCell>

      {/* Action Column with separate buttons */}
      <TableCell >
      <Button
          onClick={handleDetails}
          variant="text"
          sx={{ textTransform: 'none', marginRight: 2 }}
        >
          Details
        </Button>
</TableCell>
<TableCell >
        <Button
          onClick={handleDelete}
          variant="text"
          sx={{ textTransform: 'none', color: 'error.main' }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
