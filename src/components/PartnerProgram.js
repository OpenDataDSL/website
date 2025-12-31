import React, { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';
import styles from './PartnerProgram.module.css';
import './TabHandling.css';

export function PartnerProgram(props) {
  useEffect(() => {
	configureAnimations();
  }, [])

  return (
	<>
		<div className={styles.hero}>
			<h1 className="scroll-to-display">{props.title}</h1>
			<p className="scroll-to-display">{props.subtitle}</p>
		</div>

		<div className={styles.container}>
		</div>	
	</>
  );
}

export function ExpertiseItem(props) {
	return (
		<div className={styles.expertise_item}>
			<h4>{props.title}</h4>
			<p>{props.text}</p>
		</div>
	);
}

export function Partner(props) {
	return (
		<div className={styles.expertise_item}>
			<h4>{props.name}</h4>
			<a href={props.website}><img src={props.logo} width="150px" style={{marginBottom: "30px"}} /></a>
			<p>{props.text}</p>
			<a href={props.link}>More about {props.name}</a>
		</div>
	);
}
