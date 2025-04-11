import React, { useState } from 'react';
import './App.css';

// 导入19个页面组件
import MainPage from './pages/MainPage';
import AddAirplane from './pages/AddAirplane';
import AddAirport from './pages/AddAirport';
import AddPerson from './pages/AddPerson';
import GrantOrRevokeLicense from './pages/GrantOrRevokeLicense';
import OfferFlight from './pages/OfferFlight';
import FlightLanding from './pages/FlightLanding';
import FlightTakeoff from './pages/FlightTakeoff';
import PassengersBoard from './pages/PassengersBoard';
import PassengersDisembark from './pages/PassengersDisembark';
import AssignPilot from './pages/AssignPilot';
import RecycleCrew from './pages/RecycleCrew';
import RetireFlight from './pages/RetireFlight';
import SimulationCycle from './pages/SimulationCycle';
import FlightsInTheAir from './pages/FlightsInTheAir';
import FlightsOnTheGround from './pages/FlightsOnTheGround';
import PeopleInTheAir from './pages/PeopleInTheAir';
import PeopleOnTheGround from './pages/PeopleOnTheGround';
import RouteSummary from './pages/RouteSummary';
import AlternateAirports from './pages/AlternateAirports';

function App() {
  // currentPage 存储当前页面标识，默认显示 MainPage
  const [currentPage, setCurrentPage] = useState('MainPage');

  // 根据 currentPage 决定渲染哪个组件
  const renderPage = () => {
    switch (currentPage) {
      case 'MainPage':
        // 传入 onChangePage 回调，用于在 MainPage 里切换页面
        return <MainPage onChangePage={setCurrentPage} />;
      case 'AddAirplane':
        return <AddAirplane />;
      case 'AddAirport':
        return <AddAirport />;
      case 'AddPerson':
        return <AddPerson />;
      case 'GrantOrRevokeLicense':
        return <GrantOrRevokeLicense />;
      case 'OfferFlight':
        return <OfferFlight />;
      case 'FlightLanding':
        return <FlightLanding />;
      case 'FlightTakeoff':
        return <FlightTakeoff />;
      case 'PassengersBoard':
        return <PassengersBoard />;
      case 'PassengersDisembark':
        return <PassengersDisembark />;
      case 'AssignPilot':
        return <AssignPilot />;
      case 'RecycleCrew':
        return <RecycleCrew />;
      case 'RetireFlight':
        return <RetireFlight />;
      case 'SimulationCycle':
        return <SimulationCycle />;
      case 'FlightsInTheAir':
        return <FlightsInTheAir />;
      case 'FlightsOnTheGround':
        return <FlightsOnTheGround />;
      case 'PeopleInTheAir':
        return <PeopleInTheAir />;
      case 'PeopleOnTheGround':
        return <PeopleOnTheGround />;
      case 'RouteSummary':
        return <RouteSummary />;
      case 'AlternateAirports':
        return <AlternateAirports />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="app-container">
      <h1>Airline Management System</h1>
      {/* 渲染具体功能页面 */}
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
