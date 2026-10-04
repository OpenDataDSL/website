---
title: AI Playbooks
hide_table_of_contents: true
---

import { Feature, NextButton } from '/src/components/Features.js'
import {Demo} from '/src/components/Forms.js';

<Feature title="AI Playbooks" slogan="Your best process, run the same way every time" jpg="/img/icons/playbook.png" />

<section className="section">
	<h1>Write a job down once in plain language. Fusion runs it step by step, checks its own work, and asks before anything changes.</h1>
</section>

<section className="section">
	<div className="container">
		<h2>The Process Challenge</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>The Challenge</h3>
				<p>Every energy and commodity data team has jobs it repeats again and again:</p>
				<ul>
					<li>Setting up monitoring and quality checks for a new dataset</li>
					<li>Checking this morning's forward curves before traders rely on them</li>
					<li>Working out why a delivery was late, and telling the right people</li>
					<li>Triaging failed processes and deciding what to rerun</li>
					<li>Building the month-end summary of the markets you follow</li>
				</ul>
				<p>Each job has a right way to do it, but that way usually lives in one person's head or in a wiki page nobody opens. When that person is busy or away, the job is done differently, done late, or not done at all.</p>
				<p>General purpose AI does not solve this on its own. Ask it twice and you get two different approaches, with no record of what it did and no point where a person signs off.</p>
			</div>
			<div className="story_text">
				<h3>Our Solution</h3>
				<p>Fusion AI Playbooks turn your team's processes into repeatable, governed AI workflows on the OpenDataDSL platform.</p>
				<p>A playbook is a markdown document that describes one job: what the person running it fills in, the steps in order, the checks each step must pass, where someone approves, and what the run hands back.</p>
				<p>Fusion turns the playbook into a simple form. Someone fills it in and presses Run, and Fusion works through the steps on your platform data, exactly as written, with a full record of every step.</p>
				<h4>AI Playbooks: Your Process, Run by AI, Governed by You</h4>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Key Benefits</h2>
		<p>Capture how your best people work, and let the whole team run it with the same quality every time.</p>
		<div className="orange_grid">
			<div className="orange_item">
				<h4>The Same Quality, Whoever Runs It</h4>
				<h5>Your process, not the AI's guess.</h5>
				<p>The playbook sets the order of the steps and the tools each step may use. Fusion does the work inside each step, so a new analyst gets the same result as your most experienced one, and the process survives holidays and staff changes.</p>
			</div>
			<div className="orange_item">
				<h4>AI That Checks Its Own Work</h4>
				<h5>Every step is verified before the run moves on.</h5>
				<p>Checks such as "every curve was found", "the script validates" or "every number in the commentary matches the figures" run after each step. If a check fails, Fusion tries again and is told why, or the run stops so a person can look.</p>
			</div>
			<div className="orange_item">
				<h4>People Stay in Control</h4>
				<h5>Approvals before anything changes.</h5>
				<p>A run waits for approval before it saves, creates or sends anything. Approvers can be named people or user groups, they are emailed when a run needs them, and your tenant decides whether people may approve their own runs.</p>
			</div>
			<div className="orange_item">
				<h4>Runs While You Are Away</h4>
				<h5>Background runs and schedules.</h5>
				<p>Run a playbook in the background and close the page, or give it a schedule so it runs every weekday morning. Long runs are carried out one step at a time, and a run that stops can be resumed from the step where it stopped.</p>
			</div>
			<div className="orange_item">
				<h4>A Complete Audit Trail</h4>
				<h5>See exactly what happened, and what it cost.</h5>
				<p>Every run records each step's result, every check, every approval and the tokens used. Each playbook can be shown as a flow diagram coloured as the run progresses, and the Playbook Runs report shows success rates and costs across all your playbooks.</p>
			</div>
			<div className="orange_item">
				<h4>Built in Minutes, Not Weeks</h4>
				<h5>Describe the job and Fusion drafts it.</h5>
				<p>Describe a job in a sentence and Fusion writes the playbook, checking it as it goes, or start from the OpenDataDSL library. Fusion can also suggest the values for a task, and you can start a playbook straight from a Fusion chat.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>How AI Playbooks Work</h2>
		<div className="story_content">
			<div className="story_text">
				<h3>Write It Once</h3>
				<p>A playbook is plain markdown with a few marked blocks that Fusion understands:</p>
				<p><b>Inputs:</b> the fields on the form, such as the curves, the dataset, the month or a schedule, with validation so a run starts with good values.</p>
				<p><b>Steps:</b> the work, in order. Each step has instructions in plain language, the assistant best suited to it, and the tools it may use.</p>
				<p><b>Checks and transitions:</b> what each step's result must satisfy, and rules that choose the next step, such as "if nothing is wrong, end here".</p>
				<p><b>Approvals and outputs:</b> where a person signs off, and what the run hands back, such as a report, a script or a summary.</p>
				<p>Every save is versioned, so you can see what changed and every task records the version it ran.</p>
			</div>
			<div className="story_text">
				<h3>Run It Safely</h3>
				<p>When a playbook runs, Fusion follows it one step at a time:</p>
				<p><b>Focused Steps:</b> Fusion works only on the current step, with only that step's tools plus a few read-only ones. A step that reads curves cannot save a script.</p>
				<p><b>Verified Results:</b> each step records its result in a structured way, and its checks decide whether the run carries on, tries again or stops.</p>
				<p><b>Human Sign-off:</b> the run pauses at each approval, emails the approvers, and continues only when one of them approves.</p>
				<p><b>Within Budget:</b> each run has a token cap, and runs respect your tenant's Fusion AI budget and limit.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt section_lfo">
	<div className="container">
		<h2>Ready-Made Playbooks</h2>
		<p>Start from the OpenDataDSL library. Run any playbook as it is, or copy it to make it your own; your copy tells you when the library version improves.</p>
		<div className="blue_grid">
			<div className="blue_item">
				<h4>Curve Quality Check</h4>
				<p><b>The Challenge:</b> A bad price or a stale curve reaches traders and risk before anyone notices.</p>
				<h5>The Playbook</h5>
				<pre>
				- Reads each of your curves after it builds
				- Flags big day-on-day moves, missing tenors,
				  stale curves, bad prices and shape breaks
				- Uses each curve's own calendar and holidays
				- Ends quietly when everything is fine
				- Raises one alert per curve with problems
				</pre>
				<p><b>Result:</b> Curve problems found minutes after the build, on a schedule, with no one watching.</p>
			</div>
			<div className="blue_item">
				<h4>Dataset Onboarding</h4>
				<p><b>The Challenge:</b> Setting up completeness and quality checks for a new dataset takes specialist knowledge and is easy to get wrong.</p>
				<h5>The Playbook</h5>
				<pre>
				- Reads the dataset, its fields and tenors
				- Turns quality rules written in plain words
				  into dataset checks
				- Writes one setup script you can rerun
				- Waits for approval, then runs the setup
				- Verifies that the monitoring is in place
				</pre>
				<p><b>Result:</b> A dataset monitored properly from day one, set up the same way every time.</p>
			</div>
			<div className="blue_item">
				<h4>Late Dataset Investigation</h4>
				<p><b>The Challenge:</b> When a delivery is late, someone has to dig through processes, logs and history to find out why.</p>
				<h5>The Playbook</h5>
				<pre>
				- Checks the delivery and its last 30 days
				- Tells a one-off apart from a habit
				- Reads the loading processes and their logs
				- Checks whether the provider itself is late
				- Writes a short root-cause summary with
				  evidence, and emails it after approval
				</pre>
				<p><b>Result:</b> A clear answer in minutes, with the evidence to back it up.</p>
			</div>
			<div className="blue_item">
				<h4>Process Failure Triage</h4>
				<p><b>The Challenge:</b> One broken script or late source can fail many processes, and working out which to rerun takes time.</p>
				<h5>The Playbook</h5>
				<pre>
				- Finds failures not already fixed by a rerun
				- Groups them by root cause, with log evidence
				- Proposes a fix for each cause
				- Lists the processes a rerun can fix
				- Reruns them once someone approves
				</pre>
				<p><b>Result:</b> Fewer failures chased one by one, and no reruns that were bound to fail again.</p>
			</div>
			<div className="blue_item">
				<h4>Scheduled Curve Report</h4>
				<p><b>The Challenge:</b> A daily report on a set of curves needs a script, a template and a schedule, and usually a developer.</p>
				<h5>The Playbook</h5>
				<pre>
				- Checks the curves you choose
				- Designs the report data
				- Writes and validates the ODSL script
				- Writes and validates the report template
				- Waits for approval, then saves both and
				  creates the scheduled report
				</pre>
				<p><b>Result:</b> A daily curve report with day-on-day changes, spreads and calendar spreads, without writing code.</p>
			</div>
			<div className="blue_item">
				<h4>Month-End Market Summary</h4>
				<p><b>The Challenge:</b> The month-end summary means gathering figures from many markets and writing commentary by hand.</p>
				<h5>The Playbook</h5>
				<pre>
				- Works out averages, ranges and moves
				  for each market over the month
				- Writes commentary for your audience
				- Checks every number against the figures
				- Emails the summary after approval
				</pre>
				<p><b>Result:</b> A consistent, accurate month-end summary on the first business day of every month.</p>
			</div>
		</div>
	</div>
</section>

<section className="section section_alt">
	<div className="container">
		<h2>Integration with Platform Capabilities</h2>
		<h3>AI Playbooks bring the whole platform together</h3>
		<div className="orange_grid">
			<div className="orange_item">
				<a href="/features/ai-assistants">
					<img src="/img/icons/assistant.png" className="integrationSvg" />
				</a>
				<h4>AI Assistants</h4>
				<p>Each step runs with the assistant best suited to it, from Curve to Code.</p>
			</div>
			<div className="orange_item">
				<a href="/features/smart-curves">
					<img src="/img/icons/curve.png" className="integrationSvg" />
				</a>
				<h4>Smart Curves</h4>
				<p>Playbooks check, report on and build forward curves.</p>
			</div>
			<div className="orange_item">
				<a href="/features/data-management">
					<img src="/img/icons/mdm.png" className="integrationSvg" />
				</a>
				<h4>Data Management</h4>
				<p>Playbooks set up dataset monitoring and investigate deliveries.</p>
			</div>
			<div className="orange_item">
				<a href="/features/odsl-code">
					<img src="/img/icons/odsl.png" className="integrationSvg" />
				</a>
				<h4>ODSL Language</h4>
				<p>Playbooks write, validate and save ODSL scripts and report templates.</p>
			</div>
			<div className="orange_item">
				<a href="/features/ai-agents">
					<img src="/img/icons/agent.png" className="integrationSvg" />
				</a>
				<h4>AI Agents</h4>
				<p>Agents handle open-ended monitoring; playbooks handle jobs with a defined process.</p>
			</div>
			<div className="orange_item">
				<a href="/features/custom-tools">
					<img src="/img/icons/tools.png" className="integrationSvg" />
				</a>
				<h4>Custom Tools</h4>
				<p>Steps can use your own tools to reach your internal systems.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<h2>From Tribal Knowledge to Team Capability</h2>
		<div className="story_content">
			<div className="story_text">
				<p>AI Playbooks turn the way your best people work into something the whole team can run. The process is written down once, improved over time, and followed every time, by Fusion or by a person.</p>
			</div>
			<div className="story_text">
				<p>Your team spends less time repeating routine jobs and more time on the decisions that need them, with every run checked, approved where it matters, and recorded.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container" style={{textAlign: "center"}}>
		<h2>See a Playbook Run on Your Data</h2>
		<p style={{fontSize: "1.2rem", marginBottom: "40px"}}>Book a demo and we will run a playbook against your own curves or datasets, and help you sketch one for a job your team does every week.</p>
		<a href="/SignUp" className="cta_button" style={{background: "#3b82f6", color: "white"}}>Get Started Today</a>
		<NextButton link="/features/custom-tools" text="Custom Tools" />
	</div>
</section>

<Demo />
