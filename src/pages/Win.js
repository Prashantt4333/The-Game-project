import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

const Win = () => {
  return (
    <>
      <Row className="bg-light" style={{ height: "60px" }}>
        <Col className=" " style={{ background: "#ddd" }}>
          <h6 className="text-center mt-3">Bcon</h6>
        </Col>
      </Row>
      
      <Row className="bg-light">
        <Col className="text-center mt-2">
          <FontAwesomeIcon
            className="text-secondary fs-5 "
            icon={faTrophy}
          />
          <span className="ms-2">Period</span>
          <h3 className="mt-2">20200709304</h3>
        </Col>
        <Col className=" text-center mt-2">
          <div className="">
            <span className="fs-6">Count Down</span>
            <br />
            <span className="span">0</span>
            <span className="span">1</span>
            <span>:</span>

            <span className="span">1</span>
            <span className="span">9</span>
          </div>
          <div className="" style={{ display: "none" }}>
            <button className="grayback">Continue</button>
          </div>
        </Col>
      </Row>
      <Row className="text-center bg-light" >
        <Col className="">
          <button
            className="btn text-white btnsize "
            style={{ background: "rgb(76, 175, 80)" }}
          >
            Join Green
          </button>
        </Col>
        <Col className="">
          <button
            className="btn text-white btnsize"
            style={{ background: "rgb(156, 39, 176)" }}
          >
            Join Violet
          </button>
        </Col>
        <Col className="">
          <button
            className="btn text-white btnsize"
            style={{ background: "rgb(244, 67, 54)" }}
          >
            Join Red
          </button>
        </Col>
      </Row>
      <Row className="text-center bg-light pt-5 pb-5">
        <Col>
          <Row className=" mb-3">
            <Col>
              <Button
                className="w-100 border-0 "
                style={{
                  background:
                    "linear-gradient(to right bottom, rgb(156, 39, 176) 50%, rgb(244, 67, 54) 50%)",
                }}
              >
                0
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(76, 175, 80)" }}
              >
                1
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(244, 67, 54)" }}
              >
                2
              </Button>
            </Col>

            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(76, 175, 80)" }}
              >
                3
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(244, 67, 54)" }}
              >
                4
              </Button>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <Button
                className="w-100 border-0"
                style={{
                  background:
                    "linear-gradient(to right bottom, rgb(156, 39, 176) 50%, rgb(244, 67, 54) 50%)",
                }}
              >
                5
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(76, 175, 80)" }}
              >
                6
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(244, 67, 54)" }}
              >
                7
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(76, 175, 80)" }}
              >
                8
              </Button>
            </Col>
            <Col>
              <Button
                className="w-100 border-0"
                style={{ background: "rgb(244, 67, 54)" }}
              >
                9
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="" style={{ height: "60px" }}>
        <Col className="text-center" style={{ background:""}}>
          <FontAwesomeIcon
            className="text-secondary fs-5 mt-2"
            icon={faTrophy}
          />
          <h6 className="">Bcon</h6>
        </Col>
      </Row>
      <Row className="">
        <Col className="p-0" style={{borderTop:"2px solid rgb(76, 175, 80)",borderBottom:"2px solid rgb(76, 175, 80)"}}>
          <Table className="text-center fs-6 text-secondary p-0" style={{}}>
            <thead>
              <tr>
                <th>Period</th>
                <th>Price</th>
                <th>Number</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20230523322</td>
                <td>44539</td>
                <td>9</td>
                <td>
                  <span style={{width: "15px",height: "15px", display: "inline-block",borderRadius: "50%", margin: "0 2px",background:"rgb(76, 175, 80)"}}></span>
                </td>
              </tr>
              <tr>
                <td>20230523322</td>
                <td>44539</td>
                <td>9</td>
                <td>
                  <span style={{width: "15px",height: "15px", display: "inline-block",borderRadius: "50%", margin: "0 2px",background:"rgb(244, 67, 54)"}}></span>
                </td>
              </tr>
              <tr>
                <td>20230523322</td>
                <td>44539</td>
                <td>9</td>
                <td>
                  <span style={{width: "15px",height: "15px", display: "inline-block",borderRadius: "50%", margin: "0 2px",background:"rgb(244, 67, 54)"}}></span>
                  <span style={{width: "15px",height: "15px", display: "inline-block",borderRadius: "50%", margin: "0 2px",background:"rgb(76, 175, 80)"}}></span>
                </td>
              </tr>
              
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Win;
