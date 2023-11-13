import React from 'react'
import "./dashboard.css"

function Dashboard() {
  return (
    <div className='app_settings outlet'>
        

        <h1>Dashboard</h1>
        
        <div className='dash-row-1'>

        <div className='dash-top-row'>
          <h4>Total </h4>
          <div className='num-sec'>
            <h5>250</h5>
          </div>
        </div>

        <div className='dash-top-row'>
          <h4>Last record</h4>
          <div className='num-sec'>
            <h5>250</h5>
          </div>
        </div>

        <div className='dash-top-row'>
          <h4>Wednesday record</h4>
          <div className='num-sec'>
            <h5>250</h5>
          </div>
        </div>

        <div className='dash-top-row'>
          <h2> total for the month</h2>
        </div>
        </div>




        <div className='dash-row-2'>
        <div className='dash-top-row-2 top-row-1'>
          <h5>Total Atttendance</h5>
        </div>

        <div className='dash-top-row-2 '>
          <div className='top-row-2'>
          <h2>Main Target</h2>
          <hr></hr>
          </div>
        </div>

        <div className='dash-top-row-2 '>
          <div className='top-row-3'>
          </div>
        </div>
        </div>


        <div className='dash-row-2'>
        <div className='dash-top-row-2'>
          <h2>Maern App Project</h2>
        </div>
        </div>

    </div>
  )
}

export default Dashboard