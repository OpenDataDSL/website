import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Survey.module.css';


const controller = {
    sectionid: 0,
    sections: [],
    answers: {
        total_score: 0
    }
}

export function Survey(props) {
    controller.sections.push(...props.data.sections);
    if (props.data.prize) {
        controller.prize = props.data.prize;
    }
    controller.answers.id = props.data.id;
    let cd = new Date(props.data.closes + "T23:59:59");
    let dn = new Date();
    if (dn > cd) {
        return (
                <div className="container">
                    <div className="row">
                        <img className="mx-auto d-block" src="/img/logo_name.png" />
                        <h2 className="text-center">{props.data.title}</h2>
                        <p className="text-center">{props.data.subtitle}</p>
                        <p className="text-center"><b>This questionnaire is now closed</b></p>
                    </div>
                    <Prize />
                </div>
        );
    } else {
        return (
                <div className="container">
                    <div className="row">
                        <img className="mx-auto d-block" src="/img/logo_name.png" />
                        <h2 className="text-center">{props.data.title}</h2>
                        <p className="text-center">{props.data.subtitle}</p>
                        <p className="text-center"><b>Closes: {props.data.closes}</b></p>
                    </div>
                    <Prize />
                    <div id="section">
                        <Section />
                    </div>
                </div>
        );
    }
}

function nextSection() {
    let tmp = document.getElementById("section");

    // Validate and save the answers
    let section = controller.sections[controller.sectionid];
    let fields = tmp.getElementsByTagName('fieldset')
    let allvalid = true;
    let qcnt = 0;
    let section_score = 0;
    for (let q of fields) {
        console.log("Checking: " + q.id);
        let valid = false;
        let question = section.questions[qcnt++];
        if (question.type == 'text') {
            valid = true;
            let textarea = q.getElementsByTagName('textarea');
            if (textarea.length > 0)
                controller.answers[q.id] = textarea[0].value;
        } else {
            controller.answers[q.id] = [];
            let inputs = q.getElementsByTagName('input');
            let acnt = 0
            for (let i of inputs) {
                let answer = question.answers[acnt++];
                if (i.checked) {
                    console.log("Selected value=" + i.id);
                    valid = true;
                    controller.answers[q.id].push(answer);
                    section_score += answer.score;
                }
            }
        }
        if (!valid) {
            console.log("Not valid: " + q.id);
            q.classList = "border border-danger";
            allvalid = false;
        } else {
            console.log("Valid: " + q.id);
            q.classList = "";
        }
    }
    if (!allvalid) {
        console.log("Section not valid: " + tmp.id);
        tmp.scrollIntoView({behavior: 'smooth'})
        return;
    }

    // Add to the total score
    controller.answers.total_score += section_score;

    // Show the next section
    controller.sectionid = controller.sectionid + 1;
    console.log("Moving to section " + controller.sectionid);
    if (controller.sectionid < controller.sections.length) {
        ReactDOM.render(<Section />, tmp);
    } else {
        ReactDOM.render(<EndAndSave />, tmp);
    }
    tmp.scrollIntoView({behavior: 'smooth'})
}

function Save() {
    let tmp = document.getElementById("section");
    // Validate the name and email and save
    let name = document.getElementById("q_name");
    let email = document.getElementById("q_email");
    let valid = true;
    if (name.value == "") {
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
        valid = false;
    } else {
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
    }
    if (email.value == "" || !email.value.includes("@")) {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }
    if (valid) {
        controller.answers.name = name.value;
        controller.answers.email = email.value;
        controller.answers._id = controller.answers.id + ":" + email.value;
        console.log("Complete: ", controller.answers);

        // Save the answers
        saveData(controller.answers);

        ReactDOM.render(<Saved />, tmp);
    }
}

async function saveData(body) {
    let url = 'https://odsl-dev.azurewebsites.net/api/survey/v1';
    let json = JSON.stringify(body);
    let response = await fetch(url, {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let myJson = await response.json();
    console.log(myJson);
}

function PrizeName(props) {
    if (controller.prize) {
        return (
            <span>
                {props.preText}<br/><b>{controller.prize.title}</b>
            </span>
        );
    }
    return null;
}

function Prize(props) {
    if (controller.prize) {
        return (
            <div className="row mt-4 border">
                <div className="col-md-4 col-12 pt-1">
                    <h3 className="text-center">{controller.prize.title}</h3>
                    {controller.prize.subtitle}
                </div>
                <div className="col-md-8 col-12 pe-0">
                    <img className="float-end" src={controller.prize.image} />
                </div>
            </div>
        );
    }
    return null;
}

function Saved() {
    return (
        <div>
            <div className={styles.sectionskip} />
            <div className={styles.section}>
                <h4>Thank You!</h4>
                <PrizeName preText="You are in the prize draw" />
            </div>
        </div>
    );
}

function EndAndSave() {
    return (
        <div>
            <div className={styles.sectionskip} />
            <div className={styles.section}>
                <h4>Thank You for completing the questionnaire!</h4>
                <span className="text-center">Please fill out your name and business email address</span>
                <PrizeName preText=" to be entered into the prize draw." />
                <div className="col align-self-center">
                    <label className="form-label fw-b mt-4" htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="q_name" />
                </div>
                <div className="col align-self-center">
                    <label className="form-label fw-b mt-4" htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" id="q_email" />
                </div>
            </div>
            <button onClick={Save}>Save</button>
        </div>
    );
}

function Section() {
    let section = controller.sections[controller.sectionid];
    return (
        <div>
            <div className={styles.sectionskip} />
            <div className={styles.section}>
                <h3>{section.id} : {section.name}</h3>
                {section.questions.map((props,idx) => (<Question key={idx} {...props}/>))}
            </div>
            <button onClick={nextSection}>Next</button>
        </div>
    );
}

function Question(props) {
    if (props.type == 'single') {
        return (
            <div className={styles.question} id={"q-" + props.id}>
                <h4>{props.id} : {props.question}</h4>
                <fieldset id={props.id}>
                    {props.answers.map((aprops,idx) => (<div key={props.id + idx}><input type="radio" id={aprops.text} name={props.id}/><label className="m-1" htmlFor={aprops.text}>{aprops.text}</label></div>))}
                </fieldset>
            </div>
        );
    } else if (props.type == 'multi') {
        return (
            <div className={styles.question}>
                <h4>{props.id} : {props.question}</h4>
                <fieldset id={props.id}>
                    {props.answers.map((aprops,idx) => (<div key={props.id + idx}><input type="checkbox" id={aprops.text} name={props.id}/><label className="m-1" htmlFor={aprops.text}>{aprops.text}</label></div>))}
                </fieldset>
            </div>
        );
    } else if (props.type == 'text') {
        return (
            <div className={styles.question}>
                <h4>{props.id} : {props.question}</h4>
                <div>
                    <fieldset id={props.id}>
                        <textarea cols="40" rows="5" />
                    </fieldset>
                </div>
            </div>
        );
    } else {
        return (<div />);
    }
}