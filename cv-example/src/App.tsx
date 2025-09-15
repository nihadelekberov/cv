
import React from 'react';
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';


import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import {Row, Col, Card,Button,Upload} from "antd";
import { EnvironmentOutlined, MailOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import {Progress} from "antd";

const App: React.FC = () => {

  const [imageUrl, setImageUrl] = useState<string | null>(null);


  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setImageUrl(e.target?.result as string);
    reader.readAsDataURL(file);
    return false; 
  };
  return (
   
    <ConfigProvider
      theme={{
        token: {
         
          colorPrimary: '#1890ff',
          
          borderRadius: 6}}}>
      
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      
        <Row gutter ={[24,24]}>
        
        

        <Col xs={24} lg={10}>
        <Card
      style={{
        width:"200px",
        height: 200,
        backgroundColor: "#e6f7ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span style={{ color: "#999" }}>our photo</span>
      )}

      <Upload beforeUpload={handleUpload} showUploadList={false} accept="image/*">
        <Button
          icon={<UploadOutlined />}
          size="small"
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          Upload
        </Button>
      </Upload>
    </Card>

        <Card>
         <h2 style={{color:"black", margin:0}}><strong>Nihad Ələkbərli</strong></h2>
         <p style={{margin:0,color:"gray" , fontSize:"20px"}}>Frontend Developer --React & UI/UX</p><br/>



  <h4 style={{color:"gray", marginTop:10}}><strong>Contact</strong></h4>
  <p>
    <EnvironmentOutlined style={{marginRight:"5px"}}/>
    Baku,Azerbaijan
  </p>
  <p style={{margin:0}}>
    <MailOutlined style={{marginRight:"5px"}}/>
    <a href="nihadlkbrl03@gmail.com" style={{color:"#1890ff"}}>nihadlkbrl03@gmail.com</a>
  </p>
  <p style={{margin:0}}>
    <GithubOutlined style={{marginRight:"5px"}}/>
    <a href="https://github.com/" target="_blank" style={{color:"#1890ff"}}>https://github.com</a>
  </p>
  <p style={{margin:0}}>
    <LinkedinOutlined style={{marginRight:"5px"}}/>
    <a href="https://az.linkedin.com/" target="_blank" style={{color:"#1890ff"}}>https://az.linkedin.com</a>
  </p><br/>

          <h2><strong>Skills</strong></h2>
  
          <p style={{margin:0}}>HTML & CSS</p>
          <Progress percent={85} size="default" />


          <p style={{margin:0}}>JavaScript</p>
          <Progress percent={75} size="default" />

          <p style={{margin:0}}>React</p>
          <Progress percent={50} size="default" />
          
          <p style={{margin:0}}>SQL ORACLE</p>
          <Progress percent={95} size={'default'}/><br/><br/>

         <h4 style={{color:"gray", margin:0}}><strong>Languages</strong></h4>
         <p style={{color:"black",display:"flex"}}>Azebaijani
          <span style={{marginLeft:"65%"}}>Native</span></p>

           <p style={{color:"black",display:"flex"}}>English
          <span style={{marginLeft:"65%"}}>A2 Level</span></p>
           <p style={{color:"black",display:"flex"}}>Turkish
          <span style={{marginLeft:"65%"}}>Professional</span></p>

          <h4 style={{color:"gray", margin:0}}><strong>Education</strong></h4>
          <p style={{color:"gray"}}>Electrics And Electronics Engeener--Azerbaijan State University of Economics(2023-2027)</p>

         
        </Card>
        
        </Col>
       
         <Col xs={24} lg={14}>
        <Card>
         <h2 style={{color:'black'}}><strong>Profile</strong></h2>
         <p style={{color:"gray"}}>Frontend developer with advanced knowledge of
           SQL and Oracle,
           and intermediate experience in HTML, CSS, JavaScript, 
           and React.
            Focused on combining database expertise with modern web technologies
             to build functional and user-friendly solutions.
         </p>
         
          <h2 style={{color:"black" , display:"flex", gap:"12px", justifyContent:"space-between"}}><strong>Experience</strong>
          <span style={{ color:"gray", fontSize:"20px"}}>Most recent first</span></h2>
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

         </Card><br/>


         <h2 style={{color:"black" , display:"flex" ,justifyContent:"space-between"}}><strong>Selected Projects</strong>
         <span style={{color:"gray",fontSize:"20px"}}>Links & short descriptions</span>
         </h2>
         <div style={{display:"flex" , gap:"5px"}}>
         <Card style={{backgroundColor:"#f5f5f5", width:"50%"}} >
         <h4 style={{color:'black', margin:0}}><strong>Project A</strong></h4>
         <p style={{margin:0, color:"gray"}}>A short one-line description.
          <a href='https://glowing-disco-976pvg54vjp63p9v-5173.app.github.dev/' target='_blank' style={{color:"blue"}}>Live code</a>
         </p></Card>

         <Card style={{backgroundColor:"#f5f5f5", width:"50%"}} >
         <h4 style={{color:'black', margin:0}}><strong>Project B</strong></h4>
         <p style={{margin:0, color:"gray"}}>A short one-line description.
          <a href='https://bug-free-trout-g4xg9vrw9p6qfj56-3000.app.github.dev/' target='_blank' style={{color:"blue"}}>Live code</a>
         </p>
         </Card>
         </div><br/>

         
           
          <h2 style={{color:"black",margin:0}}><strong>Certificate & Courses</strong></h2><br/>
          <p style={{color:"gray",margin:0}}>DSA Academy-juny 2023 , Baku</p>
          <p style={{color:"gray",margin:0}}>Code Academy Course (SQL Oracle) Advanced - september 2025  </p><br/>

          <h2 style={{color:"black"}}><strong>References</strong></h2>
          <p style={{color:"gray"}}>Available on request</p>


        </Card>
        </Col>

        </Row>
      
        

         
        
      </div>
    </ConfigProvider>
  );
};


export default App;