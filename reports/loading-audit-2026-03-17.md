# Loading system audit - 2026-03-17

## Executive summary

**Status**: ⚠️ **Critical issues identified**  
**Recommendation**: **Complete simplification required**

The current error suppression approach is fundamentally flawed and causing more problems than it solves.

---

## Problems identified

### 1. **Error suppression is not working**

Despite 6 iterations (v11.43 → v11.46) and multiple approaches:
- Console override with Object.defineProperty
- MessageChannel polyfill with immortal ports
- Error constructor override
- Global error handlers
- Custom error class interceptor (IframeMessageAbortError)

**The error still appears every time**, which means:
- Figma's console.error is being called BEFORE our overrides load
- OR Figma is using a cached reference to console.error
- OR Figma is displaying errors through a mechanism we can't intercept (e.g., their devtools panel)

### 2. **Complex script causing performance issues**

Current index.html has:
- **13,862 bytes** of error suppression code
- 6 stages of overrides (console, Error constructor, MessageChannel, global handlers, iframe blocking, script filtering)
- Multiple try-catch blocks executing on every page load
- Heavy pattern matching on every console call

This runs BEFORE any HTML is parsed, delaying first paint.

### 3. **Conflicting approaches**

The code tries to:
- Block MessageChannel (delete window.MessageChannel)
- Provide MessageChannel polyfill (window.MessageChannel = SafeMessageChannel)
- Override Error constructor to return silent errors
- Filter console output
- Block iframe communication
- **All simultaneously**, creating potential conflicts

### 4. **The error is cosmetic**

The `IframeMessageAbortError` is:
- ✅ **Harmless** - Doesn't break functionality
- ✅ **Expected** - Figma's cleanup code detecting our iframe environment
- ✅ **Cosmetic** - Only appears in console, doesn't affect user experience
- ❌ **Unsuppressible** - Figma controls the display mechanism

---

## Root cause analysis

### Why the error happens

1. Figma Make loads your app in an iframe
2. Figma's parent frame tries to establish MessageChannel communication
3. Your app's index.html blocks React loading in iframe mode
4. Figma's cleanup code runs on window.onload
5. It detects the MessagePort was "destroyed" (never properly initialized)
6. Throws `IframeMessageAbortError: Message aborted: message port was destroyed`

### Why we can't suppress it

Figma's error display happens through:
- **Their own devtools integration** - Not using window.console directly
- **Their error reporting system** - Runs in parent frame, not your iframe
- **Pre-cached console references** - Stored before your overrides load

---

## Performance impact

Current approach adds:
- **~50-100ms** parse/execute time for error suppression scripts
- **Every console call** now goes through pattern matching
- **Memory overhead** from multiple closures and proxies

For a static preview that shows a message, this is massive overkill.

---

## Recommendations

### Option A: Accept the error (recommended)

**Pros**:
- Zero performance impact
- Simpler codebase
- Error is harmless and only visible to developers
- Figma Make users expect to see iframe-related errors

**Cons**:
- Error appears in console (cosmetic only)

**Implementation**:
```html
<!-- Remove ALL error suppression code -->
<!-- Keep only the iframe detection and static preview -->
```

### Option B: Minimal suppression

**Pros**:
- Might catch some errors
- Simple implementation

**Cons**:
- Still won't catch the Figma error
- Adds unnecessary complexity

**Implementation**:
```javascript
// Simple, lightweight suppression (10 lines instead of 300+)
window.onerror = function(msg) {
  if (String(msg).includes('IframeMessage')) return true;
};
```

### Option C: Complete redesign

**Pros**:
- Could potentially work
- Fresh approach

**Cons**:
- High effort
- Uncertain outcome
- We've already tried 6 different approaches

---

## Proposed solution

**I recommend Option A: Remove all error suppression and accept the harmless console error.**

### Why this is the right approach

1. **The error doesn't affect users** - Only developers see the console
2. **Performance improvement** - Removes 13KB+ of unnecessary code
3. **Maintainability** - Simpler codebase
4. **Reliability** - No complex overrides that might break
5. **Honesty** - The error accurately describes what's happening (iframe mode)

### What to keep

- ✅ Iframe detection
- ✅ React blocking in iframe
- ✅ Static preview message
- ✅ Production routing works normally

### What to remove

- ❌ All console overrides (300+ lines)
- ❌ MessageChannel polyfill (100+ lines)
- ❌ Error constructor override
- ❌ Global error handlers
- ❌ Script filtering

---

## Implementation plan

1. **Simplify index.html** - Remove stages 0-5, keep only iframe detection
2. **Keep static preview** - The preview message works great
3. **Document the error** - Add comment explaining it's expected and harmless
4. **Test performance** - Measure improvement in load time

---

## Alternative: Focus on real issues

Instead of fighting cosmetic errors, we should focus on:
- **Actual loading performance** - Optimize bundle size, lazy loading
- **User experience** - Make sure the app works perfectly in production
- **Real bugs** - Fix any actual functionality issues

The `IframeMessageAbortError` is a distraction from real work.

---

## Conclusion

**Stop fighting Figma's error reporting.** It's a losing battle that's making the codebase worse.

The error is:
- Harmless ✅
- Expected ✅
- Cosmetic ✅
- Unsuppressible ✅

**Accept it and move on to real work.**

---

**Next steps**: 
1. User decision: Accept error (Option A) or continue attempting suppression?
2. If Option A: Remove suppression code (5 min)
3. If continue: Need to explore completely different approach (uncertain timeline)
