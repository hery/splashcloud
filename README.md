SplashCloud
===========

A tagcloud-like splash screen Javacsript implementation.

Requirements
------------

  * jQuery

Usage
-----

Text size is proportional to word frequency, similarly to a regular tag cloud, except that frequency here is specified by the user (see the data-freq attribute) instead of being computed from a source text.

    <div id="splashcloud">
    <span data-freq="30" class="vertical"><a href="#">blog</a></span>
    <span data-freq="70" class="horizontal"><a href="#">research</a></span>
    </div>

Note
----

Obtaining a usable tag-cloud still requires a bit of fiddling, but I am working on automating that.

[Demo][1]
--------

[1]: http://hery.ratsimihah.com/cloud
