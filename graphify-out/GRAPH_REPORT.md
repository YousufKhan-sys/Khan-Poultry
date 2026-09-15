# Graph Report - Khan Poultry  (2026-09-15)

## Corpus Check
- 113 files · ~762,378 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: .avif 4, (none) 1, .css 1)

## Summary
- 607 nodes · 1394 edges · 34 communities (24 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- cart.ts
- data.ts
- orders.ts
- drizzle-orm
- [slug]/page.tsx
- schema.ts
- getDb
- wipay.ts
- compilerOptions
- package.json
- index.ts
- ProductGrid.tsx
- Feedback.tsx
- devDependencies
- Khan's Poultry API Documentation
- dependencies
- Deployment Guide
- orders/[id]/page.tsx
- fetch-product-images.py
- settings/page.tsx
- validation.ts
- scripts
- products/page.tsx
- jwt.ts
- session.ts
- frontend/README.md
- AGENTS.md
- frontend/AGENTS.md
- graphify.js
- eslint.config.mjs
- postcss.config.mjs
- opencode.json

## God Nodes (most connected - your core abstractions)
1. `getDb()` - 72 edges
2. `ok()` - 50 edges
3. `handleError()` - 50 edges
4. `ApiError` - 36 edges
5. `drizzle-orm` - 26 edges
6. `requirePermission()` - 24 edges
7. `createOrder()` - 18 edges
8. `compilerOptions` - 16 edges
9. `react` - 15 edges
10. `getIp()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `AdminSettingsPage()` --calls--> `requirePermission()`  [EXTRACTED]
  frontend/src/app/admin/settings/page.tsx → frontend/src/lib/auth/session.ts
- `clearCart()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/cart.ts → frontend/src/lib/db/index.ts
- `setPaymentStatus()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/payments.ts → frontend/src/lib/db/index.ts
- `SignedInView()` --calls--> `money()`  [EXTRACTED]
  frontend/src/app/account/page.tsx → frontend/src/lib/catalog-format.ts
- `AdminLayout()` --calls--> `requireAdmin()`  [EXTRACTED]
  frontend/src/app/admin/layout.tsx → frontend/src/lib/auth/session.ts

## Import Cycles
- None detected.

## Communities (34 total, 8 thin omitted)

### Community 0 - "cart.ts"
Cohesion: 0.08
Nodes (31): GET(), clean(), MenuPage(), metadata, PageProps, TYPES, wrap(), SORTS (+23 more)

### Community 1 - "data.ts"
Cohesion: 0.06
Nodes (32): AboutUs(), FILMSTRIP, MISSION, STATS, VISION, CHANNELS, Contact(), Cta() (+24 more)

### Community 2 - "orders.ts"
Cohesion: 0.11
Nodes (23): audit(), auditAdmin(), currentCartView(), auditLogs, settings, createOrder(), dateInputToTs(), findOrderByNumberAndEmail() (+15 more)

### Community 3 - "drizzle-orm"
Cohesion: 0.29
Nodes (7): Ctx, Ctx, orderItems, orders, payments, products, drizzle-orm

### Community 4 - "[slug]/page.tsx"
Cohesion: 0.16
Nodes (9): nextConfig, generateMetadata(), Props, RecipePage(), ShareRecipeForm(), getRecipe(), Recipe, RECIPES (+1 more)

### Community 5 - "schema.ts"
Cohesion: 0.13
Nodes (12): Branch, Cart, CartItem, Category, Order, OrderItem, Payment, Permission (+4 more)

### Community 6 - "getDb"
Cohesion: 0.09
Nodes (53): AdminCustomersPage(), AdminOrderDetailPage(), AdminOrdersPage(), AdminProductEditPage(), AdminProductsPage(), POST(), PATCH(), Ctx (+45 more)

### Community 7 - "wipay.ts"
Cohesion: 0.29
Nodes (6): GET(), parseWiPayCallback(), verifyWiPayHash(), WiPayCallback, WiPayPaymentRequest, WiPayPaymentResponse

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (18): name, private, version, bcryptjs, better-sqlite3, drizzle-kit, eslint, eslint-config-next (+10 more)

### Community 10 - "index.ts"
Cohesion: 0.13
Nodes (20): cleanSlug(), hashPassword(), DB, doInit(), g, permissions, rolePermissions, ALL_PERMISSIONS (+12 more)

### Community 11 - "ProductGrid.tsx"
Cohesion: 0.06
Nodes (48): AccountPage(), Me, OrderView, SignedInView(), STATUS_LABEL, ProductFilters(), Branch, CheckoutPage() (+40 more)

### Community 13 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, drizzle-kit, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx, @types/better-sqlite3 (+4 more)

### Community 14 - "Khan's Poultry API Documentation"
Cohesion: 0.06
Nodes (33): Admin Endpoints, Auth Endpoints, Authentication, Base URL, Cart, DELETE /api/admin/products/[id], DELETE /api/cart/items/[id], Error Responses (+25 more)

### Community 15 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, bcryptjs, better-sqlite3, date-fns, drizzle-orm, gsap, jose, next (+3 more)

### Community 16 - "Deployment Guide"
Cohesion: 0.08
Nodes (24): "Admin login fails", Automated Backups, Backup Strategy, "Build failed", Database Backups (SQLite), "Database is locked" (SQLite), Database Setup, Deployment Guide (+16 more)

### Community 17 - "orders/[id]/page.tsx"
Cohesion: 0.18
Nodes (9): OrderFilters(), STATUSES, Order, OrderActions(), STATUS_FLOW, OrderStatusBadge(), OrderRow, OrderTable() (+1 more)

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 20 - "validation.ts"
Cohesion: 0.08
Nodes (40): POST(), POST(), POST(), POST(), POST(), getIp(), verifyPassword(), createResetToken() (+32 more)

### Community 21 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, db:generate, db:studio, dev, lint, start, test

### Community 22 - "products/page.tsx"
Cohesion: 0.24
Nodes (6): Category, Product, ProductForm(), ProductRow, ProductTable(), categories

### Community 23 - "jwt.ts"
Cohesion: 0.25
Nodes (6): secret, SessionClaims, signSession(), env, usingMockSecret, jose

### Community 24 - "session.ts"
Cohesion: 0.13
Nodes (15): AdminLayout(), AdminNav(), NAV_ITEMS, AdminDashboardPage(), verifySession(), COOKIE_OPTS, getSession(), requireAdmin() (+7 more)

### Community 27 - "frontend/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **213 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+208 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 257 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drizzle-orm` connect `drizzle-orm` to `cart.ts`, `orders.ts`, `getDb`, `package.json`, `index.ts`, `orders/[id]/page.tsx`, `validation.ts`, `products/page.tsx`, `session.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `react` connect `ProductGrid.tsx` to `cart.ts`, `[slug]/page.tsx`, `package.json`, `Feedback.tsx`, `orders/[id]/page.tsx`, `settings/page.tsx`, `products/page.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `getDb()` connect `getDb` to `cart.ts`, `orders.ts`, `drizzle-orm`, `wipay.ts`, `index.ts`, `orders/[id]/page.tsx`, `validation.ts`, `products/page.tsx`, `session.ts`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _213 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `cart.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0782051282051282 - nodes in this community are weakly interconnected._
- **Should `data.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06168831168831169 - nodes in this community are weakly interconnected._
- **Should `orders.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11083743842364532 - nodes in this community are weakly interconnected._