```css
.project-card {
  /* ...existing code... */
}

/* Enhanced light theme styling for project cards */
.light .project-card {
  background-color: var(--light-card-bg);
  border: 1px solid var(--light-border);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.light .project-card h3 {
  color: var(--light-primary);
}

.light .project-card p {
  color: var(--light-text);
}

.light .project-card .tech-stack {
  color: var(--light-secondary);
}

/* Keep dark theme styling unchanged */
.dark .project-card {
  /* ...existing code... */
}
```