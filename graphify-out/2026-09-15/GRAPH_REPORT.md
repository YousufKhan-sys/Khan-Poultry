# Graph Report - Khan Poultry  (2026-09-15)

## Corpus Check
- 113 files · ~762,066 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: .avif 4, (none) 1, .css 1)

## Summary
- 606 nodes · 1391 edges · 36 communities (26 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- getDb
- data.ts
- catalog.ts
- orders/[id]/page.tsx
- [slug]/page.tsx
- schema.ts
- handleError
- callback/route.ts
- compilerOptions
- package.json
- index.ts
- ProductGrid.tsx
- Feedback.tsx
- devDependencies
- Khan's Poultry API Documentation
- dependencies
- Deployment Guide
- orders/page.tsx
- fetch-product-images.py
- products/page.tsx
- validation.ts
- scripts
- products/[id]/page.tsx
- jwt.ts
- admin/layout.tsx
- AboutUs.tsx
- menu.ts
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
- `CartButton()` --calls--> `useCart()`  [EXTRACTED]
  frontend/src/components/Navbar.tsx → frontend/src/components/cart/CartProvider.tsx
- `SignedInView()` --calls--> `money()`  [EXTRACTED]
  frontend/src/app/account/page.tsx → frontend/src/lib/catalog-format.ts
- `AdminCustomersPage()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/app/admin/customers/page.tsx → frontend/src/lib/db/index.ts
- `AdminLayout()` --calls--> `requireAdmin()`  [EXTRACTED]
  frontend/src/app/admin/layout.tsx → frontend/src/lib/auth/session.ts

## Import Cycles
- None detected.

## Communities (36 total, 8 thin omitted)

### Community 0 - "getDb"
Cohesion: 0.09
Nodes (46): GET(), POST(), GET(), audit(), auditAdmin(), getSession(), addItems(), CART_TOKEN_COOKIE (+38 more)

### Community 1 - "data.ts"
Cohesion: 0.07
Nodes (30): CHANNELS, Contact(), Cta(), CATES, Hero(), Instagram(), POSTS, LambFeature() (+22 more)

### Community 2 - "catalog.ts"
Cohesion: 0.11
Nodes (19): GET(), GET(), GET(), clean(), MenuPage(), metadata, PageProps, TYPES (+11 more)

### Community 3 - "orders/[id]/page.tsx"
Cohesion: 0.29
Nodes (6): Order, OrderActions(), STATUS_FLOW, AdminOrderDetailPage(), branches, orderItems

### Community 4 - "[slug]/page.tsx"
Cohesion: 0.21
Nodes (7): generateMetadata(), Props, RecipePage(), ShareRecipeForm(), getRecipe(), Recipe, RECIPES

### Community 5 - "schema.ts"
Cohesion: 0.12
Nodes (13): Branch, Cart, CartItem, carts, Category, Order, OrderItem, Payment (+5 more)

### Community 6 - "handleError"
Cohesion: 0.08
Nodes (55): AdminCustomersPage(), AdminLayout(), AdminDashboardPage(), Ctx, POST(), Ctx, PATCH(), Ctx (+47 more)

### Community 7 - "callback/route.ts"
Cohesion: 0.33
Nodes (6): GET(), parseWiPayCallback(), verifyWiPayHash(), WiPayCallback, WiPayPaymentRequest, WiPayPaymentResponse

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.11
Nodes (16): name, private, version, bcryptjs, drizzle-kit, eslint, eslint-config-next, react-dom (+8 more)

### Community 10 - "index.ts"
Cohesion: 0.16
Nodes (17): cleanSlug(), DB, doInit(), g, permissions, rolePermissions, ALL_PERMISSIONS, ensureAdminUser() (+9 more)

### Community 11 - "ProductGrid.tsx"
Cohesion: 0.05
Nodes (49): nextConfig, AccountPage(), Me, OrderView, SignedInView(), STATUS_LABEL, STATUSES, SettingsForm() (+41 more)

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

### Community 17 - "orders/page.tsx"
Cohesion: 0.28
Nodes (6): OrderFilters(), AdminOrdersPage(), OrderStatusBadge(), OrderRow, OrderTable(), date-fns

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 19 - "products/page.tsx"
Cohesion: 0.38
Nodes (4): ProductFilters(), AdminProductsPage(), ProductRow, ProductTable()

### Community 20 - "validation.ts"
Cohesion: 0.08
Nodes (41): POST(), POST(), POST(), POST(), POST(), getIp(), hashPassword(), verifyPassword() (+33 more)

### Community 21 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, db:generate, db:studio, dev, lint, start, test

### Community 22 - "products/[id]/page.tsx"
Cohesion: 0.33
Nodes (5): Category, Product, ProductForm(), AdminProductEditPage(), categories

### Community 23 - "jwt.ts"
Cohesion: 0.22
Nodes (7): secret, SessionClaims, signSession(), verifySession(), env, usingMockSecret, jose

### Community 25 - "AboutUs.tsx"
Cohesion: 0.33
Nodes (4): AboutUs(), FILMSTRIP, MISSION, VISION

### Community 26 - "menu.ts"
Cohesion: 0.50
Nodes (3): MENU, MenuCategory, MenuItem

### Community 27 - "frontend/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **212 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+207 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 256 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drizzle-orm` connect `handleError` to `getDb`, `catalog.ts`, `orders/[id]/page.tsx`, `callback/route.ts`, `package.json`, `index.ts`, `orders/page.tsx`, `products/page.tsx`, `validation.ts`, `products/[id]/page.tsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `react` connect `ProductGrid.tsx` to `data.ts`, `catalog.ts`, `orders/[id]/page.tsx`, `[slug]/page.tsx`, `package.json`, `Feedback.tsx`, `products/page.tsx`, `products/[id]/page.tsx`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `getDb()` connect `getDb` to `catalog.ts`, `orders/[id]/page.tsx`, `handleError`, `callback/route.ts`, `index.ts`, `orders/page.tsx`, `products/page.tsx`, `validation.ts`, `products/[id]/page.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _212 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `getDb` be split into smaller, more focused modules?**
  _Cohesion score 0.08571428571428572 - nodes in this community are weakly interconnected._
- **Should `data.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0693815987933635 - nodes in this community are weakly interconnected._
- **Should `catalog.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._