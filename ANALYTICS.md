# Lyfe Fitness analytics

## Current configuration

The site loads the same Google tag used by the current TrainLyfe website:

```text
GT-KT9J4LQ
```

Set `NEXT_PUBLIC_GOOGLE_TAG_ID` to replace it. If a Google Tag Manager container
is created later, set `NEXT_PUBLIC_GTM_ID`; GTM will take precedence over the
direct Google tag.

## Website events

The site sends these custom conversion events:

- `pricing_view`
- `schedule_view`
- `free_week_cta_click`
- `pricing_form_open`
- `contact_click` with `contact_method` set to `call` or `text`
- `member_login_click`
- `membership_registration_click`

Events include the current page and, for clicks, the link text and destination.
Google Analytics handles ordinary page views through enhanced measurement, so
the site does not send a second manual page-view event to the direct Google tag.
Development previews keep events in the local data layer without sending them
to Google.

## GymnTX form completion

The GymnTX/HighLevel forms are cross-origin iframes. The parent website cannot
reliably inspect their fields or submission state, so form starts and successful
submissions are not inferred from clicks or iframe focus.

Configure one of these supported completion paths:

1. In HighLevel, trigger a workflow from each submitted website form and use
   the Google Analytics action to send a `generate_lead` event. This requires
   the GA4 measurement ID (`G-...`) and an API secret.
2. Configure each form to redirect to a dedicated thank-you page on
   `trainlyfe.com`, then track that page as `generate_lead`.

Test the final setup in Google Analytics DebugView before domain cutover.

## Meta advertising

The old WordPress site loads Meta Pixel `813732753794704`. It is intentionally
not installed here because the current privacy policy says the new site does
not use Lyfe Fitness advertising pixels. Reintroducing Meta tracking should be
paired with an updated policy and any required notice or choice.
