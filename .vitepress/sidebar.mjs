export default [
  {
    text: "Getting Started",
    items: [
      { text: "Quick Start", link: "/getting-started/quickstart" },
      { text: "Installation", link: "/getting-started/installation" }
    ]
  },
  {
    text: "Architecture",
    collapsed: false,
    items: [
      { text: "Overview", link: "/architecture/overview" },
      { text: "Message Protocol", link: "/architecture/message-protocol" },
      { text: "Plugin System", link: "/architecture/plugin-system" },
      { text: "Transport Layer", link: "/architecture/transport-layer" },
      { text: "Session Management", link: "/architecture/session-management" }
    ]
  },
  {
    text: "SDK Reference",
    collapsed: false,
    items: [
      { text: "Client API", link: "/sdk-reference/client-api" },
      { text: "Server API", link: "/sdk-reference/server-api" },
      { text: "Configuration", link: "/sdk-reference/configuration" },
      { text: "Audit System", link: "/sdk-reference/audit" },
      { text: "Persistence (Store)", link: "/sdk-reference/store" }
    ]
  },
  {
    text: "Capabilities",
    collapsed: false,
    items: [
      { text: "Tools", link: "/capabilities/tools" },
      { text: "Memory", link: "/capabilities/memory" },
      { text: "Environment", link: "/capabilities/env" },
      { text: "Processes", link: "/capabilities/proc" },
      { text: "Learning", link: "/capabilities/learn" },
      { text: "Skills", link: "/capabilities/skills" },
      { text: "Toolkits", link: "/capabilities/toolkits" },
      { text: "Chains", link: "/capabilities/chains" },
      { text: "MCP Bridge", link: "/capabilities/mcp" }
    ]
  },
  {
    text: "Protocol Specification",
    collapsed: false,
    items: [
      { text: "Message Format", link: "/protocol-spec/message-format" },
      { text: "Handshake", link: "/protocol-spec/handshake" },
      { text: "Capability Negotiation", link: "/protocol-spec/capability-negotiation" },
      { text: "Message Types", link: "/protocol-spec/message-types" },
      { text: "Error Codes", link: "/protocol-spec/error-codes" }
    ]
  },
  {
    text: "Cookbook",
    collapsed: false,
    items: [
      { text: "Writing a Plugin", link: "/cookbook/writing-a-plugin" },
      { text: "Environment Agent Loop", link: "/cookbook/env-agent-loop" },
      { text: "Chain Pipeline", link: "/cookbook/chain-pipeline" },
      { text: "MCP Integration", link: "/cookbook/mcp-integration" }
    ]
  }
]