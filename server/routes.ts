import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve static files from root directory
  app.use(express.static(path.join(process.cwd())));

  // Route for static HTML portfolio
  app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // Serve CSS and JS files
  app.get('/style.css', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'style.css'));
  });

  app.get('/script.js', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'script.js'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
