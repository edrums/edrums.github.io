---
title: News Archive
---

<table class="table table-striped">
  <caption>Full historical listing of all news posts, sorted by newest first.</caption>
  <thead><tr><th>Post</th><th>Date</th></tr></thead>
  <tbody>
    {% for post in site.posts %}
    <tr>
      <td><a href="{{post.url}}">{{ post.title | escape }}</a></td>
      <td><time datetime="{{ post.date | datetime | date_to_xmlschema }}" pubdate{% if updated %} data-updated="true"{% endif %}>{{ post.date | date: "%B %d, %Y" }}</time></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
