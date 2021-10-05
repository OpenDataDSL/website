import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import styles from '/src/components/StartBuilding.module.css';

<Container className={styles.datablock}>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Getting Started</b></Card.Header>
            <Card.Body>
              <Card.Text>A technical and non-technical introduction to the features and ecosystem of OpenDataDSL.</Card.Text>
              <Button href="./getting-started">Get Started</Button>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Uploading Data</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview on how to update your data along with information on data environments.</Card.Text>
              <Button href="./uploading-data">Get Started</Button>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Subscribing to Data</b></Card.Header>
            <Card.Body>
              <Card.Text>Information on how to integrate OpenDataDSL data into other cloud systems or local databases.</Card.Text>
              <Button href="./subscribing-to-data">Get Started</Button>
            </Card.Body>
    </Card>    
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Personalisation</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview on how to personalize your users' experience with your company logo and colours.</Card.Text>
              <Button href="./personalisation">Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Automation</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview on how to build scripts, workflows and processes to automate tasks.</Card.Text>
              <Button href="./automation">Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Performance and Scaling</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview of the infrastructure that powers OpenDataDSL optimising performance.</Card.Text>
              <Button href="./performance-and-scaling">Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Security</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview of how security is handled, security basics and best practices.</Card.Text>
              <Button href="./security">Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Tools</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview of the end-user applications that are available in OpenDataDSL.</Card.Text>
              <Button href="./tools">Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"18rem"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> Machine Learning/Rules</b></Card.Header>
            <Card.Body>
              <Card.Text>An overview of the OpenDataDSL machine learning features and business rules.</Card.Text>
              <Button href="./machine-learning-and-rules">Get Started</Button>
            </Card.Body>
    </Card>
    <Card style={{width:"100%"}}>
        <Card.Header className="bg-success text-white"><FontAwesomeIcon icon={faChevronCircleRight} /><b> QuickStart Tracks</b></Card.Header>
            <Card.Body>
              <Card.Text>Choose a QuickStart Track to gain some practical, real-world experience of using OpenDataDSL.</Card.Text>
              <Button href="./quick-start">Get Started</Button>
            </Card.Body>
    </Card>
</Container>