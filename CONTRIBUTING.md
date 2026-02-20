# Contributing Guidelines

## Branch Strategy

- main → Production
- dev → Integration
- feature/* → Feature development

## Workflow

1. Create Jira ticket
2. Create feature branch:
   feature/FACMP-#-short-description
3. Commit using format:
   FACMP-#: Description
4. Open Pull Request → dev
5. After sprint completion → dev → main

---

## Commit Message Format

FACMP-#: Short clear description

Example:
FACMP-2: Implement navigation state routing

---

## Code Standards

- Functional React components
- Clear naming conventions
- Accessibility-first mindset
- Maintain semantic HTML
- Avoid unnecessary ARIA usage

---

## Accessibility Requirements

All contributions must:

- Support keyboard navigation
- Preserve visible focus states
- Maintain WCAG AA contrast minimum
- Avoid color-only communication
