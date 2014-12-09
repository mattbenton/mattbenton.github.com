---
layout: post
title:  Maintaining Zoom Scale on Mobile
---

I work at small startup called Fanplayr in the Bay Area. We're an ecommerce platform that provides insights to hundreds of online retailers, as well as providing solutions that engage customers to drive traffic and conversions.

Recently I've been prototyping a mobile version of our third party offer widget.

Cool

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
