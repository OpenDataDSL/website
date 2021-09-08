import React from 'react';
import styles from './DataCatalog.module.css';
var Data = require('/data/catalog.json');
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCalendarDay, faGlobe, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

var filters = {tags: ["Financial"]};

function Logo(logo) {
  var src = "/img/data/" + logo.logo;
  return (
    <Card.Img variant="top" src={src} className={styles.logo} />
  )
}

function Block({type, tags, provider, providerType, logo, dataset, text, start, frequency, region, link}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Logo logo={logo} />
        <Card.Header>{provider}</Card.Header>
        <Card.Body>
          <Card.Title><a href={link}>{dataset}</a></Card.Title>          
          <Card.Text>{text}</Card.Text>
          <i>{providerType}</i><br />
          <FontAwesomeIcon icon={faPlay} />&nbsp;{start}&nbsp;
          <FontAwesomeIcon icon={faCalendarDay} />&nbsp;{frequency}&nbsp;
          <FontAwesomeIcon icon={faMoneyBill} />&nbsp;{type}
          <br />
          <FontAwesomeIcon icon={faGlobe} />&nbsp;{region}
          <hr />
          {tags.map((item) => (
            <Button key={item}>{item}</Button>
          ))}
        </Card.Body>
      </Card>
    );
  }

  function FilterItem(item) {
    console.log(item);
    return item;
  }

  function FilterFilter(item) {
    var list = filters[item.item];
    return (
      <div><h4>{item.item}</h4>
      {list.forEach((item) => <FilterItem key={item} item={item} />)}
      </div>
    )
  }

  function FilterList() {
    if (Object.keys(filters).length == 0) {
      return "none";
    } else {
      return (
        <div>
        {Object.keys(filters).map((item) => <FilterFilter key={item} item={item} />)}
        </div>
      )
    }
  }
  
  export default function DataCatalog() {
    return (
        <div>
          <h3>Filters</h3>
          <FilterList />
          <hr />
          <Container className={styles.datablock}>
            {Data.map((props, idx) => (            
              <Block key={idx} {...props} />
            ))}
          </Container>
        </div>
    );
  }