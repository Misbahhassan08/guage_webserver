import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

function createData(timestamp, flow, flowUnit, velocity, positiveCumulative, negativeCumulative, cumulativeTotal, cumulativeUnit) {
  return { timestamp, flow, flowUnit, velocity, positiveCumulative, negativeCumulative, cumulativeTotal, cumulativeUnit };
}

const rows = [
  createData("2025-05-14 10:00", 12.5, "L/min", 3.2, 120.0, 5.0, 115.0, "L"),
  createData("2025-05-14 10:01", 13.0, "L/min", 3.5, 133.0, 5.0, 128.0, "L"),
  createData("2025-05-14 10:02", 11.8, "L/min", 3.1, 144.8, 6.0, 138.8, "L"),
  createData("2025-05-14 10:03", 14.1, "L/min", 3.8, 158.9, 6.0, 152.9, "L"),
  createData("2025-05-14 10:04", 12.0, "L/min", 3.0, 170.9, 6.5, 164.4, "L"),
  createData("2025-05-14 10:05", 13.5, "L/min", 3.6, 184.4, 6.5, 177.9, "L"),
  createData("2025-05-14 10:06", 12.3, "L/min", 3.3, 196.7, 7.0, 189.7, "L"),
  createData("2025-05-14 10:07", 11.5, "L/min", 3.0, 208.2, 7.0, 201.2, "L"),
  createData("2025-05-14 10:08", 13.2, "L/min", 3.7, 221.4, 7.0, 214.4, "L"),
  createData("2025-05-14 10:09", 14.0, "L/min", 4.0, 235.4, 7.5, 227.9, "L"),
];

export default function DashboardTable() {
  return (
    <TableContainer component={Paper}>
        <Box px={2} pt={2} >
    <Typography variant="body1" fontWeight={"bold"} gutterBottom>Table</Typography>
</Box>
      <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
<TableHead>
  <TableRow>
    <TableCell sx={{ color: 'grey.600', fontWeight: 'bold' }}>Timestamp</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Flow</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Flow Unit</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Velocity</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Positive Cumulative</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Negative Cumulative</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Cumulative Total</TableCell>
    <TableCell align="right" sx={{ color: 'grey.600', fontWeight: 'bold' }}>Cumulative Unit</TableCell>
  </TableRow>
</TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.timestamp}</TableCell>
              <TableCell align="right">{row.flow}</TableCell>
              <TableCell align="right">{row.flowUnit}</TableCell>
              <TableCell align="right">{row.velocity}</TableCell>
              <TableCell align="right">{row.positiveCumulative}</TableCell>
              <TableCell align="right">{row.negativeCumulative}</TableCell>
              <TableCell align="right">{row.cumulativeTotal}</TableCell>
              <TableCell align="right">{row.cumulativeUnit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
