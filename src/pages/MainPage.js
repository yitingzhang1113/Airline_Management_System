// src/pages/MainPage.js
import React from 'react';

// 通过 props.onChangePage() 来切换页面
export default function MainPage({ onChangePage }) {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Main Page</h2>
      <p>请选择要进行的操作/查看的视图：</p>

      <ul>
        <li>
          <button onClick={() => onChangePage('AddAirplane')}>Add Airplane</button>
        </li>
        <li>
          <button onClick={() => onChangePage('AddAirport')}>Add Airport</button>
        </li>
        <li>
          <button onClick={() => onChangePage('AddPerson')}>Add Person</button>
        </li>
        <li>
          <button onClick={() => onChangePage('GrantOrRevokeLicense')}>
            Grant/Revoke Pilot License
          </button>
        </li>
        <li>
          <button onClick={() => onChangePage('OfferFlight')}>Offer Flight</button>
        </li>
        <li>
          <button onClick={() => onChangePage('FlightLanding')}>Flight Landing</button>
        </li>
        <li>
          <button onClick={() => onChangePage('FlightTakeoff')}>Flight Takeoff</button>
        </li>
        <li>
          <button onClick={() => onChangePage('PassengersBoard')}>Passengers Board</button>
        </li>
        <li>
          <button onClick={() => onChangePage('PassengersDisembark')}>
            Passengers Disembark
          </button>
        </li>
        <li>
          <button onClick={() => onChangePage('AssignPilot')}>Assign Pilot</button>
        </li>
        <li>
          <button onClick={() => onChangePage('RecycleCrew')}>Recycle Crew</button>
        </li>
        <li>
          <button onClick={() => onChangePage('RetireFlight')}>Retire Flight</button>
        </li>
        <li>
          <button onClick={() => onChangePage('SimulationCycle')}>Simulation Cycle</button>
        </li>
        <li>
          <button onClick={() => onChangePage('FlightsInTheAir')}>Flights in the Air</button>
        </li>
        <li>
          <button onClick={() => onChangePage('FlightsOnTheGround')}>
            Flights on the Ground
          </button>
        </li>
        <li>
          <button onClick={() => onChangePage('PeopleInTheAir')}>People in the Air</button>
        </li>
        <li>
          <button onClick={() => onChangePage('PeopleOnTheGround')}>
            People on the Ground
          </button>
        </li>
        <li>
          <button onClick={() => onChangePage('RouteSummary')}>Route Summary</button>
        </li>
        <li>
          <button onClick={() => onChangePage('AlternateAirports')}>Alternate Airports</button>
        </li>
      </ul>
    </div>
  );
}
