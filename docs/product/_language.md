import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUser, faCubes, faCertificate } from '@fortawesome/free-solid-svg-icons'
import styles from '/src/components/StartBuilding.module.css';

<Container className={styles.datablock}>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-primary text-white"><FontAwesomeIcon icon={faUser} /><b> GUI</b></Card.Header>
            <Card.Body>
              <Card.Text>
              <table>
                <tr>
                    <th>Feature</th>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>Ease of use</td>
                    <td><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /></td>
                </tr>
                <tr>
                    <td>Flexibility</td>
                    <td><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /></td>
                </tr>
              </table>
              </Card.Text>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faCubes} /><b> OpenDataDSL Language</b></Card.Header>
            <Card.Body>
              <Card.Text>
              <table>
                <tr>
                    <th>Feature</th>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>Ease of use</td>
                    <td><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /></td>
                </tr>
                <tr>
                    <td>Flexibility</td>
                    <td><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /></td>
                </tr>
              </table>
              </Card.Text>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-info text-white"><FontAwesomeIcon icon={faCode} /><b> API</b></Card.Header>
            <Card.Body>
              <Card.Text>
              <table>
                <tr>
                    <th>Feature</th>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>Ease of use</td>
                    <td><FontAwesomeIcon icon={faCertificate} /></td>
                </tr>
                <tr>
                    <td>Flexibility</td>
                    <td><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /><FontAwesomeIcon icon={faCertificate} /></td>
                </tr>
              </table>
              </Card.Text>
            </Card.Body>
    </Card>
</Container>