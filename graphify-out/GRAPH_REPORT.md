# Graph Report - Khan Poultry  (2026-10-03)

## Corpus Check
- 96 files · ~1,740,733 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .avif 4, (none) 3, .css 1)

## Summary
- 537 nodes · 890 edges · 25 communities (17 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ee749bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Feedback.tsx
- Photo Credits
- analytics-dashboard.tsx
- compilerOptions
- package.json
- admin/seed.ts
- Khan's Poultry API Documentation
- catalog.ts
- Deployment Guide
- fetch-product-images.py
- demo-store.ts
- CartProvider.tsx
- DirectionShowcase.tsx
- Khan Poultry — Frontend
- AGENTS.md
- frontend/AGENTS.md
- AboutUs.tsx
- graphify.js
- eslint.config.mjs
- postcss.config.mjs
- opencode.json
- validation.ts
- [slug]/page.tsx

## God Nodes (most connected - your core abstractions)
1. `useDemoDb()` - 26 edges
2. `react` - 25 edges
3. `compilerOptions` - 16 edges
4. `seedDb()` - 13 edges
5. `ProductGrid()` - 12 edges
6. `Deployment Guide` - 12 edges
7. `CartProvider()` - 11 edges
8. `Khan's Poultry API Documentation` - 10 edges
9. `useCart()` - 9 edges
10. `listBranchOptions()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `DemoDb` --references--> `SiteSettings`  [EXTRACTED]
  seed.ts → frontend/src/lib/settings.ts
- `generateStaticParams()` --calls--> `seedDb()`  [EXTRACTED]
  frontend/src/app/admin/orders/[id]/page.tsx → frontend/src/lib/admin/seed.ts
- `seedProducts()` --calls--> `listAllProducts()`  [EXTRACTED]
  seed.ts → frontend/src/lib/catalog.ts
- `seedOrders()` --calls--> `listBranchOptions()`  [EXTRACTED]
  seed.ts → frontend/src/lib/catalog.ts
- `CheckoutPage()` --calls--> `useCart()`  [EXTRACTED]
  frontend/src/app/(site)/checkout/page.tsx → frontend/src/components/cart/CartProvider.tsx

## Import Cycles
- None detected.

## Communities (25 total, 6 thin omitted)

### Community 0 - "Feedback.tsx"
Cohesion: 0.25
Nodes (3): CATEGORIES, FACTS, Feedback()

### Community 1 - "Photo Credits"
Cohesion: 0.50
Nodes (3): Note on earlier-session images, Other sourced images, Photo Credits

### Community 7 - "analytics-dashboard.tsx"
Cohesion: 0.11
Nodes (24): AnalyticsDashboard(), Column, DeviceTable(), iso(), LocationTable(), presetRange(), PRESETS, rangeLabel() (+16 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.05
Nodes (37): dependencies, date-fns, gsap, next, react, react-dom, zod, devDependencies (+29 more)

### Community 12 - "admin/seed.ts"
Cohesion: 0.06
Nodes (44): OrderDetail(), STATUS_FLOW, generateStaticParams(), OrderStatusBadge(), getBranches(), CUSTOMERS, DB_VERSION, DELIVERY_AREAS (+36 more)

### Community 14 - "Khan's Poultry API Documentation"
Cohesion: 0.06
Nodes (33): Admin Endpoints, Auth Endpoints, Authentication, Base URL, Cart, DELETE /api/admin/products/[id], DELETE /api/cart/items/[id], Error Responses (+25 more)

### Community 15 - "catalog.ts"
Cohesion: 0.07
Nodes (42): CheckoutPage(), Confirmation(), OrderView, PAYMENT_LABELS, MenuContent(), wrap(), metadata, badges() (+34 more)

### Community 16 - "Deployment Guide"
Cohesion: 0.08
Nodes (24): "Admin login fails", Automated Backups, Backup Strategy, "Build failed", Database Backups (SQLite), "Database is locked" (SQLite), Database Setup, Deployment Guide (+16 more)

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 21 - "demo-store.ts"
Cohesion: 0.06
Nodes (43): CustomerDetail(), generateStaticParams(), AdminCustomersPage(), AdminLayout(), AdminLogin(), LogoutButton(), AdminNav(), NAV_ITEMS (+35 more)

### Community 23 - "CartProvider.tsx"
Cohesion: 0.08
Nodes (33): buildLine(), CartContext, CartContextValue, CartDrawer(), cartListeners, CartProvider(), cartSnapshot(), EMPTY (+25 more)

### Community 25 - "DirectionShowcase.tsx"
Cohesion: 0.05
Nodes (39): Categories(), CATES, CHANNELS, Contact(), Cta(), Dir, TABS, CATES (+31 more)

### Community 27 - "Khan Poultry — Frontend"
Cohesion: 0.33
Nodes (5): Admin demo, Checks, Deploy (GitHub Pages), Khan Poultry — Frontend, Run locally

### Community 33 - "AboutUs.tsx"
Cohesion: 0.33
Nodes (4): AboutUs(), MISSION, STATS, VISION

### Community 41 - "validation.ts"
Cohesion: 0.10
Nodes (19): CartItemInput, cartItemSchema, CartQuantityInput, cartQuantitySchema, changePasswordSchema, CheckoutInput, checkoutSchema, email (+11 more)

### Community 54 - "[slug]/page.tsx"
Cohesion: 0.09
Nodes (15): nextConfig, body, display, displaySerif, metadata, metadata, generateMetadata(), Props (+7 more)

## Knowledge Gaps
- **198 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+193 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 252 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `demo-store.ts` to `Feedback.tsx`, `analytics-dashboard.tsx`, `package.json`, `admin/seed.ts`, `catalog.ts`, `[slug]/page.tsx`, `CartProvider.tsx`, `DirectionShowcase.tsx`?**
  _High betweenness centrality (0.303) - this node is a cross-community bridge._
- **Why does `next` connect `[slug]/page.tsx` to `package.json`, `catalog.ts`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useDemoDb()` (e.g. with `loadDb()` and `subscribeDb()`) actually correct?**
  _`useDemoDb()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _198 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `analytics-dashboard.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10887096774193548 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05263157894736842 - nodes in this community are weakly interconnected._