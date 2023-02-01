import * as React from 'react';
import { styled } from '@mui/material/styles';
import {tableData} from "../data/tableData";
import { useLocation, useParams } from "react-router-dom"
import {getHeaderTitles} from "../data/headerTitles";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function GameDetails() {

  const location = useLocation();
  const gameId = useParams().id;
  const [open, setOpen] = React.useState(false);
 
  const pathName = location.pathname.split('/')[1]; 
  
  const getGameWithId = tableData.games.find(game => game['id'] === gameId);
  const getLocationOfTheGame = tableData.locations.find(location => location['id'] === getGameWithId['location']);
  const locationPropertiesWithoutId = Object.keys(tableData.locations[0]).filter(propertyName => propertyName !== "id")    
  
  const gameTableHeaderTitles = getHeaderTitles(pathName)['gameTableHeaderTitles'];
  const locationTableHeaderTitles = getHeaderTitles(pathName)['locationTableHeaderTitles'];
  
  const gameTableHeaderCells = gameTableHeaderTitles
        .map(title => <StyledTableCell align='center' key={title} scope='col'>{title}</StyledTableCell>);
  const locationTableHeaderCells = locationTableHeaderTitles
        .map(title => <StyledTableCell key={title} scope='col'>{title}</StyledTableCell>);  
        
  const mapOfLocation =
        <div>
            <iframe src={getLocationOfTheGame['url']} title="Location map" width="200" height="150" allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>

  const gameTableRowCells = gameTableHeaderTitles
        .map(title => <StyledTableCell key={title}
                                    align='center'>{title === 'Location' ? getLocationOfTheGame['name'] : getGameWithId[title.toLowerCase()]}</StyledTableCell>)

  const locationTableRowCells = locationPropertiesWithoutId
        .map(title => <StyledTableCell key={title}>{title === 'url' ? mapOfLocation : getLocationOfTheGame[title]}</StyledTableCell>)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            {gameTableHeaderCells}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <TableCell align='center'>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            {gameTableRowCells}
          </StyledTableRow>
          <StyledTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {locationTableHeaderCells}
                  </TableRow>
                </TableHead>
                <TableBody>                 
                    <TableRow>
                      {locationTableRowCells}
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

