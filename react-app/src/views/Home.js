import { Row, Col, Button, Form, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";



const Home = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }
  return (
    <div>
      <Form>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <Button className="btn-1" color="primary" onClick={routeChange}>　作　成　</Button>
          <Button className="btn-1" color="secondary" onClick={() => {  }}>　コピー　</Button>
          <Button className="btn-1" color="danger" onClick={() => {  }}>　削　除　</Button>
        </CardTitle>
      </Form>
      {/***Table ***/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            案件一覧
          </CardTitle>
          <CardBody className="">
            <Table bordered striped className="tb-center">
              <thead>
                <tr>
                  <th></th>
                  <th>案件ID</th>
                  <th>案件名</th>
                  <th>開始日</th>
                  <th>完了日</th>
                  <th>シミュレーション入力</th>
                  <th>コンピテンシー選択</th>
                  <th>結果印刷</th>
                  <th>CSV出力</th>
                  <th>活性状態</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780001</td>
                  <td>案件A</td>
                  <td>2022/8/1</td>
                  <td>2022/12/31</td>
                  <td >✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780002</td>
                  <td>案件B</td>
                  <td>2022/8/1</td>
                  <td>2022/12/31</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td>無効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780003</td>
                  <td>案件C</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780004</td>
                  <td>案件D</td>
                  <td>2023/1/1</td>
                  <td>2021/4/1</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td>✔</td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780010</td>
                  <td>案件E</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780011</td>
                  <td>案件F</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780012</td>
                  <td>案件G</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780013</td>
                  <td>案件H</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>123456780020</td>
                  <td>案件I</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Home;
