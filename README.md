# grunt-beez-optim

> [beez-optim](https://github.com/fkei/beez-optim) makes specify images optimize automatically in build process using grunt.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-beez-optim --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-beez-optim');
```

## The "beez_optim" task

### Overview
In your project's Gruntfile, add a section named `beez_optim` to the data object passed into `grunt.initConfig()`.


```js
grunt.initConfig({
  beez_optim: {
    options: {
      srcdir: __dirname + '/example/image',
      options: [{
        optipng: {
          use: true,
          level: 2
        },
        jpegoptim: {
          use: true,
          options: '--strip-all'
        },
        "pngquant": {
          "use": true,
          "options": "--ext .png -f -v"
        }
      }],
      loglevel: 3
    }
  }
});
```

# deps

- [jpegoptim](https://github.com/tjko/jpegoptim)
- [optipng](http://optipng.sourceforge.net/)
- [pngquant](http://pngquant.org/)

### Options

@see [beez-optim#command-line-help](https://github.com/fkei/beez-optim#command-line-help)
