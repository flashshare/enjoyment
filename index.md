---
layout: page
permalink: /
---

## About {{site.title}}


1. [**My Brain Notes Network:**](/notes)
<div class="grid-element">
    <h2>Notes 👨‍💻</h2>

      {% assign notes = site.notes | where_exp: "item", "item.path contains 'notes'" %}
      <p>
        These <a class="internal-link" href="/notes">{{ notes.size }} notes</a> are an exploration in digital gardening. They are seeds of what could become full-fledged blog posts, new projects, or experimental initiatives in the future.
      </p>

    {% include notes_graph.html %}
</div>
2. [**Daily Progress Journal:**](/journals)
   - A more simple section for daily public writing that could be built into more complex and well-connected notes.
3. [**A Blog:**](/posts)
   - Finally, this Jekyll project also allows for blog posts like any other, which could be viewed as the final step for process of smart note-taking.



