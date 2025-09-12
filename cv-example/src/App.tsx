
import React from 'react';

import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import {Row, Col, Card} from "antd";

const App: React.FC = () => {
  return (
   
    <ConfigProvider
      theme={{
        token: {
         
          colorPrimary: '#1890ff',
          
          borderRadius: 6}}}>
      
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      
        <Row gutter ={[24,24]}>
        
        

        <Col xs={24} lg={10}>
        
        
        </Col>
       
         <Col xs={24} lg={14}>
        <Card >
         <h2 style={{color:'black'}}><strong>Profile</strong></h2>
         <p style={{color:"gray"}}>Frontend developer with advanced knowledge of
           SQL and Oracle,
           and intermediate experience in HTML, CSS, JavaScript, 
           and React.
            Focused on combining database expertise with modern web technologies
             to build functional and user-friendly solutions.
         </p>
         
          <h2 style={{color:"black" }}><strong>Experience</strong></h2>
          <p style={{margin:0, color:"gray"}}>Most recent first</p>
          <Card style={{backgroundColor: '#f5f5f5',boxShadow: "-4px 0 6px -2px rgba(0,0,0,0.3)"}} >
            <h3 style={{color:"black", margin:0}}>Data Sience - QSS ACADEMY </h3>
            <p style={{color:"gray", margin:0}}>May - 2023 , Baku</p>
            <p style={{color:"gray"}}>In this course, I acquired new skills.
               I was able to independently work on
                projects mainly involving Python, SPSS, R Studio, and Machine Learning.
                 At the end of the course, I received a certificate. 
                 Afterwards, I provided small-scale mentorship.
            </p>

         </Card><br/>


          <Card style={{backgroundColor: '#f5f5f5',boxShadow: "-4px 0 6px -2px rgba(0,0,0,0.3)"}} >
            <h3 style={{color:"black", margin:0}}>Accountant - KusOr Company</h3>
            <p style={{color:"gray", margin:0}}>July - 2025 , Baku</p>
            <p style={{color:"gray"}}>
              I started to further develop myself in Data Analytics.
               During this time, I continued learning SQL, Oracle, Excel, and Tableau.
                Later, I completed this Bootcamp with a certificate and continued working there.
            </p>

         </Card>


        </Card>
        </Col>

        </Row>
      
        

         
        
      </div>
    </ConfigProvider>
  );
};


export default App;