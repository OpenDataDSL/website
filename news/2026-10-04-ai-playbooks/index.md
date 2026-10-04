---
slug: ai-playbooks
title: Fusion AI Playbooks
authors: [chartley]
tags: [product, extension]
image: /img/blog/ai-playbooks.png
hide_table_of_contents: true
---
import styles from './index.module.css';
import {Demo} from '/src/components/Forms.js';

<div className="row">
  <div className="column">
      <img className={styles.product_screenshot} src="/img/blog/ai-playbooks.png" />
  </div>
  <div className="column">
  <h4>Fusion AI Playbooks</h4>
  <em>OpenDataDSL launches Fusion AI Playbooks: repeatable, governed AI workflows for energy and commodity data teams</em>
  <br/><br/>
  <p>Write a job down once in plain language. Fusion runs it step by step, checks its own work, and asks before anything changes.</p>
  </div>
</div>

<!-- truncate -->
<hr/>

OpenDataDSL today announces **Fusion AI Playbooks**, a new capability in Fusion AI that turns a team's repeatable processes into AI workflows that run the same way every time, with checks, approvals and a full audit trail.

## The problem Playbooks solve

Every energy and commodity data team has jobs it does over and over: onboarding a new dataset, checking the morning's forward curves, investigating a late delivery, triaging failed processes, writing the month-end market summary. Each job has a right way to do it, but that way usually lives in one person's head. When that person is busy or away, the job is done differently, done late, or not done at all.

General purpose AI does not fix this on its own. It takes a different approach each time it is asked, keeps no record of what it did, and has no point where a person signs off before it changes something.

## How it works

A playbook is a markdown document that describes one job. Alongside the guidance written for Fusion, a few marked blocks define:

- **Inputs:** the fields the person running it fills in, with validation.
- **Steps:** the work in order, each with plain language instructions, the assistant best suited to it, and the tools it may use.
- **Checks:** what each step's result must satisfy. A failed check retries the step with the reason, jumps to another step, or stops the run.
- **Transitions:** rules that choose the next step from the results so far, such as ending quietly when nothing is wrong.
- **Approvals:** points where a named person or user group must approve before the run continues. Approvers are emailed when they are needed.
- **Outputs:** what the run hands back, such as a report, a script or a summary.

Fusion turns the playbook into a form. Someone fills it in and runs it, and Fusion works through the steps on their OpenDataDSL data. Each step can only use its own tools, records its result in a structured way, and is checked before the run moves on.

## Built for real operations

- **Background runs and schedules:** run a playbook with the page closed, or give a task a schedule so a copy runs every weekday morning.
- **Resume:** a run that fails or stops can be resumed from the step that stopped it.
- **Versioned playbooks:** every save is kept, and each task records the version it ran.
- **Flow diagrams:** every playbook can be drawn as a flow chart, coloured as a run progresses.
- **Playbook Runs report:** success rates, failures with their reasons, and tokens per run, by playbook and by user.
- **Budget aware:** each run has a token cap, and runs respect the tenant's Fusion AI budget and limit.

## Help writing and running playbooks

- **Draft with Fusion:** describe a job in a sentence and Fusion writes the playbook, fixing any problems before it hands it over.
- **Suggest values:** Fusion fills in a task's form, looking up real curve and dataset names on the platform.
- **Run from the chat:** ask Fusion to run a playbook and it prepares the task from the conversation, ready to run with one click.

## The OpenDataDSL playbook library

Playbooks ship with a library that customers can run as they are or copy and adapt. A copy remembers the version it came from and shows what changed when the library playbook improves. The first playbooks in the library are:

- **Curve quality check:** big moves, missing tenors, stale curves and bad prices, with alerts.
- **Dataset onboarding:** completeness and quality checks from rules written in plain words.
- **Late dataset investigation:** the root cause of a late delivery, with evidence.
- **Process failure triage:** failures grouped by cause, with fixes and approved reruns.
- **Scheduled curve report:** an ODSL script, report template and schedule for a daily curve report.
- **Month-end market summary:** figures and commentary for your markets, emailed after approval.

## Availability

Fusion AI Playbooks are available now in the Fusion AI extension for OpenDataDSL customers, on the new Playbooks and Tasks tabs. Find out more on the [AI Playbooks](/features/ai-playbooks) page.

<Demo />
