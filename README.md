# rotext
text animation

![example](https://raw.githubusercontent.com/mukkun/rotext-jquery.js/master/image.gif)

# Usage
`index.html`
```html
<div id="rotext">
  Colorful and fragrant, flowers scatter.<br />
　Nothing in this world is forever. <br />
　I cross life’s rugged mountain today. <br />
　This is no dream. I am ever sober.
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="rotext-jquery.js"></script>
<script>
  $('#rotext').rotext({
    speed: 3000,
    color: '#f0f',
    delay: 0,
    rotate: 360,
    range: 1200,
    interval: 2,
    anime: 'ease-out',
  });
</script>
```

