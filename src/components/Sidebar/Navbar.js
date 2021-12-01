import {React} from 'react'
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { GoProject } from "react-icons/go";
import { FaWarehouse,FaUserClock,FaCalendarAlt,FaTasks,FaHandHoldingWater
,FaTools,FaUsers,FaSprayCan} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";
import "./sidebar.css"
import { SiHappycow } from "react-icons/si";
import {MdVerified} from "react-icons/md"
import {BsFillCloudLightningRainFill} from "react-icons/bs"
import { GiFarmTractor,GiGroundSprout,GiPlantWatering,GiFruitTree,GiAutoRepair,GiWheat 
  ,GiChemicalDrop,GiGrain,GiFuelTank,GiFertilizerBag,GiField,GiGoat,GiGrainBundle} from "react-icons/gi";
const { SubMenu } = Menu;
export default function Navbar(props) {
    return (
        <div className="side-menu">
        <div className="logo" >
        {!props.compact && <div className="Cname">GFS Trace</div>}
        </div>
          <Menu  theme="dark" defaultSelectedKeys={['1']} mode="vertical">
            <Menu.Item key="1" icon={<MdSpaceDashboard />} >
            <Link to="/"/>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<VscOpenPreview />}>
              Custom Reports
            </Menu.Item>
            <Menu.Item key="3" icon={<GoProject />}><Link to="/Jobs"/>
              Jobs
            </Menu.Item>
            <SubMenu key="sub1" icon={<FaTasks />} title="Activities">
              <Menu.Item key="4" icon={<VscOpenPreview/>}>Activity Reports</Menu.Item>
              <Menu.Item key="5" icon={<ImDroplet/>}>Spray Logs</Menu.Item>
              <Menu.Item key="6" icon={<GiGroundSprout/>}>Planting</Menu.Item>
              <Menu.Item key="7" icon={<GiWheat/>}>Spreading</Menu.Item>
              <Menu.Item key="8" icon={<GiFruitTree/>}>Harvest</Menu.Item>
              <Menu.Item key="9" icon={<GiAutoRepair/>}>Maintainance</Menu.Item>
              <Menu.Item key="10"icon={<GiPlantWatering/>}>Irrigation</Menu.Item>
              <Menu.Item key="11"icon={<SiHappycow/>}>Grazing</Menu.Item>
            </SubMenu>
            <SubMenu  key="sub2" icon={<FaWarehouse />} title="Inventory">
              <Menu.Item key="12" icon={<VscOpenPreview />}>Inventory Reports</Menu.Item>
              <Menu.Item key="13" icon={<GiGrain />}>Grain</Menu.Item>
              <Menu.Item key="14" icon={<GiChemicalDrop/>}>Chemical</Menu.Item>
              <Menu.Item key="15" icon={<GiFertilizerBag />}>Fertilizer</Menu.Item>
              <Menu.Item key="16" icon={<GiFuelTank/>}>Fuel</Menu.Item>
              <Menu.Item key="17" icon={<FaHandHoldingWater />}>Water</Menu.Item>
            </SubMenu>
            <SubMenu  key="sub3" icon={<BsPeopleFill />} title="Personal">
              <Menu.Item key="18" icon={<FaUserClock/>}>TimeSheet</Menu.Item>
            </SubMenu>
            <SubMenu   key="sub4" icon={<GiFarmTractor />} title="Activities">
              <Menu.Item key="19" icon={<GiField />}><Link to="/Farms"/>Farms</Menu.Item>
              <Menu.Item key="20" icon={<BsFillCloudLightningRainFill />}>Rain</Menu.Item>
              <Menu.Item key="21" icon={<GiGrainBundle />}><Link to="/Cultivars"/>Cultivars</Menu.Item>
              <Menu.Item key="22" icon={<GiGoat />}><Link to="/Livestock"/>Livestock</Menu.Item>
              <Menu.Item key="23" icon={<FaTools />}><Link to="/Equipments"/>Equipment</Menu.Item>
              <Menu.Item key="24" icon={<GiChemicalDrop />}><Link to="/Chemicals"/>Chemicals</Menu.Item>
              <Menu.Item key="25" icon={<GiFertilizerBag />}><Link to="/Fertiliser"/>Fertilizers</Menu.Item>
              <Menu.Item key="26" icon={<FaUsers />}><Link to="/Users"/>Users</Menu.Item>
              <Menu.Item key="27" icon={<FaSprayCan />}><Link to="/Nozzles"/>Nozzles</Menu.Item>
              <Menu.Item key="28" icon={<MdVerified />}><Link to="/Waterlicence"/>Water Licences</Menu.Item>
              
            </SubMenu>
            <Menu.Item key="29" icon={<FaCalendarAlt />}>
              Calender
            </Menu.Item>
          </Menu>
        </div>
    )
}
