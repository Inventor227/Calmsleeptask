import React from 'react'
import './App.css';
import Images from "./Images"
import Progressbar from './Progressbar';
import Barchart from "./Barchart"
import Barchart2 from "./Barchart2"
import { Card, Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

function dashboard() {
    const audios = [
        {
          title: "Song 1",
          image: "https://uploads-ssl.webflow.com/60d587746fd9b73fa84f0665/60d6da7b9b981f813d9b1dd4_Group%201505.svg",
          completionRate: 50,
          totalPlays:[1000,3000,5000],
          uniquePlays: [1300,3500,6000],
        },
        {
          title: "Song 2",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPz_O_cpRyA5u9SF5cWJoZRS9H38nQmzaUF3nq1pTFzOKIwuKja_SnxCS8B7qlRKZF8s&usqp=CAU",
          completionRate: 90,
          totalPlays: [1200,1500,1700],
          uniquePlays: [1300,1500,1700],
        },
      ];
    function audiodisplay(audio) {
        return (
          <Card style={{ width: '70%', margin: '50px 200px', borderRadius: '10px', backgroundColor: 'white' }} className="shadow-lm">
            <Row>
              <Col xs={6}>
                <h6>Thumbnail</h6>
                <Images img={audio.image} />
              </Col>
              <Col xs={6}>
                <h6 >Title</h6>
                <p >{audio.title}</p>
              </Col>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
              <Col xs={12}>
                <h6>Progress Bar</h6>
                <Progressbar completionRate={audio.completionRate} />
              </Col>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
              <Col xs={6}>
                <h6>Total Plays</h6>
                <Barchart width={400} height={400} audioData={audio.totalPlays} />
              </Col>
              <Col xs={6}>
                <h6>Unique Plays</h6>
                <Barchart2 width={300} height={200} audioData={audio.uniquePlays} />
              </Col>
            </Row>
          </Card>
        )
      }
      
  return (
    <div>
       <header className="App-header">
        <h1 className="text-center">
          TASK FOR CALMSLEEP WEBDEV INTERNSHIP
        </h1>
      <div>
      </div>
      </header>
      {audios.map(audiodisplay)}
    </div>
  )
}

export default dashboard

