<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use imported Lovable Asset pointers for supplied photos so media stays CDN-hosted and replacements remain explicit.
- Keep site presentation in the global stylesheet and site Button variants so spacing and interactions share one design system.
- Keep comparison button colors as shared Button variants and pulse/shine effects in the global stylesheet, so the comparison does not change buttons elsewhere.
- Use the shared Embla-backed Carousel for the clinic photo gallery so arrow, keyboard and swipe navigation use the existing controls.
- Keep the clinic address in the shared clinic-location module and use it for both the displayed address and Google Maps Embed place query, with the connector's public browser key, to prevent divergent destinations.
