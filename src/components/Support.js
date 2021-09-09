import React from 'react';
import styles from './Support.module.css';
import { Badge, Card, Container, Button, Col } from 'react-bootstrap';

export default function SupportBlock(props) {
    return (
        <Card style={{ width: '16.5rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Header>{props.header}</Card.Header>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>          
            <Card.Text>{props.text}</Card.Text>
            {props.children}
          </Card.Body>
        </Card>
    );  
}