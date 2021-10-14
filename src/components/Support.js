import React from 'react';
import styles from './Support.module.css';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';

export default function SupportBlock(props) {
    return (
        <Card className={styles.s_block}>
          <Card.Img variant="top" src={props.img} />
          <Card.Header className={styles.s_header}>{props.header}</Card.Header>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>          
            <Card.Text>{props.text}</Card.Text>
            {props.children}
          </Card.Body>
        </Card>
    );  
}