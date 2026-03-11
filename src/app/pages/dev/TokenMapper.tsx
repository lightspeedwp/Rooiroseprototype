// ─── TokenMapper.tsx ─────────────────────────────────────────────────────────
// Legacy redirect — Token Mapper merged into Design System as 7th tab (Phase 21).
// Route `/ontwikkelaar/token-kartering` now renders <DesignSystem /> directly via routes.tsx.
// This file is retained per the Phase 16 merge pattern (never delete, keep as redirect).
// ─────────────────────────────────────────────────────────────────────────────

import { Navigate } from 'react-router';

export const TokenMapper = () => (
  <Navigate to="/ontwikkelaar/ontwerpstelsel" replace />
);

export default TokenMapper;
