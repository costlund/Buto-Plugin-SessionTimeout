# Buto-Plugin-SessionTimeout


## Page

Page setup to check if user is signed in.
```
plugin_modules:
  session_timeout:
    plugin: 'session/timeout'
```

## Widget

Widget to embed js and Bootstrap Modal. Put it direct after after html start tag.
```
type: widget
data:
  plugin: 'session/timeout'
  method: embed
```

## Script
Javascript to activate where to check.
```
PluginSessionTimeout.active = true
```
