---
layout: page
title: Organized by Category
permalink: /categories/
content-type: eg
---

<div class="grid-element">
    <p>
        These <a class="internal-link" href="/notes">{{ notes.size }} notes</a> are an exploration in digital gardening.
    </p>
    {% include notes_graph.html %}
</div>

<style>
.category-content a {
    text-decoration: none;
    color: #4183c4;
}

.category-content a:hover {
    text-decoration: underline;
    color: #4183c4;
}
</style>

<main>
    {% for category in site.categories %}
        <h3 id="{{ category | first }}">{{ category | first | capitalize }}</h3>
        {% for post in category.last %} 
            <li id="category-content" style="padding-bottom: 0.6em; list-style: none;"><a href="{{post.url}}">{{ post.title }}</a></li>
        {% endfor %}
    {% endfor %}
    <br/>
    <br/>
</main>
