import { Superscript } from '@mui/icons-material'
import React from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BuildIcon from '@mui/icons-material/Build';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className='top-logo'>
     <InsertEmoticonIcon></InsertEmoticonIcon>  SB ADMIN <sup>2</sup>
    </div>
    <hr />
     <div className='center'>
        <ul>
            <li><div className='d'><AutoAwesomeMosaicIcon></AutoAwesomeMosaicIcon>
            <div className='d1'>Dashboard</div></div></li>
        </ul>
        <hr />
        <ul>
            <p className='interface'>INTERFACE</p>
            <li><div className='d'><SettingsIcon></SettingsIcon>
            <div className='d1'>Components</div></div></li>
        </ul>
        <ul>
            <li><div className='d'><BuildIcon></BuildIcon>
            <div className='d1'>Utilities</div></div></li>
        </ul>
        <hr />
        <ul>
            <p className='addons'>ADDONS</p>
            <li><div className='d'><FolderIcon></FolderIcon>
            <div className='d1'>Pages</div></div></li>
        </ul>
        <ul>
            <li><div className='d'><BarChartIcon></BarChartIcon>
            <div className='d1'>Charts</div></div></li>
        </ul>
        <ul>
            <li><div className='d'><TableChartOutlinedIcon></TableChartOutlinedIcon>
            <div className='d1'>Tables</div></div></li>
        </ul>
        <hr />
     </div>
   </div>
  )
}

export default Sidebar