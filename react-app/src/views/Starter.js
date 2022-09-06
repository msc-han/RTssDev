import { Row, Col, Button, Form, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";



const Starter = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }
  return (
    <div>
      <Form>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Form Example
          <Button className="btn-1" color="primary" onClick={routeChange}>Registration</Button>
          <Button className="btn-1" color="success" onClick={() => {  }}>Copy</Button>
          <Button className="btn-1" color="danger" onClick={() => {  }}>Delete</Button>
        </CardTitle>
      </Form>
      {/***Table ***/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Striped
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="" name="" value="" /></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Starter;
