---
layout: default
permalink: /posts
title: Posts
---

<div class="grid-element">
    <h2>Notes 👨‍💻</h2>

      {% assign notes = site.notes | where_exp: "item", "item.path contains 'notes'" %}
      <p>
        These <a class="internal-link" href="/notes">{{ notes.size }} notes</a> are an exploration in digital gardening. They are seeds of what could become full-fledged blog posts, new projects, or experimental initiatives in the future.
      </p>

    {% include notes_graph.html %}
</div>