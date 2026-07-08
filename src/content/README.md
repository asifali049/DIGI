# Content Collections

This directory contains the application's content layer.

## Current Collections

- Blog

## Planned Collections

- Portfolio
- Case Studies
- Authors
- Services
- Testimonials

## Structure

```
content/
├── blog/
├── config.ts
├── index.ts
├── types.ts
├── utils.ts
```

## Design Principles

- Single source of truth
- Collection-based architecture
- CMS ready
- MDX ready
- Prisma ready
- Type-safe
- Reusable
- Scalable
- No duplicated business logic

## Data Flow

MDX
↓
lib/blog.ts
↓
content/config.ts
↓
content/index.ts
↓
content/utils.ts
↓
Pages / Components