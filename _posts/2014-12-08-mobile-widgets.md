---
layout: post
title:  Maintaining Zoom Scale on Mobile
---

I work at Fanplayr, a small startup in the Bay Area. We're an ecommerce platform that provides insights to hundreds of online retailers, and customer engaging solutions that drive traffic and conversions.

This week I started prototyping a mobile version of our offer widget with the following goals:

- A simple, intuitive UI
- Usable on any screen size, at any level of zoom

To make 

### Example

Unscaled | Scaled
-------- | ------
<img class="freezeframe" src="/content/2014/12/08/mobile-widgets/unscaled.gif" alt="Unscaled example" /> | <img class="freezeframe" src="/content/2014/12/08/mobile-widgets/scaled.gif" alt="Scaled example" />

### Zoom Ratio

The zoom ratio of devices in portrait orientation is calculated as:

{% highlight javascript %}
// Zoom ratio
screen.width / window.innerHeight

// Actual viewport width
window.innerWidth * zoom

// Actual viewport height
window.innerHeight * zoom
{% endhighlight %}
