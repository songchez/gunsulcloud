import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Props {
  data: { name: string; peoSkill: string; cash: string }[];
}
export default function TableTem(props: Props) {
  return (
    <div className="bg-black">
      <h3 className="m-1">지반조성ㆍ포장공사업</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: 90 }}>
                직무분야
              </TableCell>
              <TableCell align="center" sx={{ width: 350 }}>
                기술능력
              </TableCell>
              <TableCell align="center" sx={{ width: 250 }}>
                시설장비
              </TableCell>
              <TableCell align="center" sx={{ width: 140 }}>
                자본금
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.peoSkill}</TableCell>
                <TableCell align="left">{row.cash}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
