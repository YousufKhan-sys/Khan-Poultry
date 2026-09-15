# Graph Report - Khan Poultry  (2026-09-14)

## Corpus Check
- 111 files · ~665,677 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: .avif 4, (none) 1, .css 1)

## Summary
- 602 nodes · 1377 edges · 33 communities (24 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- getDb
- data.ts
- validation.ts
- index.ts
- [slug]/page.tsx
- schema.ts
- handleError
- callback/route.ts
- compilerOptions
- package.json
- seed.ts
- ProductGrid.tsx
- Feedback.tsx
- devDependencies
- Khan's Poultry API Documentation
- dependencies
- Deployment Guide
- orders/[id]/page.tsx
- fetch-product-images.py
- products/page.tsx
- reset.ts
- scripts
- drizzle-kit
- jwt.ts
- AboutUs.tsx
- frontend/README.md
- AGENTS.md
- frontend/AGENTS.md
- graphify.js
- eslint.config.mjs
- postcss.config.mjs
- opencode.json

## God Nodes (most connected - your core abstractions)
1. `getDb()` - 70 edges
2. `ok()` - 48 edges
3. `handleError()` - 48 edges
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

## Communities (33 total, 8 thin omitted)

### Community 0 - "getDb"
Cohesion: 0.07
Nodes (55): GET(), Ctx, DELETE(), PATCH(), GET(), fail(), invalid(), audit() (+47 more)

### Community 1 - "data.ts"
Cohesion: 0.07
Nodes (31): CHANNELS, Contact(), Cta(), Footer(), CATES, Hero(), Instagram(), POSTS (+23 more)

### Community 2 - "validation.ts"
Cohesion: 0.06
Nodes (34): GET(), GET(), clean(), MenuPage(), metadata, PageProps, TYPES, wrap() (+26 more)

### Community 3 - "index.ts"
Cohesion: 0.29
Nodes (5): DB, g, notifications, NotificationEvent, better-sqlite3

### Community 4 - "[slug]/page.tsx"
Cohesion: 0.21
Nodes (7): generateMetadata(), Props, RecipePage(), ShareRecipeForm(), getRecipe(), Recipe, RECIPES

### Community 5 - "schema.ts"
Cohesion: 0.12
Nodes (14): Branch, Cart, CartItem, cartItems, carts, Category, Order, OrderItem (+6 more)

### Community 6 - "handleError"
Cohesion: 0.09
Nodes (55): AdminCustomersPage(), Ctx, POST(), Ctx, PATCH(), Ctx, PATCH(), Ctx (+47 more)

### Community 7 - "callback/route.ts"
Cohesion: 0.33
Nodes (6): GET(), parseWiPayCallback(), verifyWiPayHash(), WiPayCallback, WiPayPaymentRequest, WiPayPaymentResponse

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.12
Nodes (16): name, private, version, bcryptjs, eslint, eslint-config-next, react-dom, tailwindcss (+8 more)

### Community 10 - "seed.ts"
Cohesion: 0.15
Nodes (17): cleanSlug(), doInit(), permissions, rolePermissions, ALL_PERMISSIONS, ensureAdminUser(), ensureCatalog(), ensureRoles() (+9 more)

### Community 11 - "ProductGrid.tsx"
Cohesion: 0.05
Nodes (49): nextConfig, AccountPage(), Me, OrderView, SignedInView(), STATUS_LABEL, OrderFilters(), STATUSES (+41 more)

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
Cohesion: 0.16
Nodes (11): Order, OrderActions(), STATUS_FLOW, AdminOrderDetailPage(), AdminOrdersPage(), OrderStatusBadge(), OrderRow, OrderTable() (+3 more)

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 19 - "products/page.tsx"
Cohesion: 0.10
Nodes (15): AdminLayout(), AdminNav(), NAV_ITEMS, AdminDashboardPage(), ProductFilters(), Category, Product, ProductForm() (+7 more)

### Community 20 - "reset.ts"
Cohesion: 0.48
Nodes (6): createResetToken(), markTokenUsed(), sha256(), storeResetToken(), userIdForResetToken(), passwordResetTokens

### Community 21 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, db:generate, db:studio, dev, lint, start, test

### Community 23 - "jwt.ts"
Cohesion: 0.22
Nodes (7): secret, SessionClaims, signSession(), verifySession(), env, usingMockSecret, jose

### Community 25 - "AboutUs.tsx"
Cohesion: 0.33
Nodes (4): AboutUs(), FILMSTRIP, MISSION, VISION

### Community 27 - "frontend/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **212 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+207 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 256 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `drizzle-orm` connect `handleError` to `getDb`, `callback/route.ts`, `package.json`, `seed.ts`, `orders/[id]/page.tsx`, `products/page.tsx`, `reset.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `react` connect `ProductGrid.tsx` to `data.ts`, `validation.ts`, `[slug]/page.tsx`, `package.json`, `Feedback.tsx`, `orders/[id]/page.tsx`, `products/page.tsx`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `getDb()` connect `getDb` to `validation.ts`, `index.ts`, `handleError`, `callback/route.ts`, `seed.ts`, `orders/[id]/page.tsx`, `products/page.tsx`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _212 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `getDb` be split into smaller, more focused modules?**
  _Cohesion score 0.07281772953414745 - nodes in this community are weakly interconnected._
- **Should `data.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06748911465892599 - nodes in this community are weakly interconnected._
- **Should `validation.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06090808416389812 - nodes in this community are weakly interconnected._