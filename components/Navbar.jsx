```css
.nav-link {
  /* ...existing code... */
}

/* Enhanced light theme styling for navigation */
.light .nav-link {
  color: var(--light-text);
  font-weight: 500;
}

.light .nav-link:hover {
  color: var(--light-primary);
}

.light .nav-link.active {
  color: var(--light-primary);
  font-weight: 600;
}

/* Keep dark theme styling unchanged */
.dark .nav-link {
  /* ...existing code... */
}
```