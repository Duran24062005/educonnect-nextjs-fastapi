import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar" // Ensure this path is correct or update it to the correct path
import { DocCard } from "./components/doc-card"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome to the Documentation</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <DocCard
              title="Getting Started with Next.js"
              description="Learn how to set up your Next.js project and integrate it with FastAPI backend. This guide covers the basic concepts and best practices."
              date="2024-01-13"
              category="Frontend"
            />
            <DocCard
              title="FastAPI Integration Guide"
              description="Comprehensive guide on setting up FastAPI routes, authentication, and connecting with your Next.js frontend application."
              date="2024-01-13"
              category="Backend"
            />
            <DocCard
              title="API Documentation"
              description="Complete API reference with all available endpoints, request/response formats, and authentication requirements."
              date="2024-01-13"
              category="API"
            />
            <DocCard
              title="Deployment Guide"
              description="Step-by-step instructions for deploying your Next.js and FastAPI application to production environments."
              date="2024-01-13"
              category="DevOps"
            />
          </div>
        </main>
      </div>
    </div>
  )
}