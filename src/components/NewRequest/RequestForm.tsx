
import { Box, Button, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { EditOutlined } from '@mui/icons-material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React from 'react'
import style from './RequestForm.module.scss'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from "../../utilities/constants/routes.constants"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';



const NewRequest = () => {
  const navigate = useNavigate()

  const handleNewRequest = () => {

    navigate(APP_ROUTES.NEW_REQUEST)
  }
  return (
    <section className={style.gridContainer}>
          <div className={style.gridHeader}>
            <Typography
              noWrap
              component="div"
              className={style.gridTitle}
            >
              <h3>Transport Request</h3>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <div>
              <Button className={style.gridActionButton} variant="contained">
              <Box>
                  
                    <div className='layout-row'>
                      <Typography className={style.text}>
                        Select saved templates
                      </Typography>
                      <KeyboardArrowDownOutlinedIcon className={style.icon} />
                    </div>
                 
                </Box>
              </Button>
            </div>
          </div>
<hr></hr>
          
        </section>
  )
}

export default NewRequest;
