import { React } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { MdSpaceDashboard } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { GoProject } from "react-icons/go";
import {
  FaWarehouse,
  FaUserClock,
  FaCalendarAlt,
  FaTasks,
  FaHandHoldingWater,
  FaTools,
  FaUsers,
  FaSprayCan,
} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";
import "./sidebar.css";
import { SiHappycow } from "react-icons/si";
import { MdVerified } from "react-icons/md";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import {
  GiFarmTractor,
  GiGroundSprout,
  GiPlantWatering,
  GiFruitTree,
  GiAutoRepair,
  GiWheat,
  GiChemicalDrop,
  GiGrain,
  GiFuelTank,
  GiFertilizerBag,
  GiField,
  GiGoat,
  GiGrainBundle,
} from "react-icons/gi";
const { SubMenu } = Menu;
export default function Navbar(props) {
  return (
    <div className="side-menu">
      <div className="logo">
        {!props.compact && <div className="Cname">GFS Trace</div>}
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="vertical">
        <Menu.Item key="1" icon={<MdSpaceDashboard />}>
          <Link to="/" />
          <Trans i18nKey="navbar.dashboard">Dashboard</Trans>
        </Menu.Item>
        <Menu.Item key="2" icon={<VscOpenPreview />}>
          <Trans i18nKey="navbar.custom_reports">Custom Reports</Trans>
        </Menu.Item>
        <Menu.Item key="3" icon={<GoProject />}>
          <Link to="/Jobs" />
          <Trans i18nKey="navbar.jobs">Jobs</Trans>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<FaTasks />}
          title={<Trans i18nKey="navbar.activities">Activities</Trans>}
        >
          <Menu.Item key="4" icon={<VscOpenPreview />}>
            <Trans i18nKey="navbar.activity_reports">Activity Reports</Trans>
          </Menu.Item>
          <Menu.Item key="5" icon={<ImDroplet />}>
          <Link to="/Spraylogs" />
            <Trans i18nKey="navbar.spray_logs">Spray Logs</Trans>
          </Menu.Item>
          <Menu.Item key="6" icon={<GiGroundSprout />}>
          <Link to="/Planting" />
          <Trans i18nKey="navbar.planting">
            Planting
            </Trans>
          </Menu.Item>
          <Menu.Item key="7" icon={<GiWheat />}>
          <Trans i18nKey="navbar.spreading">
            Spreading
            </Trans>
          </Menu.Item>
          <Menu.Item key="8" icon={<GiFruitTree />}>
          <Trans i18nKey="navbar.harvest">
           Harvest
            </Trans>
          </Menu.Item>
          <Menu.Item key="9" icon={<GiAutoRepair />}>
          <Trans i18nKey="navbar.maintainance">
            Maintainance
            </Trans>
          </Menu.Item>
          <Menu.Item key="10" icon={<GiPlantWatering />}>
          <Trans i18nKey="navbar.irrigation">
            Irrigation
            </Trans>
          </Menu.Item>
          <Menu.Item key="11" icon={<SiHappycow />}>
          <Trans i18nKey="navbar.grazing">
            Grazing
            </Trans>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FaWarehouse />} title={<Trans i18nKey="navbar.inventory">
            Inventory
            </Trans>}>
          <Menu.Item key="12" icon={<VscOpenPreview />}>
          <Trans i18nKey="navbar.inventory_reports">
            Inventory Reports
            </Trans>
          </Menu.Item>
          <Menu.Item key="13" icon={<GiGrain />}>
        {/*  <Link to="/Grain" />*/}
          <Trans i18nKey="navbar.grain">
            Grain
            </Trans>
          </Menu.Item>
          <Menu.Item key="14" icon={<GiChemicalDrop />}>
            <Link to="/InventoryChemical" />
            <Trans i18nKey="navbar.chemical">
            Chemical
            </Trans>
          </Menu.Item>
          <Menu.Item key="15" icon={<GiFertilizerBag />}>
          <Trans i18nKey="navbar.fertilizer">
            Fertilizer
            </Trans>
          </Menu.Item>
          <Menu.Item key="16" icon={<GiFuelTank />}>
          <Trans i18nKey="navbar.fuel">
            Fuel
            </Trans>
          </Menu.Item>
          <Menu.Item key="17" icon={<FaHandHoldingWater />}>
          <Trans i18nKey="navbar.water">
            Water
            </Trans>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<BsPeopleFill />} title={<Trans i18nKey="navbar.personal">
            Personal
            </Trans>}>
          <Menu.Item key="18" icon={<FaUserClock />}>
          <Trans i18nKey="navbar.timesheet">
            Timesheet
            </Trans>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<GiFarmTractor />} title={<Trans i18nKey="navbar.farm_assets">
            Farms Assets
            </Trans>}>
          <Menu.Item key="19" icon={<GiField />}>
            <Link to="/Farms" />
            <Trans i18nKey="navbar.farms">
            Farms
            </Trans>
          </Menu.Item>
          <Menu.Item key="20" icon={<BsFillCloudLightningRainFill />}>
          <Trans i18nKey="navbar.rain">
            Rain
            </Trans>
          </Menu.Item>
          <Menu.Item key="21" icon={<GiGrainBundle />}>
            <Link to="/Cultivars" />
            <Trans i18nKey="navbar.cultivars">
           Cultivars
            </Trans>
          </Menu.Item>
          <Menu.Item key="22" icon={<GiGoat />}>
            <Link to="/Livestock" />
            <Trans i18nKey="navbar.livestock">
            Livestock
            </Trans>
          </Menu.Item>
          <Menu.Item key="23" icon={<FaTools />}>
            <Link to="/Equipments" />
            <Trans i18nKey="navbar.equipments">
            Equipments
            </Trans>
          </Menu.Item>
          <Menu.Item key="24" icon={<GiChemicalDrop />}>
            <Link to="/Chemicals" />
            <Trans i18nKey="navbar.chemicals">
            Chemicals
            </Trans>
          </Menu.Item>
          <Menu.Item key="25" icon={<GiFertilizerBag />}>
            <Link to="/Fertiliser" />
            <Trans i18nKey="navbar.fertilizers">
            Fertilizers
            </Trans>
          </Menu.Item>
          <Menu.Item key="26" icon={<FaUsers />}>
            <Link to="/Users" />
            <Trans i18nKey="navbar.users">
            Users
            </Trans>
          </Menu.Item>
          <Menu.Item key="27" icon={<FaSprayCan />}>
            <Link to="/Nozzles" />
            <Trans i18nKey="navbar.nozzles">
            Nozzles
            </Trans>
          </Menu.Item>
          <Menu.Item key="28" icon={<MdVerified />}>
            <Link to="/Waterlicence" />
            <Trans i18nKey="navbar.water_licences">
            Water Licences
            </Trans>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="29" icon={<FaCalendarAlt />}>
        <Trans i18nKey="navbar.calender">
            Calendar
            </Trans>
        </Menu.Item>
      </Menu>
    </div>
  );
}
