---
layout: home
permalink: /
---

<h1>Welcome</h1>

Here some tutorials and hints to build electronic drums.

Most of the pad that can be found on the market don't give the same feeling as
an acoustic drum, so we can convert an acoustic drum to e-drum using mesh heads
and adding piezo sensors to connect to e-drum modules.

<h1>Latest News</h1>

{% for post in site.posts limit:5 %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>

  <p>Posted on <time datetime="{{ post.date | datetime | date_to_xmlschema }}"{% if updated %} data-updated="true"{% endif %}>{{ post.date | date: "%B %d, %Y" }}</time></p>

  {{ post.content }}

  {% if post.comments and site.disqus_shortname %}
  <p><a href="{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.id | escape }}">Comments</a></p>
  {% endif %}
{% endfor %}

<p class="text-center" style="margin-top: 2em;">
  <a class="btn btn-lg btn-default" href="/news/archive/"><i class="fa fa-calendar fa-fw"></i> News Archive</a>
</p>