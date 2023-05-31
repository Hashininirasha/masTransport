import React, { useState } from 'react';
import {Box,Button,IconButton,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,Tooltip,Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { EditOutlined, RemoveRedEyeOutlined, DeleteOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link } from 'react-router-dom';
import { StyledTableCell } from '../../../assets/theme/theme';
import style from './ViewRequestsLM.module.scss';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const ViewRequestsLM = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      requestId: '12345',
      requestType: 'Adhoc',
      createDate: '2023-05-27',
      status: 'Pending',
      VIPtrip: 'No',
      From: 'Biyagama',
      To : 'Pallekele',
      Departure: '20/04/2023 8.00 AM',
      Return : '22/04/2023 8.00 PM',
      Passengers: [
        {
          id: 1,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 3,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 4,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
      ],
      PreferredVehicle: 'Van',
      Package: 'Yes',
      CBM: 1,
      Purpose: 'Traning Session',
      Approver: ' Yoshani Jayathilaka',
      // Add more properties as per your requirements
    },
    {
      id: 2,
      requestId: '12345',
      requestType: 'Adhoc',
      createDate: '2023-05-27',
      status: 'Pending',
      VIPtrip: 'No',
      From: 'Biyagama',
      To : 'Pallekele',
      Departure: '20/04/2023 8.00 AM',
      Return : '22/04/2023 8.00 PM',
      Passengers: [
        {
          id: 1,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 3,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 4,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
      ],
      PreferredVehicle: 'Van',
      Package: 'Yes',
      CBM: 1,
      Purpose: 'Traning Session',
      Approver: ' Yoshani Jayathilaka',
      // Add more properties as per your requirements
    },
    {
      id: 3,
      requestId: '12345',
      requestType: 'Transportation',
      createDate: '2023-05-27',
      status: 'Draft',
      VIPtrip: 'No',
      From: 'Biyagama',
      To : 'Pallekele',
      Departure: '20/04/2023 8.00 AM',
      Return : '22/04/2023 8.00 PM',
      Passengers: [
        {
          id: 1,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 3,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 4,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
      ],
      PreferredVehicle: 'Van',
      Package: 'Yes',
      CBM: 1,
      Purpose: 'Traning Session',
      Approver: ' Yoshani Jayathilaka',
      // Add more properties as per your requirements
    },
    {
      id: 4,
      requestId: '12345',
      requestType: 'Transportation',
      createDate: '2023-05-27',
      status: 'Pending',
      VIPtrip: 'No',
      From: 'Biyagama',
      To : 'Pallekele',
      Departure: '20/04/2023 8.00 AM',
      Return : '22/04/2023 8.00 PM',
      Passengers: [
        {
          id: 1,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 3,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 4,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
      ],
      PreferredVehicle: 'Van',
      Package: 'Yes',
      CBM: 1,
      Purpose: 'Traning Session',
      Approver: ' Yoshani Jayathilaka',
      // Add more properties as per your requirements
    },
    {
      id: 5,
      requestId: '12345',
      requestType: 'Transportation',
      createDate: '2023-05-27',
      status: 'Pending',
      VIPtrip: 'No',
      From: 'Biyagama',
      To : 'Pallekele',
      Departure: '20/04/2023 8.00 AM',
      Return : '22/04/2023 8.00 PM',
      Passengers: [
        {
          id: 1,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 3,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 4,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
      ],
      PreferredVehicle: 'Van',
      Package: 'Yes',
      CBM: 1,
      Purpose: 'Traning Session',
      Approver: ' Yoshani Jayathilaka',
      // Add more properties as per your requirements
    },
    {
      id: 6,
      requestId: '12345',
      requestType: 'Transportation',
      createDate: '2023-05-27',
      status: 'Pending',
      VIPtrip: 'No',
      From: 'Biyagama',
      To : 'Pallekele',
      Departure: '20/04/2023 8.00 AM',
      Return : '22/04/2023 8.00 PM',
      Passengers: [
        {
          id: 1,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 3,
          name: 'Remy Sharp',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
        {
          id: 4,
          name: 'Travis Howard',
          avatarSrc: 'https://th.bing.com/th/id/OIP.Fp7sFol83az5vls4n9eWtwHaEo?pid=ImgDet&rs=1',
        },
      ],
      PreferredVehicle: 'Van',
      Package: 'Yes',
      CBM: 1,
      Purpose: 'Traning Session',
      Approver: ' Yoshani Jayathilaka',
      // Add more properties as per your requirements
    },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState('asc');


  const handleDelete = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleRequestTypeSort = () => {
    const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newSortDirection);
  
    const sortedRows = [...rows].sort((a, b) => {
      if (newSortDirection === 'asc') {
        return a.requestType.localeCompare(b.requestType);
      } else {
        return b.requestType.localeCompare(a.requestType);
      }
    });
  
    setRows(sortedRows);
  };
  

  return (
    <section className={style.gridContainer}>
      <div className={style.gridHeader}>
        <Typography noWrap component="div" className={style.gridTitle}>
          <h3>Transport Requests</h3>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <div>
          <Button className={style.gridActionButton} variant="contained">
            <div className="layout-row">
              <AddIcon className={style.icon} />
              <Typography>New Request</Typography>
            </div>
          </Button>
        </div>
      </div>

      <TableContainer component={Paper} className={style.grid}>
        <Table className={style.table}>
          <TableHead>
          <TableRow>
              <StyledTableCell width={120}>
                
                Request ID
                
                </StyledTableCell>
              <StyledTableCell width={120}>
      Request Type
                </StyledTableCell>

              <StyledTableCell width={180}>
                
                Create date and time
                
                </StyledTableCell>

              <StyledTableCell width={100}><Tooltip title="Sort" placement="top" enterDelay={300}>
        <IconButton onClick={handleRequestTypeSort}>
          {sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </IconButton>
      </Tooltip>
                Status</StyledTableCell>
              <StyledTableCell width={100} >VIP trip</StyledTableCell>
                  <StyledTableCell width={100} >From</StyledTableCell>
                  <StyledTableCell width={180} >To (Main Destination)</StyledTableCell>
                  <StyledTableCell width={200} >Departure date and time</StyledTableCell>
                  <StyledTableCell width={180} >Return date and time</StyledTableCell>
                  <StyledTableCell width={150} >Passengers</StyledTableCell>
                  <StyledTableCell width={150} >Preferred Vehicle</StyledTableCell>
                  <StyledTableCell width={120} >Package</StyledTableCell>
                  <StyledTableCell width={180} >Total CBM of Package</StyledTableCell>
                  <StyledTableCell width={200} >Purpose</StyledTableCell>
                  <StyledTableCell width={200}>Approver</StyledTableCell>
             
              <StyledTableCell width={150} className={style.actionColumn}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
              <StyledTableCell>{row.requestId}</StyledTableCell>
              <StyledTableCell>{row.requestType}</StyledTableCell>
              <StyledTableCell>{row.createDate}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.VIPtrip}</StyledTableCell>
              <StyledTableCell>{row.From}</StyledTableCell>
              <StyledTableCell>{row.To}</StyledTableCell>
              <StyledTableCell>{row.Departure}</StyledTableCell>
              <StyledTableCell>{row.Return}</StyledTableCell>
              
              <StyledTableCell className={style.actionColumn}>
                <AvatarGroup max={3}>
                  {row.Passengers.map((passenger) => (
                    <Avatar
                      key={passenger.id}
                      alt={passenger.name}
                      src={passenger.avatarSrc}
                    />
                  ))}
                </AvatarGroup>
              </StyledTableCell>
              <StyledTableCell>{row.PreferredVehicle}</StyledTableCell>
              <StyledTableCell>{row.Package}</StyledTableCell>
              <StyledTableCell>{row.CBM}</StyledTableCell>
              <StyledTableCell>{row.Purpose}</StyledTableCell>
              <StyledTableCell>{row.Approver}</StyledTableCell>
              <StyledTableCell className={style.actionColumn} style={{ backgroundColor: '#282828' }}>
                <Box className="layout-row">
                  <Box>
                    <IconButton size="small">
                      <Tooltip title="View">
                        <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                      </Tooltip>
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton size="small">
                    <Tooltip title="Edit">
                          <EditOutlined sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                        </Tooltip>
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton size="small" onClick={() => handleDelete(row.id)}>
                        <Tooltip title="Delete">
                          <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                        </Tooltip>
                      </IconButton>
                    </Box>
                  </Box>
                </StyledTableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }} className={style.paginationReq}>
                <TableCell colSpan={15} />
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TablePagination className={style.paginationReq}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </section>
  );
};

export default ViewRequestsLM;