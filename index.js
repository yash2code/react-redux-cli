#!/usr/bin/env node
var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

// Here we register a generator based on its path. Providing the namespace
// is optional.
env.register(require.resolve('generator-boilerplate-react-redux/generators/app'), 'boilerplate-react-redux:app');

env.run('boilerplate-react-redux:app', { 'skip-install': true });
