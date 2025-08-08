---
slug: /integration
title: Integration
sidebar_position: 4
---
import { Feature } from '/src/components/Features';
import styles from '/css/docs.module.css';

## Automations

<h3>Reduce manual tasks, free up your time</h3>

<div className={styles.heroBanner}>
    <img src="/img/features/automations.png" width="800px" />
</div>

<div className={styles.sectionskip} />


<div className={styles.features}>

### Automate Anything

<Feature
    subtitle="Event driven integrations"
    video="/img/features/Automations.mp4"
    text1="Whenever information is updated or alerts are raised, you can trigger an automation to send data to an automation target such as send an email or send the data to a message queue."
    text2="Choose from one of our built in automations, customise them to match your system or create your own custom automation targets."
    section3="Triggering"
    text3="Automations can be triggered based on an entire entity being updated or it can test for a specific named property."
    section4="Custom targets"
    text4="You can add custom targets for you own systems which will allow end users to create automations to send data to your target."
/>

### Automation Monitoring

<Feature
    subtitle="Track your automations"
    image="/img/features/automation_log.png"
    text1="For added peace of mind, check the automations insight log to audit and monitor every automation trigger."
    text2="Track and trace ensures you have full management control."
/>
</div>

## Workflows

<h3>Schedule all your manual actions</h3>

<div className={styles.features}>

### Robust Process Architecture

<Feature
    subtitle="Scheduled processes"
    image="/img/features/process.png"
    zoomimage="false"
    text1="Configure a CRON-like process configuration to run any workflow."
    section2="Scalable"
    text2="Utilising the scale of the cloud, processes run on compute pools which grow and shrink based on the number of outstanding tasks."
    section3="Secure"
    text3="Processes run with the same access rights as the user that creates them."
    section4="Audited"
    text4="Track any changes to the process using audit logs."
/>

### Realtime Monitoring

<Feature
    subtitle="Execution dashboard"
    video="/img/features/workflow-execution.mp4"
    text1="Follow the progress of each executed process in real-time, drill-down and investigate issues with ease."
    section3="Alerts"
    text3="Get notified of issues immediately by adding <a href='#automations'>automations</a> on failed process executions to send support staff an email."
    section4="Insights"
    text4="Monitor your KPIs using predefined insights or create your own to unlock valuation information."
/>
</div>