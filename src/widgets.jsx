import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";


const Widgets = () => {
    const data=[{
        "title":"EARNINGS (MONTHLY)",
        "range":"$40,000"
    },
    {
        "title":"EARNINGS (ANNUAL)",
        "range":"$215,000"
    },
    {
        "title":"TASKS",
        "range":"50%"
    },
    {
        "title":"PENDING REQUESTS",
        "range":"18"
    }
]
  return (
    <div className='wid'>
      <Box
          component="span"
          sx={{ display: 'flex' ,gap:"12px"}}
          >
        {data.map((data,index)=>
        <Widgetscard key={index} data={data}/>)}
    </Box>
    </div>
  )
}
function Widgetscard({data}){
    const bull = (
        <Box
          component="span"
          sx={{ display: 'flex', mx: '2px', transform: 'scale(2)' }}
        >
          •
        </Box>
      );
    return(
        <div className='widgetsmain'>
            <div className='rightw'>
            <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
         {data.title}
        </Typography>
        <Typography variant="h5" component="div">
          {data.range}
        </Typography>
     </CardContent>
     </Card>
    </div>
  </div>
    )
}

export default Widgets