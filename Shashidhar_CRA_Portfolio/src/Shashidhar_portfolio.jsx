import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import  Button  from "./components/ui/Button";

const skills = [
  "AWS",
  "Azure",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Jenkins",
  "GitHub Actions",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Python",
  "Bash",
  "Linux",
  "CloudFormation",
  "ARM Templates",
  "Git",
];

const experiences = [
  {
    title: "AWS Cloud Engineer/SRE",
    period: "Nov 2023 - Present",
    responsibilities: [
      "Designed and deployed AWS stacks (EC2, S3, RDS, DynamoDB, Lambda, etc.) using CloudFormation templates.",
      "Built CI/CD pipelines with Harness and Terraform for automated testing and deployment.",
      "Managed EKS clusters and Helm deployments with zero-downtime using Blue-Green and Canary strategies.",
      "Integrated monitoring using Elasticsearch, Kibana, and custom metrics via Prometheus.",
      "Provisioned custom-sized VPCs and NAT gateways with Terraform modules.",
      "Used Jenkins and Git integration to automate full build-test-deploy workflows.",
      "Developed API Gateway + Lambda RESTful APIs with CloudFormation and SAM templates.",
      "Created scalable Docker delivery pipeline using Kubernetes deployments from private registry.",
    ],
  },
  {
    title: "Azure Cloud Engineer",
    period: "Oct 2022 – Oct 2023",
    responsibilities: [
      "Provisioned Azure services (AKS, ACR, VMs, SQL, CosmosDB) using Terraform and ARM templates.",
      "Developed and optimized CI/CD workflows via Azure DevOps, Jenkins, and GitHub Actions.",
      "Containerized apps with Docker and deployed on AKS using secure pipelines.",
      "Implemented observability stacks (ELK, Prometheus, Grafana) and configured RBAC and NSGs.",
      "Automated builds and deployments of microservices into AKS using pipelines.",
      "Used Azure Data Factory for database migration from on-prem to Azure SQL and CosmosDB.",
      "Secured Azure environments with RBAC, NSG rules, VNET peering and lifecycle policies.",
    ],
  },
  {
    title: "Site Reliability Engineer - Visa",
    period: "Apr 2020 – Sep 2022",
    responsibilities: [
      "Automated provisioning and configuration with Ansible, Python, and Shell scripting.",
      "Implemented Docker pipelines, deployed apps to Kubernetes, and maintained high-availability clusters.",
      "Monitored services with Splunk, Dynatrace, and ELK stack with real-time alerting.",
      "Streamlined release processes using Jenkins and GitHub webhooks integrated with QA and test suites.",
      "Built internal cloud orchestration using GIT, Jenkins, Docker, Ansible.",
      "Used Kafka to collect and process real-time data streams for monitoring.",
      "Managed Red Hat systems and setup log management via centralized ELK logging stack.",
    ],
  },
  {
    title: "Cloud Engineer - AbbVie",
    period: "Oct 2018 – Mar 2020",
    responsibilities: [
      "Deployed apps using Puppet and Jenkins in AWS/OpenStack environments.",
      "Used Nexus, SonarQube, and Maven for artifact and quality management.",
      "Implemented log aggregation with Splunk and created bash scripts for automation.",
      "Built and monitored CI pipelines integrated with Jira and ServiceNow workflows.",
      "Provisioned EC2 and automated Docker container deployments using scripts and config tools.",
      "Managed continuous delivery with Jenkins, Puppet, and Linux automation scripts.",
    ],
  },
  {
    title: "Linux Administrator - TD Bank",
    period: "Feb 2014 – Sep 2018",
    responsibilities: [
      "Installed and configured RHEL servers, managed security patches, and wrote automation scripts.",
      "Deployed Java-based applications on Apache Tomcat using Jenkins and Maven.",
      "Managed Git workflows and branching strategy across distributed teams.",
      "Built and deployed virtual environments using Vagrant, VirtualBox, and Chef.",
      "Used Jira for issue tracking and automated builds with Ant, Maven, and Bamboo.",
      "Created Linux-based build systems with automated testing and deployment processes.",
    ],
  },
];
const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  formData.append("access_key", "da4aae8e-ffe6-4b4f-9154-3b7ef7897c74");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
    mode: "no-cors",
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success");
  }
};

function HookedCard({ experience, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{
        rotateZ: -10,
        y: -50,
        opacity: 0,
        transformOrigin: "top left",
      }}
      animate={
        inView
          ? {
              rotateZ: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay, ease: "easeOut" },
            }
          : {}
      }
      className="bg-white shadow-xl rounded-xl px-6 py-8 text-left text-gray-800 border-l-4 border-gray-800 origin-top w-full hover:shadow-2xl transition-shadow"
    >
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
      </div>
      <p className="text-sm italic text-gray-500 mb-4">{experience.period}</p>
      <ul className="list-disc pl-5 space-y-1">
        {experience.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-white text-black font-sans relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
        <motion.h1
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-semibold mb-4 z-10"
        >
          Shashidhar Kasa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-700 mb-8 z-10"
        >
          Senior Cloud DevOps Engineer / Site Reliability Engineer
        </motion.p>
        <Button variant="outline" className="z-10">
          Download Resume
        </Button>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-10"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            I’m an experienced IT professional with 11+ years in the industry—6+
            years in DevOps and 4 years in Linux Administration. I specialize in
            building scalable cloud infrastructure, automating CI/CD, and
            enabling team productivity through repeatable, reliable solutions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My expertise includes AWS, Azure, Docker, Kubernetes, Terraform, and
            DevOps pipelines using Jenkins, GitHub Actions, Azure DevOps, and
            Harness. I bring both tools and mindset to foster continuous
            delivery, observability, and cross-team collaboration.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-lg py-4 px-6 shadow text-center text-gray-800"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <HookedCard key={i} experience={exp} delay={i * 0.2} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={onSubmit}  className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded border"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded border"
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  );
}
