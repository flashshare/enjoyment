---
layout: page
permalink: /
---

## About {{site.title}}



[**A Blog:**](/posts)
   - Finally, this Jekyll project also allows for blog posts like any other, which could be viewed as the final step for process of smart note-taking.

[**My Brain Notes Network:**](/notes)

<script>
  const graphDataHome = {% include notes_graph.json %}
  let sortedByNew = graphDataHome.nodes.sort((a,b) => parseJekyllDateToMiliseconds(a.last_modified) < parseJekyllDateToMiliseconds(b.last_modified))
  const llist = document.getElementById('latest-notes');
  for (let i=0; i< sortedByNew.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('internal-link')
    a.href = sortedByNew[i].path;
    a.innerText = sortedByNew[i].label;
    li.appendChild(a);
    llist.appendChild(li)
  } 
  function dayToMiliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
  
  function parseJekyllDateToMiliseconds(string) {
    return Date.parse(string.replaceAll(/-/g, ' '))
  }
</script>