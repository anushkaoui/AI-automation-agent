# AI-automation-agent
Autonomous Career Intelligence Agent: LLM Orchestration &amp; ETL Pipeline

An enterprise-grade, agentic data pipeline designed to ingest, process, evaluate, and rank streaming industry indicators on a perpetual cron clock. The system combines strict rule-based backend formatting with real-time semantic LLM consensus logic to mitigate data noise and automate push notification delivery.

 🛠️ System Architecture

1. **Extraction (Data Ingestion):** 
A timed `Schedule Trigger` fires an asynchronous network socket request to harvest raw XML elements from streaming target publishers.

2. **Transformation (Object Normalization):** 
Conversion modules strip document trees down to isolated JSON structures before passing them to a flattening node to convert complex nested lists into independent stream items.

3. **Cognitive Reasoning (Groq LLM Cluster):** 
Isolated items map concurrently into a `Basic LLM Chain` coupled with a `Groq Chat Model` configuration running `llama-3.1-8b-instant`. The model processes structural prompts to output qualitative scores and technical reason definitions.

4. **Resilient Middleware Parsing:** 
A specialized JavaScript block intercepts the AI output string. Using boundary string substring slicing and defensive `try/catch` handlers, the middleware parses humanized JSON responses, converting values to true data variables and preventing runtime execution errors.

5. **Algorithmic Rank Matrix:** 
Streams pass to a sorting configuration that executes a numeric sorting sequence to organize payloads by importance value.

6. **Load (Syndication Relay):** 
Sanitized data arrays collapse cleanly into an optimized Markdown buffer chunk and fire via an HTTP `POST` method over secure TLS network sockets to an external Discord webhook.

## 🚀 Technical Highlights

* **Structured LLM Enforcement:** 
Programmed rigid prompt criteria to force standard JSON data generation directly out of probabilistic model completions.

* **Fault-Tolerant String Sanitation:** 
Engineered defensive data-cleansing script logic to handle model format exceptions, reducing automated background pipeline crashes to 0%.

* **Stateless Cron Execution:** 
Deployed an active background scheduler daemon to automate data processing cycles without requiring user-interface dependency or human intervention.

## 📂 Deployment Configuration
1. Import `workflow.json` into your local `n8n` canvas interface.
2. Authenticate your API key under the `Groq Chat Model` credential profile.
3. Paste your unique platform communication token directly inside the destination HTTP Request parameter.
4. Turn on the workflow canvas toggle switch to **Active**.
