# Changelog

## Future

I would be desirable to upgrade to `sass-loader ^12`. Currently we're stuck on `^10`, because `11+` requires `webpack 5` to work correctly. We're stuck on `webpack 4` for now, because of `preact-cli`.

It would also be desirable to upgrade to `node 17`. We're now on `16` (up from `14` back when we started). Something doesn't work out of the box with `OpenSSL 3` (required by `node 17`), presumably `preact` or `webpack`.

## 29.03.2022
> Major node upgrade and dependency cleanup

```
Dependencies:
- preact ^10.3.2 -> ^10.6.6
- preact-cli ^3.0.0 -> ^3.3.5
- preact-router ^3.2.1 -> ^4.0.1
- sass-loader ^9.0.3 -> ^10
- history ^5.0.0 -> ^5.3.0
- node-sass (deprecated) replaced with sass
- enzyme (deprecated) removed

Deploy Workflow:
- EndBug/add-and-commit @v7.0.0 -> @v9

Other:
- Upgraded from node 14 to node 16
- Moved from npm to yarn
```