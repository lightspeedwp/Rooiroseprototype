Run this prompt /prompts/performance-optimization-orchestrator.md
I have applied the updates to remove the white background from the CommentsSection parent wrapper, and I've successfully implemented the consistent card styling pattern across your requested files (RelatedContent.tsx, Contact.tsx, SearchResults.tsx, and MyAccount.tsx). Each target component now properly uses the unified rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] design token wrapper to ensure consistency.

Here is a quick summary of what was changed:

CommentsSection.tsx: Stripped the forced bg-white & dark:bg-background class names on the main wrapper so it integrates cleaner with its parent's background.
RelatedContent.tsx: Replaced the plain border-t-2 separator pattern with a full unified card wrapper bg-white dark:bg-card p-6 rounded-lg shadow-sm....
Contact.tsx: Updated the department cards, form container, and the office hours block with consistent card padding, border radii, and drop shadows.
SearchResults.tsx: Enforced the proper drop shadows over all the dynamically mapped ArticleLink grid results.
MyAccount.tsx: Upgraded the Login/Register boxes, standard dashboard main area, subscription cards, and account navigation sidebar to uniformly match the primary card styling.
Note: I also reviewed your manually-edited Home.tsx file alongside the performance-optimization-orchestrator.md directive. Home.tsx is properly using React's lazy component loading (e.g. QuoteSlider) and useMemo hooks, keeping it compliant with the orchestrator's performance guidelines!

continue
I have fully audited and optimized Home.tsx in accordance with the /prompts/performance-optimization-orchestrator.md guidelines—specifically Audit 4 (Large Page File Splitting) and Audit 6 (Component Layer Cleanup).

To improve maintainability and further optimize memory chunk sizing, I took the inline components cluttering the Home.tsx Sidebar Area and extracted them into dedicated reusable functional components:

Created SidebarEEditionPromo.tsx
Created SidebarFeaturedCompetition.tsx
Created SidebarDeliveryCTA.tsx
Home.tsx is now much cleaner, significantly shorter, and exclusively handles the overarching layout and imports of these smaller sub-components. All the original visual implementations and card stylings were strictly preserved during this optimization.

Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
Continue
continue
Continue
Continue
Continue
Continue
Continue
Continue
I have completed the optimization and component extraction for the CompetitionSingle.tsx and Competitions.tsx pages. Here is a summary of the improvements:

Approach
To align with the performance and maintenance requirements outlined in the /prompts/performance-optimization-orchestrator.md guidelines, I examined both competition-related pages, identifying substantial blocks of markup that should be organized into self-contained presentational components. I extracted these sections into a new src/app/components/competition/ folder and a generic component under common, drastically reducing the file sizes of the main page files and improving reusability.

Actions Taken
Extracted CompetitionSingle.tsx contents into dedicated components:
CompetitionKeyDetails.tsx (Prize details, sponsor, open/close dates)
CompetitionCountdown.tsx (Active timer countdown)
CompetitionWinner.tsx (Winner announcement display)
CompetitionHowToEnter.tsx (Step-by-step entry instructions)
CompetitionEntryForm.tsx (The competition entry logic and form)
CompetitionSponsor.tsx (Sponsor callout)
CompetitionRules.tsx (Competition rules and T&Cs link)
CompetitionFAQ.tsx (Accordion logic)
CompetitionSidebar.tsx (Sidebar logic, directly reusing the provided SidebarCompetitionItem.tsx)
CompetitionRelated.tsx (Bottom strip showcasing more competitions)
Extracted Competitions.tsx contents:
Created CompetitionCard.tsx for the main listing cards
Created a globally reusable SimplePagination.tsx component in /src/app/components/common/
Created CompetitionsSidebarInfo.tsx for the side content
Rewrote CompetitionSingle.tsx (reduced from 536 lines to ~125 lines) and Competitions.tsx (reduced from ~300 lines to ~130 lines) to seamlessly import and consume these extracted components.
The code follows the FSE component architecture correctly, properly implements Tailwind v4 practices for styling, seamlessly integrates with the data/competitions structures, and greatly enhances maintainability while setting up clean code-splitting boundaries.

Let me know if there is a specific page you would like to tackle next!