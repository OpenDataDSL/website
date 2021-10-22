import React from 'react';
import styles from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

var services = [
    {
        name: "Action",
        link: "/docs/api/rest/service/action",
        text: "The action resource contains all the standard public and your own proprietary workflow actions",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "Audit",
        link: "/docs/api/rest/service/audit",
        text: "The audit resource allows you to keep track of changes that have been made to other resources",
        rw: false,
        pub: true,
        pri: true,
        ver: false
    },
    {
        name: "Calendar",
        link: "/docs/api/rest/service/calendar",
        text: "The calendar resource contains all the public and private calendars",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "Currency",
        link: "/docs/api/rest/service/currency",
        text: "A read-only service to find and retrieve public and private currencies",
        rw: false,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "Curve",
        link: "/docs/api/rest/service/curve",
        text: "The curve resource contains all your proprietary forward curve configurations",
        rw: true,
        pub: false,
        pri: true,
        ver: true
    },
    {
        name: "Data",
        link: "/docs/api/rest/service/data",
        text: "The data resource contains all the complex data types like TimeSeries and Curve",
        rw: "Read-only, use the Object service to write Data",
        pub: true,
        pri: true,
        ver: "If Object type is versioned"
    },
    {
        name: "Environment",
        link: "/docs/api/rest/service/environment",
        text: "Contains information about your data environments",
        rw: true,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Expiry Calendars",
        link: "/docs/api/rest/service/expiry",
        text: "Contains all the public and private expiry calendars",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "Extractor",
        link: "/docs/api/rest/service/extractor",
        text: "The resource for using extractors to extract content from HTML pages",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "Index",
        link: "/docs/api/rest/service/index",
        text: "Indexes improve performance of object queries",
        rw: true,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Object",
        link: "/docs/api/rest/service/object",
        text: "The object resource contains all the reference and meta-data for all data in OpenDataDSL",
        rw: true,
        pub: true,
        pri: true,
        ver: "If the Object type is versioned"
    },
    {
        name: "Process",
        link: "/docs/api/rest/service/process",
        text: "The resource creating processes",
        rw: true,
        pub: false,
        pri: true,
        ver: true
    },
    {
        name: "Process Execution",
        link: "/docs/api/rest/service/process-execution",
        text: "The resource for monitoring all your processes",
        rw: false,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Queue",
        link: "/docs/api/rest/service/queue",
        text: "Manage your message queues",
        rw: true,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Script",
        link: "/docs/api/rest/service/script",
        text: "The resource for storing your ODSL scripts in the cloud",
        rw: true,
        pub: false,
        pri: true,
        ver: true
    },
    {
        name: "Subscription",
        link: "/docs/api/rest/service/subscription",
        text: "The reosurce for managing your data subscriptions",
        rw: true,
        pub: false,
        pri: true,
        ver: true
    },
    {
        name: "Subscription Record",
        link: "/docs/api/rest/service/subscription-record",
        text: "Used for getting information about fulfilled subscriptions",
        rw: false,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Tenant",
        link: "/docs/api/rest/service/tenant",
        text: "The tenant resource is a service to view and record your company information and tenancy configuration",
        rw: true,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Transformer",
        link: "/docs/api/rest/service/transformer",
        text: "The resource for storing transformers used to transform unstructured data",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "Type",
        link: "/docs/api/rest/service/type",
        text: "The resource for creating object types to model your data",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    },
    {
        name: "User",
        link: "/docs/api/rest/service/user",
        text: "The user resource is a service to view and record your user information",
        rw: true,
        pub: false,
        pri: true,
        ver: false
    },
    {
        name: "Workflow",
        link: "/docs/api/rest/service/workflow",
        text: "The resource for creating workflows to use in processes",
        rw: true,
        pub: true,
        pri: true,
        ver: true
    }

];

export function Services() {
    return (
    <table>
        <thead>
            <tr>
                <th>Service</th>
                <th>Read Write</th>
                <th>Public</th>
                <th>Private</th>
                <th>Versioned</th>
            </tr>
        </thead>
    <tbody>
        {services.map((props, idx) => (<TableRow key={idx} {...props} />))}
    </tbody>
    </table>
    );
}

function TableRow({name, link, text, rw, pub, pri, ver}) {
  return (
    <tr>
        <td>
            <a href={link}><b>{name}</b></a><br />
            <sub>{text}</sub><br />
        </td>
        <td>{rw==true?<FontAwesomeIcon icon={faCheck} />:<sub>{rw}</sub>}</td>
        <td>{pub==true?<FontAwesomeIcon icon={faCheck} />:<sub>{pub}</sub>}</td>
        <td>{pri==true?<FontAwesomeIcon icon={faCheck} />:<sub>{pri}</sub>}</td>
        <td>{ver==true?<FontAwesomeIcon icon={faCheck} />:<sub>{ver}</sub>}</td>
    </tr>
  )
}
