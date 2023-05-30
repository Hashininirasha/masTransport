import { Box, Button, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { EditOutlined } from '@mui/icons-material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React, { useState } from 'react';
import { StyledTableCell } from '../../../assets/theme/theme';
import style from './ViewRequestsLM.module.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const ViewRequestsLM = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
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
    // Add more initial rows as needed
  ]);

  const handleDelete = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
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
              {/* <Link to="./new" className={style.text}>
                New Request.
              </Link> */}
            </div>
          </Button>
        </div>
      </div>

      <TableContainer component={Paper} className={style.grid}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell width={120}>Request ID</StyledTableCell>
              <StyledTableCell width={120}>Request Type</StyledTableCell>
              <StyledTableCell width={180}>Create date and time</StyledTableCell>
              <StyledTableCell width={100}>Status</StyledTableCell>
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
            {rows.map((row) => (
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
            </TableBody>
          </Table>
          
        </TableContainer>
      </section>
    );
  };
  
  export default ViewRequestsLM;
  