# openalias
an openalias checker written in js

## CDN:
f you want to use this OpenAlias resolver in other HTML files, maybe you will be interested in my CDN. You can find below both the link and how to import it into your HTML file.
link:
~~~
https://cdn.jsdelivr.net/gh/DuPont9029/opensolver/CDN.js
~~~
html:
~~~
<script src="https://cdn.jsdelivr.net/gh/DuPont9029/opensolver/CDN.js"></script>
~~~

### CDN documentation:
o use the openalias resolving function, you will need to import the script, to do this paste the import script above:
~~~
<script src="https://cdn.jsdelivr.net/gh/DuPont9029/opensolver/CDN.js"></script>
~~~
after doing that you can use the openalias function:
~~~
openalias("youropenalias.oa")
~~~
which accepts a string as a parameter. the function will return two arrays: the first, named "cr", will contain the crypto:address pairs, 
and the second array, named "awc," that will contain only the addresses without any label indicating the cryptos.