import React from 'react';

const About = () => {
    return (
        <div className="dashboard-container">
            <div style={{ alignSelf: "flex-start",width:"50%"}}>
                <span>Brief History:</span>
                <p className='description'>
                    Dr. V. S. Krishna Government Degree College (A), is located in Maddilapalem of Visakhapatnam city in 6.75 acres of land with 8225.8 sqmts. of built up area in three floors near the National Highway. The college has adequate infrastructure and equipment. The first two floors accommodate the undergraduate courses and the second floor accommodates the Post Graduate Courses. The college has its own playground, a separate building for library, gymnasium and a hostel for girl’s students.</p>
            </div>
<div className="overflow-x-auto">
      <table className="program-table">
        <thead>
          <tr>
            <th>GROUP</th>
            <th>MAJOR SUBJECT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even-row">
            <td rowSpan="5">B A</td>
            <td>B A Honours--Special English</td>
          </tr>
          <tr className="even-row">
            <td>B A Honours--History</td>
          </tr>
          <tr className="even-row">
            <td>B A Honours--Political Science</td>
          </tr>
          <tr className="even-row">
            <td>B A Honours--Special Telugu</td>
          </tr>
          <tr className="even-row">
            <td>B A Honours--Economics</td>
          </tr>

          <tr className="odd-row">
            <td rowSpan="4">BCOM</td>
            <td>B Com Honours--Digital Marketing</td>
          </tr>
          <tr className="odd-row">
            <td>B Com Honours--Computer Applications</td>
          </tr>
          <tr className="odd-row">
            <td>B Com Honours--Financial Markets</td>
          </tr>
          <tr className="odd-row">
            <td>B Com Honours--General</td>
          </tr>

          <tr className="even-row">
            <td>BBA</td>
            <td>BBA Honours Logistics Management</td>
          </tr>

          <tr className="odd-row">
            <td rowSpan="8">BSC</td>
            <td>B Sc Honours--Industrial Chemistry</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Organic Chemistry</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Analytical Chemistry</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Chemistry</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Botany</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Organic Farming</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Fisheries</td>
          </tr>
          <tr className="odd-row">
            <td>B Sc Honours--Zoology</td>
          </tr>
        </tbody>
      </table>
    </div>


        </div>
    );
};

export default About;