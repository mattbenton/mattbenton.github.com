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

### Calculating Zoom

The zoom factor is the ratio of the widths of the layout viewport to the visual viewport. For devices that expose the correct values, this is simply calculated as:

{% highlight javascript %}
document.documentElement.clientWidth / window.innerWidth
{% endhighlight %}

### Resources

- http://www.quirksmode.org/mobile/viewports2.html
