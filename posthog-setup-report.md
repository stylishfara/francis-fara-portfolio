<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your portfolio with PostHog analytics. A shared `posthog.js` snippet-loader file was created and included across the three key pages (`index.html`, `guestbook.html`, `walletwise.html`). Each page initialises PostHog via an inline `<script>` block. Eight custom events were instrumented across the pages to capture the most business-relevant visitor interactions — from which projects attract the most clicks, to how visitors contact you, to guestbook engagement.

| Event | Description | File |
|---|---|---|
| `social_link_clicked` | User clicks Email, LinkedIn, or Layers hero link | `index.html` |
| `email_copied` | User copies contact email from the footer | `index.html` |
| `project_card_clicked` | User clicks a case study project card | `index.html` |
| `portfolio_tab_switched` | User switches between Case Studies and Cool Projects tabs | `index.html` |
| `cool_project_opened` | User opens a cool project modal | `index.html` |
| `guestbook_entry_submitted` | User successfully submits a guestbook entry | `guestbook.html` |
| `app_store_link_clicked` | User clicks the App Store link on a case study | `walletwise.html` |
| `next_project_clicked` | User navigates to the next project from a case study | `walletwise.html` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/412484/dashboard/1552004
- **Project Card Clicks — Which projects get the most interest:** https://us.posthog.com/project/412484/insights/noHXbQop
- **Social Link Clicks — Which links drive the most outbound traffic:** https://us.posthog.com/project/412484/insights/an5FCVtg
- **Portfolio Engagement Funnel — Visitor to Guestbook:** https://us.posthog.com/project/412484/insights/NhomGDrw
- **Guestbook Submissions Over Time:** https://us.posthog.com/project/412484/insights/5zOSjBnT
- **Portfolio Tab Preference — Case Studies vs Cool Projects:** https://us.posthog.com/project/412484/insights/qa8gJ3KF

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
