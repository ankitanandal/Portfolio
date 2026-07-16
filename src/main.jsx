import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter, Route, Routes, useNavigate, useParams, Navigate,
} from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, BookOpen, BrainCircuit, CheckCircle2, ChevronDown,
  Code2, Database, Download, ExternalLink, GitBranch, Globe,
  Layers3, Mail, Menu, MessageSquareText, Moon, SearchCheck,
  ShieldCheck, Sun, TestTube2, X, Zap, Webhook, Cloud,
} from 'lucide-react';
import {
  siPython, siPytest, siSelenium,
  siPostman,
  siMysql, siPostgresql, siMongodb, siNeo4j, siPhpmyadmin,
  siAirbyte, siOpensearch, siElasticsearch,
  siArgo, siDocker, siGit, siLinux,
  siJira, siTestrail, siApachejmeter,
  siStripe, siAndroid, siIos,
  siGithub, siGmail,
} from 'simple-icons';

function LinkedInIcon({ size = 14, color = '#0A66C2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import './styles.css';

/* ─────────────────────────────────────────────────────────────────
   NAV — section order matches spec
───────────────────────────────────────────────────────────────── */
const NAV_IDS = ['home', 'method', 'skills', 'learning', 'work', 'experience', 'resume', 'contact'];
const navItems = [
  ['home',       'Home'],
  ['method',     'How I Work'],
  ['skills',     'Skills'],
  ['learning',   'Growth'],
  ['work',       'Work'],
  ['experience', 'Experience'],
  ['resume',     'Resume'],
];

/* ─────────────────────────────────────────────────────────────────
   PROJECTS WITH FULL DETAIL
───────────────────────────────────────────────────────────────── */
const projects = [
  {
    id: 'ai-platform',
    icon: BrainCircuit,
    eyebrow: 'AI QUALITY · FERMI DEVELOPMENT',
    title: 'End-to-End Testing of an AI-Powered Operations Platform',
    summary: 'Owned quality across a full-stack AI platform — chat workflows, RAG retrieval, MCP agent integrations, ETL pipelines, connector ingestion, and analytics — from test design to release validation.',
    tags: ['RAG Validation', 'MCP Agents', 'LLM Eval', 'ETL', 'Postman', 'Python'],
    previewSummary: 'Tested AI workflows across ingestion, retrieval, agents, APIs, data stores, and user-facing responses.',
    previewTags: ['RAG Validation', 'ETL', 'MCP Agents'],
    metric: '50% less repetitive QA effort',
    previewFlow: ['Data Source', 'ETL', 'RAG / AI', 'Response'],
    accentColor: '#3a8a56',
    illustrationImg: '/cs/ai-platform.svg',
    illustrationAlt: 'System architecture: data sources feed into ETL ingestion and a Vector DB, both flowing into the AI Engine (RAG, LLM, MCP agents) which outputs validated responses',
    modal: {
      context: 'Fermi Development is a B2B SaaS company building an AI-powered enterprise operations platform. It connects business data from documents, databases, applications, and external connectors — processing it through ingestion and transformation pipelines, then making it available to AI agents, search, analytics, and conversational workflows. Every layer is interconnected: a field-mapping error during ingestion can appear as an inaccurate AI response rather than an obvious pipeline error.',
      whatIDid: 'I owned QA across every layer of this platform — UI flows, API collections, database state, pipeline monitoring, and AI response quality — and was the primary person responsible for catching what automated checks missed.',
      responsibilities: [
        'Designed API test collections covering authentication, CRUD operations, integration flows, error handling, and API-to-database state consistency',
        'Validated RAG pipeline accuracy: retrieval relevance, context injection, hallucination risk, and grounding against source documents',
        'Tested MCP agent tool calls, fallback behaviors, timeout handling, and edge-case agent loops',
        'Conducted ETL QA: field mapping, schema accuracy, metadata validation, deduplication, sync state tracking, and error recovery',
        'Cross-validated data consistency across MongoDB, Neo4j, OpenSearch, and Elasticsearch after every pipeline run',
        'Built an AI-based QA agent with MCP integrations to automate PR review test case generation',
        'Supported releases through ArgoCD log analysis, AWS EC2/S3 environment checks, and Python automation scripts',
        'Communicated quality risk, test coverage gaps, and release readiness clearly to engineering and product teams',
      ],
      challenges: [
        'AI outputs are non-deterministic — identical inputs produced varying responses, making traditional assertion-based testing insufficient',
        'Failures in distributed services were hard to isolate without deep cross-system log analysis',
        'Pipeline latency and eventual consistency made synchronous validation unreliable',
        'Testing agent behavior required understanding tool-call chains, not just final outputs',
      ],
      approach: 'I mapped every system flow end-to-end before writing a single test. Built a layer-by-layer validation strategy — UI, API, DB, pipeline, AI output — with clear traceability between test scenarios and system risks. For AI components, I defined behavioral contracts instead of exact assertions: expected retrieval sources, acceptable response patterns, hallucination guardrails.',
      tools: ['Postman', 'Python', 'Playwright', 'MongoDB', 'Neo4j', 'OpenSearch', 'Elasticsearch', 'ArgoCD', 'AWS EC2 / S3', 'Airbyte', 'JIRA'],
      achievements: [
        'Reduced manual PR review QA effort by 50% through AI-based QA agent automation',
        'Identified 3 critical data loss bugs in ingestion pipelines before production deployment',
        'Established RAG benchmarking and LLM evaluation workflows adopted by the engineering team',
        'Built the first structured AI testing framework for a team that had none',
      ],
      impact: 'Prevented silent AI quality degradation from reaching end users. Gave the engineering team systematic confidence that AI responses were grounded, accurate, and failure-safe — something that previously had no formal process.',
      learnings: 'Testing AI systems requires a mindset shift — from "is the output correct?" to "is the system behaving within defined contracts?" Understanding retrieval behavior, context window limits, and hallucination triggers is now part of how I approach any AI component.',
    },
  },
  {
    id: 'etl-data',
    icon: Database,
    eyebrow: 'DATA QUALITY · FERMI DEVELOPMENT',
    title: 'ETL Pipeline and Multi-System Data Validation',
    summary: 'Designed and executed full pipeline QA from multi-source ingestion through transformation, storage, search indexing, and downstream AI consumption — catching failures invisible to feature tests.',
    tags: ['ETL', 'Airbyte', 'OpenSearch', 'Neo4j', 'Elasticsearch', 'SQL'],
    previewSummary: 'Source-to-target validation across ingestion, transformation, and 4 storage systems — catching silent data failures before they reached the AI layer.',
    previewTags: ['ETL', 'Airbyte', 'OpenSearch'],
    metric: '3 critical bugs caught pre-production',
    previewFlow: ['Source', 'Airbyte ETL', 'Transform', 'Storage'],
    accentColor: '#c9a96e',
    illustrationImg: '/cs/etl-data.svg',
    illustrationAlt: 'ETL pipeline diagram: CSV files, SQL database, and API sources converge into an Airbyte transform stage with validation checkpoints, then load into a data warehouse',
    modal: {
      context: 'The platform ingested data from multiple sources — file uploads, API connectors via Airbyte, and database feeds — processing it through transformation layers before storing to MongoDB, building graph relationships in Neo4j, and indexing for search in OpenSearch and Elasticsearch. This data ultimately fed the AI system. Silent data corruption here meant corrupted AI responses.',
      whatIDid: 'Designed and executed systematic source-to-target pipeline validation at every checkpoint — not just at the final output — to catch transformation errors, data loss, and consistency failures before they reached downstream AI consumption.',
      responsibilities: [
        'Schema validation at ingestion: field types, nullability, required fields, unexpected values',
        'Transformation accuracy: business logic applied during ETL, field renaming, computed fields',
        'Source-to-target data comparison: MongoDB counts vs source records, Neo4j relationship accuracy, OpenSearch index completeness',
        'Cron job behavior: trigger accuracy, retry logic, failure recovery, idempotency on re-runs',
        'Search relevance validation: indexed fields, boost weights, tokenization accuracy in OpenSearch/Elasticsearch',
        'Data staleness detection: identifying records that were not refreshed on schedule',
        'Edge case scenarios: malformed inputs, partial failures, oversized documents, special characters',
      ],
      challenges: [
        'Async ingestion pipelines had no deterministic completion signal — validating too early gave false failures',
        'Schema drift from upstream sources silently corrupted downstream data without raising errors',
        'Graph relationships in Neo4j required custom Cypher-based validation logic that had to be built from scratch',
        'Eventual consistency across systems meant validating state at the right moment was critical',
      ],
      approach: 'Built a systematic checkpoint-based validation approach: validate at source, after transformation, after storage, after indexing, and after AI consumption. Treated each checkpoint as an independent quality gate. Created test scenarios for both happy paths and failure modes — partial failures, timeouts, malformed inputs, and concurrent writes.',
      tools: ['Airbyte', 'MongoDB', 'Neo4j', 'OpenSearch', 'Elasticsearch', 'AWS Athena', 'SQL', 'Python', 'JIRA'],
      achievements: [
        'Caught 3 critical silent data loss scenarios invisible to feature tests before production',
        'Documented field-level validation patterns adopted by the team for future pipelines',
        'Identified a Neo4j relationship duplication bug causing incorrect AI knowledge graph responses',
        'Reduced data-related production incidents by establishing pipeline quality checkpoints',
      ],
      impact: 'Data quality failures are invisible until they degrade user experience in hard-to-diagnose ways. This work prevented bad data from silently corrupting AI responses — a class of bugs that would have been blamed on the AI model rather than the data pipeline.',
      learnings: 'Data validation is not about schema alone. Understanding the business meaning of each field — and what "wrong" data looks like downstream — separates surface-level testing from real data quality assurance. I now always ask: if this field is wrong, who notices first, and how much damage has already been done?',
    },
  },
  {
    id: 'payments',
    icon: ShieldCheck,
    eyebrow: 'PAYMENTS · BRIDGING TECHNOLOGIES',
    title: 'Payment Gateway and Subscription Lifecycle Testing',
    summary: 'Validated end-to-end payment flows across Stripe subscriptions, Nexio transactions, and webhook-driven billing events — across web, Android, and iOS — testing every layer from UI through API, webhooks, and database.',
    tags: ['Stripe', 'Nexio', 'Webhooks', 'REST API', 'Mobile', 'MySQL'],
    previewSummary: 'Validated end-to-end payment flows across Stripe, Nexio, and webhooks — across web, Android, and iOS.',
    previewTags: ['Stripe', 'Nexio', 'Webhooks'],
    metric: 'Double-billing webhook bug caught pre-release',
    previewFlow: ['Client', 'Checkout API', 'Payment GW', 'Billing'],
    accentColor: '#c27455',
    illustrationImg: '/cs/payments.svg',
    illustrationAlt: 'Payment flow diagram: plan selection to checkout form, through Stripe/Nexio gateway with transaction states, webhook events, and billing database confirmation',
    modal: {
      context: 'The SaaS platform managed user subscriptions through Stripe, handled one-time payments through Nexio, and relied on webhooks to drive billing state changes in real time. Payment bugs directly translated to revenue loss, user trust damage, and support escalations. The platform served web, Android, and iOS simultaneously — each with its own checkout implementation.',
      whatIDid: 'Validated the complete payment lifecycle — from plan selection through checkout, subscription changes, renewals, failures, retries, and webhook processing. Treated each payment flow as a multi-layer system test, not a UI click sequence.',
      responsibilities: [
        'Stripe subscription testing: plan creation, upgrade, downgrade, pause, cancel, and renewal edge cases',
        'Nexio one-time payment flows: success, decline, timeout, and refund scenarios',
        'Webhook validation: event delivery, payload structure, retry behavior, idempotency',
        'Backend billing state verification: comparing database records against UI-visible states via REST API and MySQL',
        'Cross-platform consistency: web, Android, and iOS checkout flows independently validated',
        'Subscription state edge cases: simultaneous changes, mid-cycle upgrades, trial-to-paid transitions',
        'Defect lifecycle management in JIRA with clear severity classification and reproduction steps',
      ],
      challenges: [
        'Stripe sandbox and production environments behaved differently for specific card types and 3DS flows',
        'Webhook retry sequences were time-dependent — some bugs only appeared with delayed webhook delivery',
        'Mobile platforms (Android and iOS) each had independent checkout UI requiring separate validation strategies',
        'Billing state in the database sometimes diverged from UI display with no immediate error signal',
      ],
      approach: 'Treated payment testing as a full-stack exercise — not just clicking "pay." For every scenario: validated the UI response, the API call and response, the webhook event payload, and the database billing record simultaneously. Built a payment scenario matrix covering all plan types, user states, and failure modes.',
      tools: ['Postman', 'Stripe', 'Nexio', 'REST API', 'MySQL', 'phpMyAdmin', 'JIRA', 'Android', 'iOS'],
      achievements: [
        'Strengthened regression coverage for subscription and payment workflows',
        'Improved defect reporting by including API, webhook, and database evidence',
        'Established a comprehensive payment test scenario matrix adopted by the team',
        'Discovered a webhook retry bug causing double-billing on timeout that had gone undetected',
        'Reduced payment-related support tickets by improving pre-release coverage',
      ],
      impact: 'Reliable payment testing meant the engineering team could deploy billing changes confidently. Structured coverage across webhooks, APIs, and database state made payment-related issues easier to catch, reproduce, and communicate clearly.',
      learnings: 'Webhooks are the source of truth — not the UI. Testing payment systems without verifying webhook events is dangerously incomplete. Understanding the full event lifecycle — and what the database should look like at each stage — changed how I approach every integration test.',
    },
  },
  {
    id: 'social-ai',
    icon: Layers3,
    eyebrow: 'AI PLATFORM QA · BRIDGING TECHNOLOGIES',
    title: 'Testing an AI-Based Social Media Automation Platform',
    summary: 'Validated AI content generation, scheduling logic, NLP outputs, cross-platform API compliance, and AWS infrastructure across LinkedIn, Instagram, and Twitter.',
    tags: ['AI Content QA', 'NLP Testing', 'REST API', 'AWS EC2', 'MySQL'],
    previewSummary: 'Validated AI content generation, scheduling logic, and cross-platform API compliance across LinkedIn, Instagram, and Twitter.',
    previewTags: ['AI Content QA', 'NLP Testing', 'REST API'],
    metric: 'Silent scheduling bug caught at peak',
    previewFlow: ['User Input', 'AI Generator', 'NLP Gate', 'Platforms'],
    accentColor: '#8b6f5e',
    illustrationImg: '/cs/social-ai.svg',
    illustrationAlt: 'Social AI platform diagram: content brief enters AI Generator, passes NLP quality gate, then schedules to LinkedIn, Instagram, and Twitter via a queue',
    modal: {
      context: 'Bridging Technologies built an AI-powered social media automation platform that generated content, scheduled posts, and managed engagement workflows across LinkedIn, Instagram, and Twitter. The AI layer produced content based on user inputs and platform-specific engagement rules — making output quality, correctness, and compliance central testing concerns.',
      whatIDid: 'Owned end-to-end QA across the AI content layer, API integrations, scheduling engine, backend database, and AWS infrastructure — ensuring the platform behaved correctly and safely across all three social platforms.',
      responsibilities: [
        'Validated AI-generated content for relevance, tone, platform compliance, and accuracy against user-defined goals',
        'Tested scheduling logic: post timing accuracy, queue management, retry behavior, and failure handling',
        'Verified NLP output quality — checking language coherence, hashtag accuracy, and engagement signal alignment',
        'Executed REST API testing for all social platform integrations and validated API rate limit handling',
        'Backend DB verification using phpMyAdmin: cross-checking scheduled posts, statuses, and user settings against live records',
        'Monitored real-time error logs on AWS EC2 instances and validated S3 media storage workflows',
        'Tracked and prioritised defects in JIRA with full reproduction steps and severity context',
      ],
      challenges: [
        'AI-generated content was non-deterministic — validating "quality" required defining clear behavioral contracts rather than exact output matching',
        'Each social platform had different API constraints, rate limits, and content rules requiring separate validation strategies',
        'Scheduling failures were time-dependent and hard to reproduce consistently',
        'AWS log monitoring required understanding infrastructure context beyond QA basics',
      ],
      approach: 'Defined platform-specific content quality contracts for each social channel. Built scenario matrices covering content types, scheduling states, API edge cases, and failure modes. For AI outputs, focused on behavioral correctness — does the content match the stated goal, tone, and platform format — rather than literal string matching.',
      tools: ['Postman', 'REST API', 'MySQL', 'phpMyAdmin', 'AWS EC2', 'AWS S3', 'JIRA'],
      achievements: [
        'Caught multiple NLP output quality issues before they reached live social accounts',
        'Identified an API rate limit bug causing silent scheduling failures during peak usage',
        'Established platform-specific test checklists for LinkedIn, Instagram, and Twitter compliance',
      ],
      impact: 'Prevented incorrect or non-compliant AI content from being published to real user social accounts — protecting both user reputation and platform terms compliance.',
      learnings: 'Testing AI-generated content requires defining "what good looks like" before writing a single test. Without clear quality contracts, every output looks subjectively acceptable. This shaped how I approach AI testing at Fermi — contracts first, assertions second.',
    },
  },
  {
    id: 'fitness-app',
    icon: TestTube2,
    eyebrow: 'CROSS-PLATFORM QA · TIARA IT SERVICES',
    title: 'Cross-Platform Testing of a Fitness and Booking Application',
    summary: 'Designed structured test cases in TestRail, executed regression and E2E testing across web, Android, and iOS, and validated Nexio payment flows — building the foundation of a systematic QA practice.',
    tags: ['Manual Testing', 'TestRail', 'Nexio', 'Android', 'iOS', 'Regression'],
    previewSummary: 'Designed test cases, ran regression cycles, and validated Nexio payment flows across web, Android, and iOS.',
    previewTags: ['Manual Testing', 'TestRail', 'Regression'],
    metric: 'First structured QA practice built',
    previewFlow: ['Web / Mobile', 'API Gateway', 'Backend', 'DB + Payments'],
    accentColor: '#c9a96e',
    illustrationImg: '/cs/fitness-app.svg',
    illustrationAlt: 'Cross-platform QA diagram: fitness and booking app shown on Web monitor, Android phone, and iOS phone — connected with dashed lines indicating cross-platform testing',
    modal: {
      context: 'Tiara IT Services built a cross-platform fitness and booking application serving users across web browsers, Android phones, and iOS devices. The app handled class bookings, subscription management, trainer scheduling, and payment processing through Nexio. Functional consistency across all platforms was a core requirement.',
      whatIDid: 'Designed and executed structured QA across all three platforms — writing test cases, running regression cycles, validating payment flows, and managing the defect lifecycle from discovery to verified fix.',
      responsibilities: [
        'Designed structured test cases in TestRail covering functional, regression, UI consistency, and end-to-end booking scenarios',
        'Executed full regression cycles before every release across web, Android, and iOS',
        'Validated Nexio payment flows: one-time transactions, success/failure states, edge cases, and backend billing accuracy',
        'Performed exploratory testing to uncover defects outside defined test cases',
        'Managed defect lifecycle in JIRA — logging, prioritising, collaborating with developers, and verifying fixes',
        'Contributed to Agile sprint reviews, planning sessions, and retrospectives with QA insights',
        'Automated select test flows using RainforestQA and Katalon to reduce manual regression effort',
      ],
      challenges: [
        'Cross-platform UI consistency was difficult to maintain — small OS and device variations caused visual and functional divergence',
        'Manual testing at scale across three platforms required disciplined test case management to avoid coverage gaps',
        'Nexio payment sandbox limitations made some edge cases harder to replicate consistently',
      ],
      approach: 'Maintained a structured TestRail suite organised by feature and platform. Ran platform-specific regression before each release cycle, with a shared core for cross-platform scenarios. Used exploratory sessions to go beyond the defined test cases after each new feature drop.',
      tools: ['TestRail', 'JIRA', 'Nexio', 'RainforestQA', 'Katalon', 'Android', 'iOS'],
      achievements: [
        'Built the first structured TestRail test suite for the product from scratch',
        'Reduced manual regression effort through RainforestQA and Katalon automation',
        'Identified a Nexio payment state mismatch bug causing incorrect billing confirmation',
        'Maintained consistent release quality across three platforms throughout tenure',
      ],
      impact: 'Gave the team a reliable, repeatable QA process where none existed before. Structured test cases and disciplined regression cycles meant releases became predictable rather than anxious.',
      learnings: 'This role taught me that good testing starts with good structure. Clear test cases, organised coverage, and consistent execution discipline are the foundation everything else is built on. Without them, automation and tooling solve the wrong problems.',
    },
  },
];

/* ─────────────────────────────────────────────────────────────────
   SKILLS
───────────────────────────────────────────────────────────────── */
const aiQualityDisciplines = [
  { n: 'RAG Evaluation',        desc: 'Relevance, grounding and retrieval accuracy of RAG pipelines' },
  { n: 'Prompt Testing',        desc: 'Intent alignment, output consistency and edge-case inputs' },
  { n: 'Grounding Validation',  desc: 'Confirming answers are supported by source context' },
  { n: 'Hallucination Testing', desc: 'Detecting unsupported or fabricated content in AI responses' },
  { n: 'MCP Agent Testing',     desc: 'Tool selection, fallback behaviour and agent loop failures' },
  { n: 'Guardrail Testing',     desc: 'Validating safety constraints and refusal behaviour' },
];

/* ─────────────────────────────────────────────────────────────────
   ICON HELPERS
───────────────────────────────────────────────────────────────── */
function BrandIcon({ icon, size = 17, color }) {
  if (icon && icon.path) {
    const fill = color || `#${icon.hex}`;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon size={size} color={color || 'currentColor'} />;
}

const PlaywrightIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M136.444 221.556C123.558 225.213 115.104 231.625 109.535 238.032C114.869 233.364 122.014 229.08 131.652 226.348C141.51 223.554 149.92 223.574 156.869 224.915V219.481C150.941 218.939 144.145 219.371 136.444 221.556ZM108.946 175.876L61.0895 188.484C61.0895 188.484 61.9617 189.716 63.5767 191.36L104.153 180.668C104.153 180.668 103.578 188.077 98.5847 194.705C108.03 187.559 108.946 175.876 108.946 175.876ZM149.005 288.347C81.6582 306.486 46.0272 228.438 35.2396 187.928C30.2556 169.229 28.0799 155.067 27.5 145.928C27.4377 144.979 27.4665 144.179 27.5336 143.446C24.04 143.657 22.3674 145.473 22.7077 150.721C23.2876 159.855 25.4633 174.016 30.4473 192.721C41.2301 233.225 76.8659 311.273 144.213 293.134C158.872 289.185 169.885 281.992 178.152 272.81C170.532 279.692 160.995 285.112 149.005 288.347ZM161.661 128.11V132.903H188.077C187.535 131.206 186.989 129.677 186.447 128.11H161.661Z" fill="#2D4552"/>
    <path d="M193.981 167.584C205.861 170.958 212.144 179.287 215.465 186.658L228.711 190.42C228.711 190.42 226.904 164.623 203.57 157.995C181.741 151.793 168.308 170.124 166.674 172.496C173.024 167.972 182.297 164.268 193.981 167.584ZM299.422 186.777C277.573 180.547 264.145 198.916 262.535 201.255C268.89 196.736 278.158 193.031 289.837 196.362C301.698 199.741 307.976 208.06 311.307 215.436L324.572 219.212C324.572 219.212 322.736 193.41 299.422 186.777ZM286.262 254.795L176.072 223.99C176.072 223.99 177.265 230.038 181.842 237.869L274.617 263.805C282.255 259.386 286.262 254.795 286.262 254.795ZM209.867 321.102C122.618 297.71 133.166 186.543 147.284 133.865C153.097 112.156 159.073 96.0203 164.029 85.204C161.072 84.5953 158.623 86.1529 156.203 91.0746C150.941 101.747 144.212 119.124 137.7 143.45C123.586 196.127 113.038 307.29 200.283 330.682C241.406 341.699 273.442 324.955 297.323 298.659C274.655 319.19 245.714 330.701 209.867 321.102Z" fill="#2D4552"/>
    <path d="M161.661 262.296V239.863L99.3324 257.537C99.3324 257.537 103.938 230.777 136.444 221.556C146.302 218.762 154.713 218.781 161.661 220.123V128.11H192.869C189.471 117.61 186.184 109.526 183.423 103.909C178.856 94.612 174.174 100.775 163.545 109.665C156.059 115.919 137.139 129.261 108.668 136.933C80.1966 144.61 57.179 142.574 47.5752 140.911C33.9601 138.562 26.8387 135.572 27.5049 145.928C28.0847 155.062 30.2605 169.224 35.2445 187.928C46.0272 228.433 81.663 306.481 149.01 288.342C166.602 283.602 179.019 274.233 187.626 262.291H161.661V262.296ZM61.0848 188.484L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6614 203.743 61.0848 188.484 61.0848 188.484Z" fill="#E2574C"/>
    <path d="M341.786 129.174C329.345 131.355 299.498 134.072 262.612 124.185C225.716 114.304 201.236 97.0224 191.537 88.8994C177.788 77.3834 171.74 69.3802 165.788 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.098C297.093 344.47 343.53 242.92 357.644 190.238C364.157 165.917 367.013 147.5 367.799 135.625C368.695 122.173 359.455 126.078 341.786 129.174ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756ZM223.42 268.713C182.403 256.698 176.077 223.99 176.077 223.99L286.262 254.796C286.262 254.791 264.021 280.578 223.42 268.713ZM262.377 201.495C262.377 201.495 276.107 180.126 299.422 186.773C322.736 193.411 324.572 219.208 324.572 219.208L262.377 201.495Z" fill="#2EAD33"/>
    <path d="M139.88 246.04L99.3324 257.532C99.3324 257.532 103.737 232.44 133.607 222.496L110.647 136.33L108.663 136.933C80.1918 144.611 57.1742 142.574 47.5704 140.911C33.9554 138.563 26.834 135.572 27.5001 145.929C28.08 155.063 30.2557 169.224 35.2397 187.929C46.0225 228.433 81.6583 306.481 149.005 288.342L150.989 287.719L139.88 246.04ZM61.0848 188.485L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6615 203.743 61.0848 188.485 61.0848 188.485Z" fill="#D65348"/>
    <path d="M225.27 269.163L223.415 268.712C182.398 256.698 176.072 223.99 176.072 223.99L232.89 239.872L262.971 124.281L262.607 124.185C225.711 114.304 201.232 97.0224 191.532 88.8994C177.783 77.3834 171.735 69.3802 165.783 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.097L211.655 321.5L225.27 269.163ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756Z" fill="#1D8D22"/>
    <path d="M141.946 245.451L131.072 248.537C133.641 263.019 138.169 276.917 145.276 289.195C146.513 288.922 147.74 288.687 149 288.342C152.302 287.451 155.364 286.348 158.312 285.145C150.371 273.361 145.118 259.789 141.946 245.451ZM137.7 143.451C132.112 164.307 127.113 194.326 128.489 224.436C130.952 223.367 133.554 222.371 136.444 221.551L138.457 221.101C136.003 188.939 141.308 156.165 147.284 133.866C148.799 128.225 150.318 122.978 151.832 118.085C149.393 119.637 146.767 121.228 143.776 122.867C141.759 129.093 139.722 135.898 137.7 143.451Z" fill="#C04B41"/>
  </svg>
);

const KatalonIcon = ({ size = 17, color = '#009B72' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 4v16" /><path d="M6 12L17 4" /><path d="M6 12l11 8" />
  </svg>
);

const OpenAIIcon = ({ size = 17, color = '#412991' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68V11.2l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.43zM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95A4.5 4.5 0 0 1 3.6 18.3zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.67a.77.77 0 0 0 .39.68l5.81 3.36-2.02 1.17a.08.08 0 0 1-.07 0L4.1 13.95A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.86-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.13-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.8.8 0 0 0-.39.68v6.74zm1.1-2.37 2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5V10.5z" />
  </svg>
);

const AWSAthenaIcon = ({ size = 17, color = '#8C4FFF' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="12" cy="6" rx="8" ry="2.8" fill={color} opacity=".85" />
    <path d="M4 6v4.5c0 1.55 3.58 2.8 8 2.8" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M20 6v4.5" stroke={color} strokeWidth="1.5" />
    <circle cx="17" cy="18" r="4" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M14.5 15.5l5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const TestFlightIcon = ({ size = 17, color = '#1D6FF2' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <circle cx="12" cy="12" r="2" /><path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2V2z" />
    <path d="M22 12c0-1.1-.9-2-2-2s-2 .9-2 2h4z" /><path d="M12 22c1.1 0 2-.9 2-2s-.9-2-2-2v4z" />
    <path d="M2 12c0 1.1.9 2 2 2s2-.9 2-2H2z" />
    <path d="M5.64 5.64c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0L5.64 5.64z" />
    <path d="M18.36 5.64c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l2.83-2.83z" />
    <path d="M18.36 18.36c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0l2.83 2.83z" />
    <path d="M5.64 18.36c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83L5.64 18.36z" />
  </svg>
);

const NexioIcon = ({ size = 17, color = '#1A56DB' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4v16L19 4v16" />
  </svg>
);

const RainforestIcon = ({ size = 17, color = '#16A34A' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 2L6 10h3.5L7 14h5v8h2v-8h5l-2.5-4H20z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────
   TOOL GROUPS
───────────────────────────────────────────────────────────────── */
const toolGroups = [
  { label: 'Automation',               color: '#c27455', tools: [
    { icon: PlaywrightIcon, n: 'Playwright'   },
    { icon: siPython,       n: 'Python'       },
    { icon: siPytest,       n: 'PyTest'       },
    { icon: siSelenium,     n: 'Selenium'     },
    { icon: RainforestIcon, n: 'RainforestQA' },
    { icon: KatalonIcon,    n: 'Katalon'      },
  ]},
  { label: 'API & Integration',        color: '#a85a3a', tools: [
    { icon: siPostman,    n: 'Postman'                 },
    { icon: Globe,        n: 'REST APIs', c: '#6B7280' },
    { icon: Webhook,      n: 'Webhooks',  c: '#6B7280' },
    { icon: OpenAIIcon,   n: 'OpenAI API'              },
  ]},
  { label: 'Databases',                color: '#8b6f5e', tools: [
    { icon: siMysql,      n: 'MySQL'      },
    { icon: siPostgresql, n: 'PostgreSQL' },
    { icon: siMongodb,    n: 'MongoDB'    },
    { icon: siNeo4j,      n: 'Neo4j'      },
    { icon: siPhpmyadmin, n: 'phpMyAdmin' },
  ]},
  { label: 'Data, Search & ETL',       color: '#4a6abf', tools: [
    { icon: siAirbyte,       n: 'Airbyte'                   },
    { icon: siOpensearch,    n: 'OpenSearch'                 },
    { icon: siElasticsearch, n: 'Elasticsearch'              },
    { icon: AWSAthenaIcon,   n: 'AWS Athena'                 },
    { icon: Globe,           n: 'SQL',         c: '#6B7280'  },
  ]},
  { label: 'Cloud & DevOps',           color: '#555555', tools: [
    { icon: Cloud,    n: 'AWS',    c: '#FF9900' },
    { icon: siArgo,   n: 'ArgoCD'              },
    { icon: siDocker, n: 'Docker'              },
    { icon: siGit,    n: 'Git'                 },
    { icon: siLinux,  n: 'Linux'               },
  ]},
  { label: 'Test & Defect Management', color: '#c9a96e', tools: [
    { icon: siJira,     n: 'JIRA'     },
    { icon: siTestrail, n: 'TestRail' },
  ]},
  { label: 'Performance & Mobile',     color: '#6b7c93', tools: [
    { icon: siApachejmeter, n: 'JMeter'      },
    { icon: TestFlightIcon, n: 'TestFlight'  },
    { icon: siAndroid,      n: 'Android'     },
    { icon: siIos,          n: 'iOS'         },
  ]},
  { label: 'Payments',                 color: '#7c5cbf', tools: [
    { icon: siStripe, n: 'Stripe' },
    { icon: NexioIcon, n: 'Nexio' },
  ]},
];

/* ─────────────────────────────────────────────────────────────────
   CAPABILITIES
───────────────────────────────────────────────────────────────── */
const capabilities = [
  { icon: Code2,             label: 'Test Automation',       desc: 'Playwright, PyTest, Python — scalable, fixture-driven, product-aware frameworks.' },
  { icon: Layers3,           label: 'API Testing',           desc: 'Request/response, auth flows, integrations, and API-to-database consistency.' },
  { icon: Database,          label: 'Database Testing',      desc: 'SQL, MongoDB, Neo4j — validating schema, state, and cross-system consistency.' },
  { icon: GitBranch,         label: 'Data & ETL Validation', desc: 'Pipeline-level testing: ingestion accuracy, transformation correctness, sync integrity.' },
  { icon: BrainCircuit,      label: 'AI / LLM Testing',      desc: 'RAG validation, prompt benchmarking, MCP agent behavior, hallucination detection.' },
  { icon: SearchCheck,       label: 'Test Strategy',         desc: 'Risk-based coverage design, flow mapping, and gap analysis before writing tests.' },
  { icon: MessageSquareText, label: 'Release Ownership',     desc: 'Communicating quality risk, release readiness, and defect priority to teams.' },
  { icon: Zap,               label: 'Cross-Platform QA',     desc: 'Web, Android, iOS — consistent validation across environments and form factors.' },
];

/* ─────────────────────────────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────────────────────────────── */
const experience = [
  {
    company: 'Fermi Development Pvt Ltd',
    current: true,
    location: 'Gurgaon',
    role: 'SDET',
    period: 'Feb 2026 — Present',
    product: 'AI-powered enterprise operations platform',
    intro: 'Owning end-to-end quality across a multi-layered AI platform — conversational UI, RAG knowledge retrieval, MCP-integrated agents, ETL pipelines, connector ingestion, analytics, and release validation.',
    highlights: [
      { title: 'AI & RAG Testing',        detail: 'Validated LLM prompt quality, RAG retrieval accuracy, context grounding, and agent tool-call behavior for non-deterministic AI components.' },
      { title: 'ETL & Data Pipelines',    detail: 'Field-level validation across ingestion, transformation, and sync — catching silent data corruption before it reached AI consumption.' },
      { title: 'Cross-service Validation',detail: 'Source-to-target consistency checks across MongoDB, Neo4j, OpenSearch, and Elasticsearch after every pipeline run.' },
      { title: 'API Depth',              detail: 'Comprehensive Postman collections covering auth, CRUD, integrations, error handling, and API-to-DB consistency.' },
      { title: 'Release Support',        detail: 'ArgoCD log analysis, AWS EC2/S3 environment checks, and Python scripts to support CI/CD release confidence.' },
      { title: 'QA Agent Build',         detail: 'Built an AI-based QA agent with MCP integrations to automate PR test case generation — reducing manual effort by 50%.' },
    ],
    tags: ['AI Testing', 'RAG', 'MCP', 'ETL', 'MongoDB', 'Neo4j', 'ArgoCD', 'Python'],
  },
  {
    company: 'Bridging Technologies',
    location: 'Mohali',
    role: 'QA Engineer',
    period: 'Sep 2024 — Feb 2026',
    product: 'AI-based social media automation platform + SaaS subscription product',
    intro: 'Tested complex products across web, Android, and iOS — covering AI content generation, API validation, payment gateway flows, subscription management, and database verification.',
    highlights: [
      { title: 'Payment Testing',   detail: 'Stripe subscription lifecycle and Nexio one-time payment flows — validated UI, API, webhook events, and database billing state simultaneously.' },
      { title: 'API & Database',    detail: 'REST API testing with backend DB cross-checks via phpMyAdmin — isolating defects beyond what the UI revealed.' },
      { title: 'Cross-platform',    detail: 'Consistent functional and regression coverage across web, Android, and iOS for the same feature set.' },
      { title: 'AWS Log Monitoring',detail: 'Tracked real-time errors on AWS EC2 instances and validated S3 media storage workflows for production stability.' },
      { title: 'AI Content QA',     detail: 'Validated AI-generated social content, scheduling logic, and NLP outputs against user requirements and platform standards.' },
    ],
    tags: ['Stripe', 'Nexio', 'REST API', 'MySQL', 'AWS', 'Android', 'iOS', 'JIRA'],
  },
  {
    company: 'Tiara IT Services',
    location: 'Zirakpur',
    role: 'Quality Analyst',
    period: 'Jan 2024 — Sep 2024',
    product: 'Cross-platform fitness and booking application',
    intro: 'Built the foundation of my QA practice — test case design, regression testing, defect lifecycle management, and first exposure to payment validation and test automation tooling.',
    highlights: [
      { title: 'Test Case Design',  detail: 'Designed structured test cases in TestRail covering functional, regression, and E2E scenarios across web, Android, and iOS.' },
      { title: 'Nexio Payments',    detail: 'Validated one-time payment flows, success/failure states, and backend billing accuracy for the booking system.' },
      { title: 'Automation Start',  detail: 'First automation experience using RainforestQA and Katalon — reducing manual regression effort across release cycles.' },
      { title: 'Defect Management', detail: 'Managed full defect lifecycle in JIRA — reporting, prioritization, developer collaboration, and resolution verification.' },
    ],
    tags: ['TestRail', 'RainforestQA', 'Katalon', 'Nexio', 'JIRA', 'Manual Testing'],
  },
];

/* ─────────────────────────────────────────────────────────────────
   HOW I WORK
───────────────────────────────────────────────────────────────── */
const methodSteps = [
  { n: '01', icon: SearchCheck,       title: 'Understand the flow',  body: 'Before writing a single test, I map the system. User journey, API calls, data movement, dependencies. I need to know what normal looks like before I can find what breaks.' },
  { n: '02', icon: Layers3,           title: 'Analyze risk',         body: 'I identify what is most likely to fail, what would hurt most if it did, and what has been missed before. Coverage is about risk, not checkbox counts.' },
  { n: '03', icon: Database,          title: 'Validate deeply',      body: "I don't stop at the UI. I check the API response, the database state, the log entry, the downstream system. A bug confirmed at three layers is a bug that stays fixed." },
  { n: '04', icon: MessageSquareText, title: 'Communicate clearly',  body: 'I turn findings into decisions — not just lists. Severity context, business impact, reproduction confidence, and what needs to happen before release.' },
  { n: '05', icon: Zap,              title: 'Improve continuously', body: "After every release I close the gap: what we missed, why, and how we catch it next time. Quality isn't a phase. It's a feedback loop." },
];

/* ─────────────────────────────────────────────────────────────────
   LEARNING
───────────────────────────────────────────────────────────────── */
const learningItems = [
  {
    icon: BrainCircuit,
    title: 'AI Evaluation & Guardrails',
    text: 'Studying LLM evaluation frameworks, retrieval quality metrics, and guardrail testing strategies for production AI systems.',
    status: 'Active Study',
    statusColor: '#3a8a56',
    accent: 'rgba(58,138,86,.12)',
    what: 'RAGAS, TruLens, DeepEval, Guardrails AI',
  },
  {
    icon: Code2,
    title: 'Playwright Framework Design',
    text: 'Building scalable, fixture-driven automation architectures — page objects, data-driven patterns, and CI pipeline integration.',
    status: 'Building',
    statusColor: '#c27455',
    accent: 'rgba(194,116,85,.10)',
    what: 'Playwright · PyTest · GitHub Actions',
  },
  {
    icon: Layers3,
    title: 'System Design for Testers',
    text: 'Understanding queues, event streams, distributed state, and how failures propagate across services — to test systems, not just features.',
    status: 'Reading',
    statusColor: '#4a6abf',
    accent: 'rgba(74,106,191,.10)',
    what: 'Distributed systems · Observability · Event-driven arch.',
  },
  {
    icon: Database,
    title: 'SQL, Athena & Data Modeling',
    text: 'Deepening query proficiency and data modeling understanding for large-scale validation in cloud-hosted analytical environments.',
    status: 'In Progress',
    statusColor: '#a8843d',
    accent: 'rgba(201,169,110,.12)',
    what: 'AWS Athena · PostgreSQL · Query optimization',
  },
];

/* ─────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────── */
function useTypewriter(words, speed = 78, pause = 2400) {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t;
    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const h = () => { const d = document.documentElement; setPct((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100); };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return pct;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || 'home');
  useEffect(() => {
    const update = () => {
      const offset = window.scrollY + 160;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [ids]);
  return active;
}

function useIntroPast(ref) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref]);
  return past;
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const initial = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', initial);
    return initial;
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);
  return [theme, toggleTheme];
}

/* ─────────────────────────────────────────────────────────────────
   SYSTEM MAP — hero interactive visual
───────────────────────────────────────────────────────────────── */
const SM_BASE = 360;
const SM_CX   = 180;
const SM_CY   = 180;
const SM_R    = 118;

const systemNodes = [
  { id: 'auto', Icon: Code2,        label: 'Automation', angle: -90,  color: '#c27455', desc: 'Playwright, PyTest, Python — scalable, fixture-driven, product-aware frameworks.' },
  { id: 'api',  Icon: Webhook,      label: 'APIs',       angle: -30,  color: '#a85a3a', desc: 'Request/response, auth flows, integrations, and API-to-database consistency.' },
  { id: 'db',   Icon: Database,     label: 'Databases',  angle: 30,   color: '#8b6f5e', desc: 'SQL, MongoDB, Neo4j — validating schema, state, and cross-system consistency.' },
  { id: 'etl',  Icon: GitBranch,    label: 'ETL',        angle: 90,   color: '#4a6abf', desc: 'Pipeline-level testing: ingestion accuracy, transformation correctness, sync integrity.' },
  { id: 'ai',   Icon: BrainCircuit, label: 'AI / LLM',   angle: 150,  color: '#3a8a56', desc: 'RAG validation, prompt benchmarking, MCP agent behavior, hallucination detection.' },
  { id: 'ui',   Icon: Globe,        label: 'UI',         angle: -150, color: '#c9a96e', desc: 'Web, Android, iOS — consistent validation across environments and form factors.' },
];

function getNodePos(angle) {
  return {
    x: SM_CX + SM_R * Math.cos(angle * Math.PI / 180),
    y: SM_CY + SM_R * Math.sin(angle * Math.PI / 180),
  };
}

function SystemMap() {
  const [active, setActive] = useState(null);
  const activeNode = systemNodes.find(n => n.id === active);

  return (
    <div className="system-map" role="region" aria-label="Interactive testing layer map">
      <div className="sm-wrap">
        {/* Background + connection lines */}
        <svg
          className="sm-svg"
          viewBox={`0 0 ${SM_BASE} ${SM_BASE}`}
          aria-hidden="true"
        >
          {/* Subtle grid dots */}
          {Array.from({ length: 7 }, (_, ri) =>
            Array.from({ length: 7 }, (_, ci) => (
              <circle key={`${ri}-${ci}`} cx={ri * 55 + 17} cy={ci * 55 + 17} r={1.2} fill="var(--beige3)" opacity="0.7" />
            ))
          )}
          {/* Center pulse ring */}
          <circle cx={SM_CX} cy={SM_CY} r={52} fill="none" stroke="var(--terra)" strokeWidth="0.5" opacity="0.25" strokeDasharray="6 5" className="sm-pulse-ring" />
          {/* Connection lines */}
          {systemNodes.map(n => {
            const pos = getNodePos(n.angle);
            const isAct = active === n.id;
            return (
              <line
                key={`ln-${n.id}`}
                x1={SM_CX} y1={SM_CY}
                x2={pos.x} y2={pos.y}
                stroke={isAct ? n.color : 'var(--beige3)'}
                strokeWidth={isAct ? 2 : 1.5}
                strokeDasharray={isAct ? '0' : '5 4'}
                style={{ transition: 'stroke .28s, stroke-width .28s' }}
              />
            );
          })}
        </svg>

        {/* Center node */}
        <div
          className="sm-center"
          style={{ left: `${(SM_CX / SM_BASE) * 100}%`, top: `${(SM_CY / SM_BASE) * 100}%` }}
        >
          <ShieldCheck size={20} />
          <span>SDET</span>
        </div>

        {/* Outer layer nodes */}
        {systemNodes.map(n => {
          const pos = getNodePos(n.angle);
          const isAct = active === n.id;
          const { Icon } = n;
          return (
            <button
              key={n.id}
              className={`sm-node${isAct ? ' active' : ''}`}
              style={{
                left: `${(pos.x / SM_BASE) * 100}%`,
                top: `${(pos.y / SM_BASE) * 100}%`,
                '--nc': n.color,
              }}
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === n.id ? null : n.id)}
              aria-label={`${n.label} — hover to read description`}
              aria-pressed={isAct}
            >
              <Icon size={17} />
              <span>{n.label}</span>
            </button>
          );
        })}
      </div>

      {/* Description */}
      <div className="sm-info" aria-live="polite">
        {activeNode ? (
          <p className="sm-desc" style={{ color: activeNode.color }}>
            <strong>{activeNode.label}:</strong> {activeNode.desc}
          </p>
        ) : (
          <p className="sm-hint">Hover a testing layer to explore</p>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   METHOD CARDS
───────────────────────────────────────────────────────────────── */
function MethodAccordion() {
  return (
    <div className="method-grid">
      {methodSteps.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.n}
            className="method-card reveal"
            style={{ transitionDelay: `${i * 0.09}s` }}
          >
            <div className="method-num">{s.n}</div>
            <div className="method-icon"><Icon size={22} aria-hidden="true" /></div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SKILLS SECTION — capability cards + collapsed tool accordion
───────────────────────────────────────────────────────────────── */
const toolGroupMeta = {
  'Automation':            { Icon: Code2,             desc: 'Playwright, Python, PyTest, Selenium — scalable test frameworks.' },
  'API & Integration':     { Icon: Webhook,            desc: 'Postman, REST APIs, Webhooks, OpenAI API.' },
  'Databases':             { Icon: Database,           desc: 'MySQL, PostgreSQL, MongoDB, Neo4j, phpMyAdmin.' },
  'Data, Search & ETL':    { Icon: GitBranch,          desc: 'Airbyte, OpenSearch, Elasticsearch, AWS Athena, SQL.' },
  'Cloud & DevOps':        { Icon: Cloud,              desc: 'AWS, ArgoCD, Docker, Git, Linux.' },
  'Test & Defect Mgmt':    { Icon: CheckCircle2,       desc: 'Jira, TestRail — full defect lifecycle management.' },
  'Performance & Mobile':  { Icon: Zap,                desc: 'JMeter, TestFlight, Android, iOS.' },
  'Payments':              { Icon: ShieldCheck,        desc: 'Stripe subscriptions, Nexio transactions, webhooks.' },
};

function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState(null);

  const handleCatClick = useCallback(label => {
    setActiveGroup(prev => prev === label ? null : label);
  }, []);

  return (
    <div className="skills-wrap">
      <div className="section-heading reveal">
        <div>
          <div className="eyebrow">TOOLS, TECHNOLOGIES & PLATFORMS</div>
          <h2>Where I operate and what I use</h2>
        </div>
        <p>Capability areas, filterable skills, and the full tech stack — all in one place.</p>
      </div>

      {/* Capability cards — 4 × 2 grid */}
      <div className="capabilities-grid reveal">
        {capabilities.map(cap => {
          const Icon = cap.icon;
          return (
            <div key={cap.label} className="cap-card">
              <Icon size={18} />
              <div>
                <strong>{cap.label}</strong>
                <p>{cap.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Quality band — right after capability cards */}
      <div className="ai-quality-band reveal">
        <div className="ai-quality-head">
          <BrainCircuit size={18} />
          <div>
            <span className="aqb-label">AI Quality Disciplines</span>
            <span className="aqb-note">Evaluated through behaviour and contracts — not pass/fail assertions</span>
          </div>
        </div>
        <div className="ai-quality-grid">
          {aiQualityDisciplines.map(d => (
            <div className="ai-quality-card" key={d.n}>
              <span className="aqc-dot" />
              <div>
                <strong>{d.n}</strong>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider before tool cards */}
      <div className="stack-bridge reveal">
        <div className="bridge-line" />
        <span className="bridge-label">Tools & Platforms Behind the Work</span>
        <div className="bridge-line" />
      </div>

      {/* Category filter cards — click to reveal tools below */}
      <div className="skill-cat-grid reveal">
        {toolGroups.map(g => {
          const meta = toolGroupMeta[g.label] || toolGroupMeta[g.label.replace(' Management', ' Mgmt')] || { Icon: Code2, desc: '' };
          const Icon = meta.Icon;
          const isActive = activeGroup === g.label;
          return (
            <button
              key={g.label}
              className={`skill-cat-card${isActive ? ' active' : ''}`}
              onClick={() => handleCatClick(g.label)}
              style={{ '--cat-color': g.color }}
              aria-expanded={isActive}
            >
              <div className="scc-top">
                <span className="scc-icon"><Icon size={18} /></span>
                <span className="scc-count">{g.tools.length}</span>
              </div>
              <strong className="scc-label">{g.label}</strong>
              <p className="scc-desc">{meta.desc}</p>
              <ChevronDown className={`scc-chevron${isActive ? ' rotated' : ''}`} size={14} />
            </button>
          );
        })}
      </div>

      {/* Tools panel — one shared panel below the grid */}
      {activeGroup && (() => {
        const g = toolGroups.find(g => g.label === activeGroup);
        return (
          <div className="skill-tools-panel" key={activeGroup}>
            <div className="skill-tools-grid">
              {g.tools.map((t, i) => (
                <div
                  className="skill-tool-card"
                  key={t.n}
                  style={{ '--cat-color': g.color, animationDelay: `${i * 0.05}s` }}
                >
                  <span className="stc-icon"><BrandIcon icon={t.icon} size={22} color={t.c} /></span>
                  <span className="stc-name">{t.n}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CASE STUDY SECTION — split layout
───────────────────────────────────────────────────────────────── */
function CaseStudySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();
  const p = projects[activeIdx];

  return (
    <div className="cs-split">
      {/* Left: preview card */}
      <div className="cs-preview">
        <div className="cs-preview-card reveal-left">

          {/* Visual area */}
          <div className="cs-illus-wrap">
            <img
              src={p.illustrationImg}
              alt={p.illustrationAlt}
              loading="lazy"
              decoding="async"
              className="cs-illus"
            />
          </div>

          {/* Content area — lighter */}
          <div className="cs-preview-body">
            <small className="cs-eyebrow" style={{ color: p.accentColor }}>{p.eyebrow}</small>
            <h3 className="cs-preview-title">{p.title}</h3>
            <p className="cs-preview-summary">{p.previewSummary}</p>
            <div className="tags cs-tags">
              {p.previewTags.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="cs-preview-foot">
              <span className="cs-metric" style={{ color: p.accentColor }}>
                ◆ {p.metric}
              </span>
              <button
                className="cs-cta-link"
                onClick={() => navigate(`/case-studies/${p.id}`)}
                style={{ '--accent': p.accentColor }}
              >
                View case study <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Right: scrollable list */}
      <div className="cs-list" aria-label="Case study list">
        {projects.map((proj, i) => {
          const isAct = activeIdx === i;
          return (
            <button
              key={proj.id}
              className={`cs-list-item${isAct ? ' active' : ''}`}
              onClick={() => setActiveIdx(i)}
              aria-pressed={isAct}
              style={{ '--accent': proj.accentColor }}
            >
              <span className="cs-num" style={{ color: isAct ? proj.accentColor : undefined }}>
                0{i + 1}
              </span>
              <div className="cs-list-meta">
                <span className="cs-list-title">{proj.title}</span>
                <span className="cs-list-cat">{proj.eyebrow.split('·')[0].trim()}</span>
              </div>
              {isAct && <span className="cs-active-dot" style={{ background: proj.accentColor }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   EXPERIENCE SECTION — split layout (desktop) / accordion (mobile)
───────────────────────────────────────────────────────────────── */
function ExperienceDetail({ exp: e }) {
  return (
    <>
      <div className="exp-detail-header">
        <div className="exp-di-title">
          <div className="exp-detail-company">{e.company}</div>
          <div className="exp-detail-role">{e.role}</div>
          <span className="exp-detail-product">{e.product}</span>
        </div>
        <div className="exp-di-badges">
          {e.current && <span className="exp-current-badge">Current</span>}
          <span className="timeline-period">{e.period}</span>
        </div>
      </div>
      <p className="exp-detail-intro">{e.intro}</p>
      <div className="exp-section-label">Responsibilities</div>
      <div className="exp-highlights">
        {e.highlights.map(h => (
          <div className="exp-highlight-row" key={h.title}>
            <span className="hl-title">{h.title}</span>
            <span className="hl-detail">{h.detail}</span>
          </div>
        ))}
      </div>
      <div className="exp-section-label">Tools &amp; Technologies</div>
      <div className="tags exp-tags">
        {e.tags.map(t => <span key={t}>{t}</span>)}
      </div>
    </>
  );
}

function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      {/* Desktop: company list left, detail panel right */}
      <div className="exp-selector">
        <div className="exp-companies">
          {experience.map((e, i) => {
            const isAct = activeIdx === i;
            return (
              <button
                key={e.company}
                className={`exp-company-btn${isAct ? ' active' : ''}`}
                onClick={() => setActiveIdx(i)}
                aria-pressed={isAct}
              >
                <div className="ecb-content">
                  <strong>{e.company}</strong>
                  <span>{e.role}</span>
                  <span className="ecb-period">{e.period}</span>
                </div>
                {e.current && <span className="exp-current-badge">Current</span>}
              </button>
            );
          })}
        </div>
        <div className="exp-detail" key={activeIdx}>
          <ExperienceDetail exp={experience[activeIdx]} />
        </div>
      </div>

      {/* Mobile: accordion per company */}
      <div className="exp-accordion">
        {experience.map((e, i) => {
          const isOpen = activeIdx === i;
          return (
            <div key={e.company} className={`exp-acc-item${isOpen ? ' open' : ''}`}>
              <button
                className="exp-acc-trigger"
                onClick={() => setActiveIdx(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <div className="exp-acc-content">
                  <div className="exp-acc-company">
                    {e.company}
                    {e.current && <span className="exp-current-badge">Current</span>}
                  </div>
                  <span className="exp-acc-sub">{e.role} · {e.period}</span>
                </div>
                <ChevronDown className={`exp-chevron${isOpen ? ' rotated' : ''}`} size={16} />
              </button>
              {isOpen && (
                <div className="exp-acc-body">
                  <ExperienceDetail exp={e} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   STICKY NAV — appears after intro card scrolls past viewport
───────────────────────────────────────────────────────────────── */
function StickyNav({ activeSection, scrollTo, menuOpen, setMenuOpen, visible, theme, toggleTheme }) {
  return (
    <header
      className={`sticky-nav-wrap${visible ? ' sticky-nav-visible' : ''}`}
      aria-hidden={!visible || undefined}
    >
      <nav className="nav container" aria-label="Main navigation">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to top">
          <span className="brand-mark" aria-hidden="true">AN</span>
        </button>
        <div className="nav-links desktop-nav">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={activeSection === id ? 'nav-active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <span className="nav-sep desktop-cta" aria-hidden="true" />
          <button
            className="btn small desktop-cta"
            onClick={() => scrollTo('contact')}
          >
            Reach Out <ArrowRight size={14} />
          </button>
          <button
            className="icon-btn mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-panel" role="navigation" aria-label="Mobile navigation">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────
   INTRO CARD — editorial hero with integrated navigation
───────────────────────────────────────────────────────────────── */
function IntroCard({ activeSection, scrollTo, menuOpen, setMenuOpen, typed, theme, toggleTheme }) {
  return (
    <div id="home" className="hero-page">

      {/* ── TOP NAV BAR ── */}
      <header className="hero-nav-bar">
        <div className="container hero-nav-inner">
          <button className="hero-brand" onClick={() => scrollTo('home')} aria-label="Go to top">
            <span className="hero-brand-mark" aria-hidden="true">
              <CheckCircle2 size={16} />
            </span>
          </button>

          <nav className="hero-nav-links desktop-nav" aria-label="Main navigation">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={activeSection === id ? 'hero-nav-active' : ''}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hero-nav-actions">
            <button
              className="icon-btn theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <span className="nav-sep desktop-cta" aria-hidden="true" />
            <button
              className="btn small desktop-cta"
              onClick={() => scrollTo('contact')}
            >
              Reach Out <ArrowRight size={14} />
            </button>
            <button
              className="icon-btn mobile-menu"
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-panel" role="navigation" aria-label="Mobile navigation">
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO BODY ── */}
      <div className="hero-body container">

        {/* LEFT — identity */}
        <div className="hero-identity reveal">
          <span className="hero-hey">Hey, I'm</span>
          <h1 className="hero-name">Ankita<br />Nandal</h1>
          <p className="hero-role-title">Software Development Engineer in Test</p>
          <div className="hero-steps">
            {['Plan','Build','Test','Ship'].map((s, i, arr) => (
              <span key={s}>
                {s}
                {i < arr.length - 1 && <span className="hero-step-sep"> · </span>}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="hero-copy-col">
          <h1 className="hero-headline reveal delay-1">
            The engineer who reads the system
            <span className="hero-headline-italic"> then breaks it.</span>
          </h1>
          <p className="hero-typed-line reveal delay-2">
            Testing{' '}
            <span className="typed-word">{typed}<span className="cursor-blink">|</span></span>
          </p>
          <p className="hero-lead reveal delay-3">
            UI, APIs, databases, ETL pipelines, AI/LLM systems, and integrations.
            I understand flows, trace failures across layers, handle ambiguity, and
            help teams ship with confidence.
          </p>
          <div className="hero-actions reveal delay-4">
            <button className="btn" onClick={() => scrollTo('work')}>View Work <ArrowRight size={17} /></button>
            <a className="btn ghost" href="/Ankita_Nandal_SDET.pdf" download="Ankita_Nandal_SDET.pdf" rel="noreferrer">
              <Download size={16} /> Download Resume
            </a>
          </div>
          <div className="social-row reveal delay-4">
            <a href="https://www.linkedin.com/in/ankita-nandal-2b9567247" target="_blank" rel="noreferrer">
              <LinkedInIcon size={14} color="#0A66C2" /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <BrandIcon icon={siGithub} size={14} color="var(--text)" /> GitHub
            </a>
            <a href="mailto:ankitanandal2009@gmail.com">
              <Mail size={14} /> Email
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   NAV BAR
───────────────────────────────────────────────────────────────── */
function NavBar({ activeSection, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to top">
          <span className="brand-mark" aria-hidden="true">AN</span>
          <span>Ankita Nandal</span>
        </button>
        <div className="nav-links desktop-nav">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={activeSection === id ? 'nav-active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="btn small desktop-cta" onClick={() => scrollTo('contact')}>
            Reach Out <ArrowRight size={14} />
          </button>
          <button
            className="icon-btn mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-panel" role="navigation" aria-label="Mobile navigation">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CASE STUDY DETAIL PAGE
───────────────────────────────────────────────────────────────── */
function CdSection({ label, children }) {
  return (
    <div className="cd-section reveal">
      <h2 className="cd-label">{label}</h2>
      {children}
    </div>
  );
}

function CaseStudyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  useScrollReveal();
  const pct = useScrollProgress();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const idx = projects.findIndex(p => p.id === id);
  if (idx === -1) return <Navigate to="/" replace />;

  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const m = project.modal;

  return (
    <div className="app cd-page">
      <div className="noise" />
      <div className="scroll-progress" style={{ width: `${pct}%` }} />

      {/* Top nav */}
      <header className="cd-topnav">
        <div className="container cd-topnav-inner">
          <button className="cd-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back to Case Studies
          </button>
          <span className="cd-eyebrow-small">{project.eyebrow}</span>
        </div>
      </header>

      <main>
        <div className="container cd-container">

          {/* Header */}
          <header className="cd-header reveal">
            <div className="cd-illus-hero">
              <img
                src={project.illustrationImg}
                alt={project.illustrationAlt}
                loading="lazy"
                decoding="async"
                className="cs-illus"
              />
            </div>
            <small className="cd-eyebrow" style={{ color: project.accentColor }}>{project.eyebrow}</small>
            <h1 className="cd-title">{project.title}</h1>
            <p className="cd-summary">{project.summary}</p>
            <div className="tags">
              {project.tags.map(t => <span key={t}>{t}</span>)}
            </div>
          </header>

          {/* Article body */}
          <article className="cd-body">
            <CdSection label="Context"><p>{m.context}</p></CdSection>
            <CdSection label="What I Did"><p>{m.whatIDid}</p></CdSection>

            <CdSection label="Responsibilities">
              <ul className="cd-list">
                {m.responsibilities.map(r => (
                  <li key={r}><CheckCircle2 size={14} /><span>{r}</span></li>
                ))}
              </ul>
            </CdSection>

            <CdSection label="Challenges">
              <ul className="cd-list cd-list--dash">
                {m.challenges.map(c => (
                  <li key={c}><span className="cd-dash">—</span><span>{c}</span></li>
                ))}
              </ul>
            </CdSection>

            <CdSection label="Testing Approach"><p>{m.approach}</p></CdSection>

            <CdSection label="Tools Used">
              <div className="cd-tags">
                {m.tools.map(t => <span key={t}>{t}</span>)}
              </div>
            </CdSection>

            <CdSection label="Achievements">
              <ul className="cd-list">
                {m.achievements.map(a => (
                  <li key={a}><CheckCircle2 size={14} /><span>{a}</span></li>
                ))}
              </ul>
            </CdSection>

            <CdSection label="Impact">
              <p className="cd-impact">{m.impact}</p>
            </CdSection>

            <CdSection label="Learnings"><p>{m.learnings}</p></CdSection>
          </article>

          {/* Prev / Next */}
          <nav className="cd-prevnext" aria-label="Case study navigation">
            {prev ? (
              <button className="cd-nav-btn" onClick={() => navigate(`/case-studies/${prev.id}`)}>
                <ArrowLeft size={16} />
                <div><span>Previous</span><strong>{prev.title}</strong></div>
              </button>
            ) : <div />}
            {next ? (
              <button className="cd-nav-btn cd-nav-next" onClick={() => navigate(`/case-studies/${next.id}`)}>
                <div><span>Next</span><strong>{next.title}</strong></div>
                <ArrowRight size={16} />
              </button>
            ) : <div />}
          </nav>
        </div>
      </main>

      <footer>
        <div className="container footer">
          <span className="footer-copy">© {new Date().getFullYear()} Ankita Nandal · SDET</span>
          <button className="footer-copy footer-back-link" onClick={() => navigate('/')}>← Back to portfolio</button>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────────── */
function MainPage() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [form,       setForm]       = useState({ name: '', email: '', topic: 'Discuss a QA opportunity', message: '' });
  const [sent,       setSent]       = useState(false);
  const [sending,    setSending]    = useState(false);
  const [sendError,  setSendError]  = useState(false);
  const navigate = useNavigate();
  const introCardRef = useRef(null);

  useScrollReveal();
  const pct           = useScrollProgress();
  const activeSection = useActiveSection(NAV_IDS);
  const typed         = useTypewriter(['APIs & backend systems.', 'ETL pipelines.', 'AI / LLM outputs.', 'databases & data flows.', 'payment gateways.', 'integrations.']);
  const introPast     = useIntroPast(introCardRef);
  const [theme, toggleTheme] = useTheme();

  const scrollTo = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      const res  = await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) setSent(true); else setSendError(true);
    } catch { setSendError(true); }
    setSending(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <div className="scroll-progress" style={{ width: `${pct}%` }} />

      {/* ── STICKY NAV (appears after intro card scrolls away) ── */}
      <StickyNav
        activeSection={activeSection}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        visible={introPast}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* ── INTRO CARD (hero + embedded nav) ── */}
      <div ref={introCardRef}>
        <IntroCard
          activeSection={activeSection}
          scrollTo={scrollTo}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          typed={typed}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>

      <main>

        {/* ── 2. HOW I WORK ── */}
        <section id="method" className="method-section section-pad">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="eyebrow">HOW I WORK</div>
                <h2>A method, not just a checklist</h2>
              </div>
              <p>Quality comes from how you think about a system, not just how many tests you write.</p>
            </div>
            <MethodAccordion />
          </div>
        </section>

        {/* ── 3. SKILLS & TOOLS ── */}
        <section id="skills" className="skills-section section-pad">
          <div className="container">
            <SkillsSection />
          </div>
        </section>

        {/* ── 4. LEARNING ── */}
        <section id="learning" className="learning-section section-pad">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="eyebrow">CONTINUOUS GROWTH</div>
                <h2>What I'm actively exploring</h2>
              </div>
              <p>Each area below reflects a deliberate investment — not just curiosity, but focused depth-building toward where the field is heading.</p>
            </div>

            <div className="learning-scroll-wrap">
              <div className="learning-strip">
                {learningItems.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <article
                      key={c.title}
                      className="learning-card reveal"
                      style={{ transitionDelay: `${i * .1}s`, '--learn-accent': c.accent, '--learn-color': c.statusColor }}
                    >
                      <div className="lc-top">
                        <div className="lc-icon" style={{ background: c.accent, color: c.statusColor }}><Icon size={22} /></div>
                        <span className="lc-status" style={{ background: c.accent, color: c.statusColor }}>{c.status}</span>
                      </div>
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                      <div className="lc-tools">{c.what}</div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="article-preview reveal">
              <div>
                <span className="status"><i />First article in progress</span>
                <h3>Testing an AI system beyond the answer on screen</h3>
                <p>Tracing retrieval, MCP tool calls, data pipelines, logs, and failure patterns — rather than asserting on the final response.</p>
              </div>
              <span className="badge-coming-soon"><BookOpen size={13} /> Coming soon</span>
            </div>
          </div>
        </section>

        {/* ── 5. CASE STUDIES ── */}
        <section id="work" className="work-section section-pad">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="eyebrow">CASE STUDIES</div>
                <h2>Real work, real problems, real outcomes</h2>
              </div>
              <p>Select a case study to preview. Click View Case Study to read the full write-up.</p>
            </div>
            <CaseStudySection />
          </div>
        </section>

        {/* ── 6. EXPERIENCE ── */}
        <section id="experience" className="experience-section section-pad">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="eyebrow">EXPERIENCE</div>
                <h2>Three companies, one direction</h2>
              </div>
              <p>From functional testing to AI systems — each role added technical depth, broader ownership, and stronger collaboration.</p>
            </div>
            <ExperienceSection />
          </div>
        </section>

        {/* ── 7. RESUME ── */}
        <section id="resume" className="resume-section section-pad">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <div className="eyebrow">RESUME</div>
                <h2>The formal record</h2>
              </div>
              <p>This portfolio shows depth beyond what a resume can. But here's the formal version too.</p>
            </div>
            <div className="resume-card reveal">
              <div className="resume-preview">
                <div className="resume-mock">
                  <div className="rm-name">Ankita Nandal</div>
                  <div className="rm-title">Software Development Engineer in Test</div>
                  <div className="rm-contact">
                    <LinkedInIcon size={11} color="#0A66C2" /> LinkedIn
                  </div>
                  <div className="rm-divider" />
                  <div className="rm-section">
                    <div className="rm-section-label">Technical Skills</div>
                    <div className="rm-skill-line">Testing: Manual · Regression · Functional · E2E · ETL · Prompt · Load</div>
                    <div className="rm-skill-line">Automation: Playwright (Python) · PyTest · Katalon · RainforestQA</div>
                    <div className="rm-skill-line">API & DB: Postman · REST API · MySQL · MongoDB · Neo4j · PostgreSQL</div>
                    <div className="rm-skill-line">AI/ML: LLM Prompt Testing · RAG Validation · MCP Agent Testing</div>
                    <div className="rm-skill-line">Cloud: AWS EC2 · S3 · OpenSearch · Elasticsearch · Airbyte · ArgoCD</div>
                  </div>
                  <div className="rm-divider" />
                  <div className="rm-section">
                    <div className="rm-section-label">Experience</div>
                    <div className="rm-exp-row"><b>Fermi Development</b><span>Feb 2026 – Present</span></div>
                    <div className="rm-exp-row"><b>Bridging Technologies</b><span>Sep 2024 – Feb 2026</span></div>
                    <div className="rm-exp-row"><b>Tiara IT Services</b><span>Jan 2024 – Sep 2024</span></div>
                  </div>
                </div>
              </div>
              <div className="resume-actions">
                <h3>Ankita Nandal</h3>
                <p>SDET with 2.5+ years specialising in API testing, ETL validation, AI/LLM testing, database validation, and payment gateway QA.</p>
                <div className="resume-stats">
                  <div><strong>2.5+</strong><span>Years experience</span></div>
                  <div><strong>3</strong><span>Companies</span></div>
                  <div><strong>8+</strong><span>Skill categories</span></div>
                  <div><strong>30+</strong><span>Tools in stack</span></div>
                </div>
                <div className="resume-btns">
                  <a className="btn" href="/Ankita_Nandal_SDET.pdf" download="Ankita_Nandal_SDET.pdf" rel="noreferrer">
                    <Download size={16} /> Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. REACH OUT ── */}
        <section id="contact" className="contact-section section-pad">
          <div className="container">
            <div className="contact-shell reveal">
              <div className="contact-copy">
                <div className="eyebrow">REACH OUT</div>
                <h2>Let's talk testing, quality, or what you're building.</h2>
                <p>A role, a project, a question, or just a good conversation about testing. Happy to hear from you.</p>

                <div className="contact-links">
                  <a href="https://www.linkedin.com/in/ankita-nandal-2b9567247" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                    <LinkedInIcon size={18} color="#0A66C2" /> LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                    <BrandIcon icon={siGithub} size={18} color="var(--text)" /> GitHub
                  </a>
                </div>

                <div className="contact-points">
                  <span><CheckCircle2 size={16} /> Open to full-time SDET and QA engineering roles</span>
                  <span><CheckCircle2 size={16} /> Teams building AI, data, or complex backend systems</span>
                  <span><CheckCircle2 size={16} /> Honest conversations about testing and engineering</span>
                </div>
              </div>

              {sent ? (
                <div className="contact-success">
                  <CheckCircle2 size={44} strokeWidth={1.5} />
                  <h3>Sent.</h3>
                  <p>Your message landed in my inbox. I'll get back to you soon.</p>
                  <button
                    className="btn outline"
                    onClick={() => { setSent(false); setSendError(false); setForm({ name: '', email: '', topic: 'Discuss a QA opportunity', message: '' }); }}
                  >Send another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <label>
                    Name
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                  </label>
                  <label>
                    Topic
                    <select value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })}>
                      <option>Discuss a QA opportunity</option>
                      <option>Ask about my work</option>
                      <option>Technical collaboration</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={
                        form.topic === 'Discuss a QA opportunity'  ? 'Tell me about the role, team size, and what you are looking for in a QA engineer...' :
                        form.topic === 'Ask about my work'         ? 'Which project or area are you curious about? Happy to go deeper...' :
                        form.topic === 'Technical collaboration'   ? 'What are you building, and where does quality fit in? I would love to hear...' :
                                                                     'Go ahead — what is on your mind?'
                      }
                    />
                  </label>
                  {sendError && <p className="contact-error">Something went wrong — try again or reach me on LinkedIn.</p>}
                  <button className="btn" type="submit" disabled={sending}>
                    {sending ? 'Sending…' : <><span>Start a Conversation</span> <ArrowRight size={17} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer footer-center">
          <span className="footer-copy">© {new Date().getFullYear()} Ankita Nandal · SDET</span>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APP — router root
───────────────────────────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
