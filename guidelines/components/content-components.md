# Content Components

**Last updated**: 2026-03-03
**Version**: 1.0

These components are responsible for displaying news articles and lists.

## `ArticleCard`
*   **Path**: `/src/app/components/atoms/ArticleCard.tsx`
*   **Description**: The primary unit of the interface. Displays an article's thumbnail, category, title, author, and excerpt.
*   **Props**:
    *   `variant`: `'small'` (horizontal list style) | `'large'` (vertical card style).
    *   `image`: URL string.
    *   `category`: String (e.g., "Nuus").
    *   `title`, `author`, `date`, `excerpt`.
*   **WordPress Conversion**:
    *   **Type**: Block Pattern (inside Query Loop).
    *   **Strategy**: This is the "Post Template" block. We will create two patterns: "Post Card Large" and "Post Card Small (Row)".

## `Hero`
*   **Path**: `/src/app/components/home/Hero.tsx`
*   **Description**: The homepage hero section. Features one large "Lead Story" on the left (2/3) and a "Nuusflitse" (Breaking News) list on the right (1/3).
*   **WordPress Conversion**:
    *   **Type**: Synced Pattern.
    *   **Blocks**: `core/columns` (66/33 split). Left column: `core/cover` (with gradient overlay). Right column: `core/query-loop` (Latest 5 posts, list view).

## `HeroSlider` (Category Archive)
*   **Path**: Inline in `/src/app/pages/Category.tsx`
*   **Description**: A custom carousel (vanilla React with `useState`/`useEffect`) that shows featured articles as full-width hero slides in category archive pages. Each slide uses the same gradient overlay + content layout as the single hero. Falls back to a single hero when ≤1 featured article exists.
*   **Data**: Articles with `featured: true` in `CategoryArticle` (from `/src/app/data/categoryArticles.ts`). Use `getFeaturedArticles(category)` to filter.
*   **Features**:
    *   Auto-advance every 6s with fade transition.
    *   Prev/Next arrow buttons (visible on hover).
    *   Animated dot indicators (active = red pill, inactive = white circle).
    *   `pauseOnHover: true` for accessibility.
*   **Dependencies**: None (custom implementation — no external carousel library).

## `FeatureGrid`
*   **Path**: `/src/app/components/home/FeatureGrid.tsx`
*   **Description**: A grid layout usually displaying 3 or 4 cards in a row.
*   **WordPress Conversion**:
    *   **Type**: Block Pattern.
    *   **Blocks**: `core/query-loop` with Grid layout.

## `BreakingNews`
*   **Path**: `/src/app/components/home/BreakingNews.tsx`
*   **Description**: A ticker or list of urgent headlines.
*   **WordPress Conversion**:
    *   **Type**: Custom Block or Pattern.
    *   **Strategy**: Use a "Ticker" block plugin or a Query Loop filtered by "Breaking" tag/category.

## `MultimediaSection`
*   **Path**: `/src/app/components/home/MultimediaSection.tsx`
*   **Description**: Dark-themed section showing video content with play button overlays.
*   **WordPress Conversion**:
    *   **Type**: Pattern.
    *   **Blocks**: `core/group` (Dark background), `core/query-loop` (Video post format).

## `OpinionSection`
*   **Path**: `/src/app/components/home/OpinionSection.tsx`
*   **Description**: Specifically styled cards for "Dink" (Opinion), emphasizing the author's face/avatar over a news thumbnail.
*   **WordPress Conversion**:
    *   **Type**: Pattern.
    *   **Strategy**: Query Loop filtering "Opinion" category. Post Template uses Author Avatar block instead of Featured Image.

## `ImageWithFallback`
*   **Path**: `/src/app/components/figma/ImageWithFallback.tsx`
*   **Description**: Wrapper for `img` that handles error states.
*   **WordPress Conversion**:
    *   **Strategy**: Native WordPress `core/image` block handles this automatically.

## Ad Slot Coverage
The following pages include ad components (`LeaderboardAd`, `SidebarAds`, `InFeedAd`, `StickyMobileFooter`):
*   **Article** (`Article.tsx`) — Leaderboard, Sidebar, In-feed, Sticky mobile
*   **Category** (`Category.tsx`) — Leaderboard, Sidebar, In-feed
*   **Search Results** (`SearchResults.tsx`) — Sidebar, Sticky mobile
*   **Obituaries** (`Obituaries.tsx`) — Leaderboard, Sidebar, In-feed
*   **Multimedia** (`Multimedia.tsx`) — Leaderboard, Sidebar, In-feed
*   **Single Multimedia** (`SingleMultimedia.tsx`) — Leaderboard, Sidebar, In-feed
*   **E-uitgawes** (`EEditions.tsx`) — Leaderboard, Sidebar, In-feed
*   **Gebeure** (`Events.tsx`) — Leaderboard, Sidebar, In-feed
*   **Single Gebeure** (`SingleEvent.tsx`) — Leaderboard, Sidebar, In-feed
*   **Home** (`Home.tsx`) — Leaderboard, Sidebar

## Pagination Pattern
Pages with pagination use a consistent pattern with `ChevronLeft`/`ChevronRight` icons and numbered page buttons. The active page uses `bg-[#D70025] text-white`. Pages with pagination:
*   **Obituaries** — 6 items per page
*   **Events** — 8 items per page (resets on category filter change)
*   **Multimedia** — 6 items per page, separate pagination state per tab (Videos, Fotogalerye, Podcasts)
*   **Category** — existing pagination in Category.tsx template