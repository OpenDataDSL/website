import { useEffect } from 'react'
import {configureAnimations} from '/js/odsl.js';


export function Feature(props) {
	useEffect(() => {
		configureAnimations();
	}, [])

	return (
		<div className="container">
			<div className="feature-item row mb-5">
				<div className="col-4">
					<img src={props.jpg} className="featureSvg scroll-to-display" alt={props.title} />
				</div>
				<div className="col-8">
					<h1 className="scroll-to-display">{props.title}</h1>
					<h5 className="scroll-to-display">{props.slogan}</h5>
				</div>
			</div>
		</div>
	);
}

export function Integration(props) {
	return (
		<div className="col-md-6 col-lg-4 p-4 col-xs-12 border border-radius">
			<a href={props.link}>
				<div className='row'>
					<div className="col-4">
						<img src={props.jpg} className="integrationSvg" alt={props.title} />
					</div>
					<div className="col-8">
						<h4>{props.title}</h4>
						<p>{props.text}</p>
					</div>
				</div>
    		</a>
		</div>
	);
}

export function Card(props) {
	return (
		<div className="col-md-6 col-lg-4 p-md-1 p-lg-4 col-xs-12 border border-radius">
			<div className='row'>
				<div className="col-4">
					<img src={props.jpg} className="integrationSvg" alt={props.title} />
				</div>
				<div className="col-8">
					<h4>{props.title}</h4>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}

export function ListCard(props) {
	let list = JSON.parse(props.list);
	return (
		<div className="col-3 p-4 m-1 border border-radius">
			<div className='row'>
				<div className="col-4">
					<img src={props.jpg} className="integrationSvg" alt={props.title} />
				</div>
				<div className="col-8">
					<h3>{props.title}</h3>
					<ul>
						{list.map((p, idx) => (
							<li key={idx}>{p}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}